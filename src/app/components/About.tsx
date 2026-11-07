
"use client";

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay },
});

export default function About() {
  const highlights = [
    "Automation workflows that remove repetitive tasks",
    "Custom n8n integrations & seamless data flows",
    "System audits and process optimization for teams",
    "Real-time monitoring, logging, and alerts",
    "Clear documentation and actionable runbooks",
    "Scalable, reliable systems that grow with your business",
  ];

  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
      {/* Heading */}
      <motion.h2
        {...fadeUp(0)}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-4"
      >
        About Me
      </motion.h2>

      <div className="grid gap-12 md:grid-cols-2 items-start">
        {/* Left: Description */}
        <motion.div {...fadeUp(0.1)} className="space-y-6">
          <p className="text-black/70 text-lg sm:text-xl leading-relaxed">
            I&apos;m Hafeez Siddiqui, an automation specialist focused on helping teams reclaim hours every day. I design systems that handle repetitive tasks, streamline operations, and ensure work runs reliably without constant oversight.
          </p>
          <p className="text-black/70 text-lg sm:text-xl leading-relaxed">
            From lead pipelines to internal workflows, I deliver solutions that are auditable, maintainable, and scalable—so your team can focus on strategy and growth, not routine operations.
          </p>
        </motion.div>

        {/* Right: Highlights */}
        <motion.div {...fadeUp(0.2)} className="grid gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-3 bg-black/5 rounded-lg p-3 hover:bg-black/10 transition-all duration-300"
            >
              <span className="h-3 w-3 rounded-full bg-black animate-pulse" />
              <p className="text-black/80 font-medium text-sm sm:text-base">{h}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
