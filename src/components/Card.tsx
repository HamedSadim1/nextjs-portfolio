import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

// Define the shape of our project data
export interface Project {
  imageUrl: string;
  title: string;
  description: string;
  liveUrl: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group rounded-lg p-0.5 bg-gradient-to-r from-transparent via-border/40 to-transparent hover:from-primary/20 hover:via-border hover:to-primary/20 transition-all duration-300">
      <Card className="flex flex-col overflow-hidden h-full border-none transition-all duration-300 transform hover:-translate-y-2">
        <CardHeader className="p-0">
          <div className="aspect-video overflow-hidden relative">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <ExternalLink className="w-10 h-10 text-white" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-4 flex flex-col gap-2">
          <CardTitle className="text-xl font-semibold line-clamp-2">
            {project.title}
          </CardTitle>
          <p className="text-muted-foreground flex-grow line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button asChild className="w-full">
            <Link href={project.liveUrl} target="_blank">
              Live Demo
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
