
'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';
import { Code, Database, Globe, PencilRuler, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const skills = {
  frontend: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion"],
  backend: ["Node.js", "Express", "Python", "Firebase", "PostgreSQL", "MongoDB"],
  tools: ["Git", "Docker", "Webpack", "Vite", "Figma", "Jira"],
  design: ["UI/UX Principles", "Responsive Design", "Wireframing", "Prototyping"],
};

const skillCategories = [
    { name: "Frontend", icon: <Globe className="h-8 w-8 text-foreground" />, skills: skills.frontend, color: 'hsl(var(--primary)/0.1)' },
    { name: "Backend", icon: <Database className="h-8 w-8 text-foreground" />, skills: skills.backend, color: 'hsl(var(--accent)/0.1)' },
    { name: "Tools & DevOps", icon: <Code className="h-8 w-8 text-foreground" />, skills: skills.tools, color: 'hsl(var(--primary)/0.15)' },
    { name: "Design", icon: <PencilRuler className="h-8 w-8 text-foreground" />, skills: skills.design, color: 'hsl(var(--accent)/0.15)' },
];

const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.1 } },
};

const SkillRow = ({ category, onHover, isHovered, isAnyHovered }: { category: any, onHover: () => void, isHovered: boolean, isAnyHovered: boolean }) => {
    return (
        <motion.div
            className="group relative w-full border-b border-border/50 transition-colors duration-500"
            onMouseEnter={onHover}
            style={{
                backgroundColor: isHovered ? category.color : 'transparent',
            }}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
        >
            <div className={cn(
                "container mx-auto max-w-7xl flex justify-between items-center py-8 md:py-12 transition-opacity duration-500",
                isAnyHovered && !isHovered && 'opacity-50'
            )}>
                <div className="flex items-center gap-6 md:gap-8">
                    {category.icon}
                    <h3 className="text-2xl md:text-4xl font-bold font-headline tracking-tight text-foreground">{category.name}</h3>
                </div>
                <ArrowRight className="h-8 w-8 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0" />
            </div>
            <div
                className={cn(
                    "w-full overflow-hidden transition-[max-height] duration-700 ease-in-out",
                    isHovered ? 'max-h-96' : 'max-h-0'
                )}
            >
                <div className="container mx-auto max-w-7xl py-6">
                    <div className="flex flex-wrap gap-3 md:gap-4">
                        {category.skills.map((skill: string) => (
                            <Badge key={skill} variant="secondary" className="px-4 py-2 text-base md:text-lg" data-cursor-hover>
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-500 w-0 group-hover:w-full"></div>
        </motion.div>
    );
};


export function SkillsSection() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <motion.section
            id="skills"
            className="py-20 md:py-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
        >
            <div className="container mx-auto max-w-7xl">
                 <h2 className="mb-12 text-center text-4xl font-bold tracking-tight md:text-5xl gradient-text">My Skills</h2>
            </div>
            <div className="mt-12 border-t border-border/50" onMouseLeave={() => setHoveredIndex(null)}>
                {skillCategories.map((category, index) => (
                    <SkillRow
                        key={category.name}
                        category={category}
                        onHover={() => setHoveredIndex(index)}
                        isHovered={hoveredIndex === index}
                        isAnyHovered={hoveredIndex !== null}
                    />
                ))}
            </div>
        </motion.section>
    );
}
