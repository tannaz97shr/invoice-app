import { useEffect, useState } from "react";
import { IconMoon, IconSun } from "../Icons";

interface ThemeSwitchProps {
  className?: string;
}

const ThemeSwitch = ({ className }: ThemeSwitchProps) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode ? "true" : "false");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <button onClick={toggleDarkMode} className={className}>
      {darkMode ? <IconMoon /> : <IconSun />}
    </button>
  );
};

export default ThemeSwitch;
