
"use client";

import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Process() {
  const steps = [
    {
      title: "Discovery",
      description:
        "Review existing processes, constraints, and failure points to define clear operational goals.",
    },
    {
      title: "Design",
      description:
        "Map workflows, triggers, and data flow. Define scope, edge cases, and system boundaries.",
    },
    {
      title: "Build",
      description:
        "Implement workflows with n8n, including error handling, retries, and system logging.",
    },
    {
      title: "Ship",
      description:
        "Deploy, document, and monitor workflows to ensure stability and long-term reliability.",
    },
  ];

  return (
    <section className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-24 max-w-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-black/50 mb-6">
            Process
          </p>
          <h2 className="text-4xl font-medium text-black leading-tight">
            How systems are built
          </h2>
        </div>

        {/* Timeline */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-16"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={item}
              className="relative"
            >
              {/* Top signal line */}
              <div className="absolute -top-8 left-0 h-px w-full bg-black/20" />

              {/* Index */}
              <div className="mb-6 text-sm font-mono text-black/40">
                0{index + 1}
              </div>

              {/* Content */}
              <h3 className="text-lg font-medium text-black mb-3">
                {step.title}
              </h3>
              <p className="text-black/70 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
