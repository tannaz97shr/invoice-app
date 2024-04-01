import type { Params } from "react-router-dom";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getSingleInvoice } from "../api/invoices";
import { IconArrowLeft } from "../components/UI/Icons";
import { IInvoice } from "../models/general";

export async function loader({
  params,
}: {
  params: Params<"invoiceId">;
}): Promise<IInvoice | null> {
  const { invoice } = await getSingleInvoice(params.invoiceId as string);
  return invoice;
}

export default function Invoice() {
  const invoice = useLoaderData() as IInvoice | null;
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        navigate(-1);
      }}
      className=" flex items-baseline"
    >
      <IconArrowLeft />
      <span className="ml-2">Go Back</span>
    </button>
  );
}
