import { useParams } from "react-router-dom";

export default function Invoice() {
  let { invoiceId } = useParams();
  return <div>invoice</div>;
}
