import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
];

export function Footer() {
    return (
        <footer className="border-t border-border/50">
            <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 py-8 sm:flex-row">
                <p className="text-sm text-foreground/60">
                    © {new Date().getFullYear()} Aura Portfolio. All rights reserved.
                </p>
                <div className="flex items-center gap-2">
                    {socialLinks.map((link) => (
                        <Button key={link.name} variant="ghost" size="icon" asChild>
                            <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} data-cursor-hover>
                                <link.icon className="h-5 w-5" />
                            </Link>
                        </Button>
                    ))}
                </div>
            </div>
        </footer>
    )
}
