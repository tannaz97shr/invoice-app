import type { Params } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { getSingleInvoice } from "../api/invoices";
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
  // let { invoiceId } = useParams();

  const invoice = useLoaderData() as IInvoice | null;
  return <div>invoice, {invoice?.id}</div>;
}
