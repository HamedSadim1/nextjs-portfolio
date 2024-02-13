import Link from "next/link";
import ThemeChanger from "./ThemeChanger";
import Navlink from "./Navlink";

export default function Navbar() {
  return (
    <nav className="max-w-5xl mx-auto px-2 py-2">
      <div className="flex justify-between">
        {/* left */}
        {/* homeicon */}
        <Link href="/" className="flex gap-1 text-2xl">
          <span>Hamid</span>
          <span className="text-[#14b8a6]">Sadim</span>
        </Link>
        <div className="flex items-center gap-5 ">
          <section className="flex gap-3">
            <Navlink href="/" title="Home" />

            <Navlink href="/projects" title="Project" />
          </section>
          <ThemeChanger />
        </div>
        {/* Links */}
      </div>
    </nav>
  );
}
