import { useState } from "react";
import { InputElement } from "../../components/ui/inputElement";
import Button from "../../components/ui/button";
import logo from "../../assets/fav.png";

export default function Login() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
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
          Sign Up
        </h2>
        <p className="text-center text-gray-500 mt-1">
          Join Us on this Journey!
        </p>
        <div className="mt-8">
          <form
            className="grid gap-6"
          >
            <div className="space-y-1">
              <InputElement
                id="name"
                label="Name"
                placeholder="Enter Your Name"
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
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
                id="phoneNumber"
                label="Phone Number"
                placeholder="Enter Your Phone Number"
                value={phone}
                type="text"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <InputElement
                id="password"
                label="Password"
                placeholder="Enter Your Password"
                value={password}
                type="text"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button className="w-full" type="submit">Sign Up</Button>
          </form>
          <div className="mt-4 text-sm">
            <a href="/signin">Already Have an Account?</a>
          </div>
        </div>
      </div>
    </main>
  );
}
