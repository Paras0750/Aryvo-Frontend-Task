import { Controller } from "react-hook-form";
import { InputElement } from "../ui/inputElement";
import { ShadowButton } from "../ui/shadowbutton";
import { ControlProps } from "./driverDetails";

const LicenseInformation = ({ control }: ControlProps) => {
  return (
    <div className="my-4 mr-3 px-4">
      <div className="flex flex-col">
        <div className="flex items-center gap-5 mb-4">
          <h2 className="text-2xl ">License Information</h2>
          <div className="text-xs ml-4">Click for manual entry</div>
        </div>
        <div className="flex text-sm gap-5 flex-col md:flex-row">
          <div>
            <Controller
              name="licenseNumber"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputElement
                  label="DVLA License"
                  id="licenseNumber"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />
          </div>
          {/* Hard Coded Values */}
          <div className="flex gap-2 text-sm items-center whitespace-nowrap">
            <div className="flex flex-col gap-2 xl:flex-row">
              <div>Male</div>
              <div>1967-10-26</div>
              <div>Address Match</div>
            </div>
            <div className="flex flex-col xs:flex-col gap-2 xl:flex-row">
              <div>🟢</div>
              <div>Type: Full</div>
              <div>Status: Valid</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col my-4 text-xs">
          <div>Endorsements</div>
          <div>
            Legal Literal: Exceeding statutory speed limit on a public road
          </div>
          <div>Offence Date: 2018-04-28</div>
          <div>Penalty Points: 3</div>
        </div>
      </div>

      <hr className="mb-4" />

      <div className="my-4 mr-3">
        <div className="flex flex-col">
          <h2 className="text-2xl mb-4">Taxi or PH Badge Information</h2>
          <div className="flex flex-grow gap-4">
            <Controller
              name="driverType"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <div className="flex-grow relative">
                  <label
                    htmlFor="driverType"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Driver Type
                  </label>
                  <select
                    id="driverType"
                    name="driverType"
                    value={field.value || "hackneyCarriage"}
                    onChange={(e) => field.onChange(e.target.value)}
                    required
                    className="w-full mt-1 p-2 h-[40px] border rounded appearance-none bg-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="hackneyCarriage">Hackney Carriage</option>
                    <option value="privateHire">Private Hire</option>
                  </select>
                </div>
              )}
            />
            <Controller
              name="issuedByBadge"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputElement
                  label="Issued By"
                  id="issuedByBadge"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              )}
            />
            <Controller
              name="badgeNumber"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputElement
                  label="Badge Number"
                  id="badgeNumber"
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                  type="number"
                />
              )}
            />
          </div>
          <div className="flex gap-4 my-4">
            <Controller
              name="safeguardingCertificate"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <ShadowButton
                  value={field.value}
                  handlerFunction={() => field.onChange(!field.value)}
                >
                  Safeguarding Certificate
                </ShadowButton>
              )}
            />
            <Controller
              name="BTECH"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <ShadowButton
                  value={field.value}
                  handlerFunction={() => field.onChange(!field.value)}
                >
                  B-TECH
                </ShadowButton>
              )}
            />
            <Controller
              name="wheelchairCertif"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <ShadowButton
                  value={field.value}
                  handlerFunction={() => field.onChange(!field.value)}
                >
                  Wheelchair Certif
                </ShadowButton>
              )}
            />
          </div>
        </div>

        <hr className="my-4" />
      </div>
    </div>
  );
};

export default LicenseInformation;
