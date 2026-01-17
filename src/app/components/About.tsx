// "use client";

// import { motion } from "framer-motion";

// const fadeUp = (delay = 0) => ({
//   initial: { opacity: 0, y: 24 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, margin: "-100px" },
//   transition: { duration: 0.6, delay },
// });

// export default function About() {
//   return (
//     <section className="relative max-w-5xl mx-auto px-4 sm:px-6 py-24 text-center">
//       <motion.h2
//         {...fadeUp(0)}
//         className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6"
//       >
//         About Me
//       </motion.h2>

//       <motion.p
//         {...fadeUp(0.1)}
//         className="text-black/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
//       >
//         I'm Hafeez Siddiqui, an automation expert and web developer. I specialize in building
//         workflows and integrations that reduce manual work, eliminate errors, and scale operations
//         for startups and businesses. My tools of choice include n8n for automation and Next.js
//         for web applications.
//       </motion.p>

//       <motion.p
//         {...fadeUp(0.2)}
//         className="mt-6 text-black/70 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
//       >
//         I focus on delivering solutions that are **auditable, reliable, and maintainable**. From
//         lead generation automations to internal operational workflows, my goal is to make systems
//         that work **while you focus on growing your business**.
//       </motion.p>

//       <motion.div
//         {...fadeUp(0.35)}
//         className="mt-10 flex flex-wrap justify-center gap-4"
//       >
//         <span className="px-4 py-2 bg-black/5 rounded-lg text-black/80 text-sm font-medium">
//           n8n Automation
//         </span>
//         <span className="px-4 py-2 bg-black/5 rounded-lg text-black/80 text-sm font-medium">
//           Workflow Design
//         </span>
//         <span className="px-4 py-2 bg-black/5 rounded-lg text-black/80 text-sm font-medium">
//           System Integrations
//         </span>
//         <span className="px-4 py-2 bg-black/5 rounded-lg text-black/80 text-sm font-medium">
//           Process Audits
//         </span>
//         <span className="px-4 py-2 bg-black/5 rounded-lg text-black/80 text-sm font-medium">
//           Monitoring & Alerts
//         </span>
//         <span className="px-4 py-2 bg-black/5 rounded-lg text-black/80 text-sm font-medium">
//           Documentation
//         </span>
//       </motion.div>
//     </section>
//   );
// }
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
    "Automation workflows that remove manual steps",
    "Custom n8n integrations and webhooks",
    "System audits & process optimization",
    "Real-time monitoring and alerts",
    "Clear documentation and runbooks",
    "Scalable, reliable systems for startups",
  ];

  return (
    <section className="relative max-w-6xl mx-auto px-4 sm:px-6 ">
      <motion.h2
        {...fadeUp(0)}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12"
      >
        About Me
      </motion.h2>

      <div className="grid gap-12 md:grid-cols-2 items-start">
        {/* Left: Description */}
    <motion.div {...fadeUp(0.1)} className="space-y-6">
  <p className="text-black/70 text-lg sm:text-xl leading-relaxed">
    I am Hafeez Siddiqui, an automation specialist. I help teams save hours every day by building systems that handle repetitive tasks and keep operations running smoothly
  </p>
  <p className="text-black/70 text-lg sm:text-xl leading-relaxed">
    I create reliable and auditable systems from lead pipelines to internal processes that free your team to focus on growth instead of routine work
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
