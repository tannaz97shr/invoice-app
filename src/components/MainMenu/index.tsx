import { IconLogo } from "../UI/Icons";
import ThemeSwitch from "../UI/ThemeSwitch";

export default function MainMenu() {
  return (
    <div className=" flex h-[72px] md:h-[100vh] w-full md:w-[72px] bg-bg-main-menu md:flex-col md:rounded-r-xl md:fixed z-20">
      <div className=" flex bg-blue-cornflower w-[72px] items-center justify-center rounded-r-xl md:h-[72px]">
        <IconLogo />
      </div>
      <ThemeSwitch className="ml-auto md:mx-auto md:mt-auto" />
      <div className=" border-l md:border-t md:border-l-0 border-bali-hai ml-6 md:ml-0 md:mt-6 aspect-square h-full md:h-[72px] flex items-center justify-center">
        <img className=" w-8 h-8 rounded-full" src="/assets/image-avatar.jpg" />
      </div>
    </div>
  );
}
