import { Badge } from "@/components/ui/badge";
import { Briefcase, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Java Development Intern",
    company: "Codveda Technologies",
    type: "Virtual",
    period: "July 2025 - August 2025",
    description: [
      "Developed and maintained Java-based applications using Core Java, JDBC, and Servlets",
      "Implemented CRUD operations with MySQL database integration for data persistence",
      "Applied exception handling and input validation to improve application reliability",
      "Collaborated on debugging and testing modules to ensure smooth functionality",
    ],
    skills: ["Java", "JDBC", "Servlets", "MySQL", "Exception Handling"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl">
        <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-8">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
            >
              <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />

              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-xl font-semibold text-foreground">
                  {exp.role}
                </h3>
                <Badge variant="outline" className="text-xs">
                  {exp.type}
                </Badge>
              </div>

              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Briefcase className="h-4 w-4" />
                <span>{exp.company}</span>
                <span className="text-border">|</span>
                <span>{exp.period}</span>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground flex items-start gap-2"
                  >
                    <span className="text-primary mt-2">-</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
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
