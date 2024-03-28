import { useLoaderData } from "react-router-dom";
import { IInvoice } from "../../models/general";
import StatusTag from "../StatusTag";
import { HeadingSmall, ParagraphVariant } from "../UI/Typography";

export default function InvoicesContainer() {
  const invoices = useLoaderData() as IInvoice[];
  console.log("data from container", invoices);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className=" flex flex-col mt-8">
      {invoices.map((invoice) => {
        const due = new Date(invoice.paymentDue);
        return (
          <div
            key={invoice.id}
            className=" flex rounded-lg bg-white p-6 mb-5 justify-between"
          >
            <div className=" flex flex-col">
              <HeadingSmall className="mb-6">
                <span className=" text-ship-cove">#</span>
                {invoice.id}
              </HeadingSmall>
              <div className="text-ship-cove font-medium text-sm mb-2">
                Due{" "}
                {due.getDate() +
                  " " +
                  months[due.getMonth()] +
                  " " +
                  due.getFullYear()}
              </div>
              <HeadingSmall>£ {invoice.total}</HeadingSmall>
            </div>
            <div className=" flex flex-col">
              <ParagraphVariant className="text-ship-cove mb-7">
                {invoice.clientName}
              </ParagraphVariant>
              <StatusTag status={invoice.status} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
