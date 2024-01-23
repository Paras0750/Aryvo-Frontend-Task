import { useState } from "react";

export const CheckBox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={handleToggle}
      />
      <span className="relative flex-shrink-0 w-10 h-6 transition-colors duration-300 ease-in-out border rounded-full">
        <span
          className={`absolute inset-0 w-6 h-6 border rounded-full transform transition-transform ${
            isChecked ? "bg-blue-600" : "translate-x-6 bg-gray-300"
          }`}
        ></span>
      </span>
    </label>
  );
};
