import Link from "next/link";
import ThemeChanger from "./ThemeChanger";

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  return (
    <nav className="max-w-5xl mx-auto px-2 py-2">
      <div className="flex justify-between">
        {/* left */}
        {/* homeicon */}
        <Link href="/" className="flex gap-1 text-2xl">
          <span>Hamid</span>
          <span className="text-[#14b8a6]">Sadim</span>
        </Link>
        <div className="flex items-center gap-3 ">
          <section className="flex gap-3">
            <Link
              className="border-b border-transparent hover:border-green-300 transition-all"
              href="/"
            >
              Home
            </Link>
            <Link
              className="border-b border-transparent hover:border-green-300 transition-all"
              href="/projects"
            >
              Project
            </Link>
          </section>
          <ThemeChanger />
        </div>
        {/* Links */}
      </div>
    </nav>
  );
}
