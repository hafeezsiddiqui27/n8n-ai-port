
"use client";

import {
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
  FaXTwitter,
} from "react-icons/fa6";
import MagicButton from "./components/MagicButton";

import SocialLink from "./components/SocialLink";
import { motion } from "framer-motion";
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay },
});

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/hafeezsiddiqui27",
    alt: "GitHub",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/hafeezusiddiqui",
    alt: "X / Twitter",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/hafeez-uddin-ahmed-siddiqui",
    alt: "LinkedIn",
  },
];

const Contact = () => {
  return (
    <footer
      id="contact"
      className="relative w-full bg-white text-black pt-18 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]">
        <img
          src="/footer-grid.svg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 text-center flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight">
          Tired of wasting hours on repetitive tasks?
          <br />
          <span className="font-medium">Let automation handle it for you.</span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-black/60 max-w-xl">
        Every spreadsheet update, email, or manual data transfer takes time and introduces errors. I design automation workflows that eliminate these inefficiencies, saving teams hundreds of hours and ensuring consistent results, so your focus stays on growth and strategy.
        </p>

        <a href="mailto:hafeezusiddiqui4@gmail.com" className="mt-10">
          <MagicButton
            title="Get a Free Consultation"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 flex flex-col items-center gap-6">
        <motion.div
          {...fadeUp(0.45)}
          className="mt-8 flex items-center justify-center gap-6"
        >
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
        </motion.div>

      
      </div>
    </footer>
  );
};

export default Contact;
