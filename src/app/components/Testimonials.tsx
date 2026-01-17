// "use client";

// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";

// export default function Testimonials() {
//   const testimonials = [
//     {
//       q: "Transformed our weekly workload. The critical steps now run without a checklist.",
//       a: "Operations Lead, SaaS",
//     },
//     {
//       q: "Clear plans, solid execution, and documentation we can own.",
//       a: "Founder, D2C",
//     },
//     {
//       q: "Reliable builds and steady improvements—exactly what we needed.",
//       a: "Head of Growth, E-commerce",
//     },
//   ];

//   const [idx, setIdx] = useState(0);
//   useEffect(() => {
//     const t = setInterval(
//       () => setIdx((p) => (p + 1) % testimonials.length),
//       4000
//     );
//     return () => clearInterval(t);
//   }, [testimonials.length]);

//   return (
//     <div className="relative max-w-3xl mx-auto px-4 sm:px-0">
//       <motion.figure
//         key={idx}
//         initial={{ opacity: 0, y: 16 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.45 }}
//         className="rounded-xl md:rounded-2xl border border-black/10 p-6 sm:p-8 bg-white text-center"
//       >
//         <blockquote className="text-lg md:text-xl leading-relaxed">
//           "{testimonials[idx].q}"
//         </blockquote>
//         <figcaption className="mt-4 text-black/70">
//           — {testimonials[idx].a}
//         </figcaption>
//       </motion.figure>
//       <div className="mt-6 flex items-center justify-center gap-2">
//         {testimonials.map((_, i) => (
//           <button
//             key={i}
//             aria-label={`Go to testimonial ${i + 1}`}
//             onClick={() => setIdx(i)}
//             className={`h-2 w-2 rounded-full border border-black/40 transition-all duration-300 ${
//               i === idx ? "bg-black scale-125" : "bg-white"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
"use client";

import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  source: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Critical operational steps now run reliably without manual checklists or follow-ups.",
    source: "Operations Lead — SaaS",
  },
  {
    quote:
      "Clear execution, well-defined scope, and documentation we can maintain internally.",
    source: "Founder — D2C",
  },
  {
    quote:
      "Stable workflows with ongoing improvements instead of constant fixes.",
    source: "Head of Growth — E-commerce",
  },
];

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % testimonials.length),
      4500
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white ">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20 max-w-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-black/50 mb-6">
            Validation
          </p>
          <h2 className="text-4xl font-medium text-black leading-tight">
            Signals from production use
          </h2>
        </div>

        {/* Testimonial */}
        <div className="relative max-w-3xl">
          {/* Signal line */}
          <div className="absolute -top-10 left-0 h-px w-32 bg-black/30" />

          <motion.div
            key={index}
            variants={item}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl leading-relaxed text-black">
              “{testimonials[index].quote}”
            </p>

            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-black/40" />
              <span className="text-sm font-mono text-black/60">
                {testimonials[index].source}
              </span>
            </div>
          </motion.div>

          {/* Progress indicator */}
          <div className="mt-10 flex items-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Testimonial ${i + 1}`}
                className="relative h-px w-10 bg-black/20"
              >
                {i === index && (
                  <motion.span
                    layoutId="activeTestimonial"
                    className="absolute inset-0 bg-black"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
