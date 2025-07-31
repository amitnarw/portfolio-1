'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export interface Project {
  title: string;
  description: string;
  image: string;
  hint: string;
  tags: string[];
  liveUrl: string;
}

interface ProjectCardProps {
  project: Project;
  onOpen: () => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.div
      className="group relative h-80 w-full cursor-pointer overflow-hidden rounded-lg shadow-lg glass-card neon-glow"
      onClick={onOpen}
      data-cursor-hover
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Image
        src={project.image}
        alt={project.title}
        width={600}
        height={400}
        data-ai-hint={project.hint}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 flex flex-col items-start justify-end p-6 text-white">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="mt-2 text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {project.description}
        </p>
        <motion.div 
            className="mt-4 text-sm font-semibold text-accent"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
        >
            Click to view details
        </motion.div>
      </div>
    </motion.div>
  );
}
