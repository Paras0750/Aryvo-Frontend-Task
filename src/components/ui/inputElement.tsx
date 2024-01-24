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
}: InputElementProps) => {
  return (
    <div className="flex-grow relative">
      <label htmlFor={id} className="block text-xs font-medium text-gray-700 ">
        {label}
      </label>
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
