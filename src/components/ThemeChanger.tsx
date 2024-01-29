"use client";
import { useTheme } from "next-themes";

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      The current theme is: {theme}
      <button className="border" onClick={() => setTheme("light")}>
        Light Mode
      </button>
      <button className="border" onClick={() => setTheme("dark")}>
        Dark Mode
      </button>
    </div>
  );
}
