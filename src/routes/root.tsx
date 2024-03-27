import { getInvoices } from "../api/invoices";
import InvoicesContainer from "../components/InvoicesContainer";
import InvoicesHeader from "../components/InvoicesHeader";
import MainMenu from "../components/MainMenu";
import { IInvoice } from "../models/general";

// use params for status filter
export async function loader(): Promise<IInvoice[]> {
  const { invoices } = await getInvoices();
  return invoices;
}

export default function Root() {
  return (
    <div className=" flex flex-col md:flex-row">
      <MainMenu />
      <div className="flex flex-col mx-6 mt-8 max-w-[730px] min-[778px]:mx-auto flex-1">
        <InvoicesHeader invoiceCount={7} />
        <InvoicesContainer />
      </div>
    </div>
  );
}
