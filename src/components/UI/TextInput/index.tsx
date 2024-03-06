interface TextInputProps {
  label: string;
  name: string;
}

const TextInput = ({ label, name }: TextInputProps) => {
  return (
    <label className=" flex flex-col">
      <span
        className=" capitalize text-ship-cove font-medium text-sm
      dark:text-selago"
      >
        {label}
      </span>
      <input
        name={name}
        className="border border-selago py-4 px-5 text-base rounded mt-2 font-bold text-vulcan 
        focus-visible:outline-offset-1 focus-visible:outline-heliotrope
        dark:bg-mirage dark:text-white dark:focus-visible:outline-none dark:border-ebony-clay"
      />
    </label>
  );
};

export default TextInput;
