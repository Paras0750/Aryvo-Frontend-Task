import { useState } from "react";
import { InputElement } from "../ui/inputElement";
import { ShadowButton } from "../ui/shadowbutton";

const TaxiInfo = () => {
  const [driverType, setdriverType] = useState<string>("");
  const [issuedBy, setIssuedBy] = useState<string>("");
  const [badgeNumber, setbadgeNumber] = useState<string>("");

  return (
    <div className="my-4 mr-3">
      <div className="flex flex-col">
        <h2 className="text-2xl mb-4">Taxi or PH Badge Information</h2>
        <div className="flex flex-grow gap-4">
          <InputElement
            label="Driver Type"
            id="driverType"
            value={driverType}
            onChange={(e) => setdriverType(e.target.value)}
          />
          {/* Issued By */}
          <InputElement
            label="Issued By"
            id="issuedBy"
            value={issuedBy}
            onChange={(e) => setIssuedBy(e.target.value)}
          />
          {/* Badge Number */}
          <InputElement
            label="Badge Number"
            id="badgeNumber"
            value={badgeNumber}
            onChange={(e) => setbadgeNumber(e.target.value)}
          />
        </div>
        <div className="flex gap-4 my-4">
          <ShadowButton>Safeguarding Certificate </ShadowButton>
          <ShadowButton>B-TECH</ShadowButton>
          <ShadowButton>Wheelchair Certif</ShadowButton>
        </div>
      </div>

      <hr className="my-4" />
    </div>
  );
};

export default TaxiInfo;
