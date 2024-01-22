import "./App.css";
import Documents from "./components/documentVerification/documents";
import Navbar from "./components/navbar/navbar";
import SignupSection from "./components/signup/signup";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <h4 className="px-4 my-2 font-semibold text-blue-500">
          Register Driver
        </h4>
        <hr />
      </div>
      <div className="grid grid-cols-2">
        <SignupSection />
        <Documents />
      </div>
    </>
  );
}

export default App;
