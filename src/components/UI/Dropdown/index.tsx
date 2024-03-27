import { useState } from "react";
import { IDropdownOption } from "../../../models/general";
import { IconArrowDown } from "../Icons";

interface DropdownProps {
  options: IDropdownOption[];
  initialValue: IDropdownOption;
  label: string;
  className?: string;
}

const Dropdown = ({
  options,
  initialValue,
  label,
  className,
}: DropdownProps) => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState(initialValue);
  return (
    <div className={`flex flex-col relative ${className && className}`}>
      <span
        className="capitalize text-ship-cove font-medium text-sm
dark:text-selago"
      >
        {label}
      </span>
      <button
        onClick={(e) => {
          setIsActive(!isActive);
        }}
        className=" w-full flex items-center justify-between border border-selago py-4 px-5 text-base rounded mt-2 font-bold text-vulcan 
        focus-visible:outline-offset-1 focus-visible:outline-heliotrope
        dark:bg-mirage dark:text-white dark:focus-visible:outline-none dark:border-ebony-clay
          focus:border-blue-cornflower"
      >
        <span>{selected.option}</span>
        <IconArrowDown />
      </button>
      {isActive && (
        <ul className=" absolute shadow-lg bg-white w-full top-[120%] rounded-lg">
          {options.map((option, index) => (
            <li
              className={`px-6 py-4 ${
                index !== options.length && "border-b border-selago"
              } text-base mt-2 font-bold text-vulcan cursor-pointer hover:text-blue-cornflower`}
              key={option.value}
              onClick={() => {
                setIsSelected(option);
                setIsActive(false);
              }}
            >
              {option.option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
