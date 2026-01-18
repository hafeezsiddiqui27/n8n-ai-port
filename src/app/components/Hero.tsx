"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
// import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import SocialLink from "./SocialLink";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-8 pb-16">
      {/* Fixed backdrop */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[700px] rounded-full bg-black/5 blur-3xl" />
        <div className="absolute -bottom-24 right-1/3 h-72 w-[600px] rounded-full bg-black/5 blur-3xl" />
      </div>

      <div className="max-w-5xl px-4 sm:px-6 pt-16 text-center">
        {/* Headline container with fixed height */}
        <div className="h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
          >
            <Typewriter
              words={[
                "Automations That Free Your Team",
                "Creating Systems That Work While You Focus on Growth",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={46}
              deleteSpeed={28}
              delaySpeed={1600}
            />
          </motion.h1>
        </div>

        {/* Subheading */}
        <motion.p className="mt-5 text-base sm:text-lg md:text-xl text-black/70 max-w-3xl mx-auto px-4">
          I build automation workflows that eliminate repetitive tasks,
          streamline operations, and boost team productivity, letting your team
          focus on high-impact initiatives instead of routine work.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 text-center"
          >
            Explore my work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 rounded-lg border border-black/15 font-medium hover:bg-black/5 transition-all duration-300 transform hover:-translate-y-1 text-center"
          >
            Let&apos;s Automate together
          </a>
        </motion.div>

        {/* Stable Social Links */}
        {/* <motion.div className="mt-8 flex items-center justify-center gap-6 mb-4">
          <SocialLink
            href="https://www.linkedin.com/in/hafeez-uddin-ahmed-siddiqui"
            label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </SocialLink>

          <SocialLink href="https://github.com/hafeezsiddiqui27" label="GitHub">
            <FaGithub size={20} />
          </SocialLink>

          <SocialLink href="https://x.com/HafeezuSiddiqui" label="X">
            <FaXTwitter size={20} />
          </SocialLink>
        </motion.div> */}
      </div>
    </section>
  );
}
