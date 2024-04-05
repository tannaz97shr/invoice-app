import { Form } from "react-router-dom";
import { createInvoice } from "../api/invoices";
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
  return (
    <Modal>
      <GoBackButton />
      <HeadingMedium className="my-6">New Invoice</HeadingMedium>
      <div className=" text-blue-cornflower font-bold mb-6">Bill Form</div>
      <Form method="post">
        <TextInput label="Street Address" name="street" />
        <div className="flex gap-2 mt-4">
          <TextInput className="w-1/2" label="City" name="city" />
          <TextInput className="w-1/2" label="Post Code" name="postCode" />
        </div>
        <div className=" text-blue-cornflower font-bold my-6">Bill To</div>
        <TextInput label="Client's Name" name="clientName" />
        <TextInput className="mt-4" label="Client's Email" name="clientEmail" />
        <TextInput
          className="mt-4"
          label="Street Address"
          name="clientStreet"
        />
        <div className="flex gap-2 mt-4">
          <TextInput className="w-1/2" label="City" name="clientCity" />
          <TextInput
            className="w-1/2"
            label="Post Code"
            name="ClientPostCode"
          />
        </div>
        <TextInput className="mt-4" label="Country" name="clientCountry" />
        <DatePicker className="mt-4" label="Invoice Date" />
        <Dropdown
          label="Payment Terms"
          className="mt-4"
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
        <TextInput
          className="mt-4"
          label="Project Description"
          name="description"
        />
      </Form>
    </Modal>
  );
}
