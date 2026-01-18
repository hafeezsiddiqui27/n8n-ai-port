// "use client";

// import { useEffect, useMemo, useState } from "react";
// import Link from "next/link";

// export default function Nav() {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     document.body.style.overflow = open ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [open]);

//   const links = useMemo(
//     () => [
//       { href: "#about", label: "About" },
//       { href: "#services", label: "Services" },
//       { href: "#automations", label: "Automations" },
//       { href: "#portfolio", label: "Work" },
//       { href: "#process", label: "Process" },
//       { href: "#testimonials", label: "Testimonials" },
//       { href: "#contact", label: "Contact" },
//     ],
//     []
//   );

//   return (
//     <>
//       {/* DESKTOP FLOATING NAV */}
//       <nav
//          className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
//     hidden md:flex items-center
//     px-10 lg:px-14 h-14 rounded-full
//     border border-black/10
//     bg-white/70 backdrop-blur-xl
//     shadow-sm transition-all duration-300
//     ${scrolled ? "h-12 px-6 lg:px-8" : ""}
//   `}

//       >
//         <Link
//           href="#"
//           className="font-semibold tracking-tight mr-12 hover:opacity-80"
//         >
//           HS
//         </Link>

//         <ul className="flex items-center gap-6 text-xsm">
//           {links.slice(0, -1).map((l) => (
//             <li key={l.href}>
//               <a
//                 href={l.href}
//                 className="hover:underline underline-offset-4 decoration-black/40 transition"
//               >
//                 {l.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         <a
//           href="#contact"
//           className="ml-6 px-4 py-2 rounded-full
//             bg-black text-white text-sm
//             transition hover:bg-gray-800"
//         >
//           Hire me
//         </a>
//       </nav>

//       {/* MOBILE TOP BAR */}
//       <nav
//         className={`fixed top-0 inset-x-0 z-50 md:hidden
//           border-b border-black/10
//           bg-white/80 backdrop-blur-xl transition-all duration-300
//           ${scrolled ? "py-2" : "py-4"}
//         `}
//       >
//         <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
//           <Link href="#" className="font-semibold tracking-tight">
//             HS • Automation
//           </Link>

//           <button
//             onClick={() => setOpen(true)}
//             aria-label="Open menu"
//             className="p-2 rounded-lg border border-black/10"
//           >
//             <span className="block w-5 h-0.5 bg-black mb-1" />
//             <span className="block w-5 h-0.5 bg-black mb-1" />
//             <span className="block w-5 h-0.5 bg-black" />
//           </button>
//         </div>
//       </nav>

//       {/* MOBILE BACKDROP */}
//       <div
//         onClick={() => setOpen(false)}
//         className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm
//           transition-opacity duration-300
//           ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
//         `}
//       />

//       {/* MOBILE SIDE DRAWER */}
//       <aside
//         className={`fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm
//           bg-white/85 backdrop-blur-xl border-l border-black/10
//           transition-transform duration-300 ease-out
//           ${open ? "translate-x-0" : "translate-x-full"}
//         `}
//       >
//         <div className="px-6 py-6 flex flex-col h-full">
//           <div className="flex items-center justify-between mb-8">
//             <span className="font-semibold tracking-tight">
//               HS • Automation
//             </span>
//             <button
//               onClick={() => setOpen(false)}
//               className="text-2xl leading-none opacity-70 hover:opacity-100"
//             >
//               ×
//             </button>
//           </div>

//           <nav className="flex flex-col gap-4 text-base">
//             {links.map((l) => (
//               <a
//                 key={l.href}
//                 href={l.href}
//                 onClick={() => setOpen(false)}
//                 className="py-2 border-b border-black/5 hover:opacity-70 transition"
//               >
//                 {l.label}
//               </a>
//             ))}
//           </nav>

//           <div className="mt-auto pt-6">
//             <a
//               href="#contact"
//               onClick={() => setOpen(false)}
//               className="block text-center px-4 py-3 rounded-lg
//                 bg-black text-white hover:shadow-md transition"
//             >
//               Hire me
//             </a>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// }
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll to shrink nav
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = useMemo(
    () => [
      { href: "#about", label: "About" },
      { href: "#services", label: "Services" },
      { href: "#automations", label: "Automations" },
      { href: "#portfolio", label: "Work" },
      { href: "#process", label: "Process" },
      { href: "#testimonials", label: "Testimonials" },
      { href: "#contact", label: "Contact" },
    ],
    [],
  );

  return (
    <>
      {/* DESKTOP FLOATING NAV */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50
    hidden md:flex items-center
    px-8 lg:px-14 h-14 rounded-full
    border border-black/10
    bg-white/70 backdrop-blur-xl
    shadow-sm transition-all duration-300
    ${scrolled ? "h-12 px-6 lg:px-10" : ""}
  `}
      >
        <Link
          href="#"
          className="font-semibold tracking-tight mr-12 hover:opacity-80"
        >
          HS
        </Link>

        <ul className="flex items-center gap-6 text-xsm">
          {links.slice(0, -1).map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:underline underline-offset-4 decoration-black/40 transition"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="ml-8 px-4 py-2 rounded-full
      bg-black text-white text-sm
      whitespace-nowrap
      transition hover:bg-gray-800"
        >
          Hire me
        </a>
      </nav>

      {/* MOBILE FLOATING TOP BAR */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 md:hidden
          border border-black/10
          bg-white/70 backdrop-blur-xl rounded-full
          max-w-sm w-[90%]
          flex items-center justify-between
          shadow-md
          transition-all duration-300
          ${scrolled ? "py-2 px-5" : "py-3 px-6"}
        `}
      >
        <Link href="#" className="font-semibold tracking-tight">
          HS
        </Link>

        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="p-2 rounded-lg border border-black/10"
        >
          <span className="block w-5 h-0.5 bg-black mb-1" />
          <span className="block w-5 h-0.5 bg-black mb-1" />
          <span className="block w-5 h-0.5 bg-black" />
        </button>
      </nav>

      {/* MOBILE BACKDROP */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-sm
          transition-opacity duration-300
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      />

      {/* MOBILE SIDE DRAWER */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm
          bg-white/85 backdrop-blur-xl border-l border-black/10
          transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="px-6 py-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <span className="font-semibold tracking-tight">
              HS • Automation
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-2xl leading-none opacity-70 hover:opacity-100"
            >
              ×
            </button>
          </div>

          <nav className="flex flex-col gap-4 text-base">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 border-b border-black/5 hover:opacity-70 transition"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-6">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block text-center px-4 py-3 rounded-lg
                bg-black text-white hover:shadow-md transition"
            >
              Hire me
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
