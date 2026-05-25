"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Process", href: "/process" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Floating Capsule Navbar wrapper */}
      <div className="fixed top-6 left-0 right-0 w-full flex justify-center px-4 md:px-0 z-50">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-2xl bg-black/85 backdrop-blur-md rounded-2xl px-5 py-3 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.35)] flex items-center justify-between transition-all duration-300"
        >
          {/* Circular Stamp Logo */}
          <Link href="/" className="flex items-center space-x-2 shrink-0 group">
            <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-black text-sm select-none font-sans shadow-sm group-hover:scale-105 transition-transform duration-300">
              b
            </div>
            <span className="text-[10px] tracking-[0.25em] text-white uppercase hidden sm:inline-block font-light">
              Bitspace
            </span>
          </Link>

          {/* Desktop Nav Links (Centered) */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "Projects", href: "/projects" },
              { name: "Process", href: "/process" },
              { name: "About", href: "/about" },
            ].map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative py-1 text-[11px] tracking-[0.18em] font-medium uppercase text-white/80 hover:text-white transition-colors duration-300 group"
                >
                  {link.name}
                  {/* Underline indicators */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1px] bg-luxury-bronze origin-left transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center space-x-2">
            {/* Desktop Capsule Button */}
            <Link
              href="/contact"
              className="hidden md:inline-flex bg-white hover:bg-luxury-bronze text-black hover:text-white transition-all duration-300 rounded-md pl-4 pr-1.5 py-1.5 items-center space-x-2 text-[10px] tracking-[0.15em] uppercase font-semibold group shrink-0 shadow-sm border border-transparent"
            >
              <span>Contact</span>
              <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300 shrink-0">
                <ArrowRight size={10} className="transform group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>

            {/* Mobile Menu button (Hamburger) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white relative z-50 focus:outline-none hover:text-luxury-bronze transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay (Premium Dark Editorial matching the capsule) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 w-full h-screen bg-[#070707] z-45 flex flex-col justify-center px-8 md:px-24"
          >
            {/* Background elegant watermark */}
            <div className="absolute bottom-10 right-10 opacity-[0.02] text-white font-sans font-light text-[12vw] uppercase select-none pointer-events-none tracking-widest">
              Bitspace
            </div>

            <div className="flex flex-col space-y-5">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05, duration: 0.5 }}
                    key={link.name}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-sans text-3xl font-light uppercase tracking-widest relative inline-block transition-colors duration-300 ${
                        isActive ? "text-luxury-bronze" : "text-white/80 hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="pt-6 border-t border-white/10 mt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center space-x-2 text-[12px] tracking-[0.2em] uppercase bg-white text-black px-8 py-4 rounded-md hover:bg-luxury-bronze hover:text-white transition-all duration-300 w-full font-semibold"
                >
                  <span>Book Consultation</span>
                  <ArrowRight size={14} />
                </Link>
                <div className="mt-8 text-center text-xs tracking-widest text-white/40">
                  Jubilee Hills, Hyderabad · +91 81213 47879
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
