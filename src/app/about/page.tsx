"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, ShieldCheck, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 pb-24 bg-white text-luxury-charcoal overflow-x-hidden font-sans">
      {/* 1. Page Header (Editorial Cover Page Title) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 relative">
        <div className="pl-0 relative text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <span className="h-[1px] w-6 bg-luxury-bronze" />
            <span className="text-[10px] tracking-[0.4em] text-luxury-bronze uppercase font-medium">
              The Atelier Story · Jubilee Hills
            </span>
            <span className="h-[1px] w-6 bg-luxury-bronze" />
          </div>

          <h1 className="font-light tracking-tighter text-luxury-charcoal text-5xl md:text-7xl lg:text-8xl leading-[1.05] uppercase max-w-4xl mx-auto">
            Quiet grandeur <br />
            <span className="font-extralight text-luxury-bronze italic">deliberate beauty.</span>
          </h1>
          
          <p className="text-xs md:text-sm tracking-wide text-luxury-grey max-w-md mx-auto mt-6 font-light">
            We create modern residential enclaves that balance absolute structural accuracy with Kinfolk minimalism.
          </p>
        </div>
      </section>

      {/* 2. Massive Widescreen Visual Block */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 relative">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl border border-luxury-beige bg-white group">
          <Image
            src="/images/project_villa.png"
            alt="Bitspace Interiors Hyderabad Studio"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
            className="object-cover scale-102 group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-700" />
          
          {/* Subtle inside card detail line */}
          <div className="absolute inset-6 border border-white/20 rounded-[1.5rem] md:rounded-[2.5rem] pointer-events-none" />
          
          <div className="absolute bottom-10 left-10 text-white z-10">
            <span className="text-[9px] tracking-[0.3em] uppercase opacity-75 block mb-1">
              Atmosphere
            </span>
            <h2 className="text-xl md:text-2xl font-light uppercase tracking-widest">
              Living Sanctuaries
            </h2>
          </div>
        </div>
      </section>

      {/* 3. Widescreen Visual Panel 2 - Genesis (Replacing text and small image columns) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 relative">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl border border-luxury-beige bg-white group">
          <Image
            src="/images/project_kitchen.png"
            alt="Genesis luxury kitchen design Hyderabad"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
          />
          <div className="absolute inset-0 bg-black/15 group-hover:bg-black/10 transition-colors duration-700" />
          <div className="absolute inset-6 border border-white/20 rounded-[1.5rem] md:rounded-[2.5rem] pointer-events-none" />
          
          <div className="absolute bottom-10 left-10 right-10 text-white z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="text-[9px] tracking-[0.3em] uppercase opacity-75 block mb-1">
                Genesis
              </span>
              <h2 className="text-xl md:text-3xl font-light uppercase tracking-tight max-w-lg">
                Sovereign spaces born in Jubilee Hills.
              </h2>
            </div>
            <p className="text-[10px] tracking-wide max-w-xs opacity-90 font-light leading-relaxed">
              Formed to shape Hyderabad’s finest addresses, we combine raw material honesty with fine millwork supervision.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Elegant Mid-Quote Break */}
      <section className="max-w-5xl mx-auto px-6 mb-20 text-center">
        <h3 className="text-lg md:text-2xl text-luxury-bronze font-extralight italic max-w-3xl mx-auto leading-relaxed">
          &ldquo;We design with absolute structural discipline, spatial calmness, and custom materiality.&rdquo;
        </h3>
      </section>

      {/* 5. Core Studio Principles (Clean white cards with thin borders on pure white) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Compass className="text-luxury-bronze" size={20} />,
              title: "Architectural Authenticity",
              desc: "Mapping spatial flow and ambient lighting lines before styling."
            },
            {
              icon: <Heart className="text-luxury-bronze" size={20} />,
              title: "Bespoke Materiality",
              desc: "Curating premium walnut wood, brushed brass, and raw marble slabs."
            },
            {
              icon: <ShieldCheck className="text-luxury-bronze" size={20} />,
              title: "Zero-Lag Execution",
              desc: "Delivered with uncompromising supervise parameters on schedule."
            }
          ].map((value, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              key={value.title}
              className="bg-white p-8 rounded-[2rem] border border-luxury-beige flex flex-col justify-between min-h-[200px] group hover:border-luxury-bronze hover:shadow-md transition-all duration-500"
            >
              <div>
                <div className="w-10 h-10 border border-luxury-beige bg-white flex items-center justify-center rounded-2xl mb-6 shadow-sm group-hover:border-luxury-bronze/50 transition-colors duration-500">
                  {value.icon}
                </div>
                <h3 className="text-[11px] font-semibold tracking-widest text-luxury-charcoal mb-2 uppercase">
                  {value.title}
                </h3>
                <p className="text-[11px] leading-relaxed text-luxury-grey font-light">
                  {value.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 6. Enormous Cinematic Full-Width CTA Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-8 relative">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl border border-luxury-beige group flex items-center justify-center text-center">
          <Image
            src="/images/hero_bg.png"
            alt="Atelier Consultation Sanctuary"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/35 transition-colors duration-700" />
          <div className="absolute inset-6 border border-white/20 rounded-[1.5rem] md:rounded-[2.5rem] pointer-events-none" />
          
          <div className="relative z-10 px-6 max-w-3xl text-white">
            <span className="text-[9px] tracking-[0.4em] uppercase font-semibold block mb-3 text-luxury-bronze">
              Atelier Session
            </span>
            
            <h2 className="text-2xl md:text-5xl font-light mb-6 leading-tight tracking-tight uppercase">
              Ready to design your <span className="font-extralight italic text-luxury-bronze">personal sanctuary?</span>
            </h2>
            
            <p className="text-[10px] tracking-wide opacity-95 mb-8 max-w-md mx-auto font-light leading-relaxed">
              Connect with our Jubilee Hills design studio to schedule a material swatch and planning session with our senior architects.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 text-[10px] tracking-[0.2em] uppercase bg-white text-luxury-charcoal px-8 py-4 rounded-full hover:bg-luxury-bronze hover:text-white transition-colors duration-300 shadow-md font-semibold"
            >
              <span>Request Atelier Session</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
