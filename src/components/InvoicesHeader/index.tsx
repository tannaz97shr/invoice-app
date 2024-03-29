import { useLoaderData } from "react-router-dom";
import { IInvoice } from "../../models/general";
import InvoiceFilter from "../InvoiceFilter";
import Button from "../UI/Button";
import { HeadingLarg, Paragraph } from "../UI/Typography";

export default function InvoicesHeader() {
  const invoices = useLoaderData() as IInvoice[];
  return (
    <div className=" flex items-center">
      <div className="flex flex-col">
        <HeadingLarg>Invoices</HeadingLarg>
        <Paragraph className="text-bali-hai">
          {invoices.length} invoices
        </Paragraph>
      </div>
      <InvoiceFilter
        option={[
          {
            value: "draft",
          },
          {
            value: "pending",
          },
          {
            value: "paid",
          },
        ]}
      />
      <Button variant="plus" className="ml-4" href="create">
        <span className="md:hidden">New</span>
        <span className="hidden md:flex">New Invoice</span>
      </Button>
    </div>
  );
}
