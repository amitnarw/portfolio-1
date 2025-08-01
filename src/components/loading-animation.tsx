
'use client';

import { motion } from 'framer-motion';

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "50%",
  },
  end: {
    y: "150%",
  },
};

const loadingCircleTransition = {
  duration: 0.5,
  repeat: Infinity,
  ease: "easeInOut",
  repeatType: 'reverse' as const,
};

export function LoadingAnimation() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
      key="loader"
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="flex items-center">
        <span className="text-2xl font-headline text-foreground/80">Loading</span>
        <motion.div
          className="ml-2 flex h-6 w-10 justify-around"
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          <motion.span
            className="block h-2 w-2 rounded-full bg-primary"
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
          <motion.span
            className="block h-2 w-2 rounded-full bg-primary"
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
          <motion.span
            className="block h-2 w-2 rounded-full bg-primary"
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
