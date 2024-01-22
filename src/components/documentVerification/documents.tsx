import Button from "../ui/button";
import FileUploadForm from "../ui/fileUploadForm";

const Documents = () => {
  return (
    <div className="px-4 my-2">
      <div className="flex flex-col">
        <h2 className="text-2xl mb-4">Document and Expiry Dates</h2>
        <form
          className="flex flex-col gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <FileUploadForm required innerText={"DVLA Licence"} />
          <FileUploadForm required innerText={"Compliance Certificate"} />
          <FileUploadForm required innerText={"Insurance Certificate"} />
          <FileUploadForm required innerText={"Proof of Address"} />
          <FileUploadForm required innerText={"Vehicle Plate"} />
          <FileUploadForm innerText={"Hackney Badge Licence"} />
          <FileUploadForm innerText={"Private Hire Badge LicencE"} />
          <FileUploadForm innerText={"Operators License"} />
          <FileUploadForm innerText={"Public Liability"} />
          <FileUploadForm innerText={"Employers Liability"} />
          <FileUploadForm required innerText={"Form B"} />
          <FileUploadForm required innerText={"Enhanced DBS"} />

          <Button className="w-[110px] mt-20">
            <span className="text-white">Submit</span>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Documents;
