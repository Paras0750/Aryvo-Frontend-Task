interface ShadowButtonProps {
  className?: string;
  children: React.ReactNode;
  handlerFunction?: () => void;
  value?: boolean;
}

export const ShadowButton = ({
  children,
  className,
  handlerFunction,
  value,
}: ShadowButtonProps) => {
  return (
    <button
      type="button"
      className={`border p-2 rounded shadow-md text-xs ${className} ${value ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}
      onClick={handlerFunction}
    >
      {children}
    </button>
  );
};
