import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/**
 * Seed script om de database te vullen met voorbeeld projecten en skills.
 * Voert de volgende acties uit:
 * 1. Creëert voorbeeld projecten met afbeeldingen, titels, beschrijvingen en tags
 * 2. Creëert skill categorieën met bijbehorende skills
 * 3. Koppelt skills aan hun categorieën
 *
 * Uit te voeren met: npx prisma db seed
 */
async function main() {
  // Voorbeeld projecten data
  const projects = [
    {
      imageUrl:
        'https://images.unsplash.com/photo-1570649236495-42fa5fe5c48b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'GitHub User Search App',
      description:
        'A responsive web application built with Next.js that allows users to search for GitHub profiles and view their repositories and statistics.',
      liveUrl: '#',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GitHub API'],
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'E-commerce Storefront',
      description:
        'A full-featured e-commerce front-end with product listings, shopping cart functionality, and a checkout process, styled with shadcn/ui.',
      liveUrl: '#',
      tags: ['React', 'Vite', 'Redux Toolkit', 'shadcn/ui'],
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Personal Portfolio Website',
      description:
        'My personal portfolio to showcase my skills and projects. Designed to be clean, fast, and fully responsive with a built-in theme switcher.',
      liveUrl: '#',
      tags: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      imageUrl:
        'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Markdown Blog Platform',
      description:
        'A simple and fast blog platform that renders posts from local Markdown files. Includes support for syntax highlighting and dark mode.',
      liveUrl: '#',
      tags: ['Next.js', 'MDX', 'Contentlayer', 'TypeScript'],
    },
  ];

  // Creëer projecten in de database
  for (const project of projects) {
    await prisma.project.create({
      data: project,
    });
  }

  // Seed skill categories and skills
  const skillCategories = [
    {
      title: 'Frontend',
      order: 1,
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
      ],
    },
    {
      title: 'Backend',
      order: 2,
      skills: [
        'Node.js',
        'Express',
        'Prisma',
        'PostgreSQL',
        'REST APIs',
        'GraphQL',
      ],
    },
    {
      title: 'Tools & Technologies',
      order: 3,
      skills: [
        'Git',
        'VS Code',
        'Figma',
        'Postman',
        'Docker',
        'Vercel',
        'npm/yarn',
      ],
    },
    {
      title: 'Frameworks & Libraries',
      order: 4,
      skills: [
        'Framer Motion',
        'shadcn/ui',
        'React Hook Form',
        'Zustand',
        'Axios',
      ],
    },
    {
      title: 'Development Practices',
      order: 5,
      skills: [
        'Responsive Design',
        'Accessibility',
        'Performance Optimization',
        'Testing',
        'CI/CD',
      ],
    },
    {
      title: 'Soft Skills',
      order: 6,
      skills: [
        'Problem Solving',
        'Team Collaboration',
        'Agile/Scrum',
        'Communication',
        'Learning',
      ],
    },
  ];

  // Creëer skill categorieën en hun bijbehorende skills
  for (const categoryData of skillCategories) {
    const category = await prisma.skillCategory.create({
      data: {
        title: categoryData.title,
        order: categoryData.order,
      },
    });

    for (const skillName of categoryData.skills) {
      await prisma.skill.create({
        data: {
          name: skillName,
          categoryId: category.id,
        },
      });
    }
  }

  console.log('Database succesvol gevuld met projecten en skills');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
