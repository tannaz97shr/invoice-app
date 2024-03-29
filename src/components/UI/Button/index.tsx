import { Link } from "react-router-dom";
import { IconPlus } from "../Icons";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "plus" | "dark" | "red" | "long";
  className?: string;
  href?: string;
}

const Button = ({ children, variant, className, href }: ButtonProps) => {
  const primaryClass: string =
    "bg-blue-cornflower text-white hover:bg-heliotrope";
  const plusClass: string =
    "bg-blue-cornflower text-white py-3 pl-3 hover:bg-heliotrope";
  const secondaryClass: string =
    "bg-bg-light text-ship-cove dark:bg-ebony-clay dark:text-selago hover:bg-selago dark:hover:bg-white";
  const darkClass: string =
    "bg-ebony-clay text-bali-hai dark:text-selago hover:bg-vulcan";
  const redClass: string = "bg-burnt-sienna text-white hover:bg-mona-lisa";
  const longClass: string =
    "w-full bg-bg-light text-ship-cove hover:bg-selago justify-center";

  let buttonClass = primaryClass;
  switch (variant) {
    case "plus":
      buttonClass = plusClass;
      break;
    case "secondary": {
      buttonClass = secondaryClass;
      break;
    }
    case "dark": {
      buttonClass = darkClass;
      break;
    }
    case "red": {
      buttonClass = redClass;
      break;
    }
    case "long": {
      buttonClass = longClass;
      break;
    }
    default:
      buttonClass = primaryClass;
  }
  if (href) {
    return (
      <Link
        to={href}
        className={` px-6 py-4 rounded-full font-bold flex items-baseline 
     ${buttonClass} ${className}`}
      >
        {variant === "plus" && (
          <div className=" bg-white w-8 h-8 rounded-full flex justify-center items-center mr-4">
            <IconPlus className="m-auto" />
          </div>
        )}
        {children}
      </Link>
    );
  }

  return (
    <button
      className={` px-6 py-4 rounded-full font-bold flex items-baseline 
       ${buttonClass} ${className}`}
    >
      {variant === "plus" && (
        <div className=" bg-white w-8 h-8 rounded-full flex justify-center items-center mr-4">
          <IconPlus className="m-auto" />
        </div>
      )}
      {children}
    </button>
  );
};

export default Button;
