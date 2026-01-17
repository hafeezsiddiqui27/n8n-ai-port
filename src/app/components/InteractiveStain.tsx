"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function InteractiveStain() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      if ("touches" in e && e.touches[0]) {
        setPos({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      } else if ("clientX" in e) {
        setPos({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0"
      animate={{
        background: `radial-gradient(
          700px at ${pos.x}px ${pos.y}px,
          rgba(99, 102, 241, 0.18),
          rgba(99, 102, 241, 0.08) 40%,
          transparent 70%
        )`,
      }}
      transition={{
        type: "spring",
        stiffness: 70,
        damping: 28,
        mass: 0.7,
      }}
    />
  );
}
