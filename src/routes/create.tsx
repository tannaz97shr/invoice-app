import _uniqueId from "lodash/uniqueId";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { redirect } from "react-router-dom";
import { createInvoice } from "../api/invoices";
import FormItemsInputs from "../components/FormItemsInputs";
import GoBackButton from "../components/GoBackButton";
import Modal from "../components/Modal";
import Button from "../components/UI/Button";
import DatePicker from "../components/UI/Datepicker";
import Dropdown from "../components/UI/Dropdown";
import TextInput from "../components/UI/TextInput";
import { HeadingMedium } from "../components/UI/Typography";
import { FormInputs, IInvoice } from "../models/general";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  let totalValue = 0;
  let itemsArray: any[] = [];
  for (let key in updates) {
    if (key.includes("quantity")) {
      itemsArray = [
        ...itemsArray,
        {
          name: updates[key.replace("quantity", "itemName")],
          quantity: updates[key],
          price: updates[key.replace("quantity", "price")],
          total:
            Number(updates[key]) *
            Number(updates[key.replace("quantity", "price")]),
        },
      ];
      totalValue =
        totalValue +
        Number(updates[key]) *
          Number(updates[key.replace("quantity", "price")]);
    }
  }
  const now = new Date();
  const paymentDueDate = new Date(updates["paymentDue"].toString());
  const invoice: IInvoice = {
    id: _uniqueId(),
    createdAt: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`,
    paymentDue: `${paymentDueDate.getFullYear()}-${
      paymentDueDate.getMonth() + 1
    }-${paymentDueDate.getDate()}`,
    description: updates["description"] as string,
    paymentTerms: Number(updates["paymentTerms"]),
    clientName: updates["clientName"] as string,
    clientEmail: updates["clientEmail"] as string,
    status: "paid",
    senderAddress: {
      street: updates["street"] as string,
      city: updates["city"] as string,
      postCode: updates["postcode"] as string,
      country: updates["country"] as string,
    },
    clientAddress: {
      street: updates["clientStreet"] as string,
      city: updates["clientCity"] as string,
      postCode: updates["clientPostCode"] as string,
      country: updates["clientCountry"] as string,
    },
    items: itemsArray,
    total: totalValue,
  };
  await createInvoice(invoice);
  return redirect("/invoice/create");
}

export default function Create() {
  const [itemCount, setItemCount] = useState<number[]>([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();
  const onSubmit: SubmitHandler<FormInputs> = (data) =>
    console.log("data", data);

  return (
    <Modal>
      <GoBackButton />
      <HeadingMedium className="my-6">New Invoice</HeadingMedium>
      <div className=" text-blue-cornflower font-bold mb-6">Bill Form</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          required
          label="Street Address"
          name="street"
          register={register}
        />
        <div className="flex flex-wrap mt-4 justify-between">
          <TextInput
            required
            className="w-[48%] md:w-[31%]"
            label="City"
            name="city"
            register={register}
          />
          <TextInput
            className="w-[48%] md:w-[31%]"
            label="Post Code"
            name="postCode"
            required
            register={register}
          />
          <TextInput
            className="w-full mt-4 md:w-[31%] md:mt-0"
            label="Country"
            name="country"
            required
            register={register}
          />
        </div>
        <div className=" text-blue-cornflower font-bold my-6">Bill To</div>
        <TextInput
          label="Client's Name"
          name="clientName"
          required
          register={register}
        />
        <TextInput
          className="mt-4"
          label="Client's Email"
          name="clientEmail"
          register={register}
          required
        />
        <TextInput
          className="mt-4"
          label="Street Address"
          name="clientStreet"
          required
          register={register}
        />
        <div className="flex flex-wrap mt-4 justify-between">
          <TextInput
            className="w-[48%] md:w-[31%]"
            label="City"
            name="clientCity"
            required
            register={register}
          />
          <TextInput
            className="w-[48%] md:w-[31%]"
            label="Post Code"
            name="clientPostCode"
            required
            register={register}
          />
          <TextInput
            className="w-full mt-4 md:w-[31%] md:mt-0"
            label="Country"
            name="clientCountry"
            required
            register={register}
          />
        </div>
        <div className=" flex flex-col md:flex-row md:gap-2 md:mt-4 md:items-center">
          <DatePicker
            name="paymentDue"
            className="mt-4 md:mt-0 md:flex-1"
            label="Invoice Date"
            required={true}
            register={register}
          />
          <Dropdown
            label="Payment Terms"
            className="mt-4 md:mt-0 md:flex-1"
            name="paymentTerms"
            register={register}
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
          required
          register={register}
        />
        <div className=" font-bold text-lg text-bali-hai mt-16 mb-6">
          Item List
        </div>
        {itemCount.map((item) => (
          <FormItemsInputs
            register={register}
            key={item}
            itemNumber={item}
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
        <div
          className="flex mx-[-1.5rem] mb-[-2rem] mt-6 shadow-top md:shadow-none justify-between py-4
        md:mx-0 md:mb-0"
        >
          <Button className="text-sm" variant="secondary">
            Discard
          </Button>
          <Button className="text-sm md:ml-auto md:mr-2" variant="dark">
            Save as Draft
          </Button>
          <Button className="text-sm" type="submit">
            Save & Send
          </Button>
        </div>
      </form>
    </Modal>
  );
}
