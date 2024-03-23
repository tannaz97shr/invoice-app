import MainMenu from "../components/MainMenu";
import ThemeSwitch from "../components/UI/ThemeSwitch";

export default function Root() {
  return (
    <div className=" flex flex-col md:flex-row">
      <MainMenu />
      <div>
        content
        <ThemeSwitch />
      </div>
    </div>
  );
}
