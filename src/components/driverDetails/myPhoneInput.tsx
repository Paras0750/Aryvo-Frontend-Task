import PhoneInput, {
  DefaultInputComponentProps,
} from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Import the styles

interface CustomPhoneInputProps extends DefaultInputComponentProps {
  onChange?: (value?: string) => void;
}

export const MyPhoneInput: React.FC<CustomPhoneInputProps> = ({
  onChange,
  ...restProps
}) => {
  // Custom onChange handler
  const handlePhoneChange = (value: string) => {
    onChange?.(value);
  };

  return <PhoneInput {...restProps} onChange={handlePhoneChange} />;
};
