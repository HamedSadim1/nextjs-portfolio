"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import { type StaticImageData } from "next/image";

interface AnimatedHeroProps {
  userData: {
    name: string;
    avatarUrl: string | StaticImageData;
    bio: string;
    description: string[];
    socials: { name: "github" | "linkedin" | "email"; url: string }[];
  };
}

export default function AnimatedHero({ userData }: AnimatedHeroProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <HeroSection user={userData} />
      </motion.div>
    </>
  );
}
