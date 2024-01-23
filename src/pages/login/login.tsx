import { FormEvent, useState } from "react";
import { InputElement } from "../../components/ui/inputElement";
import Button from "../../components/ui/button";
import logo from "../../assets/fav.png";
import { auth } from "../../firebase/firebaseAuth";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const [email, setEmail] = useState<string>("test@test.com");
  const [password, setPassword] = useState<string>("test123");
  const [error, setError] = useState<Error | null>();
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/dashboard");
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error);
        console.log(errorCode, errorMessage);
        setLoading(false);
      });
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md px-8 py-6 bg-white rounded shadow-md ">
        <div className="flex justify-center">
          <img
            alt="Aryvo Logo"
            className="w-16 h-16 mb-5"
            height="64"
            src={logo}
            width="64"
          />
        </div>
        <h2 className="text-3xl font-semibold text-center text-gray-700 ">
          Sign In
        </h2>
        <p className="text-center text-gray-500 mt-1">Welcome Back!</p>
        <div className="mt-8">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex flex-col items-center mb-2">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline">{error.message}</span>
            </div>
          )}
          <form className="grid gap-6 text-md" onSubmit={handleSubmit}>
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
            <Button className="w-full" type="submit" disabled={loading}>
              Sign In
            </Button>
          </form>
          <div className="mt-4 flex justify-between text-sm">
            <a href="/signup" className="text-sm">
              Don't have an Account?
            </a>
            <a href="">Forgot Password?</a>
          </div>
        </div>
      </div>
    </main>
  );
}
