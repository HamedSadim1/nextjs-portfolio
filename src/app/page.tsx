import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import HeroImage from "@/images/utkarsh-img.webp";
import dynamic from "next/dynamic";
import Link from "next/link";

export default function Home() {
  const GithubIcon = dynamic(() => import("@/components/Icons/GithubIcon"), {
    ssr: false,
  });
  const Email = dynamic(() => import("@/components/Icons/Email"), {
    ssr: false,
  });
  const LinkedinIcon = dynamic(
    () => import("@/components/Icons/LinkedinIcon"),
    {
      ssr: false,
    }
  );
  return (
    <main>
      <PageTitle title="Home" />
      <div className="w-full  flex py-28">
        {/* left Hero Section  */}
        <div className="flex w-1/2 flex-col gap-3 items-center">
          <Image
            src={HeroImage}
            alt="user avtar"
            className="w-[192px] h-[192px] rounded-full"
          />
          <h1 className="text-2xl font-semibold">Hamid Sadim</h1>
          <p>Hey my name is Hamed Sadim and Iam a Frontend Developer</p>
          <div className="flex gap-2 items-center text-3xl text-green-500/80">
            <Link href="/" target="_blank" className="hover:opacity-60">
              <GithubIcon />
            </Link>
            <Link href="/" target="_blank" className="hover:opacity-60">
              <Email />
            </Link>
            <Link href="/" target="_blank" className="hover:opacity-60">
              <LinkedinIcon />
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-4 text-lg">
          {/* right dex */}
          <p>
            Welcome to my portfolio! Im a versatile frontend developer
            specializing in crafting engaging and responsive web applications.
          </p>
          <p>
            With a strong command of React.js, Tailwind CSS, and TypeScript,
            along with a solid foundation in sorting algorithms, Im dedicated to
            building visually stunning and high-performance user interfaces.
          </p>
        </div>
      </div>
    </main>
  );
}
