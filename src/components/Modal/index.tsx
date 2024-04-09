import Backdrop from "../UI/Backdrop";

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return (
    <>
      <Backdrop />
      <div
        className="bg-white min-h-full z-20 py-8 px-6 max-h-full overflow-auto
      w-[100vw] max-w-[610px] absolute left-0 top-[72px] md:top-0 md:left-[72px] dark:bg-mirage-dark"
      >
        {children}
      </div>
    </>
  );
}
