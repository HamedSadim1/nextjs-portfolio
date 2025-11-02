"use client";

import Email from "@/components/Icons/Email";
import GithubIcon from "@/components/Icons/GithubIcon";
import LinkedinIcon from "@/components/Icons/LinkedinIcon";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // shadcn/ui component
import { Button } from "@/components/ui/button"; // shadcn/ui component
import { type StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Helper om icoon-namen te koppelen aan de daadwerkelijke componenten
const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Email,
};

// Definieer de structuur van de props voor typeveiligheid
interface HeroSectionProps {
  user: {
    name: string;
    avatarUrl: string | StaticImageData; // Kan een URL string zijn of een geïmporteerd Next.js image object
    bio: string;
    description: readonly string[]; // readonly array van strings
    socials: readonly {
      // readonly array van objecten
      readonly name: keyof typeof iconMap; // Moet een van de sleutels van iconMap zijn
      readonly url: string;
    }[];
  };
}

/**
 * HeroSection component voor de homepage van de portfolio website.
 * Toont een introductie van de gebruiker met avatar, naam, bio, beschrijving,
 * social media links en call-to-action knoppen.
 * Het ontwerp is responsief: op grote schermen naast elkaar, op mobiel onder elkaar.
 */
export default function HeroSection({ user }: HeroSectionProps) {
  return (
    <section className="w-full max-w-5xl flex flex-col lg:flex-row items-center justify-center gap-12 py-12 lg:py-28">
      {/* Linker Sectie: Avatar, Naam, Bio, Socials */}
      <motion.div
        className="flex flex-col gap-4 items-center text-center lg:w-1/3"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Avatar className="w-48 h-48 border-4 border-primary/10">
          <AvatarImage
            src={
              typeof user.avatarUrl === "string"
                ? user.avatarUrl
                : user.avatarUrl.src
            }
            alt={user.name}
          />
          {/* Fallback voor als de afbeelding niet laadt, toont de eerste letter van de naam */}
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <h2 className="text-3xl font-bold tracking-tight bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          {user.name}
        </h2>
        <p className="text-muted-foreground">{user.bio}</p>
        <div className="flex gap-2 items-center">
          {/* Map over de social media links en render een icoon-knop voor elke link */}
          {user.socials.map((social) => {
            const IconComponent = iconMap[social.name];
            return (
              <motion.div
                key={social.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button key={social.name} variant="ghost" size="icon" asChild>
                  <Link
                    href={social.url}
                    target="_blank"
                    aria-label={`Bezoek mijn ${social.name} profiel`}
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="h-6 w-6 text-muted-foreground hover:text-primary" />
                  </Link>
                </Button>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Rechter Sectie: Beschrijving en Call-to-Action knoppen */}
      <motion.div
        className="flex flex-col gap-6 text-lg lg:w-2/3"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* De 'prose' class van Tailwind verbetert de leesbaarheid van de tekst */}
        <div className="prose dark:prose-invert max-w-none">
          {user.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Primaire CTA knop */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="bg-linear-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity"
            >
              <Link
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.getElementById("projects");
                  if (targetElement) {
                    targetElement.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                Bekijk Mijn Werk
              </Link>
            </Button>
          </motion.div>
          {/* Secundaire CTA knop met gradient rand */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <div className="p-0.5 rounded-lg bg-linear-to-r from-purple-500 to-pink-500">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-background hover:bg-accent w-full"
              >
                <Link href="mailto:your-email@example.com">
                  Neem Contact Op
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
