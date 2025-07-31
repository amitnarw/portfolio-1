'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export function AboutSection() {
  return (
    <motion.section
      id="about"
      className="container mx-auto max-w-7xl py-20 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3">
            <div className="md:col-span-2">
                <h2 className="mb-4 text-4xl font-bold font-headline tracking-tight text-primary md:text-5xl text-glow">About Me</h2>
                <p className="mb-4 text-lg text-foreground/80">
                I&apos;m a passionate and self-taught developer with a love for creating beautiful, intuitive, and high-performance web applications. My journey into code started with a simple curiosity and has grown into a full-fledged obsession with building things for the web.
                </p>
                <p className="text-lg text-foreground/80">
                With a strong foundation in React, Next.js, and modern JavaScript, I enjoy tackling complex problems and turning them into elegant solutions. When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source projects, or brewing the perfect cup of coffee.
                </p>
            </div>
            <div className="relative h-64 w-64 justify-self-center md:h-80 md:w-80">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl"></div>
                <Image
                    src="https://placehold.co/400x400.png"
                    alt="A portrait of Amit"
                    width={400}
                    height={400}
                    data-ai-hint="man portrait"
                    className="relative rounded-full border-4 border-primary object-cover"
                />
            </div>
        </div>
    </motion.section>
  );
}
