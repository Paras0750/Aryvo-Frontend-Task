interface InputElementProps {
  label: string;
  id: string;
  value: string;
  className?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export const InputElement = ({
  label,
  id,
  value,
  className,
  onChange,
  placeholder,
  type = "text",
}: InputElementProps) => {
  return (
    <div className="flex-grow cursor-pointer">
      <label htmlFor={id} className="block text-xs font-medium text-gray-700 ">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`w-full mt-1 p-2 border rounded ${className} `}
      />
    </div>
  );
};
