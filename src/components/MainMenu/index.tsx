import { IconLogo } from "../UI/Icons";
import ThemeSwitch from "../UI/ThemeSwitch";

export default function MainMenu() {
  return (
    <div className=" flex h-[72px] w-full bg-bg-main-menu">
      <div className=" flex bg-blue-cornflower w-[72px] items-center justify-center rounded-r-lg">
        <IconLogo />
      </div>
      <ThemeSwitch className="ml-auto" />
      <div className=" border-l border-bali-hai ml-6 aspect-square h-full flex items-center justify-center">
        <img className=" w-8 h-8 rounded-full" src="/assets/image-avatar.jpg" />
      </div>
    </div>
  );
}
