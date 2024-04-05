import type { Params } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { getSingleInvoice } from "../api/invoices";
import GoBackButton from "../components/GoBackButton";
import SingleInvoiceContent from "../components/SingleInvoiceContent";
import SingleInvoiceHeader from "../components/SingleInvoiceHeader";
import Buttons from "../components/SingleInvoiceHeader/Buttons";
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
  if (!invoice) {
    return <div>Not Found</div>;
  }

  return (
    <>
      <GoBackButton />
      <SingleInvoiceHeader status={invoice.status} />
      <SingleInvoiceContent invoice={invoice} />
      <div className=" flex md:hidden fixed bg-white w-full bottom-0 left-0 justify-between p-6 shadow-md">
        <Buttons />
      </div>
    </>
  );
}
