"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Insights", href: "/insights" },
  { name: "Careers", href: "/careers" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Determine if the current page has a dark hero section
  // Home (/), Privacy (/privacy), and Terms (/terms) have light backgrounds.
  // All other pages have a dark hero section, requiring white text initially.
  const isLightHero = pathname === "/" || pathname === "/privacy" || pathname === "/terms";
  const isDarkHero = !isLightHero;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Text color logic:
  // - Scrolled: Always dark (black) because of white background
  // - Not Scrolled & Light Hero: Dark (black)
  // - Not Scrolled & Dark Hero: Light (white)
  const textColorClass = (scrolled || isLightHero) 
    ? "text-[var(--color-summit-black)]" 
    : "text-white";
    
  // Hover color logic:
  // - Scrolled or Light Hero: Surmount Red
  // - Dark Hero (unscrolled): White/80 or similar, or Red if we want pop. Let's stick to Red for hover consistency, or maybe a lighter red on dark?
  // Actually, standard red works fine on white, but on dark/black background, red is also readable.
  
  // Logo filter
  const logoFilter = (scrolled || isLightHero)
    ? ""
    : "brightness-0 invert";

  // Helper to determine active state (including sub-routes)
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link href="/" className="flex items-center relative z-50 h-10 w-40">
          <Image 
            src="/surmount logo.svg" 
            alt="Surmount" 
            fill
            className={`object-contain transition-all duration-300 ${logoFilter}`}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[var(--color-surmount-red)] ${isActive(link.href) ? "text-[var(--color-surmount-red)]" : textColorClass}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            className={`text-sm font-medium px-5 py-2.5 transition-colors ${
                (scrolled || isLightHero) 
                ? "bg-[var(--color-summit-black)] text-white hover:bg-[var(--color-surmount-red)]" 
                : "bg-white text-[var(--color-summit-black)] hover:bg-[var(--color-cloud-white)]"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className={`md:hidden relative z-50 ${textColorClass}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <X size={24} className="text-[var(--color-summit-black)]" /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 bg-[var(--color-cloud-white)] flex flex-col items-center justify-center gap-8 z-40 md:hidden"
            >
              {links.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-display text-[var(--color-summit-black)]"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/contact" 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium bg-[var(--color-surmount-red)] text-white px-8 py-3 mt-4"
              >
                Schedule Diagnostic
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}