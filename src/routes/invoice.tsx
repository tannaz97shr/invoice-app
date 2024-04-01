import type { Params } from "react-router-dom";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getSingleInvoice } from "../api/invoices";
import SingleInvoiceHeader from "../components/SingleInvoiceHeader";
import Buttons from "../components/SingleInvoiceHeader/Buttons";
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
  if (!invoice) {
    return <div>Not Found</div>;
  }

  return (
    <>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className=" flex items-baseline"
      >
        <IconArrowLeft />
        <span className="ml-2">Go Back</span>
      </button>
      <SingleInvoiceHeader status={invoice.status} />
      <div className=" flex md:hidden absolute bg-white w-full bottom-0 left-0 justify-between p-6 shadow-md">
        <Buttons />
      </div>
    </>
  );
}
