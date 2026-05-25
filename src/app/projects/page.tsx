"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  location: string;
  scope: string;
  description: string;
}

const projectsList: Project[] = [
  {
    id: "01",
    title: "The Jubilee Mansion",
    category: "Luxury Villa",
    image: "/images/hero_bg.png",
    location: "Jubilee Hills, Hyderabad",
    scope: "Zoning & Styling",
    description: "Raw architectural concrete, suspended structural brass, and bespoke walnut furniture.",
  },
  {
    id: "02",
    title: "Walnut & Brass Suite",
    category: "Contemporary Bedroom",
    image: "/images/project_villa.png",
    location: "Gachibowli, Hyderabad",
    scope: "Bespoke Carpentry",
    description: "Warm lighting, glass partition wardrobes, and low-profile velvet bed frames.",
  },
  {
    id: "03",
    title: "Monochrome Minimalist Kitchen",
    category: "Modular Kitchen",
    image: "/images/project_kitchen.png",
    location: "Banjara Hills, Hyderabad",
    scope: "German Kitchen Fitout",
    description: "Handleless high-gloss charcoal cabinets paired with a gold-veined white marble island.",
  },
  {
    id: "04",
    title: "Aura Creative Studio",
    category: "Premium Office",
    image: "/images/project_office.png",
    location: "Hitech City, Hyderabad",
    scope: "Acoustic Partitioning",
    description: "Lobby with custom acoustic wooden slatted dividers and minimalist counters.",
  },
  {
    id: "05",
    title: "Oak & Travertine Penthouse",
    category: "Luxury Villa",
    image: "/images/after_room.png",
    location: "Kokapet, Hyderabad",
    scope: "Open Spatial Design",
    description: "Open space styling with suspended fireplace and custom travertine marble finishes.",
  },
  {
    id: "06",
    title: "Rough Shell Reimagined",
    category: "Luxury Villa",
    image: "/images/before_room.png",
    location: "Jubilee Hills, Hyderabad",
    scope: "Structural Space Plan",
    description: "A raw concrete under-construction villa showcasing architectural skeletal beauty.",
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projectsList
      : projectsList.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-32 pb-24 bg-white text-luxury-charcoal overflow-x-hidden font-sans">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 relative">
        <div className="pl-0 relative text-center">
          <span className="text-[10px] tracking-[0.4em] text-luxury-bronze uppercase font-medium block mb-4">
            Atelier Portfolio · Hyderabad
          </span>
          
          <h1 className="font-sans text-5xl md:text-7xl font-light tracking-tight text-luxury-charcoal leading-[1.05] max-w-4xl mx-auto uppercase mb-10">
            Bespoke enclaves <br />
            <span className="italic font-light text-luxury-bronze">& spaces.</span>
          </h1>
          
          {/* Category Filter Selector List */}
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {["All", "Luxury Villa", "Contemporary Bedroom", "Modular Kitchen", "Premium Office"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2.5 text-[9px] tracking-widest uppercase transition-all duration-300 rounded-md border ${
                  activeFilter === cat
                    ? "bg-luxury-charcoal text-white border-luxury-charcoal shadow-sm"
                    : "bg-transparent text-luxury-grey border-luxury-beige hover:border-luxury-charcoal hover:text-luxury-charcoal"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Full-Screen aligned horizontal lookbook grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="space-y-24">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                key={project.id}
                className="group flex flex-col relative"
              >
                {/* Lookbook Full-Screen Widescreen Card Frame */}
                <div className="relative aspect-[21/9] md:aspect-[21/7] w-full overflow-hidden rounded-2xl shadow-xl border border-luxury-beige bg-white mb-8">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1200px"
                    className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-700" />
                  
                  {/* Fine interior frame line */}
                  <div className="absolute inset-6 border border-white/20 rounded-lg pointer-events-none" />

                  {/* Top-Right Index Stamp */}
                  <div className="absolute top-8 left-8 font-sans font-light italic text-3xl text-white/95 select-none">
                    {project.id}
                  </div>
                </div>

                {/* Minimal Overlay Metadata Details */}
                <div className="flex flex-col md:flex-row md:items-end justify-between px-4 gap-4">
                  <div>
                    <span className="text-[9px] tracking-[0.25em] text-luxury-bronze uppercase font-semibold block mb-1">
                      {project.category} · {project.scope}
                    </span>
                    <h2 className="font-sans text-2xl font-light text-luxury-charcoal tracking-tight group-hover:text-luxury-bronze transition-colors duration-300 uppercase">
                      {project.title}
                    </h2>
                    <p className="text-[11px] text-luxury-grey font-light tracking-wide mt-1 max-w-xl leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center space-x-4">
                    <span className="text-[10px] tracking-widest text-luxury-grey uppercase">
                      {project.location}
                    </span>
                    <Link
                      href="/contact"
                      className="w-12 h-12 border border-luxury-beige bg-white text-luxury-charcoal flex items-center justify-center rounded-full hover:border-luxury-bronze hover:bg-luxury-bronze hover:text-white transition-all duration-500 shadow-sm"
                    >
                      <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-500" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Cinematic Full-Width Booking CTA Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-8 relative">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl shadow-xl border border-luxury-beige group flex items-center justify-center text-center">
          <Image
            src="/images/project_office.png"
            alt="Atelier Office Consulting Workspace"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/35 transition-colors duration-700" />
          <div className="absolute inset-6 border border-white/20 rounded-lg pointer-events-none" />
          
          <div className="relative z-10 px-6 max-w-3xl text-white">
            <span className="text-[9px] tracking-[0.3em] uppercase font-semibold block mb-3 text-luxury-bronze">
              Studio Inquiries
            </span>
            
            <h2 className="text-2xl md:text-5xl font-light mb-6 leading-tight tracking-tight uppercase">
              Create an award-winning residential enclave in Hyderabad
            </h2>
            
            <p className="text-[10px] tracking-wide opacity-95 mb-8 max-w-md mx-auto font-light leading-relaxed">
              Contact us today to book an in-person layout and modular consultation at our Jubilee Hills salon.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 text-[10px] tracking-[0.2em] uppercase bg-white text-luxury-charcoal px-8 py-4 rounded-md hover:bg-luxury-bronze hover:text-white transition-colors duration-300 shadow-md font-semibold"
            >
              <span>Initiate Design Dialogue</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
