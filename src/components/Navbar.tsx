import Link from "next/link";
import ThemeChanger from "./ThemeChanger";

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  return (
    <nav className="max-w-5xl mx-auto bg-blue-200">
      <div className="flex justify-between">
        {/* left */}
        {/* homeicon */}
        <Link href="/" className="flex gap-1 text-2xl">
          <span>Hamid</span>
          <span className="text-[#14b8a6]">Sadim</span>
        </Link>
        {/* Links */}
        <div>
          <Link href="/about">Home</Link>
          <button>Toggle Dark Mode </button>
          <ThemeChanger />
        </div>
      </div>
    </nav>
  );
}
