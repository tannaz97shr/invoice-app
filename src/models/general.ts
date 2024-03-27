export interface IDropdownOption {
  option: string;
  value: string;
}

export type statusType = "paid" | "pending" | "draft";

export interface IInvoice {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: 1;
  clientName: string;
  clientEmail: string;
  status: statusType;
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items: {
    name: string;
    quantity: number;
    price: number;
    total: number;
  }[];
  total: number;
}

export interface IInvoicesResponse {
  invoices: IInvoice[];
}
