
'use client';

import { motion } from 'framer-motion';
import { Briefcase, FileText, Star } from 'lucide-react';
import Link from 'next/link';

const certifications = [
  {
    title: 'Google Certified Professional - Cloud Architect',
    issuer: 'Google Cloud',
    year: '2023',
    url: '#',
  },
  {
    title: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'The Linux Foundation',
    year: '2022',
    url: '#',
  },
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    year: '2021',
    url: '#',
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

export function CertificationsSection() {
  return (
    <motion.section
      id="certifications"
      className="container mx-auto max-w-7xl py-20 md:py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <h2 className="mb-12 text-center text-4xl font-bold font-headline tracking-tight md:text-5xl gradient-text">
        Certifications
      </h2>
      <div className="mx-auto max-w-4xl">
        <div className="space-y-4">
          {certifications.map((item, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <Link href={item.url} target="_blank" rel="noopener noreferrer" data-cursor-hover>
                <div className="flex flex-col md:flex-row items-start gap-4 rounded-lg border border-transparent p-6 transition-all duration-300 group-hover:border-border/50 group-hover:bg-card/50">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                        <FileText className="h-6 w-6" />
                    </div>
                    <div className="flex-grow">
                        <div className="flex flex-col items-start justify-between md:flex-row">
                            <h3 className="text-xl font-bold font-headline text-foreground">{item.title}</h3>
                            <p className="flex-shrink-0 text-sm font-medium text-foreground/60 md:mt-1">{item.year}</p>
                        </div>
                        <p className="mt-1 text-lg text-accent">{item.issuer}</p>
                    </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
