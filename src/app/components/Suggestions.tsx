// // "use client";

// // import { motion, Variants } from "framer-motion";

// // const container: Variants = {
// //   hidden: {},
// //   show: {
// //     transition: {
// //       staggerChildren: 0.15,
// //     },
// //   },
// // };

// // const item: Variants = {
// //   hidden: { opacity: 0, x: -24 },
// //   show: {
// //     opacity: 1,
// //     x: 0,
// //     transition: { duration: 0.6, ease: "easeOut" },
// //   },
// // };

// // // Self-contained data
// // const suggestions = [
// //   {
// //     title: "WhatsApp Notifications",
// //     description:
// //       "Order confirmations, delivery updates, and reminders are sent automatically, reducing manual follow-ups.",
// //   },
// //   {
// //     title: "E-commerce Sync",
// //     description:
// //       "Orders, inventory, and payments are automatically connected across store, ERP, and CRM systems.",
// //   },
// //   {
// //     title: "Lead Capture & Routing",
// //     description:
// //       "Web forms are ingested, profiles enriched, and leads auto-assigned to owners in real time.",
// //   },
// //   {
// //     title: "Marketing Triggers",
// //     description:
// //       "Behavior-based email and SMS campaigns with full logging and automated retries ensure no missed touchpoints.",
// //   },
// //   {
// //     title: "Finance Flows",
// //     description:
// //       "Invoice generation, payment reminders, and ledger updates are automated to prevent human errors.",
// //   },
// //   {
// //     title: "Team Alerts",
// //     description:
// //       "Slack and Teams notifications deliver high-value event context directly to the right stakeholders.",
// //   },
// // ];

// // export default function Suggestions() {
// //   return (
// //     <section className="bg-white ">
// //       <div className="max-w-6xl mx-auto px-6">
// //         {/* Header */}
// //         <div className="mb-20 max-w-xl">
// //           <p className="text-xs uppercase tracking-[0.35em] text-black/50 mb-4">
// //             Capabilities
// //           </p>
// //           <h2 className="text-4xl font-medium text-black leading-tight">
// //             Automations you can deploy
// //           </h2>
// //         </div>

// //         {/* Suggestions Grid */}
// //         <motion.div
// //           variants={container}
// //           initial="hidden"
// //           whileInView="show"
// //           viewport={{ once: true }}
// //           className="grid md:grid-cols-2 gap-16"
// //         >
// //           {suggestions.map((s, idx) => (
// //             <motion.div
// //               key={idx}
// //               variants={item}
// //               className="relative flex flex-col gap-3"
// //             >
// //               {/* Signal line */}
// //               <span className="block h-px w-16 bg-black/30 mb-2" />

// //               {/* Title */}
// //               <h3 className="text-xl font-semibold text-black">{s.title}</h3>

// //               {/* Description */}
// //               <p className="text-black/70 leading-relaxed text-sm sm:text-base">
// //                 {s.description}
// //               </p>
// //             </motion.div>
// //           ))}
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }
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

// // High-value automation examples
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
//     title: "Customer Onboarding",
//     description:
//       "Trigger personalized welcome emails, create accounts in SaaS tools, and schedule follow-ups automatically, delivering a seamless onboarding experience.",
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
//            Suggested Automations you can deploy
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
      "Automatically capture leads from multiple channels, enrich profiles, and assign to sales reps based on custom rules, ensuring no opportunity is missed.",
  },
  {
    title: "Invoice & Billing Workflows",
    description:
      "Generate invoices, send reminders, reconcile payments, and update accounting systems automatically, reducing human error and financial overhead.",
  },
  {
    title: "Customer Onboarding & Booking Flow",
    description:
      "Complete end-to-end customer process: capture query → provide automated answers → allow slot selection → process payment → send confirmations → store customer data in CRM automatically.",
  },
  {
    title: "E-commerce Fulfillment",
    description:
      "Automatically sync orders, update inventory, generate shipping labels, and notify customers of delivery status in real-time.",
  },
  {
    title: "Marketing & Retargeting",
    description:
      "Segment users based on behavior, launch targeted email/SMS campaigns, and retarget visitors automatically across multiple platforms.",
  },
  {
    title: "Internal Task Automation",
    description:
      "Automatically assign tasks, generate reports, and send Slack/Teams alerts to the right stakeholders for high-priority events.",
  },
];

export default function Suggestions() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 max-w-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-black/50 mb-4">
            Capabilities
          </p>
          <h2 className="text-4xl font-medium text-black leading-tight">
            Suggested Automations you can deploy
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
