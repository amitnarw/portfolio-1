'use client';
import { useState, useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ProjectCard, type Project } from './project-card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Image from 'next/image';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { Button } from './ui/button';
import { ArrowUpRight } from 'lucide-react';


const projects: Project[] = [
  {
    title: "QuantumLeap",
    description: "An analytics dashboard that provides real-time insights and data visualization for SaaS companies. Built with a focus on performance and user experience.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    hint: "dashboard analytics",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts", "GSAP"],
    liveUrl: "#",
  },
  {
    title: "Nova CRM",
    description: "A customer relationship management platform designed for small businesses to manage leads, opportunities, and sales pipelines with an intuitive interface.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=600&auto=format&fit=crop",
    hint: "crm software",
    tags: ["React", "Node.js", "Express", "MongoDB", "Material-UI"],
    liveUrl: "#",
  },
  {
    title: "Aether CMS",
    description: "A headless content management system offering a flexible GraphQL API and a powerful editor experience for developers and content creators alike.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbb563?q=80&w=600&auto=format&fit=crop",
    hint: "software interface",
    tags: ["SvelteKit", "GraphQL", "PostgreSQL", "Docker", "Auth.js"],
    liveUrl: "#",
  },
  {
    title: "Zenith Wallet",
    description: "A minimalist and secure crypto wallet for managing digital assets on the go. Supports multiple blockchains and includes biometric authentication.",
    image: "https://images.unsplash.com/photo-1634424410915-a9b0a1a01538?q=80&w=600&auto=format&fit=crop",
    hint: "mobile app",
    tags: ["React Native", "Firebase", "ethers.js", "Solidity"],
    liveUrl: "#",
  },
  {
    title: "ConnectSphere",
    description: "A social networking platform for professionals to connect, share insights, and build their personal brand. Features real-time chat and event organization.",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=600&auto=format&fit=crop",
    hint: "social network",
    tags: ["Vue.js", "Django", "websockets", "Redis"],
    liveUrl: "#",
  },
  {
    title: "EcoTrack",
    description: "An application for tracking personal carbon footprint and promoting sustainable habits through gamification and community challenges.",
    image: "https://images.unsplash.com/photo-1611270425838-6fe794628889?q=80&w=600&auto=format&fit=crop",
    hint: "sustainability app",
    tags: ["Flutter", "Firebase", "Google Maps API"],
    liveUrl: "#",
  }
];

gsap.registerPlugin(ScrollTrigger);

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        if (gridRef.current) {
            const cards = gsap.utils.toArray<HTMLDivElement>('.project-card-wrapper');
            gsap.from(cards, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                ease: 'power3.out',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: 'top 80%', 
                    toggleActions: 'play none none none',
                }
            });
        }
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        id="projects"
        ref={containerRef}
        className="container mx-auto max-w-7xl py-20 md:py-32"
      >
        <h2 className="mb-12 text-center text-4xl font-bold font-headline tracking-tight md:text-5xl gradient-text">My Work</h2>
        <div ref={gridRef} className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="project-card-wrapper">
                <ProjectCard project={project} onOpen={() => setSelectedProject(project)} />
            </div>
          ))}
        </div>
      </section>

      <Dialog open={!!selectedProject} onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)}>
        <DialogContent className="max-w-3xl glass-card">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold font-headline text-primary">{selectedProject.title}</DialogTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                    {selectedProject.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
              </DialogHeader>
              <DialogDescription className="text-base text-foreground/80">
                {selectedProject.description}
              </DialogDescription>
              <div className="aspect-video w-full overflow-hidden rounded-lg border">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={1200}
                  height={675}
                  data-ai-hint={selectedProject.hint}
                  className="h-full w-full object-cover"
                />
              </div>
              <Button asChild className="w-fit">
                <Link href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" data-cursor-hover>
                  View Live Site <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
