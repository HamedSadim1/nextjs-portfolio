"use client";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "./Icons";
import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function ThemeChanger() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const [animationParent] = useAutoAnimate();

  //! useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => setMounted(true), []);
  //? if we're not on the client, return null
  if (!mounted) return null;

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
