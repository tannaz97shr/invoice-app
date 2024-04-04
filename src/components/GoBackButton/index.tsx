import { useNavigate } from "react-router-dom";
import { IconArrowLeft } from "../UI/Icons";

export default function GoBackButton() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(-1);
      }}
      className=" flex items-baseline"
    >
      <IconArrowLeft />
      <span className="ml-2">Go Back</span>
    </button>
  );
}
