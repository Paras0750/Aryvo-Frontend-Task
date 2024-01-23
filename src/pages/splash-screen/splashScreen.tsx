import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "../../assets/background.jpeg";
import logo from "../../assets/fav.png";

const SplashScreen = () => {
  const navigate = useNavigate();
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timeoutContent = setTimeout(() => {
      setShowContent(true);
    }, 600);

    const timeoutRedirect = setTimeout(() => {
      navigate("/signin");
    }, 3000);
    return () => {
      clearTimeout(timeoutContent);
      clearTimeout(timeoutRedirect);
    };
  }, []);

  return (
    <div className="relative h-[100vh] w-[100vw] overflow-hidden">
      <img
        src={background}
        className="absolute top-0 left-0 w-full h-full object-cover filter blur-md brightness-75"
        alt=""
      />
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white rounded-xl p-8 max-w-lg border shadow-2xl ${
          showContent ? "opacity-100" : "opacity-0"
        } transition-opacity duration-1000 ease-out`}
      >
        <div className="flex items-center justify-center flex-col space-y-4">
          <img src={logo} alt="Logo" width="100" />
          <div className="text-center text-blue-500">
            <h1 className="text-4xl font-bold ">Welcome</h1>
            <h2 className="text-2xl font-semibold">
              to the Driver Registration Portal
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
