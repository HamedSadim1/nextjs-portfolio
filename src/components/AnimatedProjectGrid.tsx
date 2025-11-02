'use client'; // Deze component gebruikt framer-motion voor animaties en moet daarom een Client Component zijn.

import { motion } from 'framer-motion';
import ProjectCard, { type Project } from './Card';

// Definieer de props voor de AnimatedProjectGrid component
interface AnimatedProjectGridProps {
  projects: Project[];
}

// Definieer de animatie-varianten voor de container (het grid)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Langzamere stagger voor dramatischer effect
      delayChildren: 0.2, // Kleine vertraging voordat animaties beginnen
    },
  },
};

// Definieer de animatie-varianten voor de individuele items (de kaarten)
const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 }, // Begin lager en kleiner
  show: { y: 0, opacity: 1, scale: 1 }, // Eindstaat zonder transition
};

const AnimatedProjectGrid = ({ projects }: AnimatedProjectGridProps) => {
  return (
    // De motion.div is de container die de animaties van de kinderen orkestreert
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {/* Map over de projectdata en render voor elk project een geanimeerde kaart */}
      {projects.map((project) => (
        <motion.div
          key={project.id} // Gebruik unieke ID in plaats van titel
          variants={itemVariants}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AnimatedProjectGrid;
