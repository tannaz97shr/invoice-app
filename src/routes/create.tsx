import _uniqueId from "lodash/uniqueId";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { createInvoice } from "../api/invoices";
import GoBackButton from "../components/GoBackButton";
import InvoiceForm from "../components/InvoiceForm";
import Modal from "../components/Modal";
import { HeadingMedium } from "../components/UI/Typography";
import { FormInputs, IInvoice } from "../models/general";

export default function Create() {
  const [itemCount, setItemCount] = useState<number[]>([]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async (updates) => {
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
  };
  return (
    <Modal>
      <GoBackButton />
      <HeadingMedium className="my-6">New Invoice</HeadingMedium>
      <div className=" text-blue-cornflower font-bold mb-6">Bill Form</div>
      <InvoiceForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
      />
    </Modal>
  );
}
