import { IInvoice, IInvoicesResponse } from "../models/general";

export const getInvoices = async (): Promise<IInvoicesResponse> => {
  try {
    const response = await fetch("/data.json");
    const data: IInvoice[] = await response.json();
    return {
      invoices: data,
    };
  } catch (e) {
    console.error(e);
    return {
      invoices: [],
    };
  }
};

export const getSingleInvoice = async (
  id: string
): Promise<{ invoice: IInvoice | null }> => {
  try {
    const response = await fetch("/data.json");
    const data: IInvoice[] = await response.json();
    const invoice: IInvoice[] = data.filter((inv) => inv.id === id);
    if (invoice.length) {
      return { invoice: invoice[0] };
    } else {
      return {
        invoice: null,
      };
    }
  } catch (e) {
    console.error(e);
    return {
      invoice: null,
    };
  }
};
export const createInvoice = async (invoice: IInvoice) => {
  console.log("create invoice api", invoice);
  let data = await fetch("/data.json");
  const invoices = await data.json();
  const newInvoices = [...invoices, invoice];
  console.log("crete invoice here", invoices);
};
