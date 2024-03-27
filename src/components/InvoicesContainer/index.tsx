import { useLoaderData } from "react-router-dom";

export default function InvoicesContainer() {
  const invoices = useLoaderData();
  console.log("data from container", invoices);
  return <div>invoices</div>;
}
