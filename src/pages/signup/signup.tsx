import { FormEvent, useState } from "react";
import { InputElement } from "../../components/ui/inputElement";
import Button from "../../components/ui/button";
import logo from "../../assets/aryvo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../customHooks/useAuth";

export default function Login() {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPass, setConfirmPass] = useState<string>("");
  const [error, setError] = useState<Error | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const { signup } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    console.log("Loading Start");
    e.preventDefault();

    if (password !== confirmPass) {
      setError(new Error("Passwords do not match!"));
      return;
    }

    await signup({ email, password, userName })
      .then(() => {
        setLoading(false);
        navigate("/signin");
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md px-8 py-6 bg-white rounded shadow-md ">
        <div className="flex justify-center">
          <img
            alt="Aryvo Logo"
            className="w-[200px] h-20 mb-5"
            src={logo}
          />
        </div>
        <h2 className="text-3xl font-semibold text-center text-gray-700 ">
          Sign Up
        </h2>
        <p className="text-center text-gray-500 mt-1">
          Join Us on this Journey!
        </p>
        <div className="mt-8">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex flex-col items-center mb-2">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline">{error.message}</span>
            </div>
          )}
          <form className="grid gap-6" onSubmit={handleSubmit}>
            <div className="space-y-1">
              <InputElement
                id="userName"
                label="Name"
                placeholder="Enter Your Name"
                value={userName}
                type="text"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <InputElement
                id="email"
                label="Email"
                placeholder="Enter Your Email"
                value={email}
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <InputElement
                id="password"
                label="Password"
                placeholder="Enter Your Password"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <InputElement
                id="confirmPassword"
                label="Confirm Password"
                placeholder="Confirm Your Password"
                value={confirmPass}
                type="password"
                onChange={(e) => setConfirmPass(e.target.value)}
              />
            </div>
            <Button className="w-full" type="submit" disabled={loading}>
              Sign Up
            </Button>
          </form>
          <div className="mt-4 text-sm">
            <a href="/signin">Already Have an Account?</a>
          </div>
        </div>
      </div>
    </main>
  );
}
