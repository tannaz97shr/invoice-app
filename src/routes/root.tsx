import { getInvoices } from "../api/invoices";
import InvoicesContainer from "../components/InvoicesContainer";
import InvoicesHeader from "../components/InvoicesHeader";
import MainMenu from "../components/MainMenu";
import { IInvoice } from "../models/general";

// use params for status filter
export async function loader({
  request,
}: {
  request: any;
}): Promise<IInvoice[]> {
  const status = new URL(request.url).searchParams.get("status");
  const statusArray = status?.split(",");
  console.log("params of loader", statusArray);
  const { invoices } = await getInvoices();

  if (statusArray?.length) {
    return invoices.filter((invoice: IInvoice) =>
      statusArray.includes(invoice.status)
    );
  }
  return invoices;
}

export default function Root() {
  return (
    <div className=" flex flex-col md:flex-row bg-bg-light dark:bg-mirage-dark min-h-[100vh]">
      <MainMenu />
      <div className="w-full md:ml-[72px]">
        <div className="flex flex-col mx-6 mt-8 max-w-[730px] min-[778px]:mx-auto flex-1">
          <InvoicesHeader invoiceCount={7} />
          <InvoicesContainer />
        </div>
      </div>
    </div>
  );
}
