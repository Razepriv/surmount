import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Phone, Mail } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Fractional CRO", href: "/services/fractional-cro" },
    { label: "GCC Accelerator", href: "/services/gcc-accelerator" },
    { label: "Revenue Reset", href: "/services/revenue-reset" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  Insights: [
    { label: "Blog", href: "/insights/blog" },
    { label: "Case Studies", href: "/insights/case-studies" },
    { label: "Frameworks", href: "/insights/frameworks" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[var(--color-summit-black)] text-white pt-24 pb-12">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10 pb-16">
          <div className="md:col-span-4 flex flex-col gap-6">
            <Link href="/" className="mb-6 relative h-12 w-48 block">
              <Image 
                src="/surmount logo.svg" 
                alt="Surmount" 
                fill
                className="object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 max-w-sm">
              We build revenue engines and scale execution for mid-market growth companies through operator-led leadership.
            </p>
            <div className="flex flex-col gap-3 mt-2">
              <a href="tel:+15127618208" className="flex items-center gap-2 text-white/60 hover:text-[var(--color-surmount-red)] transition-colors text-sm">
                <Phone className="w-4 h-4 shrink-0" />
                +1 512 761 8208
              </a>
              <a href="mailto:Info@surmountcxo.com" className="flex items-center gap-2 text-white/60 hover:text-[var(--color-surmount-red)] transition-colors text-sm">
                <Mail className="w-4 h-4 shrink-0" />
                Info@surmountcxo.com
              </a>
            </div>
          </div>
          
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="flex flex-col gap-4">
                <h4 className="font-display text-lg">{category}</h4>
                <div className="flex flex-col gap-3">
                  {links.map((link) => (
                    <Link 
                      key={link.href} 
                      href={link.href}
                      className="text-white/60 hover:text-[var(--color-surmount-red)] transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Surmount CxO Partners. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="font-mono text-xs">BENGALURU • NEW YORK • LONDON</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}