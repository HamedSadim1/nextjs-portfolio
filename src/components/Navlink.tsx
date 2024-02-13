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
  return (
    <Link
      className={cn(
        "border-b border-transparent hover:border-green-300 transition-all",
        {
          "border-green-300 ": pathName === href,
        }
      )}
      href={href}
    >
      {title}
    </Link>
  );
};

export default Navlink;
