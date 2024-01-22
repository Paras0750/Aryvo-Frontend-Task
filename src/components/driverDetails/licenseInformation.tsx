import { useState } from "react";
import { InputElement } from "../ui/inputElement";

const LicenseInformation = () => {
  const [licenseNumber, setLicenseNumber] =
    useState<string>("TCAEU610267NO9EK");
  return (
    <div className="my-4 mr-3">
      <div className="flex flex-col">
        <div className="flex items-center gap-5 mb-4">
          <h2 className="text-2xl ">License Information</h2>
          <div className="text-xs ml-4">Click for manual entry</div>
        </div>
        <div className="flex text-sm gap-5">
          <div>
            <InputElement
              label="DVLA License"
              id="licenseNumber"
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
            />
          </div>
          {/* Hard Coded Values */}
          <div className="flex gap-2 text-sm items-center whitespace-nowrap">
            <div>Male</div>
            <div>1967-10-26</div>
            <div>Address Match</div>
            <div>🟢</div>
            <div>Type: Full</div>
            <div>Status: Valid</div>
          </div>
        </div>
        <div className="flex flex-col my-4 text-xs">
          <div>Endorsments</div>
          <div>
            Legal Literal: Exceeding statutory speed limit on a public road
          </div>
          <div>Offence Date: 2018-04-28</div>
          <div>Penalty Points: 3</div>
        </div>
      </div>

      <hr className="mb-4" />
    </div>
  );
};

export default LicenseInformation;
