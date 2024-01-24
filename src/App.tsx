import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboad from "./pages/dashboard/dashboad";
import SplashScreen from "./pages/splash-screen/splashScreen";
import Login from "./pages/signup/signup";
import Signup from "./pages/login/login";
import { AuthProvider } from "./customHooks/useAuth";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<SplashScreen />} />
            <Route path="/signup" element={<Login />} />
            <Route path="/signin" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboad />} />
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
