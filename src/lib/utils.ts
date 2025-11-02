import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility functie om Tailwind CSS classes conditioneel samen te voegen.
 * Combineert clsx voor conditionele classes met tailwind-merge voor het samenvoegen
 * van conflicterende Tailwind classes (bijv. "text-red-500 text-blue-500" wordt "text-blue-500").
 * Gebruikt door shadcn/ui componenten en andere componenten voor dynamische styling.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
