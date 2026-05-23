"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Home, Layers, Sparkles, Compass, ArrowUpRight } from "lucide-react";

const servicesList = [
  {
    number: "01",
    title: "Residential Architecture & Signature Villas",
    icon: <Home className="text-luxury-bronze" size={20} />,
    image: "/images/hero_bg.png",
    specs: ["Custom Layout Blueprints", "Wood Veneers Selection", "Lighting Control Mapping"],
  },
  {
    number: "02",
    title: "High-End Custom Kitchens",
    icon: <Layers className="text-luxury-bronze" size={20} />,
    image: "/images/project_kitchen.png",
    specs: ["Hettich & Blum Fittings", "Built-In Appliance Tracks", "Quartz Countertop Zoning"],
  },
  {
    number: "03",
    title: "Executive Corporate Studios",
    icon: <Sparkles className="text-luxury-bronze" size={20} />,
    image: "/images/project_office.png",
    specs: ["Acoustic Slatted Dividers", "Boardroom Layout Plans", "Premium Reception Counters"],
  },
  {
    number: "04",
    title: "Bespoke Furniture Curation & Space Planning",
    icon: <Compass className="text-luxury-bronze" size={20} />,
    image: "/images/project_villa.png",
    specs: ["Teak Cabinet Customization", "Brushed Bronze Framing", "Guided Studio Fabric Matching"],
  },
];

export default function Services() {
  return (
    <div className="pt-32 pb-24 bg-white text-luxury-charcoal overflow-x-hidden font-sans">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 relative">
        <div className="pl-0 relative text-center">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <span className="h-[1px] w-6 bg-luxury-bronze" />
            <span className="text-[10px] tracking-[0.4em] text-luxury-bronze uppercase font-medium">
              Studio Capabilities · Jubilee Hills
            </span>
            <span className="h-[1px] w-6 bg-luxury-bronze" />
          </div>

          <h1 className="font-sans text-5xl md:text-7xl font-light tracking-tight text-luxury-charcoal leading-[1.05] max-w-4xl mx-auto uppercase">
            Bespoke solutions <br />
            <span className="italic font-light text-luxury-bronze">meticulously formulated.</span>
          </h1>
        </div>
      </section>

      {/* Services Full-Screen Stack (More images, minimal text, round borders) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="space-y-20">
          {servicesList.map((service, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              key={service.title}
              className="group flex flex-col relative"
            >
              {/* Massive Widescreen Rounded Service Image Block */}
              <div className="relative aspect-[21/9] md:aspect-[21/7] w-full overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl border border-luxury-beige bg-white mb-6">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-700" />
                
                {/* Frame Border Inside Card */}
                <div className="absolute inset-6 border border-white/20 rounded-[1.5rem] md:rounded-[2.5rem] pointer-events-none" />

                {/* Index badge */}
                <div className="absolute top-8 left-8 flex items-center space-x-3 text-white">
                  <div className="w-8 h-8 rounded-full border border-white/25 bg-black/35 backdrop-blur-md flex items-center justify-center">
                    {service.icon}
                  </div>
                  <span className="text-[10px] tracking-[0.25em] uppercase font-semibold">
                    Capabilities {service.number}
                  </span>
                </div>
              </div>

              {/* Minimalist Details block (Extremely minimal copy, specifications focus) */}
              <div className="flex flex-col md:flex-row md:items-center justify-between px-4 gap-4">
                <div className="max-w-2xl">
                  <h2 className="font-sans text-2xl font-light text-luxury-charcoal tracking-tight group-hover:text-luxury-bronze transition-colors duration-300 uppercase">
                    {service.title}
                  </h2>
                </div>

                <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
                  {/* Small specs pills */}
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {service.specs.map((spec) => (
                      <span key={spec} className="bg-white border border-luxury-beige px-4 py-2 rounded-full text-[9px] uppercase tracking-wider text-luxury-grey font-medium shadow-sm group-hover:border-luxury-bronze/50 transition-colors duration-500">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cinematic Widescreen Booking CTA Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-8 relative">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl border border-luxury-beige group flex items-center justify-center text-center">
          <Image
            src="/images/project_villa.png"
            alt="Atelier Service Consultation"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/35 transition-colors duration-700" />
          <div className="absolute inset-6 border border-white/20 rounded-[1.5rem] md:rounded-[2.5rem] pointer-events-none" />
          
          <div className="relative z-10 px-6 max-w-3xl text-white">
            <span className="text-[9px] tracking-[0.3em] uppercase font-semibold block mb-3 text-luxury-bronze">
              Spatial Booking
            </span>
            
            <h2 className="text-2xl md:text-5xl font-light mb-6 leading-tight tracking-tight uppercase">
              Ready to design a functional, award-winning interior space?
            </h2>
            
            <p className="text-[10px] tracking-wide opacity-95 mb-8 max-w-md mx-auto font-light leading-relaxed">
              Contact us today to book an in-person layout and modular consultation at our Jubilee Hills salon.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 text-[10px] tracking-[0.2em] uppercase bg-white text-luxury-charcoal px-8 py-4 rounded-full hover:bg-luxury-bronze hover:text-white transition-colors duration-300 shadow-md font-semibold"
            >
              <span>Book Spatial Consultation</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
