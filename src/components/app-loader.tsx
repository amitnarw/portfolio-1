'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const letterVariants = (i: number) => ({
    hidden: { y: 50, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: i * 0.05,
            duration: 0.5,
            ease: [0.6, 0.05, -0.01, 0.9],
        },
    },
});

const progressVariants = {
    initial: { width: '0%' },
    enter: { width: '100%', transition: { duration: 2, ease: [0.6, 0.05, -0.01, 0.9] } }
};


const welcomeMessages = ["Hello", "Bonjour", "Hola", "Ciao", "Olá", "Namaste", "Konnichiwa"];

export function AppLoader() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % welcomeMessages.length);
    }, 250);

    return () => clearInterval(interval);
  }, []);
  
  const text = "AURA";
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
      key="loader"
      initial="hidden"
      animate="visible"
      exit={{opacity: 0, transition: {duration: 0.5}}}
    >
      <motion.div className="flex text-6xl font-bold tracking-widest text-primary mb-8" aria-hidden>
        {text.split("").map((letter, i) => (
            <motion.span key={i} variants={letterVariants(i)}>
                {letter}
            </motion.span>
        ))}
      </motion.div>

      <div className="absolute bottom-1/4 w-48 overflow-hidden font-headline">
        <AnimatePresence mode="wait">
            <motion.div
                key={welcomeMessages[index]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.2, ease: 'easeInOut' } }}
                exit={{ y: -20, opacity: 0 }}
                className="text-center text-lg text-foreground/80"
            >
                {welcomeMessages[index]}
            </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-20 h-1 w-64 bg-foreground/10">
        <motion.div 
            className="h-1 bg-primary"
            variants={progressVariants}
            initial="initial"
            animate="enter"
        />
      </div>

    </motion.div>
  );
}
