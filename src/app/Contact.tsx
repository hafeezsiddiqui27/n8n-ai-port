// // import { FaLocationArrow } from "react-icons/fa6";
// // // import { socialMedia } from "@/data";
// // import MagicButton from "./components/MagicButton";
// // import Image from "next/image";

// // export const socialMedia = [
// //   {
// //     id: 1,
// //     img: "/git.svg",
// //     link: "https://github.com/hafeezsiddiqui27",
// //   },
// //   {
// //     id: 2,
// //     img: "/twit.svg",
// //     link: "https://twitter.com/hafeezusiddiqui",
// //   },
// //   {
// //     id: 3,
// //     img: "/link.svg",
// //     link: "https://www.linkedin.com/in/hafeez-uddin-ahmed-siddiqui",
// //   },
// // ];

// // const Contact = () => {
// //   return (
// //     <footer
// //       className="relative w-full  pb-10 bg-white text-black"
// //       id="contact"
// //     >
// //       {/* Subtle grid background */}
// //       <div className="absolute inset-x-0 -bottom-72 min-h-96 z-0">
// //         <img
// //           src="/footer-grid.svg"
// //           alt="footer background grid"
// //           className="w-full h-full opacity-20 object-cover"
// //         />
// //       </div>

// //       {/* Content */}
// //       <div className="relative z-10 flex flex-col  items-center text-center px-4">
// //         <h1 className="font-bold text-4xl md:text-5xl text-center lg:max-w-[45vw]">
// //           Ready to take <span className="text-green-600 ">YOUR</span> digital
// //           presence to the next level?
// //         </h1>
// //         <p className="text-gray-700 md:mt-10 my-5 max-w-xl">
// //           Reach out to me today and let&apos;s discuss how I can help you
// //           get automated.
// //         </p>

// //         <a href="mailto:hafeez27isbest@gmail.com">
// //           <MagicButton
// //             title="Let's get in touch"
// //             icon={<FaLocationArrow />}
// //             position="right"
// //           />
// //         </a>
// //       </div>

// //       {/* Bottom bar */}
// //       <div className="relative z-10 md:-mt-40 mt-20 flex flex-col md:flex-row justify-between items-center gap-6 px-6">
// //         {/* <p className="text-sm md:text-base font-light text-gray-500">
// //           © 2024 Hafeez. All rights reserved.
// //         </p> */}

// //         <div className="flex items-center md:flex-col flex-row gap-4">
// //           {socialMedia.map((info) => (
// //             <a
// //               key={info.id}
// //               href={info.link}
// //               target="_blank"
// //               rel="noopener noreferrer"
// //               className="w-10 h-10 flex justify-center items-center rounded-lg border border-gray-300 bg-black hover:bg-gray-200 transition"
// //             >
// //               <Image alt="info.img" src={info.img} width={20} height={20} />
// //             </a>
// //           ))}
// //         </div>
// //       </div>
// //     </footer>
// //   );
// // };

// // export default Contact;
// "use client";

// import { FaLocationArrow } from "react-icons/fa6";
// import MagicButton from "./components/MagicButton";
// import Image from "next/image";

// export const socialMedia = [
//   {
//     id: 1,
//     img: "/git.svg",
//     link: "https://github.com/hafeezsiddiqui27",
//   },
//   {
//     id: 2,
//     img: "/twit.svg",
//     link: "https://twitter.com/hafeezusiddiqui",
//   },
//   {
//     id: 3,
//     img: "/link.svg",
//     link: "https://www.linkedin.com/in/hafeez-uddin-ahmed-siddiqui",
//   },
// ];

// const Contact = () => {
//   return (
//     <footer
//       id="contact"
//       className="relative w-full bg-white text-black py-28 overflow-hidden"
//     >
//       {/* Subtle grid background */}
//       <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]">
//         <img
//           src="/footer-grid.svg"
//           alt=""
//           className="w-full h-full object-cover"
//         />
//       </div>

//       {/* Content */}
//       <div className="mx-auto max-w-4xl px-4 text-center flex flex-col items-center">
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight">
//           Let’s build systems that
//           <br />
//           <span className="font-medium">run without friction</span>
//         </h2>

//         <p className="mt-6 text-base sm:text-lg text-black/60 max-w-xl">
//           Whether it’s automation, integrations, or reliable workflows —
//           I help teams reduce manual work and scale with confidence.
//         </p>

//         <a href="mailto:hafeez27isbest@gmail.com" className="mt-10">
//           <MagicButton
//             title="Start a conversation"
//             icon={<FaLocationArrow />}
//             position="right"
//           />
//         </a>
//       </div>

//       {/* Bottom bar */}
//       <div className="mt-24 flex flex-col items-center gap-6">
//         <div className="flex items-center gap-3">
//           {socialMedia.map((info) => (
//             <a
//               key={info.id}
//               href={info.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="w-9 h-9 flex items-center justify-center rounded-md border border-black/10 text-black/60 hover:text-black hover:border-black transition-all duration-300"
//             >
//               <Image src={info.img} alt="" width={18} height={18} />
//             </a>
//           ))}
//         </div>

//         <p className="text-xs tracking-wide text-black/40">
//           © {new Date().getFullYear()} Hafeez Siddiqui
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Contact;
"use client";

import {
  FaGithub,
  FaLinkedin,
  FaLocationArrow,
  FaXTwitter,
} from "react-icons/fa6";
import MagicButton from "./components/MagicButton";

import SocialLink from "./components/SocialLink";
import { motion } from "framer-motion";
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay },
});

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/hafeezsiddiqui27",
    alt: "GitHub",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/hafeezusiddiqui",
    alt: "X / Twitter",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/hafeez-uddin-ahmed-siddiqui",
    alt: "LinkedIn",
  },
];

const Contact = () => {
  return (
    <footer
      id="contact"
      className="relative w-full bg-white text-black py-28 overflow-hidden"
    >
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05]">
        <img
          src="/footer-grid.svg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-4 text-center flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight leading-tight">
          Tired of wasting hours on repetitive tasks?
          <br />
          <span className="font-medium">Let automation handle it for you.</span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-black/60 max-w-xl">
          Every minute spent manually updating spreadsheets, sending emails, or
          moving data between systems is lost productivity. I design automation
          workflows that save you hundreds of hours — so your team can focus on
          growth, not grunt work.
        </p>

        <a href="mailto:hafeezusiddiqui4@gmail.com" className="mt-10">
          <MagicButton
            title="Get a Free Consultation"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Bottom bar */}
      <div className="mt-24 flex flex-col items-center gap-6">
        <motion.div
          {...fadeUp(0.45)}
          className="mt-8 flex items-center justify-center gap-6"
        >
          <SocialLink
            href="https://www.linkedin.com/in/hafeez-uddin-ahmed-siddiqui"
            label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </SocialLink>

          <SocialLink href="https://github.com/hafeezsiddiqui27" label="GitHub">
            <FaGithub size={20} />
          </SocialLink>

          <SocialLink href="https://x.com/HafeezuSiddiqui" label="X">
            <FaXTwitter size={20} />
          </SocialLink>
        </motion.div>

        <p className="text-xs tracking-wide text-black/40 mt-4">
          © {new Date().getFullYear()} Hafeez Siddiqui
        </p>
      </div>
    </footer>
  );
};

export default Contact;
