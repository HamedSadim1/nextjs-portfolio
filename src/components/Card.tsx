'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Eye } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';

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
        <div className="bg-linear-to-r via-border/40 hover:from-primary/20 hover:via-border hover:to-primary/20 group cursor-pointer rounded-lg from-transparent to-transparent p-0.5 transition-all duration-300">
          {/* De Card component van shadcn/ui vormt de basis. h-full zorgt ervoor dat alle kaarten in een grid dezelfde hoogte hebben. */}
          <Card className="flex h-full transform flex-col overflow-hidden border-none transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <CardHeader className="p-0">
              {/* Container voor de afbeelding met een vaste aspect ratio */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105" // Zoom-effect op de afbeelding bij hover
                />
                {/* Overlay die verschijnt bij hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Eye className="h-10 w-10 text-white" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex grow flex-col gap-2 p-4">
              <CardTitle className="line-clamp-2 text-xl font-semibold">
                {project.title}
              </CardTitle>
              <p className="text-muted-foreground line-clamp-3 grow">
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
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="mb-2 font-semibold">Technologieën gebruikt:</h4>
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
                <ExternalLink className="mr-2 h-4 w-4" />
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
