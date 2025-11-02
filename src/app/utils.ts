import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility functie om Tailwind CSS classes conditioneel samen te voegen.
 * Combineert clsx voor conditionele classes met tailwind-merge voor het samenvoegen
 * van conflicterende Tailwind classes (bijv. "text-red-500 text-blue-500" wordt "text-blue-500").
 * Gebruikt doorheen de applicatie voor dynamische styling.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
