import { useState } from "react";
import Checkbox from "../UI/Checkbox";
import { IconArrowDown } from "../UI/Icons";

interface InvoiceFilterProps {
  option: {
    value: string;
  }[];
}

export default function InvoiceFilter({ option }: InvoiceFilterProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  console.log(selectedItems);
  return (
    <div className="ml-auto relative">
      <button
        className="flex items-baseline gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className=" font-bold md:hidden">Filter</span>
        <span className=" font-bold hidden md:flex">Filter by status</span>
        <IconArrowDown className={isOpen ? "rotate-180" : ""} />
      </button>
      {isOpen && (
        <div className="checkbox-wrapper absolute w-48 rounded-xl shadow-xl flex flex-col top-full p-4 right-0">
          {option.map((option) => (
            <Checkbox
              label={option.value}
              checked={selectedItems.includes(option.value)}
              onChange={() => {
                if (selectedItems.includes(option.value)) {
                  setSelectedItems([
                    ...selectedItems.filter((val) => val !== option.value),
                  ]);
                } else {
                  setSelectedItems([...selectedItems, option.value]);
                }
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
