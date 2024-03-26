import InvoicesHeader from "../components/InvoicesHeader";
import MainMenu from "../components/MainMenu";

export default function Root() {
  return (
    <div className=" flex flex-col md:flex-row">
      <MainMenu />
      <div className="flex flex-col mx-6 mt-8 max-w-[730px] min-[778px]:mx-auto flex-1">
        <InvoicesHeader invoiceCount={7} />
      </div>
    </div>
  );
}
