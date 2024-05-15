"use client";

import { motion, useAnimationControls } from "framer-motion";
import { ReactNode } from "react";

export default function RubberBand({
  children,
  viewBox,
}: {
  children: ReactNode;
  viewBox: string;
}) {
  const controls = useAnimationControls();

  const bouncingEffect = () => {
    controls.start({
      transform: [
        "scale(1, 1)",
        "scale(1.4, .6)",
        "scale(.85, 1.2)",
        "scale(1.25, .85)",
        "scale(.9, 1.05 )",
        "scale(1, 1)",
      ],
      transition: {
        times: [0, 0.4, 0.6, 0.7, 0.8, 0.9],
      },
    });
  };

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      fill="currentColor"
      className="h-6 w-6"
      aria-hidden="true"
      onMouseOver={bouncingEffect}
      animate={controls}
    >
      {children}
    </motion.svg>
  );
}
