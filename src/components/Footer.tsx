"use client";

import Link from "next/link";
import { Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-luxury-charcoal pt-24 pb-12 border-t border-luxury-beige rounded-t-[3rem] md:rounded-t-[4rem] relative overflow-hidden shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-luxury-beige">
          {/* Brand Column */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="group flex flex-col justify-start">
              <span className="font-sans text-2xl tracking-[0.25em] font-light text-luxury-charcoal uppercase transition-colors duration-300">
                Bitspace
              </span>
              <span className="text-[10px] tracking-[0.3em] text-luxury-bronze uppercase -mt-0.5 ml-0.5">
                Interiors
              </span>
            </Link>
            <p className="text-[13px] leading-relaxed text-luxury-grey max-w-xs font-light">
              Crafting premium architectural stories that harmonize aesthetic grandeur with functional modern purpose.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://instagram.com/interiorsbitspace"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-luxury-beige flex items-center justify-center hover:border-luxury-bronze hover:text-luxury-bronze transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a
                href="tel:+918121347879"
                className="w-8 h-8 rounded-full border border-luxury-beige flex items-center justify-center hover:border-luxury-bronze hover:text-luxury-bronze transition-colors duration-300"
                aria-label="Phone"
              >
                <Phone size={14} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-wider mb-6 text-luxury-charcoal">
              Explore
            </h4>
            <div className="flex flex-col space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Projects", href: "/projects" },
                { name: "Services", href: "/services" },
                { name: "Process", href: "/process" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[13px] tracking-wider text-luxury-grey hover:text-luxury-charcoal transition-colors duration-300 inline-flex items-center group font-light"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={10} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-wider mb-6 text-luxury-charcoal">
              Services
            </h4>
            <div className="flex flex-col space-y-3 text-[13px] text-luxury-grey font-light">
              <span className="hover:text-luxury-charcoal transition-colors duration-300 cursor-pointer">Residential Interiors</span>
              <span className="hover:text-luxury-charcoal transition-colors duration-300 cursor-pointer">Luxury Villa Design</span>
              <span className="hover:text-luxury-charcoal transition-colors duration-300 cursor-pointer">Modular Kitchens</span>
              <span className="hover:text-luxury-charcoal transition-colors duration-300 cursor-pointer">Commercial Offices</span>
              <span className="hover:text-luxury-charcoal transition-colors duration-300 cursor-pointer">Space Curation</span>
            </div>
          </div>

          {/* Contact Details Column */}
          <div>
            <h4 className="font-sans text-xs font-semibold uppercase tracking-wider mb-6 text-luxury-charcoal">
              Studio Location
            </h4>
            <div className="flex flex-col space-y-4 text-[13px] text-luxury-grey font-light">
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-luxury-bronze shrink-0 mt-0.5" />
                <span>
                  Plot no 112/A, Road No 44,<br />
                  CBI Colony, Jubilee Hills,<br />
                  Hyderabad, Telangana 500033
                </span>
              </div>
              <div className="flex items-center space-x-3 pt-2">
                <Phone size={16} className="text-luxury-bronze shrink-0" />
                <span className="font-medium text-luxury-charcoal">+91 81213 47879</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row items-center justify-between text-[10px] tracking-widest text-luxury-grey uppercase font-light">
          <p>© {currentYear} Bitspace Interiors. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Jubilee Hills, Hyderabad</p>
        </div>
      </div>
    </footer>
  );
}
