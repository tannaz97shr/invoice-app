import { Link, useLoaderData } from "react-router-dom";
import { IInvoice } from "../../models/general";
import StatusTag from "../StatusTag";
import { IconIllustration } from "../UI/Icons";
import {
  HeadingMedium,
  HeadingSmall,
  ParagraphVariant,
} from "../UI/Typography";

export default function InvoicesContainer() {
  const invoices = useLoaderData() as IInvoice[];
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
  if (invoices.length) {
    return (
      <div className=" flex flex-col mt-8 relative">
        {invoices.map((invoice) => {
          const due = new Date(invoice.paymentDue);
          return (
            <Link
              to={`invoice/${invoice.id}`}
              key={invoice.id}
              className=" flex rounded-lg bg-white p-6 mb-5 justify-between"
            >
              <div className=" flex flex-col md:flex-row md:items-center">
                <HeadingSmall className="mb-6 md:mb-0 md:mr-11 md:flex md:items-center">
                  <span className=" text-ship-cove">#</span>
                  {invoice.id}
                </HeadingSmall>
                <div className="text-ship-cove font-medium text-sm mb-2 md:mb-0 md:flex md:items-center">
                  Due{" "}
                  {due.getDate() +
                    " " +
                    months[due.getMonth()] +
                    " " +
                    due.getFullYear()}
                </div>
                <HeadingSmall className=" md:flex md:items-center md:absolute md:right-48 md:my-auto">
                  £ {invoice.total}
                </HeadingSmall>
              </div>
              <div className=" flex flex-col md:flex-row md:items-center md:flex-1 md:justify-between">
                <ParagraphVariant className="text-ship-cove mb-7 md:mb-0 md:ml-14">
                  {invoice.clientName}
                </ParagraphVariant>
                <StatusTag status={invoice.status} />
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
  return (
    <div className=" flex flex-col items-center mx-auto mt-28">
      <IconIllustration />
      <HeadingMedium className="mt-6">There is nothing here</HeadingMedium>
      <ParagraphVariant className=" text-center mt-4 text-bali-hai">
        Create an invoice by clicking the <br /> New Invoice button and get
        started
      </ParagraphVariant>
    </div>
  );
}
