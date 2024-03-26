import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatus } from "../../features/invoice/invoicesSlice";
import type { RootState } from "../../store";
import Checkbox from "../UI/Checkbox";
import { IconArrowDown } from "../UI/Icons";

interface InvoiceFilterProps {
  option: {
    value: string;
  }[];
}

export default function InvoiceFilter({ option }: InvoiceFilterProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const statusItems = useSelector((state: RootState) => state.invoices.status);
  const dispatch = useDispatch();
  // const [selectedItems, setSelectedItems] = useState<string[]>([]);

  console.log(statusItems);
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
              key={option.value}
              label={option.value}
              checked={statusItems.includes(option.value)}
              onChange={() => {
                if (statusItems.includes(option.value)) {
                  dispatch(
                    setStatus([
                      ...statusItems.filter((val) => val !== option.value),
                    ])
                  );
                  // setSelectedItems([
                  //   ...statusItems.filter((val) => val !== option.value),
                  // ]);
                } else {
                  dispatch(setStatus([...statusItems, option.value]));
                  // setSelectedItems([...statusItems, option.value]);
                }
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
