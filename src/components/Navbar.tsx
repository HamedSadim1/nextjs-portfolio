"use client";

import Link from "next/link";
import ThemeChanger from "./ThemeChanger";
import Navlink from "./Navlink";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { href: "/", title: "Home" },
  { href: "/projects", title: "Projects" },
  // Add more links here
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="max-w-5xl mx-auto flex h-14 items-center px-4 sm:px-6 lg:px-8">
        <div className="mr-auto flex items-center">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 text-transparent bg-clip-text">
              Hamid Sadim
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Navlink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="hidden md:block">
            <ThemeChanger />
          </div>

          {/* Mobile Navigation */}
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
                <span className="font-bold text-primary">Sadim</span>
              </Link>
              <div className="mt-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
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

