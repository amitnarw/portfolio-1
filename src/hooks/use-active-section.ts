'use client';

import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds: string[], rootMargin = '-50% 0px -50% 0px') {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin }
    );

    const sections = sectionIds.map((id) => document.getElementById(id));
    
    sections.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [sectionIds, rootMargin]);

  return activeSection;
}
