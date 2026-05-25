"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Consultation",
    phase: "Genesis",
    deliverable: "Spatial Brief",
    description: "An in-depth dialogue to capture your lifestyle and design goals at our Jubilee Hills studio salon.",
    image: "/images/consultation_studio.png",
  },
  {
    number: "02",
    title: "Concept Design",
    phase: "Conception",
    deliverable: "Spatial Blueprints",
    description: "Orchestrating layout planning, custom moodboards, architectural flow maps, and color swatches.",
    image: "/images/project_office.png",
  },
  {
    number: "03",
    title: "3D Visualization",
    phase: "Visualization",
    deliverable: "VR Walkthrough",
    description: "Translating layouts into hyper-realistic 3D visual walkthroughs for an immersive preview.",
    image: "/images/project_villa.png",
  },
  {
    number: "04",
    title: "Material Selection",
    phase: "Curation",
    deliverable: "Material Palette",
    description: "Curating premium marble, exotic woods, raw brass, and designer fabrics in a guided studio session.",
    image: "/images/material_palette.png",
  },
  {
    number: "05",
    title: "Precision Execution",
    phase: "Creation",
    deliverable: "Site Build",
    description: "Modular system assembly, custom carpentry, and false ceiling detailing under rigorous supervision.",
    image: "/images/precision_execution.png",
  },
  {
    number: "06",
    title: "Final Styling",
    phase: "Seal",
    deliverable: "Turnkey Styling",
    description: "Strategic placement of custom furniture, curated lighting pieces, and refined decor accents.",
    image: "/images/after_room.png",
  },
];

export default function ProcessTimeline() {
  return (
    <div className="relative py-8 bg-luxury-white">
      {/* Grid structure with highly visual rounded white cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {steps.map((step, idx) => {
          return (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col group relative bg-white border border-luxury-beige rounded-xl shadow-sm hover:border-luxury-bronze/40 hover:shadow-md transition-all duration-500 overflow-hidden"
            >
              {/* Image Block with hover zoom and clean badges */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-luxury-beige border-b border-luxury-beige">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
                <div className="absolute top-4 left-4 font-sans font-light italic text-base text-white select-none bg-black/45 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center border border-white/10 shadow-md">
                  {step.number}
                </div>
                <div className="absolute top-4 right-4 bg-luxury-bronze/90 backdrop-blur-sm text-white text-[8px] tracking-[0.2em] uppercase font-semibold px-2.5 py-1 rounded-md border border-white/10 shadow-md">
                  {step.phase}
                </div>
              </div>

              {/* Text Padding container */}
              <div className="p-8 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="font-sans text-lg font-light tracking-tight text-luxury-charcoal mb-3 group-hover:text-luxury-bronze transition-colors duration-300 uppercase">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[12px] leading-relaxed text-luxury-grey font-light mb-6 flex-grow">
                  {step.description}
                </p>

                {/* Deliverable Badge */}
                <div className="mt-auto pt-4 border-t border-luxury-beige flex items-center justify-between text-[9px] tracking-wider uppercase text-luxury-grey">
                  <span>Deliverable</span>
                  <span className="font-semibold text-luxury-charcoal tracking-wide bg-luxury-white border border-luxury-beige/60 px-2 py-0.5 rounded">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

