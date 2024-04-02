import { IInvoice } from "../../models/general";
import { HeadingSmall } from "../UI/Typography";

interface SingleInvoiceContentProps {
  invoice: IInvoice;
}

export default function SingleInvoiceContent({
  invoice,
}: SingleInvoiceContentProps) {
  console.log(invoice);
  return (
    <div className=" bg-white mt-4 rounded-lg shadow flex flex-col p-6 mb-32">
      <span className="flex font-bold text-bali-hai">
        # <HeadingSmall className="text-vulcan">{invoice.id}</HeadingSmall>
      </span>
      <span className=" font-medium text-ship-cove text-sm">
        {invoice.description}
      </span>
      <div className=" mt-8 font-medium text-ship-cove text-sm flex flex-col">
        <span>{invoice.senderAddress.street}</span>
        <span>{invoice.senderAddress.city}</span>
        <span>{invoice.senderAddress.postCode}</span>
        <span>{invoice.senderAddress.country}</span>
      </div>
      <div className="flex mt-8 w-full">
        <div className=" flex flex-col w-1/2">
          <div className="flex flex-col">
            <span className="text-ship-cove font-medium">Invoice Date</span>
            <HeadingSmall>{invoice.createdAt}</HeadingSmall>
          </div>
          <div className="flex flex-col mt-6">
            <span className="text-ship-cove font-medium">Payment Due</span>
            <HeadingSmall>{invoice.paymentDue}</HeadingSmall>
          </div>
        </div>
        <div className=" flex flex-col w-1/2">
          <span className="text-ship-cove font-medium">Bill To</span>
          <HeadingSmall>{invoice.clientName}</HeadingSmall>
          <div className="font-medium text-ship-cove text-sm flex flex-col">
            <span>{invoice.clientAddress.street}</span>
            <span>{invoice.clientAddress.city}</span>
            <span>{invoice.clientAddress.postCode}</span>
            <span>{invoice.clientAddress.country}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-6">
        <span className="text-ship-cove font-medium">Sent to</span>
        <HeadingSmall>{invoice.clientEmail}</HeadingSmall>
      </div>
    </div>
  );
}
