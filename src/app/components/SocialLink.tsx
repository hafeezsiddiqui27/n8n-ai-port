
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
