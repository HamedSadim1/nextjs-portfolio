"use client";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

import { useAutoAnimate } from "@formkit/auto-animate/react";

// Dynamically import the DarkModeIcon component with no server-side rendering (ssr: false)
const MoonIcon = dynamic(() => import("./Icons/MoonIcon"), { ssr: false });

// Dynamically import the LightModeIcon component with no server-side rendering (ssr: false)
const SunIcon = dynamic(() => import("./Icons/SunIcons"), { ssr: false });

export default function ThemeChanger() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [animationParent] = useAutoAnimate();

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
