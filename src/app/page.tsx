import HeroSection from "@/components/HeroSection";
import PageTitle from "@/components/PageTitle";

// This data would ideally come from a CMS or a database via Prisma
const userData = {
  name: "Hamid Sadim",
  avatarUrl: "/../images/utkarsh-img.webp", // Next.js requires a relative path from the public directory or an import
  bio: "Hey, my name is Hamid Sadim and I am a Frontend Developer.",
  description: [
    "Welcome to my portfolio! I'm a versatile frontend developer specializing in crafting engaging and responsive web applications. I have a passion for creating intuitive and user-friendly interfaces that enhance the overall user experience.",
    "With a strong command of React.js, Tailwind CSS, and TypeScript, along with a solid foundation in sorting algorithms, I'm dedicated to building visually stunning and high-performance user interfaces.",
  ],
  socials: [
    { name: "github", url: "https://github.com/your-profile" },
    { name: "linkedin", url: "https://linkedin.com/in/your-profile" },
    { name: "email", url: "mailto:your-email@example.com" },
  ],
} as const;


export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <PageTitle title="Home" />
      <HeroSection user={userData} />
    </main>
  );
}
