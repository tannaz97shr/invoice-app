import { statusType } from "../../models/general";
import StatusTag from "../StatusTag";
import { ParagraphVariant } from "../UI/Typography";
import Buttons from "./Buttons";

interface SingleInvoiceHeaderProps {
  status: statusType;
}

export default function SingleInvoiceHeader({
  status,
}: SingleInvoiceHeaderProps) {
  return (
    <div className=" bg-white rounded-lg shadow w-full py-6 px-8 mt-8 flex items-baseline justify-between">
      <div className="flex items-baseline justify-between w-full md:w-fit">
        <ParagraphVariant className="text-bali-hai md:mr-5">
          Status
        </ParagraphVariant>
        <StatusTag status={status} />
      </div>
      <div className="hidden md:flex gap-2">
        <Buttons />
      </div>
    </div>
  );
}
