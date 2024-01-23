import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  handlerFunction?: () => void;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
}

const Button = ({
  children,
  handlerFunction,
  className,
  type = undefined,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={` text-white p-2 rounded px-4 border ${className} ${
        disabled ? "bg-gray-500" : "bg-blue-600"
      }`}
      onClick={handlerFunction}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
