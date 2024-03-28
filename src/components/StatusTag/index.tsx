import { statusType } from "../../models/general";

interface StatusTagProps {
  status: statusType;
}

export default function StatusTag({ status }: StatusTagProps) {
  return (
    <div
      className={
        status === "paid"
          ? "text-text-paid bg-bg-paid w-24 rounded px-4 py-2 capitalize flex justify-center items-center"
          : status === "pending"
          ? "text-text-pending bg-bg-pending w-24 rounded px-4 py-2 capitalize flex justify-center items-center"
          : "text-text-draft bg-bg-draft w-24 rounded px-4 py-2 capitalize flex justify-center items-center"
      }
    >
      <span
        className={
          status === "paid"
            ? "bg-text-paid w-2 h-2 rounded-full mr-1"
            : status === "pending"
            ? "bg-text-pending w-2 h-2 rounded-full mr-1"
            : "bg-text-draft w-2 h-2 rounded-full mr-1"
        }
      ></span>
      <span>{status}</span>
    </div>
  );
}
