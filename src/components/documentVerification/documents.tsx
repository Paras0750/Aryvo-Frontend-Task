import { FieldValues, UseFormGetValues } from "react-hook-form";
import FileUploadForm from "../ui/fileUploadForm";
import { useEffect } from "react";
interface Props {
  getValues: UseFormGetValues<FieldValues>;
}
const Documents = ({ getValues }: Props) => {
  const driverType = getValues("driverType");
  useEffect(() => {

  }, [driverType]);

  return (
    <div className="px-4 my-2">
      <div className="flex flex-col">
        <h2 className="text-2xl mb-4">Documents and Expiry Dates</h2>
        <div className="flex flex-col gap-3">
          <FileUploadForm required innerText={"DVLA Licence"} />
          <FileUploadForm required innerText={"Compliance Certificate"} />
          <FileUploadForm required innerText={"Insurance Certificate"} />
          <FileUploadForm required innerText={"Proof of Address"} />
          <FileUploadForm required innerText={"Vehicle Plate"} />
          {driverType === "privateHire" ? (
            <FileUploadForm required innerText={"Private Hire Badge Licence"} />
          ) : (
            <FileUploadForm required innerText={"Hackney Badge Licence"} />
          )}
          {/* <FileUploadForm innerText={"Private Hire Badge Licence"} /> */}
          <FileUploadForm innerText={"Operators License"} />
          <FileUploadForm innerText={"Public Liability"} />
          <FileUploadForm innerText={"Employers Liability"} />
          <FileUploadForm required innerText={"Form B"} />
          <FileUploadForm required innerText={"Enhanced DBS"} />
        </div>
      </div>
    </div>
  );
};

export default Documents;
