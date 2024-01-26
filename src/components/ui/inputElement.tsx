import React, { HTMLInputTypeAttribute } from "react";

interface InputElementProps {
  label: string;
  id: string;
  value: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: string;
  iconLocation?: "right" | "left";
  max?: number;
  tooltipId?: string;
  manualEntry?: boolean;
}

export const InputElement = ({
  label,
  id,
  value,
  className,
  onChange,
  placeholder,
  type = "text",
  icon,
  iconLocation,
  tooltipId,
  manualEntry = false,
}: InputElementProps) => {
  return (
    <div className="flex-grow relative">
      <div className="flex">
        <label
          htmlFor={id}
          className="block text-xs font-medium text-gray-700 "
        >
          {label}
        </label>
        {tooltipId && (
          <svg
            data-tooltip-id={tooltipId}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-message-circle-question ml-1"
          >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
        )}
        {manualEntry && (
          <div className="ml-10 text-xs">Click for manual entry</div>
        )}
      </div>
      <input
        type={type}
        id={id}
        name={id}
        value={value || ""}
        placeholder={placeholder}
        onChange={onChange}
        required
        className={`w-full mt-1 p-2 border rounded ${className} ${
          iconLocation === "left" ? "pl-8" : ""
        }`}
      />
      <div
        className={`absolute inset-y-0 ${
          iconLocation === "right" ? "right-3" : "left-4"
        } flex items-center pr-2 pointer-events-none top-5 text-gray-500  `}
      >
        {icon}
      </div>
    </div>
  );
};
