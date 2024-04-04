import { useLocation } from "react-router-dom";
import Button from "../UI/Button";

export default function Buttons() {
  const { pathname } = useLocation();
  console.log("location", pathname);
  return (
    <>
      <Button href={`${pathname}/edit`} className="" variant="secondary">
        Edit
      </Button>
      <Button className="" variant="red">
        Delete
      </Button>
      <Button className="" variant="primary">
        Mark as Paid
      </Button>
    </>
  );
}
