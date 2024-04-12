import { UseFormRegister } from "react-hook-form";
import { FormInputs } from "../../../models/general";

interface TextInputProps {
  label: string;
  name: string;
  className?: string;
  type?: string;
  min?: number;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  value?: string;
  required?: boolean;
  register: UseFormRegister<FormInputs>;
}

const TextInput = ({
  label,
  name,
  className,
  type,
  min,
  value,
  onChange,
  required,
  register,
  ...props
}: TextInputProps) => {
  // const { register } = useForm<FormInputs>();
  return (
    <label className={` flex flex-col ${className}`}>
      <span
        className=" capitalize text-ship-cove font-medium text-sm
      dark:text-selago"
      >
        {label}
      </span>
      <input
        {...props}
        type={type}
        min={min}
        // onChange={onChange}
        value={value}
        required={required}
        {...register(name)}
        className="border border-selago py-4 px-5 text-base rounded mt-2 font-bold text-vulcan 
        focus-visible:outline-offset-1 focus-visible:outline-heliotrope
        dark:bg-mirage dark:text-white dark:focus-visible:outline-none dark:border-ebony-clay"
      />
    </label>
  );
};

export default TextInput;
