import { Control, FieldValues } from "react-hook-form";
import LicenseInformation from "./licenseInformation";
import SignupSection from "./signupDetails";

import VehicleInformation from "./vehicleInformation";

export interface ControlProps {
  // eslint-disable-next-line
  control: Control<FieldValues, any>;
}

const DriverDetails = ({ control }: ControlProps) => {
  return (
    <div>
      <h2 className="px-4 md:px-12 mt-2 text-2xl mb-4">Signup a driver</h2>
      <div className="md:px-12 border-r border-gray-200 ">
        <SignupSection control={control} />
        <LicenseInformation control={control} />
        <VehicleInformation control={control} />
      </div>
    </div>
  );
};

export default DriverDetails;
