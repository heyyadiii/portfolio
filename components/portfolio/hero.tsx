"use client";

import { Mail, Linkedin, Github, MapPin, ExternalLink } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl">
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">Indore, India</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="text-foreground">Aditya Sisodiya</span>
        </h1>

        <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-medium mb-6">
          Java Backend Developer
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-8">
          Building scalable backend systems with Java, Spring Boot, and MySQL.
          Focused on clean architecture, efficient database design, and
          maintainable code that solves real problems.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="mailto:adityasisodiya758@gmail.com"
            className="inline-flex items-center justify-center gap-2 h-9 px-4 py-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
          >
            <Mail className="h-4 w-4" />
            Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/in/adityasisodiya05"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-9 px-4 py-2 rounded-md text-sm font-medium border bg-background hover:bg-accent hover:text-accent-foreground transition-all"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/heyyadiii"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-9 px-4 py-2 rounded-md text-sm font-medium border bg-background hover:bg-accent hover:text-accent-foreground transition-all"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a
            href="#projects"
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            View Projects <ExternalLink className="h-3 w-3" />
          </a>
          <a
            href="#experience"
            className="flex items-center gap-1 hover:text-primary transition-colors"
          >
            Experience <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
