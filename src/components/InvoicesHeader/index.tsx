import InvoiceFilter from "../InvoiceFilter";
import { HeadingLarg, Paragraph } from "../UI/Typography";

interface InvoicesHeaderProps {
  invoiceCount: number;
}

export default function InvoicesHeader({ invoiceCount }: InvoicesHeaderProps) {
  return (
    <div className=" flex">
      <div className="flex flex-col">
        <HeadingLarg>Invoices</HeadingLarg>
        <Paragraph className="text-bali-hai">{invoiceCount} invoices</Paragraph>
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
    </div>
  );
}
