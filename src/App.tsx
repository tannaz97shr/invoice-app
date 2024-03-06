import Button from "./components/UI/Button";
import TextInput from "./components/UI/TextInput";
import ThemeSwitch from "./components/UI/ThemeSwitch";

function App() {
  return (
    <div>
      <ThemeSwitch />
      <Button variant="long">Mark as Paid</Button>
      <TextInput label="street address" name="street" />
    </div>
  );
}

export default App;
