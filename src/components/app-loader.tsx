'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const welcomeMessages = ["Hello", "Bonjour", "Hola", "Ciao", "Olá", "Namaste", "Konnichiwa"];

const progressVariants = {
    initial: { width: '0%' },
    enter: { width: '100%', transition: { duration: 1.8, ease: "easeOut" } }
};

export function AppLoader() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % welcomeMessages.length);
    }, 250);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
      key="loader"
      initial="hidden"
      animate="visible"
      exit={{opacity: 0, transition: {duration: 0.5}}}
    >
        <motion.h1 className="sr-only">Aura Portfolio</motion.h1>
      
      <div className="w-48 overflow-hidden font-headline">
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
