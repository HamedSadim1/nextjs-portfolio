'use client';

import Email from '@/components/Icons/Email';
import GithubIcon from '@/components/Icons/GithubIcon';
import LinkedinIcon from '@/components/Icons/LinkedinIcon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; // shadcn/ui component
import { Button } from '@/components/ui/button'; // shadcn/ui component
import { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

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
    <section
      className="glass flex w-full max-w-5xl flex-col items-center justify-center gap-12 rounded-2xl py-12 px-8 md:px-12 lg:flex-row lg:py-28 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Linker Sectie: Avatar, Naam, Bio, Socials */}
      <motion.div
        className="flex flex-col items-center gap-4 text-center lg:w-1/3"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Avatar className="border-primary/10 h-48 w-48 border-4 shadow-lg">
          <AvatarImage
            src={
              typeof user.avatarUrl === 'string'
                ? user.avatarUrl
                : user.avatarUrl.src
            }
            alt={user.name}
          />
          {/* Fallback voor als de afbeelding niet laadt, toont de eerste letter van de naam */}
          <AvatarFallback className="text-2xl font-bold">
            {user.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <h1
          id="hero-heading"
          className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent"
        >
          {user.name}
        </h1>
        <p className="text-muted-foreground text-lg font-medium">{user.bio}</p>
        <div className="flex items-center gap-2">
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
                    <IconComponent className="text-muted-foreground hover:text-primary h-6 w-6" />
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
        <div className="flex flex-col gap-4 sm:flex-row">
          {/* Primaire CTA knop */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              size="lg"
              className="bg-linear-to-r from-blue-500 to-purple-600 text-white transition-opacity hover:opacity-90"
            >
              <Link
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.getElementById('projects');
                  if (targetElement) {
                    targetElement.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
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
            <div className="bg-linear-to-r rounded-lg from-purple-500 to-pink-500 p-0.5">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-background hover:bg-accent w-full"
              >
                <Link href="mailto:hamid.sadim@outlook.com">
                  Neem Contact Op
                </Link>
              </Button>
            </div>
          </motion.div>
          {/* Download CV knop */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="hover:bg-secondary/80 w-full"
            >
              <Link
                href="/cv-hamid-sadim.pdf"
                download="CV_Hamid_Sadim.pdf"
                aria-label="Download mijn CV"
              >
                📄 Download CV
              </Link>
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
