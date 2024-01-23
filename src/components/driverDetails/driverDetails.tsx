import LicenseInformation from "./licenseInformation";
import SignupSection from "./signupDetails";
import TaxiInfo from "./taxiInfo";
import VehicleInformation from "./vehicleInformation";

const DriverDetails = () => {
  return (
    <div className="px-12">
      <SignupSection />
      <LicenseInformation />
      <TaxiInfo />
      <VehicleInformation />
    </div>
  );
};

export default DriverDetails;
