'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Email from '@/components/Icons/Email';
import GithubIcon from '@/components/Icons/GithubIcon';
import LinkedinIcon from '@/components/Icons/LinkedinIcon';
import Link from 'next/link';

/**
 * Verbeterde Footer component voor de portfolio website.
 * Bevat navigatie links, social media, contact info en professionele styling.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Social media links (dezelfde als in HeroSection)
  const socialLinks = [
    { name: 'github', url: 'https://github.com', icon: GithubIcon },
    { name: 'linkedin', url: 'https://linkedin.com', icon: LinkedinIcon },
    { name: 'email', url: 'mailto:hamid.sadim@outlook.com', icon: Email },
  ];

  // Navigatie links
  const navLinks = [
    { name: 'Home', href: '#hero-heading' },
    { name: 'Vaardigheden', href: '#skills' },
    { name: 'Projecten', href: '#projects' },
    { name: 'Download CV', href: '/cv-hamid-sadim.pdf', download: true },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const targetElement = document.getElementById(href.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-16 overflow-hidden">
      {/* Decorative background gradient */}
      <div className="bg-linear-to-br from-primary/5 via-background to-muted/20 absolute inset-0" />

      {/* Main footer content */}
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand/Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div>
              <h3 className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-xl font-bold text-transparent">
                Hamid Sadim
              </h3>
              <p className="text-muted-foreground mt-1 text-sm">
                Frontend Developer & Web Enthusiast
              </p>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Gespecialiseerd in moderne webontwikkeling met React, Next.js en
              TypeScript. Altijd op zoek naar nieuwe uitdagingen en innovatieve
              oplossingen.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-foreground font-semibold">Navigatie</h4>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) =>
                link.download ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    download="CV_Hamid_Sadim.pdf"
                    className="text-muted-foreground hover:text-primary text-left text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary text-left text-sm transition-colors"
                  >
                    {link.name}
                  </button>
                )
              )}
            </nav>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-foreground font-semibold">Connect</h4>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.div
                    key={social.name}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-primary/10 h-9 w-9"
                      asChild
                    >
                      <Link
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Bezoek mijn ${social.name} profiel`}
                      >
                        <IconComponent className="h-4 w-4" />
                      </Link>
                    </Button>
                  </motion.div>
                );
              })}
            </div>
            <div className="text-muted-foreground text-sm">
              <p>📧 hamid.sadim@outlook.com</p>
              <p>📍 Belgie</p>
            </div>
          </motion.div>
        </div>

        {/* Custom separator */}
        <div className="bg-border/40 my-8 h-px" />

        {/* Bottom section */}
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-center text-sm md:text-left"
          >
            <p>&copy; {currentYear} Hamid Sadim. Alle rechten voorbehouden.</p>
            <p className="mt-1">
              Gemaakt met ❤️ met Next.js, Tailwind CSS en Prisma
            </p>
            <p className="mt-1 text-xs">
              🌐{' '}
              <Link
                href="https://hamedsadim-portfolio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary underline transition-colors"
              >
                hamedsadim-portfolio.vercel.app
              </Link>
            </p>
          </motion.div>

          {/* Back to top button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              ↑ Naar Boven
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Subtle bottom border */}
      <div className="bg-linear-to-r h-1 from-blue-500 via-purple-500 to-pink-500" />
    </footer>
  );
}
