// import { ReactNode } from "react";

// interface SocialLinkProps {
//   href: string;
//   label: string;
//   children: ReactNode;
// }

// export default function SocialLink({ href, label, children }: SocialLinkProps) {
//   return (
//     <a
//       aria-label={label}
//       href={href}
//       target="_blank"
//       rel="noreferrer"
//       className="p-2 rounded-full border border-black/15 hover:bg-black/5 transition-all duration-300 transform hover:-translate-y-1"
//     >
//       <span className="sr-only">{label}</span>
//       <span className="inline-flex">{children}</span>
//     </a>
//   );
// }
import { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  label: string;
  children: ReactNode;
}

export default function SocialLink({ href, label, children }: SocialLinkProps) {
  return (
    <a
      aria-label={label}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        flex items-center justify-center 
        p-3 
        rounded-md 
        
        hover:shadow-md 
        
        transform hover:-translate-y-1 hover:scale-105
        border-2
        border-black/10
      "
    >
      <span className="sr-only">{label}</span>
      {/* Center icon perfectly */}
      <span className="flex items-center justify-center">{children}</span>
    </a>
  );
}
