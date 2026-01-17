"use client";

import { motion } from "framer-motion";

export default function SectionWrapper({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24"
    >
      {/* Left accent */}
      <motion.span
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="hidden lg:block absolute left-0 top-24 h-[60%] w-px bg-gradient-to-b from-transparent via-black/20 to-transparent"
      />

      {/* Right accent */}
      <motion.span
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="hidden lg:block absolute right-0 top-24 h-[60%] w-px bg-gradient-to-b from-transparent via-black/20 to-transparent"
      />

      {children}
    </section>
  );
}
