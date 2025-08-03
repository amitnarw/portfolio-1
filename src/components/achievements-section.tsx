
'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const achievements = [
  {
    title: 'Awwwards Site of the Day',
    issuer: 'Awwwards',
    year: '2023',
    description: 'Awarded for exceptional design and development on the "QuantumLeap" project.',
  },
  {
    title: 'FWA of the Day',
    issuer: 'FWA',
    year: '2022',
    description: 'Recognized for innovation and creativity in the "Nova CRM" web application.',
  },
  {
    title: 'CSS Design Awards - Website of the Day',
    issuer: 'CSSDA',
    year: '2022',
    description: 'Honored for outstanding UI/UX design and implementation on "Aether CMS".',
  },
    {
    title: 'Top Voted on Product Hunt',
    issuer: 'Product Hunt',
    year: '2021',
    description: 'Ranked #1 product of the day for the launch of the "Zenith Wallet" application.',
    },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export function AchievementsSection() {
  return (
    <motion.section
      id="achievements"
      className="container mx-auto max-w-7xl py-20 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <h2 className="mb-12 text-center text-4xl font-bold font-headline tracking-tight md:text-5xl gradient-text">
        Achievements & Awards
      </h2>
      <div className="mx-auto max-w-4xl">
        <div className="space-y-4">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="flex flex-col md:flex-row items-start gap-4 rounded-lg border border-transparent p-6 transition-all duration-300 group-hover:border-border/50 group-hover:bg-card/50">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Award className="h-6 w-6" />
                </div>
                <div className="flex-grow">
                  <div className="flex flex-col items-start justify-between md:flex-row">
                    <h3 className="text-xl font-bold font-headline text-foreground">
                      {item.title}
                    </h3>
                    <p className="flex-shrink-0 text-sm font-medium text-foreground/60 md:mt-1">
                      {item.year}
                    </p>
                  </div>
                  <p className="mt-1 text-lg text-primary">{item.issuer}</p>
                   <motion.p 
                        className="mt-3 text-base text-foreground/70 transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100"
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
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
