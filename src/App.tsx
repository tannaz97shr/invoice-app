import Button from "./components/UI/Button";
import DatePicker from "./components/UI/Datepicker";
import Dropdown from "./components/UI/Dropdown";
import TextInput from "./components/UI/TextInput";
import ThemeSwitch from "./components/UI/ThemeSwitch";

function App() {
  return (
    <div>
      <ThemeSwitch />
      <Button variant="long">Mark as Paid</Button>
      <TextInput label="street address" name="street" />
      <div className=" w-80">
        <Dropdown
          className="ml-6"
          label="Payment Terms"
          initialValue={{
            option: "Net 1 Day",
            value: "1",
          }}
          options={[
            {
              option: "Net 1 Day",
              value: "1",
            },
            {
              option: "Net 7 Days",
              value: "7",
            },
            {
              option: "Net 14 Days",
              value: "14",
            },
            {
              option: "Net 30 Days",
              value: "30",
            },
          ]}
        />
      </div>
      <div className=" w-80">
        <DatePicker label="date" />
      </div>
    </div>
  );
}

export default App;
