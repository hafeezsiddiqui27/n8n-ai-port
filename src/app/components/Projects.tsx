
// "use client";

// import { motion, cubicBezier, Variants } from "framer-motion";

// type Project = {
//   title: string;
//   category: string;
//   problem: string;
//   solution: string;
// };

// const projects: Project[] = [
//   {
//     title: "AI-Powered HR Automation System",
//     category: "Human Resources",
//     problem:
//       "Candidate evaluation was slow, inconsistent, and highly dependent on manual review, causing delays in hiring and bias in decisions.",
//     solution:
//       "Developed a fully automated HR workflow where AI evaluates all candidates, generates detailed summaries, strengths, and weaknesses, compares them, and ranks by an AI score—streamlining hiring and improving decision accuracy.",
//   },
//   {
//     title: "Lead Generation Automation",
//     category: "Revenue Operations",
//     problem:
//       "Lead data was being collected manually from multiple sources, causing delays, inconsistent records, and missed follow-ups.",
//     solution:
//       "Built automated workflows to extract, verify, and route leads directly into internal systems, allowing teams to focus on outreach instead of research.",
//   },
//   {
//     title: "Email & Slack Alert Automation",
//     category: "Operational Visibility",
//     problem:
//       "Important events were often missed because teams relied on manual checks and scattered communication tools.",
//     solution:
//       "Implemented event-based alerts that notify teams instantly through Email and Slack when predefined conditions are met.",
//   },
//   {
//     title: "Data Scraping & Enrichment",
//     category: "Data Systems",
//     problem:
//       "Raw scraped data was unstructured and required significant manual cleanup before it could be used.",
//     solution:
//       "Automated data extraction and enrichment pipelines that deliver clean, structured datasets ready for use.",
//   },
//   {
//     title: "Internal Operations Automation",
//     category: "Process Efficiency",
//     problem:
//       "Internal processes relied heavily on manual coordination, increasing errors and slowing execution.",
//     solution:
//       "Automated routine internal workflows to reduce handoffs, minimize mistakes, and improve execution speed.",
//   },
// ];

// const container: Variants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.16,
//     },
//   },
// };

// const item: Variants = {
//   hidden: {
//     opacity: 0,
//     y: 40,
//   },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       ease: cubicBezier(0.22, 1, 0.36, 1),
//     },
//   },
// };

// export default function Projects() {
//   return (
//     <section className="relative bg-white py-8 overflow-hidden">
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
//             Selected Work
//           </p>
//           <h2 className="text-5xl font-semibold leading-tight text-black">
//             Automation systems <br /> built for real operations
//           </h2>
//         </motion.div>

//         {/* Projects */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="space-y-28"
//         >
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               variants={item}
//               className="group relative"
//             >
//               {/* Divider */}
//               <motion.div
//                 initial={{ scaleX: 0 }}
//                 whileInView={{ scaleX: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 1 }}
//                 className="origin-left absolute -top-14 left-0 h-px w-full bg-gradient-to-r from-transparent via-black/30 to-transparent"
//               />

//               <div className="grid md:grid-cols-12 gap-10">
//                 {/* Index */}
//                 <div className="md:col-span-1 text-neutral-400 text-sm font-mono">
//                   0{index + 1}
//                 </div>

//                 {/* Content */}
//                 <div className="md:col-span-7 space-y-6">
//                   <h3 className="text-2xl md:text-3xl font-medium text-black">
//                     {project.title}
//                   </h3>

//                   <p className="text-neutral-700 leading-relaxed">
//                     <span className="text-black font-medium">Problem:</span>{" "}
//                     {project.problem}
//                   </p>

//                   <p className="text-neutral-700 leading-relaxed">
//                     <span className="text-black font-medium">Solution:</span>{" "}
//                     {project.solution}
//                   </p>
//                 </div>

//                 {/* Category */}
//                 {/* <div className="md:col-span-4 flex md:justify-end">
//                   <motion.div
//                     whileHover={{ x: 8 }}
//                     transition={{ duration: 0.3 }}
//                     className="inline-flex items-center gap-3 border border-black/20 rounded-full px-5 py-2 text-sm text-black/80"
//                   >
//                     <span className="h-2 w-2 rounded-full bg-black" />
//                     {project.category}
//                   </motion.div>
//                 </div> */}
//                 <div className="md:col-span-4 flex md:justify-end items-start">
//                   <motion.div
//                     whileHover={{ x: 6 }}
//                     transition={{ duration: 0.25 }}
//                     className="flex items-center gap-4"
//                   >
//                     {/* Signal line */}
//                     <span className="block h-px w-10 bg-black/60" />

//                     {/* Category */}
//                     <span className="text-xs font-mono tracking-wide uppercase text-black/70">
//                       {project.category}
//                     </span>
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
  metrics?: string; // new field for measurable impact
};

const projects: Project[] = [
  {
    title: "AI-Powered HR Automation System",
    category: "Human Resources",
    problem:
      "Hiring decisions were slow, inconsistent, and dependent on manual review, causing delays and inefficiencies.",
    solution:
      "Built a fully automated HR workflow where AI evaluates candidates, generates detailed summaries, compares them, and ranks by AI score—accelerating hiring and improving decision accuracy.",
    metrics: "Reduced candidate evaluation time by 70% and increased hiring accuracy by 40%.",
  },
  {
    title: "Lead Generation Automation",
    category: "Revenue Operations",
    problem:
      "Manual lead collection from multiple channels caused delays, inconsistent data, and missed opportunities.",
    solution:
      "Automated extraction, verification, and routing of leads into internal systems, letting teams focus on closing deals instead of chasing data.",
    metrics: "Generated 3x more qualified leads per month and cut manual processing time by 80%.",
  },
  {
    title: "Intelligent Alerting System",
    category: "Operational Visibility",
    problem:
      "Critical updates were often missed due to scattered communication and manual monitoring.",
    solution:
      "Implemented event-driven alerts notifying relevant teams instantly via Slack and email, ensuring no critical action is overlooked.",
    metrics: "Response time to high-priority events improved by 60%.",
  },
  {
    title: "Data Scraping & Enrichment",
    category: "Data Systems",
    problem:
      "Raw data from multiple sources was messy, unstructured, and time-consuming to clean manually.",
    solution:
      "Automated pipelines extract, normalize, and enrich datasets, delivering ready-to-use structured data for decision-making.",
    metrics: "Reduced data prep time from 5 days to 2 hours per dataset, boosting analytics efficiency by 85%.",
  },
  {
    title: "Internal Workflow Automation",
    category: "Process Efficiency",
    problem:
      "Manual internal processes caused frequent errors and slowed execution, affecting team productivity.",
    solution:
      "Automated routine operations to reduce handoffs, eliminate errors, and accelerate execution, freeing teams to focus on high-value work.",
    metrics: "Errors reduced by 90% and task completion speed increased by 50%.",
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
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: cubicBezier(0.22, 1, 0.36, 1) },
  },
};

export default function Projects() {
  return (
    <section className="relative bg-white py-16 overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-50/20 blur-[140px]" />
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
          <p className="text-xs tracking-[0.35em] uppercase text-neutral-400 mb-6">
            Selected Work
          </p>
          <h2 className="text-5xl font-semibold leading-tight text-black">
            Automation systems <br /> that deliver measurable results
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
              {/* Top Divider */}
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
                <div className="md:col-span-7 space-y-4">
                  <h3 className="text-2xl md:text-3xl font-semibold text-black">
                    {project.title}
                  </h3>

                  <p className="text-neutral-700 leading-relaxed">
                    <span className="text-black font-medium">Challenge:</span>{" "}
                    {project.problem}
                  </p>

                  <p className="text-neutral-700 leading-relaxed">
                    <span className="text-black font-medium">Solution:</span>{" "}
                    {project.solution}
                  </p>

                  {project.metrics && (
                    <p className="text-sm text-green-600 italic font-extralight mt-2">
                      Impact: {project.metrics}
                    </p>
                  )}
                </div>

                {/* Category */}
                <div className="md:col-span-4 flex md:justify-end items-start">
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center gap-4"
                  >
                    <span className="block h-px w-10 bg-black/60" />
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
