
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
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      itemsRef.current.forEach((item) => {
        if (item) {
          gsap.from(item, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          });
        }
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
      <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2 md:order-1">
          {certifications.map((item, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className="certification-item group"
            >
              <Link
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
              >
                <div className="flex h-full flex-col items-start gap-4 rounded-lg border border-transparent p-6 transition-all duration-300 hover:border-border/50 hover:bg-card/50 md:flex-row">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                    <FileText className="h-6 w-6" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col items-start justify-between">
                      <h3 className="text-xl font-bold font-headline text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 flex-shrink-0 text-sm font-medium text-foreground/60">
                        {item.year}
                      </p>
                    </div>
                    <p className="mt-1 text-lg text-accent">{item.issuer}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="md:col-span-1 md:order-2">
          <h2 className="sticky top-24 text-3xl font-bold font-headline tracking-tight md:text-4xl gradient-text md:text-right">
            Certifications
          </h2>
        </div>
      </div>
    </motion.section>
  );
}
