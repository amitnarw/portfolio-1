'use client';

import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

const letterVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, 0.01, 0.95],
    },
  },
};

export function LoadingAnimation() {
  const text = "AURA";
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
      key="loader"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <motion.h1 className="sr-only">Aura Portfolio</motion.h1>
      <motion.div className="flex text-6xl font-bold tracking-widest text-primary" aria-hidden>
        {text.split("").map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
                {letter}
            </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
