import { useState } from "react";
import { InputElement } from "../ui/inputElement";
import { CheckBox } from "../ui/checkbox";

const VehicleInformation = () => {
  const [registration, setRegistration] = useState<string>("LB70ULJ");
  const [model, setModel] = useState<string>("");
  const [passengers, setPassengers] = useState<string>("");
  const [rideType, setRideType] = useState<string>("");
  const [bodyType, setBodyType] = useState<string>("");
  const [insuranceNumber, setInsuranceNumber] = useState<string>("");

  return (
    <div className="my-4 mr-3">
      <div className="flex flex-col">
        <div className="flex items-center gap-5 mb-4">
          <h2 className="text-2xl ">Vehicle Information</h2>
          <div className="text-xs ml-4">Click for manual entry</div>
        </div>
        <div className="flex items-center gap-5 ">
          <div className="w-[130px]">
            <InputElement
              label="Vehicle Registration"
              id="vehicleRegistration"
              value={registration}
              onChange={(e) => setRegistration(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-6 text-xs gap-2">
            <div>Make: Rover</div>
            <div>Color: Blue</div>
            <div>Year: 2020</div>
            <div className="col-span-2">Euro Status: EURO 6 </div>
            <div>Fuel: Petrol</div>
            <div>Engine: 2494</div>
          </div>
        </div>
        <div className="flex gap-4 w-2/3 my-2">
          <InputElement
            label="Model"
            id="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
          <InputElement
            label="Passengers"
            id="passengers"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
          />
          <InputElement
            label="Ride Type"
            id="rideType"
            value={rideType}
            onChange={(e) => setRideType(e.target.value)}
          />
          <InputElement
            label="Body Type"
            id="bodyType"
            value={bodyType}
            onChange={(e) => setBodyType(e.target.value)}
          />
        </div>
        <div className="flex gap-5 text-xs">
          <div>DVLA MOT: 09 / 10 / 2023</div>
          <div>DVLA TAX: 09 / 10 / 2023</div>
        </div>
      </div>
      <div className="flex flex-col text-xs gap-2 my-4">
        <div className="flex items-center gap-4">
          PPE Barrier: <CheckBox />
        </div>
        <div className="flex items-center gap-4">
          Diable Access: <CheckBox />
        </div>
        <div>Premium Vehicle</div>
        <div>Hackney Carriage</div>
        <div>Pets</div>
        <div>Wide Car</div>
      </div>

      <div className="w-1/3">
        <InputElement
          label="Insurance Certificate Number"
          id="insuranceCertificate"
          value={insuranceNumber}
          onChange={(e) => setInsuranceNumber(e.target.value)}
        />
      </div>
    </div>
  );
};

export default VehicleInformation;
