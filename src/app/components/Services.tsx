// "use client";

// import { motion, Variants } from "framer-motion";

// const container: Variants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.18,
//     },
//   },
// };

// const item: Variants = {
//   hidden: { opacity: 0, y: 24 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// // Self-contained services data
// const services = [
//   {
//     title: "Automation Design & Implementation",
//     description:
//       "Create scalable workflows in n8n to replace repetitive tasks, enforce consistency, and reduce human error.",
//   },
//   {
//     title: "Lead Generation & Routing",
//     description:
//       "Capture leads from multiple sources, enrich profiles, and route them automatically to the right team member.",
//   },
//   {
//     title: "Alert & Notification Systems",
//     description:
//       "Set up real-time alerts via Slack, Teams, or email to monitor critical operational events.",
//   },
//   {
//     title: "Data Integration & Sync",
//     description:
//       "Connect e-commerce, CRM, ERP, and analytics tools to maintain consistent and accurate data across all platforms.",
//   },
//   {
//     title: "Reporting & Analytics Automation",
//     description:
//       "Generate dashboards and reports automatically, giving actionable insights without manual effort.",
//   },
//   {
//     title: "Internal Process Optimization",
//     description:
//       "Automate routine team workflows, approvals, and handoffs to improve efficiency and accountability.",
//   },
// ];

// export default function Services() {
//   return (
//     <section className="bg-white py-32">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Header */}
//         <div className="mb-20 max-w-xl">
//           <p className="text-xs uppercase tracking-[0.35em] text-black/50 mb-4">
//             Services
//           </p>
//           <h2 className="text-4xl font-medium text-black leading-tight">
//             What I offer
//           </h2>
//         </div>

//         {/* Services Grid */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="grid md:grid-cols-2 lg:grid-cols-3 gap-16"
//         >
//           {services.map((s, idx) => (
//             <motion.div
//               key={idx}
//               variants={item}
//               className="relative flex flex-col gap-3"
//             >
//               {/* Signal line */}
//               <span className="block h-px w-16 bg-black/30 mb-2" />

//               {/* Title */}
//               <h3 className="text-xl font-semibold text-black">{s.title}</h3>

//               {/* Description */}
//               <p className="text-black/70 leading-relaxed text-sm sm:text-base">
//                 {s.description}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
"use client";
const services = [
  {
    title: "Automation Workflows",
    description:
      "Eliminate manual steps with fully auditable workflows, clear handoffs, and consistent execution.",
  },
  {
    title: "Custom n8n Solutions",
    description:
      "Design end-to-end automation tailored to your data, systems, and operational requirements.",
  },
  {
    title: "Integrations",
    description:
      "Connect CRMs, e-commerce stores, email, databases, webhooks, and custom endpoints for seamless data flow.",
  },
  {
    title: "Process Audits",
    description:
      "Analyze current operations, remove friction, and standardize workflows for repeatable results.",
  },
  {
    title: "Monitoring & Alerts",
    description:
      "Implement health checks, logging, alerts, and graceful failure paths to ensure workflow reliability.",
  },
  {
    title: "Documentation & Runbooks",
    description:
      "Provide clear diagrams, runbooks, and owner-friendly guides to make systems maintainable and transparent.",
  },
];


import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
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

export default function Services() {
  return (
    <section className="bg-white ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 max-w-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-black/50 mb-4">
            Services
          </p>
          <h2 className="text-4xl font-medium text-black leading-tight">
            What I offer
          </h2>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-16"
        >
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="relative flex flex-col gap-3"
            >
              {/* Signal line */}
              <span className="block h-px w-16 bg-black/30 mb-2" />

              {/* Title */}
              <h3 className="text-xl font-semibold text-black">{s.title}</h3>

              {/* Description */}
              <p className="text-black/70 leading-relaxed text-sm sm:text-base">
                {s.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
