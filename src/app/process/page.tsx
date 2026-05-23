"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Compass, Hammer, PenTool } from "lucide-react";
import ProcessTimeline from "@/components/ProcessTimeline";

const phases = [
  {
    number: "01",
    title: "Spatial Flow & Conceptual Mapping",
    subtitle: "Conception & Structural Blueprinting",
    icon: <Compass size={20} className="text-luxury-bronze" />,
    image: "/images/before_room.png",
    deliverables: ["AutoCAD Flow Maps", "HVAC Paths", "Partition Frameworks"],
  },
  {
    number: "02",
    title: "Guided Studio Curation & Visual Renders",
    subtitle: "3D Visual Studio Walkthroughs",
    icon: <PenTool size={20} className="text-luxury-bronze" />,
    image: "/images/after_room.png",
    deliverables: ["3D Max Renders", "Material Swatches", "Teak & Brass Details"],
  },
  {
    number: "03",
    title: "High-Precision Contracting & Execution",
    subtitle: "Absolute Supervision & Site Delivery",
    icon: <Hammer size={20} className="text-luxury-bronze" />,
    image: "/images/project_kitchen.png",
    deliverables: ["German Cabinet Assembly", "Trimless LED False Ceilings", "Carpentry & Joinery"],
  },
];

export default function Process() {
  return (
    <div className="pt-32 pb-24 bg-white text-luxury-charcoal overflow-x-hidden font-sans">
      {/* Header Cover Screen */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16 relative">
        <div className="pl-0 relative text-center">
          <div className="flex justify-center items-center space-x-3 mb-6">
            <span className="h-[1px] w-6 bg-luxury-bronze" />
            <span className="text-[10px] tracking-[0.4em] text-luxury-bronze uppercase font-medium">
              Architectural Code · Jubilee Hills
            </span>
            <span className="h-[1px] w-6 bg-luxury-bronze" />
          </div>

          <h1 className="font-sans text-5xl md:text-7xl font-light tracking-tight text-luxury-charcoal leading-[1.05] max-w-4xl mx-auto uppercase">
            A disciplined, <br />
            <span className="italic font-light text-luxury-bronze">highly collaborative</span> <br />
            spatial creation.
          </h1>
        </div>
      </section>

      {/* Massive Full-Screen Cover Widescreen Visual Block */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 relative">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl border border-luxury-beige group">
          <Image
            src="/images/hero_bg.png"
            alt="Process Cover"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            priority
            className="object-cover scale-102 group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-700" />
          <div className="absolute inset-6 border border-white/20 rounded-[1.5rem] md:rounded-[2.5rem] pointer-events-none" />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20 relative">
        <div className="border-t border-luxury-beige pt-16">
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div>
              <span className="text-[10px] tracking-[0.3em] text-luxury-bronze uppercase font-medium block mb-2">
                Path to Completion
              </span>
              <h2 className="font-sans text-3xl md:text-4xl font-light tracking-tight text-luxury-charcoal uppercase">
                The Core Spatial Stages
              </h2>
            </div>
          </div>

          <ProcessTimeline />
        </div>
      </section>

      {/* Phased Breakdown (Widescreen lookbook visual cards) */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="space-y-20">
          {phases.map((phase, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              key={phase.title}
              className="group flex flex-col relative"
            >
              {/* Massive Widescreen Rounded Phase Image Block */}
              <div className="relative aspect-[21/9] md:aspect-[21/7] w-full overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl border border-luxury-beige bg-white mb-6">
                <Image
                  src={phase.image}
                  alt={phase.title}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-700" />
                
                {/* Inside card detail line */}
                <div className="absolute inset-6 border border-white/20 rounded-[1.5rem] md:rounded-[2.5rem] pointer-events-none" />

                {/* Left Index / Phase Label */}
                <div className="absolute top-8 left-8 flex items-center space-x-3 text-white">
                  <div className="w-8 h-8 rounded-full border border-white/20 bg-black/35 backdrop-blur-md flex items-center justify-center">
                    {phase.icon}
                  </div>
                  <span className="text-[10px] tracking-[0.25em] uppercase font-semibold">
                    Phase {phase.number} · {phase.subtitle}
                  </span>
                </div>
              </div>

              {/* Minimalist Details Block (Removing paragraph descriptions completely) */}
              <div className="flex flex-col md:flex-row md:items-center justify-between px-4 gap-4">
                <div className="max-w-2xl">
                  <h2 className="font-sans text-2xl font-light text-luxury-charcoal tracking-tight group-hover:text-luxury-bronze transition-colors duration-300 uppercase">
                    {phase.title}
                  </h2>
                </div>

                <div className="flex flex-col items-start md:items-end gap-3 shrink-0">
                  {/* Small deliverables pills */}
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {phase.deliverables.map((item) => (
                      <span key={item} className="bg-white border border-luxury-beige px-4 py-2 rounded-full text-[9px] uppercase tracking-wider text-luxury-grey font-medium shadow-sm group-hover:border-luxury-bronze/50 transition-colors duration-500">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cinematic Full-Width Booking CTA Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-8 relative">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-xl border border-luxury-beige group flex items-center justify-center text-center">
          <Image
            src="/images/after_room.png"
            alt="Atelier Process Consulting Consultation"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-out"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/35 transition-colors duration-700" />
          <div className="absolute inset-6 border border-white/20 rounded-[1.5rem] md:rounded-[2.5rem] pointer-events-none" />
          
          <div className="relative z-10 px-6 max-w-3xl text-white">
            <span className="text-[9px] tracking-[0.3em] uppercase font-semibold block mb-3 text-luxury-bronze">
              Spatial Dialogue
            </span>
            
            <h2 className="text-2xl md:text-5xl font-light mb-6 leading-tight tracking-tight uppercase">
              Ready to initiate a spatial study for your residence?
            </h2>
            
            <p className="text-[10px] tracking-wide opacity-95 mb-8 max-w-md mx-auto font-light leading-relaxed">
              Connect with our lead interior architects at Jubilee Hills to explore structural layouts and material curation guides.
            </p>
            
            <Link
              href="/contact"
              className="inline-flex items-center space-x-3 text-[10px] tracking-[0.2em] uppercase bg-white text-luxury-charcoal px-8 py-4 rounded-full hover:bg-luxury-bronze hover:text-white transition-colors duration-300 shadow-md font-semibold"
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
