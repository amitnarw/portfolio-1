
'use client';

import { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
  {
    title: 'Certified Information Systems Security Professional (CISSP)',
    issuer: 'ISC²',
    year: '2023',
    url: '#',
  },
  {
    title: 'Microsoft Certified: Azure Solutions Architect Expert',
    issuer: 'Microsoft',
    year: '2022',
    url: '#',
  }
];

export function CertificationsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
          if (headingRef.current) {
            gsap.from(headingRef.current, {
              y: 100,
              opacity: 0,
              duration: 1,
              ease: 'power4.out',
              scrollTrigger: {
                trigger: headingRef.current,
                start: 'top 90%',
                toggleActions: 'play none none reverse',
              },
            });
          }
    
          const certificationItems = gsap.utils.toArray<HTMLElement>('.certification-item');
          certificationItems.forEach((item) => {
            gsap.from(item, {
              y: 80,
              opacity: 0,
              duration: 1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            });
          });
        }, containerRef);
    
        return () => ctx.revert();
      }, []);

  return (
    <motion.section
      id="certifications"
      ref={containerRef}
      className="container mx-auto max-w-7xl py-20 md:py-32"
    >
        <h2
            ref={headingRef}
            className="mb-12 text-center text-4xl font-bold font-headline tracking-tight md:text-5xl gradient-text"
        >
            Certifications
        </h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {certifications.map((item, index) => (
            <div key={index} className="certification-item group">
                 <Link href={item.url} target="_blank" rel="noopener noreferrer" data-cursor-hover>
                    <div className="flex h-full flex-col items-start gap-4 rounded-lg p-6 transition-all duration-300 hover:border-border/50 hover:bg-card/50">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                            <FileText className="h-6 w-6" />
                        </div>
                        <div className="flex-grow">
                            <div className="flex flex-col items-start justify-between">
                                <h3 className="text-xl font-bold font-headline text-foreground">{item.title}</h3>
                                <p className="flex-shrink-0 text-sm font-medium text-foreground/60 mt-2">{item.year}</p>
                            </div>
                            <p className="mt-1 text-lg text-accent">{item.issuer}</p>
                        </div>
                    </div>
                  </Link>
            </div>
            ))}
        </div>
    </motion.section>
  );
}
