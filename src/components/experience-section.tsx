
'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experienceHistory = [
  {
    role: 'Lead Creative Developer',
    company: 'PixelPerfect Studios',
    period: '2022 - Present',
    description: 'Leading a team of talented developers to create award-winning websites for high-profile clients. Responsible for project architecture, animation systems, and performance optimization.',
  },
  {
    role: 'Senior Frontend Developer',
    company: 'Innovate Co.',
    period: '2020 - 2022',
    description: 'Developed and maintained large-scale React applications, focusing on creating intuitive user interfaces and improving codebase quality through component-based architecture.',
  },
  {
    role: 'Web Developer',
    company: 'Digital Solutions Agency',
    period: '2018 - 2020',
    description: 'Built and deployed responsive websites for a variety of clients using modern web technologies. Gained strong experience in both frontend and backend development.',
  }
];

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function ExperienceSection() {
  return (
    <motion.section
      id="experience"
      className="container mx-auto max-w-7xl py-20 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <h2 className="mb-12 text-center text-4xl font-bold font-headline tracking-tight md:text-5xl gradient-text">
        Experience
      </h2>
      <div className="mx-auto max-w-4xl">
        <div className="space-y-4">
          {experienceHistory.map((item, index) => (
            <motion.div 
                key={index} 
                className="group"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
              <div className="flex flex-col md:flex-row items-start gap-4 rounded-lg border border-transparent p-6 transition-all duration-300 group-hover:border-border/50 group-hover:bg-card/50">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                      <Briefcase className="h-6 w-6" />
                  </div>
                  <div className="flex-grow">
                      <div className="flex flex-col items-start justify-between md:flex-row">
                          <h3 className="text-xl font-bold font-headline text-foreground">{item.role}</h3>
                          <p className="flex-shrink-0 text-sm font-medium text-foreground/60 md:mt-1">{item.period}</p>
                      </div>
                      <p className="mt-1 text-lg text-accent">{item.company}</p>
                      <div className="overflow-hidden">
                          <motion.p 
                              className="mt-3 text-base text-foreground/70 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100"
                              initial={{ height: 'auto' }}
                              animate={{ height: 'auto' }}
                              variants={{
                                visible: {
                                    height: 'auto',
                                    opacity: 1,
                                    transition: { duration: 0.5, ease: 'easeOut' }
                                },
                                hidden: {
                                    height: 'auto',
                                    opacity: 0.7,
                                    transition: { duration: 0.5, ease: 'easeOut' }
                                }
                              }}
                           >
                            {item.description}
                           </motion.p>
                      </div>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
