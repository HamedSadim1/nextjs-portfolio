import PageTitle from "@/components/PageTitle";
import Image from "next/image";
import HeroImage from "@/images/utkarsh-img.webp";
import Link from "next/link";
import GithubIcon from "@/components/Icons/GithubIcon";
import Email from "@/components/Icons/Email";
import LinkedinIcon from "@/components/Icons/LinkedinIcon";

export default function Home() {
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
            specializing in crafting engaging and responsive web applications. I
            have a passion for creating intuitive and user-friendly interfaces
            that enhance the overall user experience. I strive to stay
            up-to-date with the latest web development trends and technologies
            to continuously improve my skills. Feel free to explore my portfolio
            and get in touch with me for any inquiries or collaboration
            opportunities. Im excited to work on new and challenging projects!
            Thank you for visiting my portfolio!
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
