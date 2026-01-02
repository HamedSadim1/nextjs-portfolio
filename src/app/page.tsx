import { type Project } from '@/components/Card';
import PageTitle from '@/components/PageTitle';
import type { Metadata } from 'next';
import { fetchUser } from '@/lib/fetchUser';
import AnimatedHero from '@/components/AnimatedHero';
import AnimatedProjectGrid from '@/components/AnimatedProjectGrid';
import Skills, { type SkillCategory } from '@/components/Skills';
import { prisma } from '@/lib/prisma';
import { ErrorBoundary } from '@/components/ErrorBoundary';

// SEO metadata voor de hoofdpagina
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  ),
  title: 'Hamid Sadim - Frontend Developer Portfolio',
  description:
    'Welkom op mijn portfolio. Ontdek mijn projecten in React, Next.js en moderne webontwikkeling.',
  keywords: [
    'frontend developer',
    'React',
    'Next.js',
    'portfolio',
    'webontwikkeling',
    'projects',
  ],
  authors: [{ name: 'Hamid Sadim' }],
  openGraph: {
    title: 'Hamid Sadim - Portfolio',
    description:
      'Frontend developer gespecialiseerd in moderne webtechnologieën. Bekijk mijn projecten en vaardigheden.',
    type: 'website',
    images: [{ url: '/images/avatar.webp', alt: 'Hamid Sadim' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hamid Sadim - Portfolio',
    description: 'Ontdek mijn werk als frontend developer en mijn projecten.',
    images: ['/images/avatar.webp'],
  },
};

export default async function Home() {
  try {
    // Parallel data fetching voor betere performance - alle database queries tegelijk uitvoeren
    const [userData, projectsData, skillsData] = await Promise.allSettled([
      fetchUser(),
      // Haal projecten op uit database - alleen benodigde velden selecteren voor performance
      prisma.project.findMany({
        orderBy: { createdAt: 'desc' },
        take: 6, // Maximaal 6 projecten tonen
        select: {
          id: true,
          title: true,
          description: true,
          imageUrl: true,
          liveUrl: true,
          tags: true,
          createdAt: true,
        },
      }),
      // Haal vaardigheden op gegroepeerd per categorie
      prisma.skillCategory.findMany({
        orderBy: { order: 'asc' },
        include: {
          skills: {
            orderBy: { name: 'asc' },
          },
        },
      }),
    ]);

    // Extract data from Promise.allSettled results with proper error handling
    const user = userData.status === 'fulfilled' ? userData.value : null;
    const projectsDataArray =
      projectsData.status === 'fulfilled' ? projectsData.value : [];
    const skillsDataArray =
      skillsData.status === 'fulfilled' ? skillsData.value : [];

    // Handle errors silently in production - errors are handled by fallback UI

    // Transform database data naar component format
    const skills: SkillCategory[] = skillsDataArray.map((category: any) => ({ // eslint-disable-line @typescript-eslint/no-explicit-any
      title: category.title,
      skills: category.skills.map((skill: any) => skill.name), // eslint-disable-line @typescript-eslint/no-explicit-any
    }));

    // Transform projecten - tags zijn al arrays dankzij JSON opslag in database
    const projects: Project[] = projectsDataArray.map((p: any) => ({ // eslint-disable-line @typescript-eslint/no-explicit-any
      id: p.id,
      title: p.title,
      description: p.description,
      imageUrl: p.imageUrl,
      liveUrl: p.liveUrl,
      tags: Array.isArray(p.tags) ? (p.tags as string[]) : [],
    }));

    return (
      <main className="min-h-screen">
        {/* Hero Sectie - Introductie en persoonlijke info */}
        <section
          className="flex flex-col items-center px-4 py-12 md:py-20"
          aria-labelledby="hero-heading"
        >
          <ErrorBoundary
            fallback={
              <div className="w-full max-w-5xl py-12 text-center">
                <p className="text-destructive" role="alert">
                  Kon gebruikersgegevens niet laden.
                </p>
              </div>
            }
          >
            {user ? (
              <AnimatedHero userData={user} />
            ) : (
              <div className="w-full max-w-5xl py-12 text-center">
                <p className="text-muted-foreground">
                  Gebruikersgegevens tijdelijk niet beschikbaar.
                </p>
              </div>
            )}
          </ErrorBoundary>
        </section>

        {/* Vaardigheden Sectie - Technische skills overzicht */}
        <ErrorBoundary
          fallback={
            <div className="container mx-auto px-4 py-16 text-center">
              <p className="text-destructive" role="alert">
                Kon vaardigheden niet laden.
              </p>
            </div>
          }
        >
          {skills.length > 0 ? (
            <Skills skills={skills} />
          ) : (
            <section className="container mx-auto px-4 py-16 text-center">
              <p className="text-muted-foreground">
                Vaardigheden tijdelijk niet beschikbaar.
              </p>
            </section>
          )}
        </ErrorBoundary>

        {/* Projecten Sectie - Portfolio projecten */}
        <section
          id="projects"
          className="container mx-auto px-4 py-16"
          aria-labelledby="projects-heading"
        >
          <header className="mb-12 text-center">
            <PageTitle title="My Projects" />
            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              Hier vind je een selectie van mijn recente projecten. Elk project
              toont mijn vaardigheden in moderne webontwikkeling, van responsive
              design tot interactieve gebruikerservaringen. Klik op een project
              voor meer details.
            </p>
          </header>
          <ErrorBoundary
            fallback={
              <div className="py-12 text-center">
                <p className="text-destructive" role="alert">
                  Kon projecten niet laden.
                </p>
              </div>
            }
          >
            {projects.length > 0 ? (
              <AnimatedProjectGrid projects={projects} />
            ) : (
              <div className="py-12 text-center">
                <p className="text-muted-foreground">
                  Projecten tijdelijk niet beschikbaar.
                </p>
              </div>
            )}
          </ErrorBoundary>
        </section>
      </main>
    );
  } catch {
    // Foutafhandeling voor de hele pagina - error logging removed for production
    return (
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="mb-4 text-2xl font-bold">Er is iets misgegaan</h1>
          <p className="text-muted-foreground">
            Probeer de pagina te vernieuwen of neem contact op als het probleem
            aanhoudt.
          </p>
        </div>
      </main>
    );
  }
}
