// export default function Footer() {
//   return (
//     <footer className="mt-16 border-t border-black/10">
//       <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4">
//         <p className="text-sm text-black/70 text-center md:text-left">
//           © {new Date().getFullYear()} Hafeez Siddiqui
//         </p>
//         <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-sm">
//           <a
//             href="#about"
//             className="hover:underline underline-offset-4 transition-all duration-300"
//           >
//             About
//           </a>
//           <a
//             href="#services"
//             className="hover:underline underline-offset-4 transition-all duration-300"
//           >
//             Services
//           </a>
//           <a
//             href="#automations"
//             className="hover:underline underline-offset-4 transition-all duration-300"
//           >
//             Automations
//           </a>
//           <a
//             href="#portfolio"
//             className="hover:underline underline-offset-4 transition-all duration-300"
//           >
//             Work
//           </a>
//           <a
//             href="#contact"
//             className="hover:underline underline-offset-4 transition-all duration-300"
//           >
//             Contact
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }
"use client";

export default function Footer() {
  return (
    <footer className="relative mt-16 border-t border-black/10 bg-white/70 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm text-black/70 text-center md:text-left">
          © {new Date().getFullYear()} Hafeez Siddiqui
        </p>

        {/* Navigation links */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-sm">
          {[
            { href: "#about", label: "About" },
            { href: "#services", label: "Services" },
            { href: "#automations", label: "Automations" },
            { href: "#portfolio", label: "Work" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative hover:text-black/90 transition-colors duration-300 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[1px] before:bg-black/50 hover:before:w-full before:transition-all before:duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
