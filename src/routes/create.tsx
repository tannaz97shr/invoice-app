import { useState } from "react";
import { Form } from "react-router-dom";
import { createInvoice } from "../api/invoices";
import FormItemsInputs from "../components/FormItemsInputs";
import GoBackButton from "../components/GoBackButton";
import Modal from "../components/Modal";
import DatePicker from "../components/UI/Datepicker";
import Dropdown from "../components/UI/Dropdown";
import TextInput from "../components/UI/TextInput";
import { HeadingMedium } from "../components/UI/Typography";

export async function action() {
  await createInvoice();
}

export default function Create() {
  const [itemCount, setItemCount] = useState<number[]>([]);
  console.log(itemCount);
  return (
    <Modal>
      <GoBackButton />
      <HeadingMedium className="my-6">New Invoice</HeadingMedium>
      <div className=" text-blue-cornflower font-bold mb-6">Bill Form</div>
      <Form method="post">
        <TextInput label="Street Address" name="street" />
        <div className="flex flex-wrap mt-4 justify-between">
          <TextInput className="w-[48%] md:w-[31%]" label="City" name="city" />
          <TextInput
            className="w-[48%] md:w-[31%]"
            label="Post Code"
            name="postCode"
          />
          <TextInput
            className="w-full mt-4 md:w-[31%] md:mt-0"
            label="Country"
            name="country"
          />
        </div>
        <div className=" text-blue-cornflower font-bold my-6">Bill To</div>
        <TextInput label="Client's Name" name="clientName" />
        <TextInput className="mt-4" label="Client's Email" name="clientEmail" />
        <TextInput
          className="mt-4"
          label="Street Address"
          name="clientStreet"
        />
        <div className="flex flex-wrap mt-4 justify-between">
          <TextInput
            className="w-[48%] md:w-[31%]"
            label="City"
            name="clientCity"
          />
          <TextInput
            className="w-[48%] md:w-[31%]"
            label="Post Code"
            name="ClientPostCode"
          />
          <TextInput
            className="w-full mt-4 md:w-[31%] md:mt-0"
            label="Country"
            name="clientCountry"
          />
        </div>
        <div className=" flex flex-col md:flex-row md:gap-2 md:mt-4 md:items-center">
          <DatePicker className="mt-4 md:mt-0 md:flex-1" label="Invoice Date" />
          <Dropdown
            label="Payment Terms"
            className="mt-4 md:mt-0 md:flex-1"
            options={[
              {
                option: "Net 1 Day",
                value: "1",
              },
              {
                option: "Net 7 Days",
                value: "7",
              },
              {
                option: "Net 14 Days",
                value: "14",
              },
              {
                option: "Net 30 Days",
                value: "30",
              },
            ]}
            initialValue={{
              option: "Net 1 Day",
              value: "1",
            }}
          />
        </div>
        <TextInput
          className="mt-4"
          label="Project Description"
          name="description"
        />
        <div className=" font-bold text-lg text-bali-hai mt-16 mb-6">
          Item List
        </div>
        {itemCount.map((item) => (
          <FormItemsInputs
            key={item}
            onDelete={() =>
              setItemCount([...itemCount.filter((number) => number !== item)])
            }
          />
        ))}
        <div
          className=" px-6 py-4 mt-4 rounded-full font-bold flex items-baseline w-full bg-bg-light text-ship-cove hover:bg-selago justify-center cursor-pointer"
          onClick={() => {
            setItemCount((prev) =>
              prev.length ? [...prev, prev[prev.length - 1] + 1] : [0]
            );
          }}
        >
          Add New Item
        </div>
      </Form>
    </Modal>
  );
}
