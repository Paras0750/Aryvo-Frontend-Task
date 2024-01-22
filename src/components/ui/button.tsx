import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  handlerFunction?: () => void;
  className?: string;
}

const Button = ({ children, handlerFunction, className }: ButtonProps) => {
  return (
    <button
      className={`bg-blue-600 text-white p-2 rounded px-4 border ${className}`}
      onClick={handlerFunction}
    >
      {children}
    </button>
  );
};

export default Button;
