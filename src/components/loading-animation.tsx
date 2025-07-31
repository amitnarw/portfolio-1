
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const welcomeMessages = ["Hello", "Bonjour", "Hola", "Ciao", "Olá", "Namaste", "Konnichiwa"];

const progressVariants = {
    initial: { width: '0%' },
    enter: { width: '100%', transition: { duration: 2, ease: [0.6, 0.05, 0.01, 0.95] } }
};


export function LoadingAnimation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % welcomeMessages.length);
    }, 350);

    const timer = setTimeout(() => {
        clearInterval(interval);
    }, 2000)

    return () => {
        clearInterval(interval);
        clearTimeout(timer);
    };
  }, []);
  
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
      key="loader"
      exit={{opacity: 0, transition: {duration: 0.5}}}
    >
        <motion.h1 className="sr-only">Aura Portfolio</motion.h1>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 overflow-hidden font-headline">
        <AnimatePresence mode="wait">
            <motion.p
                key={welcomeMessages[index]}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.3, ease: 'easeInOut' } }}
                exit={{ y: -20, opacity: 0 }}
                className="text-center text-2xl text-foreground/80"
            >
                {welcomeMessages[index]}
            </motion.p>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-20 h-0.5 w-64 bg-foreground/20">
        <motion.div 
            className="h-full bg-primary"
            variants={progressVariants}
            initial="initial"
            animate="enter"
        />
      </div>

    </motion.div>
  );
}
