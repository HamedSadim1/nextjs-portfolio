"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/app/utils";

interface NavlinkProps {
  href: string;
  title: string;
}

const Navlink = ({ href, title }: NavlinkProps) => {
  const pathName = usePathname();
  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={cn(
        "px-3 py-2 rounded-md text-sm font-medium transition-colors",
        isActive
          ? "bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text"
          : "text-muted-foreground hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:text-transparent hover:bg-clip-text"
      )}
    >
      {title}
    </Link>
  );
};

export default Navlink;
