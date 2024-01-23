import Navbar from "../../components/navbar/navbar";
import DriverDetails from "../../components/driverDetails/driverDetails";
import Documents from "../../components/documentVerification/documents";
import Footer from "../../components/footer/footer";

const Dashboad = () => {
  return (
    <>
      <Navbar />
      <div>
        <h2 className="px-12 my-2 font-semibold text-blue-500">
          Register Driver
        </h2>
        <hr />
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1">
        <DriverDetails />
        <Documents />
      </div>
      <Footer />
    </>
  );
};

export default Dashboad;
