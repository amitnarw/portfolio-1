'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
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
    description: "An analytics dashboard that provides real-time insights and data visualization for SaaS companies.",
    image: "https://placehold.co/600x400.png",
    hint: "dashboard analytics",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    liveUrl: "#",
  },
  {
    title: "Nova CRM",
    description: "A customer relationship management platform designed for small businesses to manage leads and sales pipelines.",
    image: "https://placehold.co/600x400.png",
    hint: "crm software",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "#",
  },
  {
    title: "Aether CMS",
    description: "A headless content management system with a focus on developer experience and a flexible API.",
    image: "https://placehold.co/600x400.png",
    hint: "software interface",
    tags: ["SvelteKit", "GraphQL", "PostgreSQL", "Docker"],
    liveUrl: "#",
  },
  {
    title: "Zenith Wallet",
    description: "A minimalist crypto wallet for managing digital assets on the go, with top-tier security features.",
    image: "https://placehold.co/600x400.png",
    hint: "mobile app",
    tags: ["React Native", "Firebase", "ethers.js"],
    liveUrl: "#",
  },
];

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 } },
};

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <motion.section
        id="projects"
        className="container mx-auto max-w-7xl py-20 md:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tight text-primary md:text-5xl">My Work</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <motion.div key={project.title} variants={sectionVariants}>
                <ProjectCard project={project} onOpen={() => setSelectedProject(project)} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <Dialog open={!!selectedProject} onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-primary">{selectedProject.title}</DialogTitle>
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
