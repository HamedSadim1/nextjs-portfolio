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
  children: React.ReactNode; // De inhoud van de pagina's
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* suppressHydrationWarning is nodig bij next-themes in de html tag */}
      <body
        // Pas de font family, achtergrondkleur, tekstkleur en anti-aliasing toe
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        {/* ThemeProvider beheert het licht/donker thema van de applicatie */}
        <ThemeProvider
          attribute="class" // Voegt de themaklasse toe aan de html-tag
          defaultTheme="system"
          enableSystem // Sta toe dat het systeemthema wordt gebruikt
          disableTransitionOnChange // Voorkomt flikkeren bij het wisselen van thema
        >
          {/* Dit is de hoofdcontainer voor de layout, een flex-kolom die minstens de volledige schermhoogte inneemt */}
          <div className="flex flex-col min-h-screen">
            {/* De navigatiebalk bovenaan de pagina */}
            <Navbar />
            {/* Het hoofdgedeelte van de inhoud van de pagina. Flex-grow zorgt ervoor dat het de resterende hoogte opvult. */}
            <main className="grow max-w-7xl mx-auto pt-4 px-4 sm:px-6 lg:px-8 w-full">
              {children}
            </main>
            {/* Footer sectie */}
            <footer className="border-t border-border/40 bg-muted/30 mt-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center text-sm text-muted-foreground">
                  <p>&copy; 2025 Hamid Sadim. Alle rechten voorbehouden.</p>
                  <p className="mt-2">
                    Gemaakt met ❤️ met Next.js, Tailwind CSS en Prisma
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
