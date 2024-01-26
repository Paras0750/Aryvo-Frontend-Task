import { useState, ChangeEvent } from "react";
import { ShadowButton } from "./shadowbutton";

interface FileUploadFormProps {
  innerText: string;
  className?: string;
  required?: boolean;
}

const FileUploadForm = ({
  className,
  innerText,
  required = false,
}: FileUploadFormProps) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-5">
      <ShadowButton className={`w-[50%] ${className} h-[40px] `}>
        <label className="flex justify-between cursor-pointer">
          <input
            type="file"
            id={innerText}
            accept=".pdf, .jpg, .jpeg, .png"
            onChange={handleFileChange}
            className="absolute overflow-hidden opacity-0 cursor-pointer"
          />
          <div className="">{innerText}</div>
          <div className="text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-file"
            >
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
              <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            </svg>
          </div>
        </label>
      </ShadowButton>
      <div className="flex gap-2 mb-5 ">
        <div className="flex gap-2 px-4">
          <div>20/04/2024</div>
          <div>57 days</div>
        </div>
        {file ? (
          <div className="flex gap-2">
            <div
              className="text-blue-500 cursor-pointer"
              onClick={() => window.open(URL.createObjectURL(file))}
            >
              View
            </div>
            <div
              className="text-red-500 cursor-pointer"
              onClick={() => setFile(null)}
            >
              Remove
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            {required && <div className="text-red-500 ">Required</div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploadForm;
