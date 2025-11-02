"use client"; // Deze component gebruikt de usePathname hook, dus het moet een Client Component zijn.

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/app/utils"; // Utility functie om classNames conditioneel samen te voegen
import { motion } from "framer-motion"; // Voor click animaties
import { useRouter } from "next/navigation"; // Voor programmatic navigation

// Definieer de props voor de Navlink component
interface NavlinkProps {
  href: string;
  title: string;
  icon?: React.ComponentType<{ className?: string }>; // Optioneel icoon
}

/**
 * Navlink component voor navigatie links in de navbar.
 * Toont een link met dynamische styling gebaseerd op of het de huidige pagina is.
 * Gebruikt gradient tekst voor actieve en hover states.
 * Ondersteunt smooth scrolling voor anchor links (#sectie).
 * Vereist Next.js usePathname hook, vandaar "use client".
 */
const Navlink = ({ href, title, icon: Icon }: NavlinkProps) => {
  // Haal het huidige URL-pad op
  const pathName = usePathname();
  const router = useRouter();

  // Bepaal of deze link de actieve link is
  const isActive = pathName === href;

  // Smooth scroll functie voor anchor links met betere toegankelijkheid
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Focus management voor toegankelijkheid
        targetElement.focus({ preventScroll: true });
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        // Update URL zonder page reload
        window.history.pushState(null, "", href);
      }
    }
  };

  // Keyboard navigation support
  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick(e as any);
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      // Gebruik de cn utility om de classNames dynamisch te bepalen
      className={cn(
        "px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        // Als de link actief is, pas de gradient-tekst stijl toe
        isActive
          ? "bg-linear-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
          : // Anders, pas de standaard en hover stijlen toe
            "text-muted-foreground hover:text-primary transition-colors"
      )}
    >
      <motion.span
        className="flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {Icon && (
          <span className="text-current">
            <Icon className="h-4 w-4" />
          </span>
        )}
        <span>{title}</span>
      </motion.span>
    </Link>
  );
};

export default Navlink;
