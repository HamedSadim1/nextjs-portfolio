import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/Provider/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Hamid Sadim's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body className={`${inter} w-full h max-h-screen items-start px-2`}>
          <Navbar />
          <div className="max-w-5xl mx-auto pt-4 ">{children}</div>
        </body>
      </ThemeProvider>
    </html>
  );
}
