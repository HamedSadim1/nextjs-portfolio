"use client";
import { useTheme } from "next-themes";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useEffect, useState } from "react";
import SunIcon from "./Icons/SunIcons";
import MoonIcon from "./Icons/MoonIcon";

export default function ThemeChanger() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [animationParent] = useAutoAnimate();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <button
        ref={animationParent}
        className="text-xl text-green-300 bg-green-200/30 p-2 rounded-md"
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
}
