'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

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
      <header className="mb-12 text-center">
        <motion.h2
          id="skills-heading"
          className="bg-linear-to-r mb-4 from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Mijn Vaardigheden
        </motion.h2>
        <motion.p
          className="text-muted-foreground mx-auto max-w-2xl text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Een overzicht van mijn technische expertise en tools waarmee ik werk.
          Van frontend frameworks tot backend technologieën en development
          practices.
        </motion.p>
      </header>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        role="list"
        aria-label="Technische vaardigheden gecategoriseerd"
      >
        {skills.map((category) => (
          <motion.article
            key={category.title}
            variants={categoryVariants}
            className="glass hover:border-primary/20 overflow-hidden rounded-lg p-6 shadow-sm transition-all duration-300 hover:shadow-md"
            role="listitem"
          >
            <h3 className="mb-4 text-center text-xl font-semibold">
              {category.title}
            </h3>
            <div
              className="flex flex-wrap justify-center gap-2"
              role="list"
              aria-label={`${category.title} vaardigheden`}
            >
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="hover:bg-primary hover:text-primary-foreground cursor-default px-3 py-1 text-sm transition-all duration-200"
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
