// "use client";

// import { motion } from "framer-motion";
// import { Typewriter } from "react-simple-typewriter";
// import SocialLink from "./SocialLink";

// const fadeUp = (delay = 0) => ({
//   initial: { opacity: 0, y: 24 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, margin: "-100px" },
//   transition: { duration: 0.6, delay },
// });

// export default function Hero() {
//   return (
//     <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-16">
//       {/* Fixed backdrop */}
//       <div className="pointer-events-none fixed inset-0 -z-10">
//         <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[700px] rounded-full bg-black/5 blur-3xl" />
//         <div className="absolute -bottom-24 right-1/3 h-72 w-[600px] rounded-full bg-black/5 blur-3xl" />
//       </div>

//       <div className="max-w-5xl px-4 sm:px-6 pt-16 text-center">
//         {/* Headline container with fixed height */}
//         <div className="h-[140px] sm:h-[160px] md:h-[180px] lg:h-[200px] flex items-center justify-center">
//           <motion.h1
//             initial={{ opacity: 0, y: -24 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight"
//           >
//             <Typewriter
//               words={[
//                 "Automation Specialist & Workflow Engineer",
//                 "Systems that run reliably, without oversight.",
//               ]}
//               loop
//               cursor
//               cursorStyle="|"
//               typeSpeed={46}
//               deleteSpeed={28}
//               delaySpeed={1600}
//             />
//           </motion.h1>
//         </div>

//         {/* Subheading */}
//         <motion.p
//           {...fadeUp(0.2)}
//           className="mt-5 text-base sm:text-lg md:text-xl text-black/70 max-w-3xl mx-auto px-4"
//         >
//           I help startups scale by building automation workflows, integrating
//           systems, and designing processes that work silently and reliably.
//         </motion.p>

//               <motion.div
//                 {...fadeUp(0.35)}
//                 className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
//               >
//                 <a
//                   href="#portfolio"
//                   className="w-full sm:w-auto px-6 py-3 rounded-lg bg-black text-white font-medium hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-1 text-center"
//                 >
//                   View work
//                 </a>
//                 <a
//                   href="#contact"
//                   className="w-full sm:w-auto px-6 py-3 rounded-lg border border-black/15 font-medium hover:bg-black/5 transition-all duration-300 transform hover:-translate-y-1 text-center"
//                 >
//                   Start a project
//                 </a>
//               </motion.div>

//         {/* Stable Social Links */}
//         <motion.div
//           {...fadeUp(0.45)}
//           className="mt-8 flex items-center justify-center gap-6"
//         >
//           <SocialLink
//             href="https://www.linkedin.com/in/hafeez-uddin-ahmed-siddiqui"
//             label="LinkedIn"
//           >
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7 0h3.8v2.2h.05c.53-1 1.84-2.2 3.8-2.2 4.06 0 4.8 2.67 4.8 6.14V24h-4v-7.1c0-1.7-.03-3.9-2.38-3.9-2.39 0-2.76 1.86-2.76 3.78V24h-4V8z" />
//             </svg>
//           </SocialLink>
//           <SocialLink href="https://github.com/hafeezsiddiqui27" label="GitHub">
//             <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M12 .5C5.73.5.98 5.24.98 11.5c0 4.85 3.15 8.96 7.51 10.41.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.06.66-3.71-1.3-3.71-1.3-.5-1.28-1.22-1.62-1.22-1.62-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.58 1.2 3.21.92.1-.71.38-1.2.69-1.47-2.44-.28-5-1.22-5-5.44 0-1.2.43-2.19 1.13-2.96-.11-.28-.49-1.42.11-2.96 0 0 .93-.3 3.05 1.13A10.6 10.6 0 0 1 12 6.8c.94 0 1.88.13 2.76.37 2.12-1.43 3.05-1.13 3.05-1.13.6 1.54.22 2.68.11 2.96.7.77 1.13 1.75 1.13 2.96 0 4.22-2.56 5.16-5.01 5.43.39.33.73.98.73 1.98 0 1.43-.01 2.58-.01 2.93 0 .29.2.64.76.53A10.53 10.53 0 0 0 23 11.5C23 5.24 18.27.5 12 .5z" />
//             </svg>
//           </SocialLink>
//           <SocialLink href="https://x.com/HafeezuSiddiqui" label="X">
//             <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M18.244 2H21.5l-7.61 8.69L23 22h-6.79l-5.31-6.56L4.7 22H1.44l8.15-9.3L1 2h6.96l4.79 6.06L18.24 2Zm-1.19 18h1.98L7.03 4H5.03l12.02 16Z" />
//             </svg>
//           </SocialLink>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub,} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import SocialLink from "./SocialLink";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay },
});

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-16">
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
                "Automation Specialist",
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
        <motion.p
          {...fadeUp(0.2)}
          className="mt-5 text-base sm:text-lg md:text-xl text-black/70 max-w-3xl mx-auto px-4"
        >
       I help teams save time and scale faster by automating repetitive tasks and creating systems that run reliably in the background, so you can focus on growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          {...fadeUp(0.35)}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
        >
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
            Let&apos;s build together
          </a>
        </motion.div>

        {/* Stable Social Links */}
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

          <SocialLink
            href="https://github.com/hafeezsiddiqui27"
            label="GitHub"
          >
            <FaGithub size={20} />
          </SocialLink>

          <SocialLink href="https://x.com/HafeezuSiddiqui" label="X">
            <FaXTwitter size={20} />
          </SocialLink>
        </motion.div>
      </div>
    </section>
  );
}
