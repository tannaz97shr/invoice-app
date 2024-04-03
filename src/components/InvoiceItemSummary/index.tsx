import { HeadingMedium, HeadingSmall } from "../UI/Typography";

interface InvoiceItemsSummaryProps {
  items: {
    name: string;
    quantity: number;
    price: number;
    total: number;
  }[];
}

export default function InvoiceItemsSummary({
  items,
}: InvoiceItemsSummaryProps) {
  let total = 0;
  return (
    <div className=" bg-bg-light w-full flex rounded-lg mt-9 flex- flex-col overflow-hidden">
      <div className="flex flex-col p-6">
        {items.map((item, index) => {
          total = total + item.total;
          return (
            <div className="flex items-center justify-between" key={item.name}>
              <div
                className={
                  index !== items.length - 1
                    ? "mb-6 flex flex-col"
                    : "flex flex-col"
                }
              >
                <HeadingSmall>{item.name}</HeadingSmall>
                <span className=" text-sm font-medium text-bali-hai">
                  {item.quantity} x £ {item.price.toFixed(2)}
                </span>
              </div>
              <HeadingSmall>£ {item.total.toFixed(2)}</HeadingSmall>
            </div>
          );
        })}
      </div>
      <div className=" w-full bg-bg-main-menu p-6 text-white flex justify-between">
        <span>Grand Total</span>
        <HeadingMedium>£ {total.toFixed(2)}</HeadingMedium>
      </div>
    </div>
  );
}
