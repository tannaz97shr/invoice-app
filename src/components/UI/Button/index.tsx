interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "plus";
}

const Button = ({ children, variant }: ButtonProps) => {
  const primaryClass: string = "bg-blue-cornflower text-white";
  return (
    <button
      className={` px-6 py-4 rounded-3xl font-bold bg-blue-cornflower text-white`}
    >
      {children}
    </button>
  );
};

export default Button;
