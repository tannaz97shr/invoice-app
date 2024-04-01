import InvoicesContainer from "../components/InvoicesContainer";
import InvoicesHeader from "../components/InvoicesHeader";

export default function Home() {
  return (
    <div className="flex flex-col mx-6 mt-8 max-w-[730px] min-[778px]:mx-auto flex-1">
      <InvoicesHeader />
      <InvoicesContainer />
    </div>
  );
}
