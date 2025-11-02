'use client'; // Deze component moet een Client Component zijn vanwege de animaties en de Sheet (state)

import Link from 'next/link';
import ThemeChanger from './ThemeChanger';
import Navlink from './Navlink';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'; // shadcn/ui component voor het zijmenu
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react'; // Hamburger menu icoon
import { Home } from 'lucide-react'; // Huis icoon
import { FolderOpen } from 'lucide-react'; // Projecten icoon
import { Code } from 'lucide-react'; // Skills icoon
import { motion } from 'framer-motion'; // Voor animaties

// Definieer het type voor navigatie links
interface NavLink {
  href: string;
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
}

// Definieer de navigatielinks in een array voor eenvoudig beheer
const navLinks: NavLink[] = [
  { href: '/', title: 'Home', icon: Home }, // Huis icoon voor home
  { href: '#skills', title: 'Skills', icon: Code }, // Skills icoon
  { href: '#projects', title: 'Projects', icon: FolderOpen }, // Projecten icoon
  // Voeg hier meer links toe
];

/**
 * Navbar component voor de portfolio website.
 * Deze component render een sticky header met branding, navigatie links en een theme changer.
 * Het ontwerp is responsief: op desktop wordt een horizontale navigatie getoond,
 * op mobiel een zijmenu (Sheet) met dezelfde links.
 * Gebruikt Framer Motion voor een slide-in animatie bij het laden van de pagina.
 */
export default function Navbar() {
  return (
    // De header wordt geanimeerd met framer-motion: schuift van boven in beeld
    <motion.header
      initial={{ y: -100, opacity: 0 }} // Beginpositie: boven het scherm en onzichtbaar
      animate={{ y: 0, opacity: 1 }} // Eindpositie: op de normale positie en volledig zichtbaar
      transition={{ duration: 0.5, ease: 'easeInOut' }} // Timing en easing van de animatie
      // Sticky header met een semi-transparante, geblurde achtergrond (glassmorphism)
      className="border-border/40 bg-background/95 supports-backdrop-filter:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur"
    >
      <div className="mx-auto flex h-14 max-w-5xl items-center px-4 sm:px-6 lg:px-8">
        {/* Logo / Branding aan de linkerkant */}
        <div className="mr-auto flex items-center">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
            <span className="bg-linear-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Hamid Sadim
            </span>
          </Link>
        </div>

        {/* Desktop Navigatie: verborgen op mobiel (md:), zichtbaar op desktop */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Navlink href={link.href} title={link.title} icon={link.icon} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-4">
          {/* ThemeChanger: alleen zichtbaar op desktop in de navbar zelf */}
          <div className="hidden md:block">
            <ThemeChanger />
          </div>

          {/* Mobiele Navigatie: alleen zichtbaar op mobiel (md:hidden) */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <Link href="/" className="mr-6 flex items-center gap-2">
                <span className="font-bold">Hamid</span>
                <span className="text-primary font-bold">Sadim</span>
              </Link>
              <div className="mt-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#')) {
                          e.preventDefault();
                          const targetId = link.href.substring(1);
                          const targetElement =
                            document.getElementById(targetId);
                          if (targetElement) {
                            targetElement.scrollIntoView({
                              behavior: 'smooth',
                              block: 'start',
                            });
                          }
                        }
                      }}
                      className="hover:text-primary flex items-center gap-2 text-lg font-medium transition-colors"
                    >
                      {link.icon && <link.icon className="h-5 w-5" />}
                      {link.title}
                      {link.icon && (
                        <span className="sr-only">{link.title}</span>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </div>
              {/* ThemeChanger in het mobiele menu */}
              <div className="mt-6">
                <ThemeChanger />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
