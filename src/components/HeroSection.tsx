
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Assuming shadcn/ui setup
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Assuming shadcn/ui setup
import GithubIcon from "@/components/Icons/GithubIcon";
import LinkedinIcon from "@/components/Icons/LinkedinIcon";
import Email from "@/components/Icons/Email";
import { ComponentProps } from "react";

// Helper to map icon names to components
const iconMap = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: Email,
};

// Define the props structure for type safety
interface HeroSectionProps {
  user: {
    name: string;
    avatarUrl: string;
    bio: string;
    description: readonly string[];
    socials: readonly {
      readonly name: keyof typeof iconMap;
      readonly url: string;
    }[];
  };
}

// Define a type for the props of the icon components
type IconProps = ComponentProps<"svg">;

export default function HeroSection({ user }: HeroSectionProps) {
  return (
    <section className="w-full max-w-5xl flex flex-col lg:flex-row items-center justify-center gap-12 py-12 lg:py-28">
      {/* Left Section: Avatar, Name, Bio, Socials */}
      <div className="flex flex-col gap-4 items-center text-center lg:w-1/3">
        <Avatar className="w-48 h-48 border-4 border-primary/10">
          <AvatarImage src={user.avatarUrl} alt={user.name} />
          <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">{user.name}</h2>
        <p className="text-muted-foreground">{user.bio}</p>
        <div className="flex gap-2 items-center">
          {user.socials.map((social) => {
            const IconComponent = iconMap[social.name];
            return (
              <Button key={social.name} variant="ghost" size="icon" asChild>
                <Link href={social.url} target="_blank" aria-label={`Visit my ${social.name} profile`}>
                  <IconComponent className="h-6 w-6 text-muted-foreground hover:text-primary" />
                </Link>
              </Button>
            );
          })}
        </div>
      </div>

      {/* Right Section: Description and CTAs */}
      <div className="flex flex-col gap-6 text-lg lg:w-2/3">
        <div className="prose dark:prose-invert max-w-none">
          {user.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity">
            <Link href="/projects">View My Work</Link>
          </Button>
          <div className="p-0.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
            <Button asChild variant="outline" size="lg" className="bg-background hover:bg-accent w-full">
              <Link href="mailto:your-email@example.com">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
