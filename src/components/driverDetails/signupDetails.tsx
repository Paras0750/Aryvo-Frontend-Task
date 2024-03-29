import { InputElement } from "../ui/inputElement";
import Button from "../ui/button";
import { ControlProps } from "./driverDetails";
import { Controller } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Tooltip as ReactTooltip } from "react-tooltip";

const SignupSection = ({ control }: ControlProps) => {
  const handleYesButtonClick = () => {
    console.log("Clicked Yes Button");
  };

  return (
    <div className="my-2 mr-3 px-4">
      <div className="flex flex-col">
        <div className="flex w-full gap-3 flex-col sm:flex-row">
          <Controller
            name="fullName"
            control={control}
            render={({ field }) => (
              <InputElement
                label="Enter Full Name"
                id="fullName"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
            )}
          />
          <Controller
            name="contactNumber"
            control={control}
            render={({ field }) => (
              <div className="flex-grow relative">
                <label
                  htmlFor="contactNumber"
                  className="block text-xs font-medium text-gray-700 "
                >
                  Enter Contact Number
                </label>
                <PhoneInput
                  id="contactNumber"
                  className="focus:outline-none mt-1 p-2 border rounded "
                  defaultCountry="DE"
                  placeholder="Enter phone number"
                  value={field.value}
                  onChange={(value) => field.onChange(value)}
                />
              </div>
            )}
          />
          <Controller
            name="emailAddress"
            control={control}
            render={({ field }) => (
              <InputElement
                label="Enter Email Address"
                id="emailAddress"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                type="tel"
              />
            )}
          />
        </div>

        <div className="flex mt-4 flex-col md:flex-row">
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

      <div className="grid w-full gap-1 grid-cols-1 lg:grid-cols-3 xl:grid-cols-6">
        <Controller
          name="accountingRef"
          control={control}
          render={({ field }) => (
            <InputElement
              label="Accounting Ref"
              id="accountingRef"
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
        />

        <Controller
          name="nominalCode"
          control={control}
          render={({ field }) => (
            <InputElement
              label="Nominal Code"
              id="nominalCode"
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
        />

        <Controller
          name="callSign"
          control={control}
          render={({ field }) => (
            <>
              <ReactTooltip
                id="my-tooltip-1"
                place="top"
                content="Set a Call Sign"
                className="bg-blue-500 text-white"
              />
              <InputElement
                label="Call Sign"
                tooltipId="my-tooltip-1"
                id="callSign"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
              />
            </>
          )}
        />

        <Controller
          name="commission"
          control={control}
          render={({ field }) => (
            <>
              <ReactTooltip
                id="my-tooltip-2"
                place="top"
                content="Commission per ride"
                className="bg-blue-500 text-white"
              />
              <InputElement
                label="Commission"
                tooltipId="my-tooltip-2"
                id="commission"
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                icon="%"
                iconLocation="right"
                type="number"
              />
            </>
          )}
        />

        <Controller
          name="weeklyCharge"
          control={control}
          render={({ field }) => (
            <InputElement
              label="Weekly Charge"
              id="weeklyCharge"
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              icon="£"
              iconLocation="left"
              type="number"
              max={100}
            />
          )}
        />

        <Controller
          name="driverGroup"
          control={control}
          render={({ field }) => (
            <InputElement
              label="Driver Group"
              id="driverGroup"
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              placeholder="Select all that apply"
            />
          )}
        />
      </div>
      <hr className="my-4" />
      <div>
        <Controller
          name="homeAddress"
          control={control}
          render={({ field }) => (
            <InputElement
              manualEntry
              label="Home Address"
              id="homeAddress"
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
            />
          )}
        />
      </div>
      <hr className="my-4" />
    </div>
  );
};

export default SignupSection;
