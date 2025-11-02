"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

// Definieer de structuur van een skill categorie
export interface SkillCategory {
  title: string;
  skills: string[];
  icon?: string; // Optioneel icoon voor de categorie
}

// Definieer de props voor de Skills component
interface SkillsProps {
  skills: SkillCategory[];
}

/**
 * Skills component voor het tonen van technische vaardigheden.
 * Toont vaardigheden gegroepeerd per categorie met badges en animaties.
 */
export default function Skills({ skills }: SkillsProps) {
  // Animatie varianten voor de container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Animatie varianten voor individuele categorieën
  const categoryVariants = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="skills"
      className="container mx-auto px-4 py-16"
      aria-labelledby="skills-heading"
    >
      <header className="text-center mb-12">
        <motion.h2
          id="skills-heading"
          className="text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Mijn Vaardigheden
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hier vind je een overzicht van mijn technische vaardigheden en
          expertise. Ik blijf me continu ontwikkelen in moderne
          webontwikkelingstechnologieën.
        </motion.p>
      </header>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        role="list"
        aria-label="Technische vaardigheden gecategoriseerd"
      >
        {skills.map((category, index) => (
          <motion.article
            key={category.title}
            variants={categoryVariants}
            className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/20"
            role="listitem"
          >
            <h3 className="text-xl font-semibold mb-4 text-center">
              {category.title}
            </h3>
            <div
              className="flex flex-wrap gap-2 justify-center"
              role="list"
              aria-label={`${category.title} vaardigheden`}
            >
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-sm px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                  role="listitem"
                  aria-label={`Vaardigheid: ${skill}`}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
