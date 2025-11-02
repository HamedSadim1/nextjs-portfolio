"use client";
import { useTheme } from "next-themes";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useEffect, useState } from "react";
import SunIcon from "./Icons/SunIcons";
import MoonIcon from "./Icons/MoonIcon";

/**
 * ThemeChanger component voor het wisselen tussen licht en donker thema.
 * Gebruikt next-themes voor theme management en auto-animate voor vloeiende icoon overgangen.
 * Toont een zon icoon in donkere modus en maan icoon in lichte modus.
 * Voorkomt hydration mismatch door alleen te renderen na mounting.
 */
export default function ThemeChanger() {
  const { setTheme, resolvedTheme } = useTheme();
  const [animationParent] = useAutoAnimate();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null; // Voorkom hydration mismatch
  }

  return (
    <button
      ref={animationParent}
      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={`Schakel naar ${
        resolvedTheme === "dark" ? "licht" : "donker"
      } thema`}
    >
      {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
