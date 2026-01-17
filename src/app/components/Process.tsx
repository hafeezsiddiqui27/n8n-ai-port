// "use client";

// import { motion } from "framer-motion";

// const cascade = {
//   hidden: { opacity: 0, y: 16 },
//   show: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.45, delay: i * 0.05 },
//   }),
// };

// export default function Process() {
//   const steps = [
//     {
//       t: "Discovery",
//       d: "Understand current steps, constraints, and desired outcomes.",
//     },
//     {
//       t: "Design",
//       d: "Propose flows, events, and data contracts; agree on scope.",
//     },
//     { t: "Build", d: "Implement n8n nodes, webhooks, retries, and logging." },
//     { t: "Ship", d: "Document, handover, and monitor." },
//   ];
//   return (
//     <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
//       {steps.map((s, i) => (
//         <motion.div
//           key={s.t}
//           custom={i}
//           variants={cascade}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true, margin: "-100px" }}
//           className="rounded-xl md:rounded-2xl border border-black/10 p-4 sm:p-6 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
//         >
//           <div className="text-sm uppercase tracking-wide text-black/60">
//             Step {i + 1}
//           </div>
//           <div className="mt-2 font-semibold text-lg">{s.t}</div>
//           <p className="mt-2 text-black/70 text-sm sm:text-base">{s.d}</p>
//         </motion.div>
//       ))}
//     </div>
//   );
// }
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
