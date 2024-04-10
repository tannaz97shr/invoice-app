import { useState } from "react";
import { IconDelete } from "../UI/Icons";
import TextInput from "../UI/TextInput";

interface FormItemsInputsProps {
  onDelete: () => void;
  itemNumber: number;
}

export default function FormItemsInputs({
  onDelete,
  itemNumber,
}: FormItemsInputsProps) {
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const total = quantity * price;
  return (
    <>
      <div className="flex flex-wrap justify-between">
        <TextInput
          className="w-full mb-4 md:w-[40%]"
          label="Item Name"
          name={`itemName-${itemNumber}`}
          required
        />
        <TextInput
          type="number"
          className="w-[20%] md:w-[15%]"
          label="Qty."
          required
          name={`quantity-${itemNumber}`}
          min={1}
          value={quantity.toString()}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setQuantity(Number(e.currentTarget.value));
          }}
        />
        <TextInput
          type="number"
          className="w-[35%] md:w-[18%]"
          label="Price"
          required
          name={`price-${itemNumber}`}
          min={0}
          value={price.toFixed(0).toString()}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setPrice(Number(e.currentTarget.value));
          }}
        />
        <div className="flex flex-col w-[35%] md:w-[18%]">
          <span
            className=" capitalize text-ship-cove font-medium text-sm
      dark:text-selago"
          >
            total
          </span>
          <span className="mt-7 font-bold text-bali-hai">
            {total.toFixed(2)}
          </span>
        </div>
        <div className="w-[5%] flex items-center">
          <IconDelete className=" cursor-pointer" onClick={onDelete} />
        </div>
      </div>
    </>
  );
}
