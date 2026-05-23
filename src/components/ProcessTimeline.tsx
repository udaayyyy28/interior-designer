"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consultation",
    phase: "Genesis",
    deliverable: "Spatial Brief",
    description: "An in-depth dialogue to capture your lifestyle and design goals at our Jubilee Hills studio salon.",
  },
  {
    number: "02",
    title: "Concept Design",
    phase: "Conception",
    deliverable: "Spatial Blueprints",
    description: "Orchestrating layout planning, custom moodboards, architectural flow maps, and color swatches.",
  },
  {
    number: "03",
    title: "3D Visualization",
    phase: "Visualization",
    deliverable: "VR Walkthrough",
    description: "Translating layouts into hyper-realistic 3D visual walkthroughs for an immersive preview.",
  },
  {
    number: "04",
    title: "Material Selection",
    phase: "Curation",
    deliverable: "Material Palette",
    description: "Curating premium marble, exotic woods, raw brass, and designer fabrics in a guided studio session.",
  },
  {
    number: "05",
    title: "Precision Execution",
    phase: "Creation",
    deliverable: "Site Build",
    description: "Modular system assembly, custom carpentry, and false ceiling detailing under rigorous supervision.",
  },
  {
    number: "06",
    title: "Final Styling",
    phase: "Seal",
    deliverable: "Turnkey Styling",
    description: "Strategic placement of custom furniture, curated lighting pieces, and refined decor accents.",
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
              className="flex flex-col group relative p-8 bg-white border border-luxury-beige rounded-[2rem] shadow-sm hover:border-luxury-bronze/40 hover:shadow-md transition-all duration-500"
            >
              {/* Index & Phase */}
              <div className="flex justify-between items-baseline mb-6">
                <span className="font-sans font-light italic text-4xl lg:text-5xl text-luxury-bronze/40 group-hover:text-luxury-bronze transition-colors duration-500">
                  {step.number}
                </span>
                <span className="text-[9px] tracking-[0.3em] text-luxury-grey uppercase font-medium">
                  {step.phase}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-sans text-xl font-light tracking-tight text-luxury-charcoal mb-3 group-hover:text-luxury-bronze transition-colors duration-300 uppercase">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[12.5px] leading-relaxed text-luxury-grey font-light mb-6">
                {step.description}
              </p>

              {/* Deliverable Badge */}
              <div className="mt-auto pt-4 border-t border-luxury-beige flex items-center justify-between text-[9px] tracking-wider uppercase text-luxury-grey">
                <span>Deliverable</span>
                <span className="font-semibold text-luxury-charcoal">{step.deliverable}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
