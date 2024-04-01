import { statusType } from "../../models/general";
import StatusTag from "../StatusTag";
import { ParagraphVariant } from "../UI/Typography";

interface SingleInvoiceHeaderProps {
  status: statusType;
}

export default function SingleInvoiceHeader({
  status,
}: SingleInvoiceHeaderProps) {
  return (
    <div className=" bg-white rounded-lg shadow w-full py-6 px-8 mt-8 flex items-baseline justify-between">
      <ParagraphVariant className="text-bali-hai">Status</ParagraphVariant>
      <StatusTag status={status} />
    </div>
  );
}
