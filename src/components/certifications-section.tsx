
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
    const sectionRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);
    const horizontalScrollRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const pin = gsap.fromTo(
            horizontalScrollRef.current,
            { translateX: 0 },
            {
                translateX: `-${(horizontalScrollRef.current?.scrollWidth ?? 0) - (triggerRef.current?.clientWidth ?? 0)}px`,
                ease: 'none',
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: 'top top',
                    end: '2000 top',
                    scrub: 0.6,
                    pin: true,
                },
            }
        );
        return () => {
            pin.kill();
        };
    }, []);


  return (
    <section ref={sectionRef} className="relative h-[300vh] py-20 md:py-32">
        <div ref={triggerRef} className="sticky top-0 h-screen">
            <div className="container mx-auto max-w-7xl h-full flex flex-col justify-center">
                <motion.h2 
                    className="mb-12 text-center text-4xl font-bold font-headline tracking-tight md:text-5xl gradient-text"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                >
                    Certifications
                </motion.h2>
                <div ref={horizontalScrollRef} className="flex gap-8">
                    {certifications.map((item, index) => (
                        <div key={index} className="group w-[350px] md:w-[450px] flex-shrink-0">
                             <Link href={item.url} target="_blank" rel="noopener noreferrer" data-cursor-hover>
                                <div className="flex h-full flex-col justify-between items-start gap-4 rounded-lg p-6 transition-all duration-300 glass-card h-full">
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
            </div>
        </div>
    </section>
  );
}
