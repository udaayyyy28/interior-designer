"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  MessageSquare,
  Star,
  Layers,
  Compass,
  Palette,
  Hammer,
  Home as HomeIcon,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ProcessTimeline from "@/components/ProcessTimeline";

// Custom type for Projects
interface Project {
  title: string;
  category: string;
  image: string;
  location: string;
}

const stats = [
  { value: "120+", label: "Completed Enclaves" },
  { value: "75+", label: "Patrons Served" },
  { value: "2000+", label: "Design Drafts" },
  { value: "5.0 ★", label: "Google Rating" },
];

const projectsData: Project[] = [
  {
    title: "The Jubilee Mansion",
    category: "Luxury Villa",
    image: "/images/hero_bg.png",
    location: "Jubilee Hills, Hyderabad",
  },
  {
    title: "Walnut & Brass Suite",
    category: "Contemporary Bedroom",
    image: "/images/project_villa.png",
    location: "Gachibowli, Hyderabad",
  },
  {
    title: "Monochrome Minimalist Kitchen",
    category: "Modular Kitchen",
    image: "/images/project_kitchen.png",
    location: "Banjara Hills, Hyderabad",
  },
  {
    title: "Aura Creative Studio",
    category: "Premium Office",
    image: "/images/project_office.png",
    location: "Hitech City, Hyderabad",
  },
];

const services = [
  {
    icon: <HomeIcon className="text-luxury-bronze" size={20} />,
    title: "Residential Interiors",
    description: "Designing bespoke living spaces, grand hallways, and cozy corners that reflect your unique life path.",
  },
  {
    icon: <Sparkles className="text-luxury-bronze" size={20} />,
    title: "Luxury Villa Design",
    description: "End-to-end architectural interior layout plans for grand estate homes, penthouses, and signature villas.",
  },
  {
    icon: <Layers className="text-luxury-bronze" size={20} />,
    title: "Modular Kitchens",
    description: "Precision-engineered kitchens balancing German hardware, luxury finishes, and ergonomic space layout.",
  },
  {
    icon: <Compass className="text-luxury-bronze" size={20} />,
    title: "Space Planning",
    description: "Detailed blueprints mapping furniture layout, spatial flow, lightning designs, and false ceiling paths.",
  },
  {
    icon: <Palette className="text-luxury-bronze" size={20} />,
    title: "Furniture Customization",
    description: "Tailoring bespoke sofas, dining consoles, wardrobes, and credenzas utilizing fine hardwoods and fabrics.",
  },
  {
    icon: <Hammer className="text-luxury-bronze" size={20} />,
    title: "Complete Renovation",
    description: "Transforming dated homes and offices into state-of-the-art modern spaces with high-end structural refinements.",
  },
];

const testimonials = [
  {
    quote: "A huge variety of design options were made available for selection. Their modular kitchen layout transformed our daily culinary experience completely.",
    author: "Aditya Reddy",
    role: "Villa Owner, Jubilee Hills",
  },
  {
    quote: "Wonderful execution, clean site management, and timely delivery. The walnut and brass bedroom finishes feel like a premium boutique resort.",
    author: "Pranavi Rao",
    role: "Apartment Owner, Hitech City",
  },
  {
    quote: "Fast and quality service. They listened to our design constraints and styled a double-height lounge that gets compliments from every visitor.",
    author: "Vikram Malhotra",
    role: "Tech Executive, Banjara Hills",
  },
];

const instagramImages = [
  "/images/hero_bg.png",
  "/images/project_villa.png",
  "/images/project_kitchen.png",
  "/images/project_office.png",
  "/images/after_room.png",
  "/images/before_room.png",
];

const heroBackgrounds = [
  { src: "/images/hero_bg.png", alt: "Bitspace Interiors Luxury Living Room Hyderabad" },
  { src: "/images/project_villa.png", alt: "Bitspace Interiors Bespoke Suite" },
  { src: "/images/project_kitchen.png", alt: "Bitspace Interiors Minimalist Modular Kitchen" },
  { src: "/images/project_office.png", alt: "Bitspace Interiors Creative Studio Atelier" },
  { src: "/images/after_room_widescreen.png", alt: "Bitspace Interiors Timeless Living Space" },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <div className="w-full bg-luxury-white text-luxury-charcoal overflow-x-hidden font-sans">
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-luxury-white">
        {/* Full-bleed background slideshow with Ken Burns cross-fade */}
        <div className="absolute inset-0 z-0 select-none overflow-hidden bg-luxury-white">
          {heroBackgrounds.map((bg, idx) => {
            const isActive = idx === currentBgIndex;
            return (
              <motion.div
                key={bg.src}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1.01 : 1.05,
                }}
                transition={{
                  opacity: { duration: 1.8, ease: "easeInOut" },
                  scale: { duration: 6.5, ease: "linear" },
                }}
                className="absolute inset-0"
                style={{ zIndex: isActive ? 1 : 0 }}
              >
                <Image
                  src={bg.src}
                  alt={bg.alt}
                  fill
                  priority={idx === 0}
                  className="object-cover"
                />
              </motion.div>
            );
          })}
          {/* Vignette & contrast overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/55 z-10" />
        </div>

        {/* Floating lower-left caption block */}
        <div className="absolute left-6 md:left-12 bottom-32 md:bottom-36 z-20 max-w-sm flex flex-col space-y-5 items-start text-left">
          <p className="text-white text-xs sm:text-sm md:text-base font-light tracking-wide leading-relaxed max-w-[280px] sm:max-w-[340px]">
            Thoughtfully created interiors that elevate everyday living through timeless design and refined detail.
          </p>
          <Link
            href="/contact"
            className="bg-white hover:bg-luxury-bronze text-black hover:text-white transition-all duration-300 rounded-md px-6 py-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] shadow-lg border border-transparent animate-fade-in"
          >
            Start a Project
          </Link>
        </div>

        {/* Giant edge-to-edge wordmark overlay */}
        <div className="absolute bottom-0 left-0 w-full z-10 select-none overflow-hidden pb-2 flex justify-center items-end leading-none pointer-events-none">
          <h1 className="text-[12vw] font-black uppercase text-white tracking-tighter leading-[0.75] font-sans m-0 text-center w-full select-none">
            bitspace
          </h1>
        </div>
      </section>      {/* 2. Luxury Stats Section (Kinfolk Editorial Layout) */}
      <section className="bg-white py-16 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                <span className="text-4xl md:text-5xl font-light text-luxury-charcoal tracking-tighter mb-1">
                  {stat.value}
                </span>
                <span className="text-[9px] tracking-[0.2em] text-luxury-grey uppercase font-light">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. About Brand Story (Cinematic Widescreen Visual) */}
      <section id="about" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center space-x-3 mb-6">
            <span className="h-[1px] w-6 bg-luxury-bronze" />
            <span className="text-[10px] tracking-[0.3em] text-luxury-bronze uppercase font-medium">
              Our Philosophy
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-light tracking-tighter text-luxury-charcoal uppercase mb-10">
            Bespoke sanctuaries curated for deliberate living.
          </h2>

          {/* Massive widescreen full-screen-aligned image */}
          <div className="relative aspect-[21/9] md:aspect-[21/7] w-full overflow-hidden rounded-2xl shadow-2xl border border-luxury-beige mb-8">
            <Image
              src="/images/project_villa.png"
              alt="Bitspace Interiors Luxury Villa Hyderabad"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-6 border border-white/20 rounded-lg pointer-events-none" />
          </div>

          <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-6 gap-6">
            <p className="text-xs text-luxury-grey max-w-lg font-light leading-relaxed">
              From our Jubilee Hills salon, we shape Hyderabad’s finest addresses with a signature calm and modern editorial touch, rejecting standard assembly-line design for handcrafted detail.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center space-x-3 text-[10px] tracking-[0.2em] uppercase text-luxury-charcoal border-b border-luxury-charcoal pb-1 hover:text-luxury-bronze hover:border-luxury-bronze transition-colors duration-300 font-semibold shrink-0"
            >
              <span>Explore Narrative</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Featured Projects Section (Massive Cinematic Lookbook) */}
      <section id="projects" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="h-[1px] w-6 bg-luxury-bronze" />
                <span className="text-[10px] tracking-[0.3em] text-luxury-bronze uppercase font-medium">
                  Portfolio Lookbook
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tighter text-luxury-charcoal uppercase">
                Bespoke Enclaves
              </h2>
            </div>
            
            {/* Category selector */}
            <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
              {["All", "Luxury Villa", "Contemporary Bedroom", "Modular Kitchen", "Premium Office"].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-[9px] tracking-[0.2em] uppercase transition-all duration-300 rounded-md border ${
                    activeCategory === category
                      ? "bg-luxury-charcoal text-white border-luxury-charcoal"
                      : "bg-transparent text-luxury-grey border-transparent hover:text-luxury-charcoal"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Massive lookbook horizontal cards */}
          <div className="space-y-16">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.title}
                className="group cursor-pointer flex flex-col relative"
              >
                {/* Massive Widescreen rounded card image */}
                <div className="relative aspect-[21/9] md:aspect-[16/7] lg:aspect-[21/7] w-full overflow-hidden rounded-2xl shadow-xl border border-luxury-beige bg-white mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="100vw"
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-[1200ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-black/5" />
                  <div className="absolute inset-6 border border-white/20 rounded-lg pointer-events-none" />
                  
                  {/* Floating index */}
                  <div className="absolute top-8 left-8 font-sans font-light italic text-2xl text-white select-none">
                    0{idx + 1}
                  </div>
                </div>

                {/* Details */}
                <div className="flex justify-between items-end px-2">
                  <div>
                    <span className="text-[9px] tracking-[0.25em] text-luxury-bronze uppercase font-semibold block mb-1">
                      {project.category} · {project.location}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-light tracking-tight text-luxury-charcoal group-hover:text-luxury-bronze transition-colors duration-300 uppercase">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 border border-luxury-beige flex items-center justify-center rounded-full group-hover:bg-luxury-bronze group-hover:text-white group-hover:border-luxury-bronze transition-all duration-300">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-20">
            <Link
              href="/projects"
              className="inline-flex items-center space-x-3 text-[10px] tracking-[0.25em] uppercase border border-luxury-charcoal px-8 py-4 text-luxury-charcoal hover:bg-luxury-charcoal hover:text-white transition-all duration-500 rounded-md font-semibold"
            >
              <span>Explore Entire Lookbook</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Services Section (Minimalist Visual Showcase) */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex justify-center items-center space-x-3 mb-4">
              <span className="h-[1px] w-6 bg-luxury-bronze" />
              <span className="text-[10px] tracking-[0.3em] text-luxury-bronze uppercase font-medium">
                Our Expertise
              </span>
              <span className="h-[1px] w-6 bg-luxury-bronze" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-light tracking-tighter text-luxury-charcoal uppercase">
              Bespoke Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Residential Interiors", image: "/images/hero_bg.png" },
              { title: "Luxury Villa Design", image: "/images/project_villa.png" },
              { title: "Modular Kitchens", image: "/images/project_kitchen.png" },
            ].map((service, idx) => (
              <div key={service.title} className="group relative cursor-pointer">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-luxury-beige shadow-md mb-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                  <div className="absolute inset-6 border border-white/20 rounded-lg pointer-events-none" />
                  
                  {/* Inside title */}
                  <div className="absolute bottom-6 left-6 text-white text-left">
                    <span className="text-[9px] tracking-widest text-white/70 block uppercase mb-1">Expertise 0{idx + 1}</span>
                    <h3 className="text-lg font-light uppercase tracking-wide">{service.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center space-x-2 text-[10px] tracking-[0.2em] uppercase text-luxury-charcoal border-b border-luxury-charcoal pb-1 hover:text-luxury-bronze hover:border-luxury-bronze transition-colors duration-300 font-semibold"
            >
              <span>View All Capabilities</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Before / After Transformation Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <span className="h-[1px] w-6 bg-luxury-bronze" />
            <span className="text-[10px] tracking-[0.3em] text-luxury-bronze uppercase font-medium">
              Spatial Alchemy
            </span>
            <span className="h-[1px] w-6 bg-luxury-bronze" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-light tracking-tighter text-luxury-charcoal mb-10 uppercase">
            The Transformation Story
          </h2>

          <div className="shadow-2xl border border-luxury-beige bg-white rounded-2xl overflow-hidden">
            <BeforeAfterSlider
              beforeImage="/images/before_room_widescreen.png"
              afterImage="/images/after_room_widescreen.png"
            />
          </div>
        </div>
      </section>

      {/* 7. Process Timeline Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-4">
              <span className="h-[1px] w-6 bg-luxury-bronze" />
              <span className="text-[10px] tracking-[0.3em] text-luxury-bronze uppercase font-medium">
                The Journey
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-light tracking-tighter text-luxury-charcoal uppercase">
              Bespoke Execution Journey
            </h2>
          </div>

          <ProcessTimeline />
        </div>
      </section>

      {/* 8. Testimonials Section (Cinematic Quote Showcase) */}
      <section className="py-20 bg-white border-t border-luxury-beige">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <span className="h-[1px] w-6 bg-luxury-bronze" />
            <span className="text-[10px] tracking-[0.3em] text-luxury-bronze uppercase font-medium">
              Client Dialogue
            </span>
            <span className="h-[1px] w-6 bg-luxury-bronze" />
          </div>
          
          <p className="text-2xl md:text-4xl leading-relaxed text-luxury-charcoal font-light italic mb-8 max-w-4xl mx-auto">
            &ldquo;A Bitspace home represents a perfectly tailored symphony of fine materials, lighting artistry, and lifestyle flows.&rdquo;
          </p>
          
          <div className="text-[10px] tracking-widest text-luxury-bronze uppercase font-semibold">
            — The AD Editorial Review & Patrons Served
          </div>
        </div>
      </section>

      {/* 9. Instagram Showcase Section */}
      <section className="py-20 bg-white border-t border-luxury-beige">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex justify-center items-center space-x-3 mb-4">
              <span className="h-[1px] w-6 bg-luxury-bronze" />
              <span className="text-[10px] tracking-[0.3em] text-luxury-bronze uppercase font-medium">
                Gallery Moments
              </span>
              <span className="h-[1px] w-6 bg-luxury-bronze" />
            </div>
            
            <h2 className="text-3xl md:text-5xl font-light tracking-tighter text-luxury-charcoal uppercase mb-2">
              Everyday Luxury
            </h2>
            <span className="text-[9px] tracking-widest uppercase text-luxury-bronze font-semibold">
              @bitspace.interiors
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramImages.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-square overflow-hidden group cursor-pointer border border-luxury-beige bg-white rounded-lg shadow-sm"
              >
                <Image
                  src={img}
                  alt={`Bitspace Interiors Instagram Image ${idx + 1}`}
                  fill
                  sizes="200px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ArrowUpRight size={16} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Contact Section */}
      <section className="py-20 bg-white border-t border-luxury-beige" id="contact">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex items-center space-x-3 mb-4">
                <span className="h-[1px] w-6 bg-luxury-bronze" />
                <span className="text-[10px] tracking-[0.3em] text-luxury-bronze uppercase font-medium">
                  Co-Creation Session
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-light tracking-tighter text-luxury-charcoal mb-10 uppercase">
                Let&rsquo;s craft your sanctuary.
              </h2>

              <form className="space-y-6">
                <div className="flex flex-col relative group">
                  <label htmlFor="name" className="text-[9px] tracking-widest text-luxury-grey uppercase mb-1 font-medium group-focus-within:text-luxury-bronze">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border-b border-luxury-beige bg-transparent py-2 focus:outline-none focus:border-luxury-bronze transition-colors duration-300 text-sm text-luxury-charcoal font-light"
                    placeholder="e.g. Aditya Reddy"
                  />
                </div>
                
                <div className="flex flex-col relative group">
                  <label htmlFor="phone" className="text-[9px] tracking-widest text-luxury-grey uppercase mb-1 font-medium group-focus-within:text-luxury-bronze">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="border-b border-luxury-beige bg-transparent py-2 focus:outline-none focus:border-luxury-bronze transition-colors duration-300 text-sm text-luxury-charcoal font-light"
                    placeholder="e.g. +91 99000 00000"
                  />
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center space-x-3 text-[10px] tracking-[0.25em] uppercase bg-luxury-charcoal text-white px-8 py-4 hover:bg-luxury-bronze transition-all duration-300 rounded-md font-semibold shadow-md cursor-pointer"
                  >
                    <span>Submit Brief</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </form>
            </div>

            {/* Map Column */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-[9px] tracking-widest text-luxury-grey uppercase block mb-1 font-semibold">
                    Studio Coordinates
                  </span>
                  <p className="text-xs leading-relaxed text-luxury-charcoal font-light">
                    Atelier Salon, Road No. 10, Jubilee Hills, Hyderabad — 500033
                  </p>
                </div>

                <div>
                  <span className="text-[9px] tracking-widest text-luxury-grey uppercase block mb-1 font-semibold">
                    Direct Line
                  </span>
                  <a href="tel:+918121347879" className="text-xs text-luxury-charcoal hover:text-luxury-bronze transition-colors duration-300 font-light">
                    +91 81213 47879
                  </a>
                </div>
              </div>

              <a 
                href="https://www.google.com/maps/search/?api=1&query=Plot+no+112/A,+Road+No+44,+CBI+Colony,+Jubilee+Hills,+Hyderabad,+Telangana+500033"
                target="_blank"
                rel="noopener noreferrer"
                className="relative h-64 w-full mt-8 border border-luxury-beige rounded-xl overflow-hidden filter grayscale hover:grayscale-0 transition-all duration-700 shadow-sm block group cursor-pointer"
              >
                <iframe
                  title="Bitspace Interiors Map"
                  src="https://maps.google.com/maps?q=Plot%20no%20112/A,%20Road%20No%2044,%20CBI%20Colony,%20Jubilee%20Hills,%20Hyderabad,%20Telangana%20500033&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, pointerEvents: "none" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* Click overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 bg-black/75 backdrop-blur-sm text-white text-[10px] tracking-[0.2em] uppercase font-semibold px-4 py-2.5 rounded-md transition-all duration-300 shadow-md">
                    Open in Google Maps ↗
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
