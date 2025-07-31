'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from './ui/button';

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <motion.section
        id="home"
        className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
    >
      <motion.h1
        className="text-6xl font-bold font-headline tracking-tighter text-foreground md:text-8xl lg:text-9xl text-glow"
        variants={itemVariants}
      >
        Hi, I'm Amit
      </motion.h1>
      <motion.p
        className="mt-6 max-w-2xl text-lg text-foreground/80 md:text-xl"
        variants={itemVariants}
      >
        A creative developer turning ideas into beautiful and functional web experiences.
      </motion.p>
      <motion.div className="mt-10 flex gap-4" variants={itemVariants}>
        <Button asChild size="lg" className="rounded-full">
          <Link href="#projects" data-cursor-hover>View My Work</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="rounded-full">
          <Link href="#contact" data-cursor-hover>Get In Touch</Link>
        </Button>
      </motion.div>
      <motion.div
        className="absolute bottom-10"
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: [0, -10, 0], opacity: [1, 0.5, 1] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut"
        }}
      >
        <div className="h-10 w-6 rounded-full border-2 border-foreground/50">
          <motion.div
            className="mx-auto mt-2 h-2 w-2 rounded-full bg-foreground/50"
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
