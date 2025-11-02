"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

// Definieer de datastructuur voor een project. Dit zorgt voor typeveiligheid.
export interface Project {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  liveUrl: string;
  tags: string[];
}

// Definieer de props voor de ProjectCard component
interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {/* De buitenste div creëert de gradient rand en beheert het hover-effect voor de groep */}
        <div className="group rounded-lg p-0.5 bg-linear-to-r from-transparent via-border/40 to-transparent hover:from-primary/20 hover:via-border hover:to-primary/20 transition-all duration-300 cursor-pointer">
          {/* De Card component van shadcn/ui vormt de basis. h-full zorgt ervoor dat alle kaarten in een grid dezelfde hoogte hebben. */}
          <Card className="flex flex-col overflow-hidden h-full border-none transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg">
            <CardHeader className="p-0">
              {/* Container voor de afbeelding met een vaste aspect ratio */}
              <div className="aspect-video overflow-hidden relative">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500" // Zoom-effect op de afbeelding bij hover
                />
                {/* Overlay die verschijnt bij hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Eye className="w-10 h-10 text-white" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="grow p-4 flex flex-col gap-2">
              <CardTitle className="text-xl font-semibold line-clamp-2">
                {project.title}
              </CardTitle>
              <p className="text-muted-foreground grow line-clamp-3">
                {project.description}
              </p>
              {/* Toon de project-tags als badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              {/* Knop die linkt naar de live demo van het project */}
              <Button asChild className="w-full">
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription className="text-base">
            {project.description}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="aspect-video overflow-hidden relative rounded-lg">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold mb-2">Technologieën gebruikt:</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex gap-2">
            <Button asChild>
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectCard;
