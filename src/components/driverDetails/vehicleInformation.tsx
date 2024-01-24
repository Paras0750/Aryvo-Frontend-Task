import { Controller } from "react-hook-form";
import { InputElement } from "../ui/inputElement";
import { CheckBox } from "../ui/checkbox";
import { ControlProps } from "./driverDetails";

const VehicleInformation = ({ control }: ControlProps) => {
  return (
    <div className="my-4 mr-3 px-4">
      <div className="flex flex-col">
        <div className="flex items-center gap-5 mb-4">
          <h2 className="text-2xl ">Vehicle Information</h2>
          <div className="text-xs ml-4">Click for manual entry</div>
        </div>
        <div className="flex items-center gap-5 ">
          <div className="w-[130px]">
            <Controller
              name="vehicleRegistration"
              control={control}
              defaultValue="LB70ULJ"
              render={({ field }) => (
                <InputElement
                  label="Vehicle Registration"
                  id="vehicleRegistration"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />
          </div>
          <div className="grid grid-cols-6 text-xs gap-1">
            <div>Make: Rover</div>
            <div>Color: Blue</div>
            <div>Year: 2020</div>
            <div className="col-span-2">Euro Status: EURO 6 </div>
            <div>Fuel: Petrol</div>
            <div>Engine: 2494</div>
          </div>
        </div>
        <div className="flex gap-4 w-2/3 my-2">
          <Controller
            name="model"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputElement
                label="Model"
                id="model"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
          <Controller
            name="passengers"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputElement
                label="Passengers"
                id="passengers"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                type="number"
              />
            )}
          />
          <Controller
            name="rideType"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputElement
                label="Ride Type"
                id="rideType"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
          <Controller
            name="bodyType"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <InputElement
                label="Body Type"
                id="bodyType"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
        </div>
        <div className="flex gap-5 text-xs">
          <div>DVLA MOT: 09 / 10 / 2023</div>
          <div>DVLA TAX: 09 / 10 / 2023</div>
        </div>
      </div>
      <div className="flex flex-col text-xs gap-2 my-4">
        <div className="flex items-center gap-4">
          PPE Barrier:
          <Controller
            name="ppeBarrier"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <CheckBox
                value={field.value}
                onChangeFn={(e: React.ChangeEvent<HTMLInputElement>) => {
                  field.value
                    ? field.onChange(!e.target.value)
                    : field.onChange(e.target.value);
                }}
              />
            )}
          />
        </div>
        <div className="flex items-center gap-4">
          Disable Access:
          <Controller
            name="disableAccess"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <CheckBox
                value={field.value}
                onChangeFn={(e: React.ChangeEvent<HTMLInputElement>) => {
                  field.value
                    ? field.onChange(!e.target.value)
                    : field.onChange(e.target.value);
                }}
              />
            )}
          />
        </div>
        <div className="flex items-center gap-4">
          Premium Vehicle:
          <Controller
            name="remiumVehicle"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <CheckBox
                value={field.value}
                onChangeFn={(e: React.ChangeEvent<HTMLInputElement>) => {
                  field.value
                    ? field.onChange(!e.target.value)
                    : field.onChange(e.target.value);
                }}
              />
            )}
          />
        </div>
        <div className="flex items-center gap-4">
          Hackney Carriage:
          <Controller
            name="hackneyCarriage"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <CheckBox
                value={field.value}
                onChangeFn={(e: React.ChangeEvent<HTMLInputElement>) => {
                  field.value
                    ? field.onChange(!e.target.value)
                    : field.onChange(e.target.value);
                }}
              />
            )}
          />
        </div>
        <div className="flex items-center gap-4">
          Pets:
          <Controller
            name="pets"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <CheckBox
                value={field.value}
                onChangeFn={(e: React.ChangeEvent<HTMLInputElement>) => {
                  field.value
                    ? field.onChange(!e.target.value)
                    : field.onChange(e.target.value);
                }}
              />
            )}
          />
        </div>
        <div className="flex items-center gap-4">
          Wide Car:
          <Controller
            name="wideCar"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <CheckBox
                value={field.value}
                onChangeFn={(e: React.ChangeEvent<HTMLInputElement>) => {
                  field.value
                    ? field.onChange(!e.target.value)
                    : field.onChange(e.target.value);
                }}
              />
            )}
          />
        </div>
      </div>

      <div className="w-1/3">
        <Controller
          name="insuranceCertificateNumber"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <InputElement
              label="Insurance Certificate Number"
              id="insuranceCertificate"
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
        />
      </div>
    </div>
  );
};

export default VehicleInformation;
