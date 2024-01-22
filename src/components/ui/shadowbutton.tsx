interface ShadowButtonProps {
  className?: string;
  children: React.ReactNode;
  handlerFunction?: () => void;
}

export const ShadowButton = ({ children, className, handlerFunction }: ShadowButtonProps) => {
  return (
    <button className={`border p-2 rounded shadow-md text-xs ${className}`} onClick={handlerFunction}>
      {children}
    </button>
  );
};
