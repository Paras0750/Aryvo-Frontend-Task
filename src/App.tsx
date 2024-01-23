import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboad from "./pages/dashboard/dashboad";
import SplashScreen from "./pages/splash-screen/splashScreen";
import Login from "./pages/signup/signup";
import Signup from "./pages/login/login";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/signup" element={<Login />} />
          <Route path="/signin" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboad />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
