import { FormEvent, useEffect, useState } from "react";
import { InputElement } from "../../components/ui/inputElement";
import Button from "../../components/ui/button";
import logo from "../../assets/aryvo.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../customHooks/useAuth";

export default function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<Error | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const { signin } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    const logedIn = localStorage.getItem("isAuthenticated");
    if (logedIn === "true") {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    signin({ email, password })
      .then(() => {
        localStorage.setItem("isAuthenticated", "true");
        navigate("/dashboard");
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md px-8 py-6 bg-white rounded shadow-md ">
        <div className="flex justify-center">
          <img alt="Aryvo Logo" className="w-[200px] h-20 mb-5" src={logo} />
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
