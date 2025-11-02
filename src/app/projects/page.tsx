import AnimatedProjectGrid from "@/components/AnimatedProjectGrid";
import { type Project } from "@/components/Card";
import PageTitle from "@/components/PageTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A selection of projects by Hamid Sadim",
};

// Mock data for projects - this could come from a CMS or database
const projectsData: Project[] = [
  {
    imageUrl: "https://images.unsplash.com/photo-1570649236495-42fa5fe5c48b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "GitHub User Search App",
    description: "A responsive web application built with Next.js that allows users to search for GitHub profiles and view their repositories and statistics.",
    liveUrl: "#",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GitHub API"],
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d1469c85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "E-commerce Storefront",
    description: "A full-featured e-commerce front-end with product listings, shopping cart functionality, and a checkout process, styled with shadcn/ui.",
    liveUrl: "#",
    tags: ["React", "Vite", "Redux Toolkit", "shadcn/ui"],
  },
  {
    imageUrl: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Personal Portfolio Website",
    description: "My personal portfolio to showcase my skills and projects. Designed to be clean, fast, and fully responsive with a built-in theme switcher.",
    liveUrl: "#",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
   {
    imageUrl: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Markdown Blog Platform",
    description: "A simple and fast blog platform that renders posts from local Markdown files. Includes support for syntax highlighting and dark mode.",
    liveUrl: "#",
    tags: ["Next.js", "MDX", "Contentlayer", "TypeScript"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="container mx-auto">
      <PageTitle title="Projects" />
      <AnimatedProjectGrid projects={projectsData} />
    </div>
  );
}
