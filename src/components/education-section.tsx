
'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const educationHistory = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Stanford University',
    period: '2020 - 2022',
    description: 'Focused on Human-Computer Interaction and AI. Completed a thesis on generative models for UI design.',
  },
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'University of Waterloo',
    period: '2016 - 2020',
    description: 'Graduated with Distinction. Specialized in full-stack development and participated in multiple co-op programs.',
  },
];

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 } },
};

const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export function EducationSection() {
  return (
    <motion.section
      id="education"
      className="container mx-auto max-w-7xl py-20 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <h2 className="mb-12 text-center text-4xl font-bold font-headline tracking-tight md:text-5xl gradient-text">
        Education
      </h2>
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-4 top-4 h-full w-0.5 bg-border -z-10" />
        {educationHistory.map((item, index) => (
          <motion.div key={index} className="relative pl-12 pb-12" variants={itemVariants}>
            <div className="absolute left-0 top-1.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 ring-8 ring-background">
                    <GraduationCap className="h-5 w-5 text-primary" />
                </div>
            </div>
            <p className="text-sm font-semibold text-primary">{item.period}</p>
            <h3 className="mt-1 text-xl font-bold font-headline text-foreground">{item.degree}</h3>
            <p className="mt-1 text-lg text-foreground/80">{item.institution}</p>
            <p className="mt-2 text-base text-foreground/60">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
