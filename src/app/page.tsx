import HeroSection from "@/components/HeroSection";
import { type Project } from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import heroImage from "@/images/utkarsh-img.webp";
import type { Metadata } from "next";
import { fetchUser } from "@/lib/fetchUser";
import AnimatedHero from "@/components/AnimatedHero";
import AnimatedProjectGrid from "@/components/AnimatedProjectGrid";
import Skills, { type SkillCategory } from "@/components/Skills";
import { prisma } from "@/lib/prisma";
import { ErrorBoundary } from "@/components/ErrorBoundary";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "Hamid Sadim - Frontend Developer Portfolio",
  description:
    "Welkom op mijn portfolio. Ontdek mijn projecten in React, Next.js en moderne webontwikkeling.",
  keywords: [
    "frontend developer",
    "React",
    "Next.js",
    "portfolio",
    "webontwikkeling",
    "projects",
  ],
  authors: [{ name: "Hamid Sadim" }],
  openGraph: {
    title: "Hamid Sadim - Portfolio",
    description:
      "Frontend developer gespecialiseerd in moderne webtechnologieën. Bekijk mijn projecten en vaardigheden.",
    type: "website",
    images: [{ url: "/images/utkarsh-img.webp", alt: "Hamid Sadim" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamid Sadim - Portfolio",
    description: "Ontdek mijn werk als frontend developer en mijn projecten.",
    images: ["/images/utkarsh-img.webp"],
  },
};

export default async function Home() {
  try {
    // Parallel data fetching voor betere performance
    const [userData, projectsData, skillsData] = await Promise.all([
      fetchUser(),
      prisma.project
        .findMany({
          orderBy: { createdAt: "desc" },
          take: 6,
          select: {
            id: true,
            title: true,
            description: true,
            imageUrl: true,
            liveUrl: true,
            tags: true,
            createdAt: true,
          },
        })
        .catch((error) => {
          console.error("Failed to fetch projects:", error);
          return []; // Return empty array on error
        }),
      prisma.skillCategory
        .findMany({
          orderBy: { order: "asc" },
          include: {
            skills: {
              orderBy: { name: "asc" },
            },
          },
        })
        .catch((error) => {
          console.error("Failed to fetch skills:", error);
          return []; // Return empty array on error
        }),
    ]);

    // Transform skills data naar het verwachte formaat
    const skills: SkillCategory[] = skillsData.map((category) => ({
      title: category.title,
      skills: category.skills.map((skill) => skill.name),
    }));

    // Transform tags - nu al een array dankzij JSON opslag
    const projects: Project[] = projectsData.map((p) => ({
      id: p.id,
      title: p.title,
      description: p.description,
      imageUrl: p.imageUrl,
      liveUrl: p.liveUrl,
      tags: Array.isArray(p.tags) ? (p.tags as string[]) : [],
    }));

    return (
      <main className="min-h-screen bg-linear-to-br from-background via-background to-muted/20">
        {/* Hero Section */}
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
            <AnimatedHero userData={userData} />
          </ErrorBoundary>
        </section>

        {/* Skills Section */}
        <ErrorBoundary
          fallback={
            <div className="container mx-auto px-4 py-16 text-center">
              <p className="text-destructive" role="alert">
                Kon vaardigheden niet laden.
              </p>
            </div>
          }
        >
          <Skills skills={skills} />
        </ErrorBoundary>

        {/* Projects Section */}
        <section
          id="projects"
          className="container mx-auto px-4 py-16"
          aria-labelledby="projects-heading"
        >
          <header className="text-center mb-12">
            <PageTitle title="My Projects" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
              Hier vind je een selectie van mijn recente projecten. Elk project
              toont mijn vaardigheden in moderne webontwikkeling, van responsive
              design tot interactieve gebruikerservaringen. Klik op een project
              voor meer details.
            </p>
          </header>
          <ErrorBoundary
            fallback={
              <div className="text-center py-12">
                <p className="text-destructive" role="alert">
                  Kon projecten niet laden.
                </p>
              </div>
            }
          >
            <AnimatedProjectGrid projects={projects} />
          </ErrorBoundary>
        </section>
      </main>
    );
  } catch (error) {
    console.error("Failed to load page data:", error);
    return (
      <main className="min-h-screen bg-linear-to-br from-background via-background to-muted/20">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Er is iets misgegaan</h1>
          <p className="text-muted-foreground">
            Probeer de pagina te vernieuwen.
          </p>
        </div>
      </main>
    );
  }
}
