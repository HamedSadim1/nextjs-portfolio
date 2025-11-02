'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

/**
 * ThemeProvider wrapper component voor next-themes.
 * Voorziet de applicatie van theme context voor licht/donker modus ondersteuning.
 * Moet als client component worden gebruikt vanwege next-themes functionaliteit.
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
