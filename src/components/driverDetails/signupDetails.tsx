import { useState } from "react";
import { InputElement } from "../ui/inputElement";
import Button from "../ui/button";

const SignupSection = () => {
  const [fullName, setFullName] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<string>("");
  const [emailAddress, setEmailAddress] = useState<string>("");
  const [accountingRef, setAccountingRef] = useState<string>("");
  const [nominalCode, setNominalCode] = useState<string>("");
  const [callSign, setCallSign] = useState<string>("");
  const [commission, setCommission] = useState<string>("");
  const [weeklyCharge, setWeeklyCharge] = useState<string>("");
  const [driverGroup, setDriverGroup] = useState<string>("");
  const [homeAddress, handleHomeAddressChange] = useState<string>("");

  const handleYesButtonClick = () => {
    alert("Yes button clicked");
  };

  return (
    <div className="my-2 mr-3">
      <div className="flex flex-col">
        <h2 className="text-2xl mb-4">Signup a driver</h2>

        <div className="flex w-full gap-3">
          <InputElement
            label="Enter Full Name"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <InputElement
            label="Enter Contact Number"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            type="tel"
          />
          <InputElement
            label="Enter Email Address"
            id="emailAddress"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            type="email"
          />
        </div>

        <div className="flex mt-4">
          <div className="text-blue-500 text-xs">
            <p>
              An account already exists with these contact details, you need to
              merge the accounts.
            </p>
            <p>Or use different details.</p>
          </div>
          <div className="ml-4">
            <Button handlerFunction={handleYesButtonClick}>Yes</Button>
          </div>
        </div>
        <p className="text-xs">View Account</p>
      </div>

      <hr className="my-4" />

      <div className="flex w-full gap-2">
        <InputElement
          label="Accounting Ref"
          id="accountingRef"
          value={accountingRef}
          onChange={(e) => setAccountingRef(e.target.value)}
        />

        <InputElement
          label="Nominal Code"
          id="nominalCode"
          value={nominalCode}
          onChange={(e) => setNominalCode(e.target.value)}
        />
        <InputElement
          label="Call Sign"
          id="callSign"
          value={callSign}
          onChange={(e) => setCallSign(e.target.value)}
        />
        <InputElement
          label="Commission"
          id="commission"
          value={commission}
          onChange={(e) => setCommission(e.target.value)}
          icon="%"
          iconLocation="right"
          // iconLocation="left"
        />
        <InputElement
          label="Weekly Charge"
          id="weeklyCharge"
          value={weeklyCharge}
          onChange={(e) => setWeeklyCharge(e.target.value)}
          icon="￡"
          iconLocation="left"
        />
        <InputElement
          label="Driver Group"
          id="driverGroup"
          value={driverGroup}
          onChange={(e) => setDriverGroup(e.target.value)}
          placeholder="Select all that apply"
        />
      </div>
      <hr className="my-4" />
      <div>
        <InputElement
          label="Enter Home Address"
          id="homeAddress"
          value={homeAddress}
          onChange={(e) => handleHomeAddressChange(e.target.value)}
        />
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default SignupSection;
