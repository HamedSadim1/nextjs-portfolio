'use client';
import { useTheme } from 'next-themes';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useEffect, useState } from 'react';
import SunIcon from './Icons/SunIcons';
import MoonIcon from './Icons/MoonIcon';

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
      className="ring-offset-background focus-visible:ring-ring border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      aria-label={`Schakel naar ${
        resolvedTheme === 'dark' ? 'licht' : 'donker'
      } thema`}
    >
      {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
