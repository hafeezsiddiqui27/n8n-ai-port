import { FaLocationArrow } from "react-icons/fa6";
// import { socialMedia } from "@/data";
import MagicButton from "./components/MagicButton";
import Image from "next/image";



export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/hafeezsiddiqui27",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/hafeezusiddiqui",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/hafeez-uddin-ahmed-siddiqui",
  },
];


const Contact = () => {
  return (
    <footer
      className="relative w-full  pb-10 bg-white text-black"
      id="contact"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-x-0 -bottom-72 min-h-96 z-0">
        <img
          src="/footer-grid.svg"
          alt="footer background grid"
          className="w-full h-full opacity-20 object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col  items-center text-center px-4">
        <h1 className="font-bold text-4xl md:text-5xl text-center lg:max-w-[45vw]">
          Ready to take <span className="text-green-600 ">YOUR</span> digital
          presence to the next level?
        </h1>
        <p className="text-gray-700 md:mt-10 my-5 max-w-xl">
          Reach out to me today and let&apos;s discuss how I can help you
          get automated.
        </p>

        <a href="mailto:hafeez27isbest@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 md:-mt-40 mt-20 flex flex-col md:flex-row justify-between items-center gap-6 px-6">
        {/* <p className="text-sm md:text-base font-light text-gray-500">
          © 2024 Hafeez. All rights reserved.
        </p> */}

        <div className="flex items-center md:flex-col flex-row gap-4">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center rounded-lg border border-gray-300 bg-black hover:bg-gray-200 transition"
            >
              <Image alt="info.img" src={info.img} width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
