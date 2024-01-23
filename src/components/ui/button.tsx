import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  handlerFunction?: () => void;
  className?: string;
  type?: "submit" | "reset" | "button" | undefined;
}

const Button = ({
  children,
  handlerFunction,
  className,
  type = undefined,
}: ButtonProps) => {
  return (
    <button
      className={`bg-blue-600 text-white p-2 rounded px-4 border ${className}`}
      onClick={handlerFunction}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
