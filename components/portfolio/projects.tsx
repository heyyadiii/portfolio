"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "Student Management System",
    description:
      "Web application for managing student records with complete CRUD operations and MySQL persistence.",
    problem:
      "Educational institutions often rely on spreadsheets or paper records, leading to data inconsistency and slow lookups.",
    solution:
      "Built a servlet-based system with form validation, exception handling, and optimized SQL queries. Records are stored in normalized MySQL tables with proper indexing.",
    features: [
      "Add, view, update, delete student records via web forms",
      "Server-side validation with meaningful error messages",
      "MySQL database with foreign key constraints",
      "Search and filter by name, ID, or department",
    ],
    tech: ["Java", "Servlets", "JDBC", "MySQL", "HTML", "CSS"],
    github: "https://github.com/heyyadiii",
    live: null,
  },
  {
    title: "Service Provider Platform",
    description:
      "Multi-role web application connecting users with local service providers, with booking management and admin oversight.",
    problem:
      "Users had no way to discover, compare, and book local services online. Providers had no digital presence.",
    solution:
      "Developed a JSP-based platform with three user roles (customer, provider, admin). Implemented session management, role-based access control, and a booking workflow with status tracking.",
    features: [
      "User registration with email validation",
      "Service listings with category-based search",
      "Booking system with confirmation workflow",
      "Admin dashboard for user/service management",
    ],
    tech: ["Java", "JSP", "Servlets", "MySQL", "JDBC", "HTML", "CSS"],
    github: "https://github.com/heyyadiii",
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
