import { Link } from "react-router-dom"; // Import Link from your routing library
import logo from "../../assets/fav.png";
export const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen backdrop-blur-lg bg-opacity-70">
      <div className="w-full max-w-md px-8 py-6 bg-white rounded shadow-md ">
        <div className="flex flex-col items-center justify-center ">
          <div className=" text-center">
            <center className="my-4">
              <img src={logo} alt="" width="60px" />
            </center>
            <p className="text-xl font-semibold mb-2 text-green-700">
              Your Form was successfully submitted!
            </p>
            <p className=" mb-4">
              You'll receive an email if you've been approved.
            </p>
          </div>
          <p className="text-sm">
            <Link to="/dashboard" className="">
              If you want to resubmit the form, click here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
