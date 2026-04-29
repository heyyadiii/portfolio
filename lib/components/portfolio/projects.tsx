"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "Student Management System",
    description:
      "A comprehensive web-based application for managing student records with full CRUD functionality. The system digitizes manual record management processes, ensuring data accuracy through robust validation and exception handling.",
    problem:
      "Manual student record management was time-consuming and error-prone.",
    solution:
      "Built a digital system that reduced manual work by 70% with structured data operations for efficient storage and retrieval.",
    features: [
      "Full CRUD operations for student records",
      "Input validation and exception handling",
      "Efficient data storage and retrieval",
      "Clean and intuitive user interface",
    ],
    tech: ["Java", "Servlets", "JDBC", "MySQL"],
    github: "#",
    live: null,
  },
  {
    title: "Service Provider Web Application",
    description:
      "A platform connecting users with service providers, featuring user registration, service listings, and booking management. Includes an admin panel for complete system oversight.",
    problem:
      "No centralized platform for service discovery and booking in local area.",
    solution:
      "Created a multi-user platform with role-based access for users, providers, and admins.",
    features: [
      "User and service provider registration",
      "Service listings with search functionality",
      "Booking management system",
      "Admin panel for user and service management",
    ],
    tech: ["Java", "JSP", "Servlets", "MySQL", "HTML", "CSS"],
    github: "#",
    live: null,
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl">
        <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-8">
          Projects
        </h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Folder className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  )}
                  {project.live && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => window.open(project.live, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>

              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="p-3 rounded-lg bg-secondary/50">
                  <span className="text-xs font-medium text-primary uppercase">
                    Problem
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {project.problem}
                  </p>
                </div>
                <div className="p-3 rounded-lg bg-secondary/50">
                  <span className="text-xs font-medium text-primary uppercase">
                    Solution
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-xs font-medium text-muted-foreground uppercase">
                  Key Features
                </span>
                <ul className="mt-2 grid sm:grid-cols-2 gap-1">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
