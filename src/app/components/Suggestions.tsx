
// "use client";

// import { motion, Variants } from "framer-motion";

// const container: Variants = {
//   hidden: {},
//   show: {
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const item: Variants = {
//   hidden: { opacity: 0, x: -24 },
//   show: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };

// // High-value automations including full customer journey
// const suggestions = [
//   {
//     title: "CRM Lead Automation",
//     description:
//       "Automatically capture leads from multiple channels, enrich profiles, and assign to sales reps based on custom rules, ensuring no opportunity is missed.",
//   },
//   {
//     title: "Invoice & Billing Workflows",
//     description:
//       "Generate invoices, send reminders, reconcile payments, and update accounting systems automatically, reducing human error and financial overhead.",
//   },
//   {
//     title: "Customer Onboarding & Booking Flow",
//     description:
//       "Complete end-to-end customer process: capture query → provide automated answers → allow slot selection → process payment → send confirmations → store customer data in CRM automatically.",
//   },
//   {
//     title: "E-commerce Fulfillment",
//     description:
//       "Automatically sync orders, update inventory, generate shipping labels, and notify customers of delivery status in real-time.",
//   },
//   {
//     title: "Marketing & Retargeting",
//     description:
//       "Segment users based on behavior, launch targeted email/SMS campaigns, and retarget visitors automatically across multiple platforms.",
//   },
//   {
//     title: "Internal Task Automation",
//     description:
//       "Automatically assign tasks, generate reports, and send Slack/Teams alerts to the right stakeholders for high-priority events.",
//   },
// ];

// export default function Suggestions() {
//   return (
//     <section className="bg-white">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Header */}
//         <div className="mb-20 max-w-xl">
//           <p className="text-xs uppercase tracking-[0.35em] text-black/50 mb-4">
//             Capabilities
//           </p>
//           <h2 className="text-4xl font-medium text-black leading-tight">
//             Suggested Automations you can deploy
//           </h2>
//         </div>

//         {/* Suggestions Grid */}
//         <motion.div
//           variants={container}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: true }}
//           className="grid md:grid-cols-2 gap-16"
//         >
//           {suggestions.map((s, idx) => (
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
  hidden: { opacity: 0, x: -24 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// High-value automations including full customer journey
const suggestions = [
  {
    title: "CRM Lead Automation",
    description:
      "Automatically capture leads from all channels, enrich profiles, and assign to the right sales rep, ensuring every opportunity is followed up without delays.",
    metrics: "Increase lead-to-contact efficiency by up to 60%",
  },
  {
    title: "Invoice & Billing Workflows",
    description:
      "Generate invoices, send reminders, reconcile payments, and update accounting systems automatically, reducing errors and manual workload.",
    metrics: "Save 8–12 hours per week per finance team member",
  },
  {
    title: "End-to-End Customer Journey",
    description:
      "From initial query to answer, booking, payment, confirmation, and CRM storage—all automated for seamless customer experience.",
    metrics: "Accelerates customer onboarding by up to 70%",
  },
  {
    title: "E-commerce Fulfillment Automation",
    description:
      "Sync orders, update inventory, generate shipping labels, and notify customers in real-time without manual intervention.",
    metrics: "Reduces fulfillment errors by 90%",
  },
  {
    title: "Marketing & Retargeting",
    description:
      "Segment users based on behavior, launch targeted campaigns, and retarget visitors automatically across platforms to maximize ROI.",
    metrics: "Boost campaign engagement up to 3x",
  },
  {
    title: "Internal Task Automation",
    description:
      "Assign tasks, generate reports, and send alerts to stakeholders automatically, ensuring critical events are always actioned.",
    metrics: "Improves team response time by 50%",
  },
];

export default function Suggestions() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 max-w-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-black/50 mb-4">
            Capabilities
          </p>
          <h2 className="text-4xl font-medium text-black leading-tight">
            Automations that deliver measurable impact
          </h2>
        </div>

        {/* Suggestions Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16"
        >
          {suggestions.map((s, idx) => (
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

              {/* Metrics */}
              {s.metrics && (
                <p className="text-green-700 font-medium text-sm mt-1">
                  {s.metrics}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
