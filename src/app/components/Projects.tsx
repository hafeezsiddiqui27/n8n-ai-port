// // // "use client";

// // // import { motion } from "framer-motion";

// // // const cascade = {
// // //   hidden: { opacity: 0, y: 16 },
// // //   show: (i = 1) => ({
// // //     opacity: 1,
// // //     y: 0,
// // //     transition: { duration: 0.45, delay: i * 0.05 },
// // //   }),
// // // };

// // // export default function Projects() {
// // //   const data = [
// // //     {
// // //       t: "Lead automation",
// // //       bullets: [
// // //         "Manual entry from web forms to CRM caused delays and errors.",
// // //         "n8n flow to capture, enrich, and notify sales on Slack in real time.",
// // //       ],
// // //       r: "10+ hours saved weekly and faster first response.",
// // //     },
// // //     {
// // //       t: "Order updates",
// // //       bullets: [
// // //         "Customers lacked timely order status and support tickets piled up.",
// // //         "WhatsApp + email notifications tied to order events.",
// // //       ],
// // //       r: "Lower support load and higher repeat purchases.",
// // //     },
// // //     {
// // //       t: "Finance alerts",
// // //       bullets: [
// // //         "Missed invoice reminders and inconsistent ledger updates.",
// // //         "Automated reminders, postings, and reconciliation hooks.",
// // //       ],
// // //       r: "On-time payments and cleaner books.",
// // //     },
// // //   ];

// // //   return (
// // //     <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
// // //       {data.map((cs, i) => (
// // //         <motion.article
// // //           key={cs.t}
// // //           custom={i}
// // //           variants={cascade}
// // //           initial="hidden"
// // //           whileInView="show"
// // //           viewport={{ once: true, margin: "-100px" }}
// // //           className="rounded-xl md:rounded-2xl border border-black/10 p-4 sm:p-6 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
// // //         >
// // //           <h3 className="font-semibold text-lg">{cs.t}</h3>
// // //           <ul className="mt-3 list-disc pl-5 space-y-1 text-black/80 text-sm sm:text-base">
// // //             {cs.bullets.map((b) => (
// // //               <li key={b}>{b}</li>
// // //             ))}
// // //           </ul>
// // //           <div className="mt-4 rounded-lg md:rounded-xl border border-black/10 bg-white p-3 sm:p-4">
// // //             <p className="text-sm">
// // //               Result: <span className="font-medium">{cs.r}</span>
// // //             </p>
// // //           </div>
// // //         </motion.article>
// // //       ))}
// // //     </div>
// // //   );
// // // }
// // "use client";

// // import { motion } from "framer-motion";

// // type Project = {
// //   title: string;
// //   tag: string;
// //   summary: string;
// // };

// // const projects: Project[] = [
// //   {
// //     title: "Lead Generation Automation",
// //     tag: "Growth Systems",
// //     summary:
// //       "End-to-end lead extraction and enrichment workflows built to support scalable outbound operations.",
// //   },
// //   {
// //     title: "Email & Slack Alert Automation",
// //     tag: "Real-Time Signals",
// //     summary:
// //       "Event-driven notification systems that deliver critical updates instantly across teams.",
// //   },
// //   {
// //     title: "Data Scraping & Enrichment",
// //     tag: "Data Infrastructure",
// //     summary:
// //       "High-precision data pipelines that transform raw web data into structured intelligence.",
// //   },
// //   {
// //     title: "Internal Operations Automation",
// //     tag: "Process Optimization",
// //     summary:
// //       "Internal workflow automations designed to eliminate repetitive tasks and manual coordination.",
// //   },
// // ];

// // export default function Projects() {
// //   return (
// //     <section className="relative bg-white py-40 overflow-hidden">
// //       {/* Subtle futuristic background */}
// //       <div className="absolute inset-0 -z-10">
// //         <div className="absolute top-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-black/5 blur-3xl" />
// //         <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-black/5 blur-3xl" />
// //       </div>

// //       <div className="max-w-6xl mx-auto px-6">
// //         {/* Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true }}
// //           transition={{ duration: 0.6 }}
// //           className="mb-28 max-w-2xl"
// //         >
// //           <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-6">
// //             Systems I Build
// //           </p>
// //           <h2 className="text-5xl font-semibold leading-tight text-black">
// //             Automation <br /> engineered for scale
// //           </h2>
// //         </motion.div>

// //         {/* Projects */}
// //         <div className="space-y-20">
// //           {projects.map((project, index) => (
// //             <motion.div
// //               key={project.title}
// //               initial={{ opacity: 0, x: -40 }}
// //               whileInView={{ opacity: 1, x: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.6, delay: index * 0.06 }}
// //               className="group relative"
// //             >
// //               {/* Divider line */}
// //               <div className="absolute -top-10 left-0 h-px w-full bg-gradient-to-r from-transparent via-black/20 to-transparent" />

// //               <div className="grid md:grid-cols-12 gap-8 items-start">
// //                 {/* Index */}
// //                 <div className="md:col-span-1 text-neutral-400 text-sm font-mono">
// //                   0{index + 1}
// //                 </div>

// //                 {/* Content */}
// //                 <div className="md:col-span-7">
// //                   <h3 className="text-2xl md:text-3xl font-medium text-black mb-4">
// //                     {project.title}
// //                   </h3>
// //                   <p className="text-neutral-600 leading-relaxed max-w-xl">
// //                     {project.summary}
// //                   </p>
// //                 </div>

// //                 {/* Tag */}
// //                 <div className="md:col-span-4 flex md:justify-end">
// //                   <span className="inline-flex items-center gap-2 text-sm text-black/80 border border-black/20 rounded-full px-4 py-2 group-hover:border-black transition">
// //                     <span className="h-2 w-2 rounded-full bg-black" />
// //                     {project.tag}
// //                   </span>
// //                 </div>
// //               </div>
// //             </motion.div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
// "use client";

// import { motion } from "framer-motion";

// type Project = {
//   title: string;
//   category: string;
//   description: string;
// };

// const projects: Project[] = [
//   {
//     title: "Lead Generation Automation",
//     category: "Revenue Systems",
//     description:
//       "Designed and implemented automated lead pipelines that collect, enrich, and deliver qualified prospects directly into internal systems, enabling consistent and scalable outbound operations.",
//   },
//   {
//     title: "Email & Slack Alert Automation",
//     category: "Real-Time Operations",
//     description:
//       "Built event-driven notification workflows that surface critical actions and system updates instantly, allowing teams to respond faster and stay aligned.",
//   },
//   {
//     title: "Data Scraping & Enrichment",
//     category: "Data Infrastructure",
//     description:
//       "Developed structured data pipelines that extract raw web data, enrich it using external sources, and convert it into clean, usable datasets.",
//   },
//   {
//     title: "Internal Operations Automation",
//     category: "Process Optimization",
//     description:
//       "Automated internal workflows to reduce manual coordination, minimize errors, and improve operational efficiency across teams.",
//   },
// ];

// const container = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.18,
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, y: 40 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: [0.22, 1, 0.36, 1], // professional easing
//     },
//   },
// };

// export default function Projects() {
//   return (
//     <section className="relative bg-white py-40 overflow-hidden">
//       {/* Ambient background */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-1/3 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-black/5 blur-[140px]" />
//       </div>

//       <div className="max-w-6xl mx-auto px-6">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="mb-32 max-w-2xl"
//         >
//           <p className="text-xs tracking-[0.35em] uppercase text-neutral-500 mb-6">
//             Selected Systems
//           </p>
//           <h2 className="text-5xl font-semibold leading-tight text-black">
//             Automation <br /> built to operate at scale
//           </h2>
//         </motion.div>

//         {/* Projects */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="space-y-24"
//         >
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               variants={item}
//               className="group relative"
//             >
//               {/* Animated divider */}
//               <motion.div
//                 initial={{ scaleX: 0 }}
//                 whileInView={{ scaleX: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1, ease: "easeOut" }}
//                 className="origin-left absolute -top-12 left-0 h-px w-full bg-gradient-to-r from-transparent via-black/30 to-transparent"
//               />

//               <div className="grid md:grid-cols-12 gap-10 items-start">
//                 {/* Index */}
//                 <div className="md:col-span-1 text-neutral-400 text-sm font-mono">
//                   0{index + 1}
//                 </div>

//                 {/* Main content */}
//                 <div className="md:col-span-7">
//                   <h3 className="text-2xl md:text-3xl font-medium text-black mb-4">
//                     {project.title}
//                   </h3>
//                   <p className="text-neutral-600 leading-relaxed max-w-xl">
//                     {project.description}
//                   </p>
//                 </div>

//                 {/* Category */}
//                 <div className="md:col-span-4 flex md:justify-end">
//                   <motion.div
//                     whileHover={{ x: 6 }}
//                     transition={{ duration: 0.3 }}
//                     className="inline-flex items-center gap-3 border border-black/20 rounded-full px-5 py-2 text-sm text-black/80 group-hover:border-black"
//                   >
//                     <span className="h-2 w-2 rounded-full bg-black" />
//                     {project.category}
//                   </motion.div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";

import { motion, cubicBezier, Variants } from "framer-motion";

type Project = {
  title: string;
  category: string;
  problem: string;
  solution: string;
};

const projects: Project[] = [
  {
    title: "AI-Powered HR Automation System",
    category: "Human Resources",
    problem:
      "Candidate evaluation was slow, inconsistent, and highly dependent on manual review, causing delays in hiring and bias in decisions.",
    solution:
      "Developed a fully automated HR workflow where AI evaluates all candidates, generates detailed summaries, strengths, and weaknesses, compares them, and ranks by an AI score—streamlining hiring and improving decision accuracy.",
  },
  {
    title: "Lead Generation Automation",
    category: "Revenue Operations",
    problem:
      "Lead data was being collected manually from multiple sources, causing delays, inconsistent records, and missed follow-ups.",
    solution:
      "Built automated workflows to extract, verify, and route leads directly into internal systems, allowing teams to focus on outreach instead of research.",
  },
  {
    title: "Email & Slack Alert Automation",
    category: "Operational Visibility",
    problem:
      "Important events were often missed because teams relied on manual checks and scattered communication tools.",
    solution:
      "Implemented event-based alerts that notify teams instantly through Email and Slack when predefined conditions are met.",
  },
  {
    title: "Data Scraping & Enrichment",
    category: "Data Systems",
    problem:
      "Raw scraped data was unstructured and required significant manual cleanup before it could be used.",
    solution:
      "Automated data extraction and enrichment pipelines that deliver clean, structured datasets ready for use.",
  },
  {
    title: "Internal Operations Automation",
    category: "Process Efficiency",
    problem:
      "Internal processes relied heavily on manual coordination, increasing errors and slowing execution.",
    solution:
      "Automated routine internal workflows to reduce handoffs, minimize mistakes, and improve execution speed.",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  },
};

export default function Projects() {
  return (
    <section className="relative bg-white py-8 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-black/5 blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-32 max-w-2xl"
        >
          <p className="text-xs tracking-[0.35em] uppercase text-neutral-500 mb-6">
            Selected Work
          </p>
          <h2 className="text-5xl font-semibold leading-tight text-black">
            Automation systems <br /> built for real operations
          </h2>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-28"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              className="group relative"
            >
              {/* Divider */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="origin-left absolute -top-14 left-0 h-px w-full bg-gradient-to-r from-transparent via-black/30 to-transparent"
              />

              <div className="grid md:grid-cols-12 gap-10">
                {/* Index */}
                <div className="md:col-span-1 text-neutral-400 text-sm font-mono">
                  0{index + 1}
                </div>

                {/* Content */}
                <div className="md:col-span-7 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-medium text-black">
                    {project.title}
                  </h3>

                  <p className="text-neutral-700 leading-relaxed">
                    <span className="text-black font-medium">Problem:</span>{" "}
                    {project.problem}
                  </p>

                  <p className="text-neutral-700 leading-relaxed">
                    <span className="text-black font-medium">Solution:</span>{" "}
                    {project.solution}
                  </p>
                </div>

                {/* Category */}
                {/* <div className="md:col-span-4 flex md:justify-end">
                  <motion.div
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                    className="inline-flex items-center gap-3 border border-black/20 rounded-full px-5 py-2 text-sm text-black/80"
                  >
                    <span className="h-2 w-2 rounded-full bg-black" />
                    {project.category}
                  </motion.div>
                </div> */}
                <div className="md:col-span-4 flex md:justify-end items-start">
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-4"
                  >
                    {/* Signal line */}
                    <span className="block h-px w-10 bg-black/60" />

                    {/* Category */}
                    <span className="text-xs font-mono tracking-wide uppercase text-black/70">
                      {project.category}
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
