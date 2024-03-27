import { IInvoicesResponse } from "../models/general";

export const getInvoices = async (): Promise<IInvoicesResponse> => {
  try {
    const response = await fetch("/data.json");
    const data = await response.json();
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
