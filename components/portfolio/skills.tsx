import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Backend",
    skills: ["Java", "Servlets", "JSP", "JDBC", "Spring Core", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["MySQL", "SQL Queries", "Database Design", "Joins & Indexing"],
  },
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript Basics"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Eclipse", "VS Code", "Postman", "Maven"],
  },
  {
    title: "Core Concepts",
    skills: ["OOP", "MVC Architecture", "CRUD Operations", "Exception Handling", "Input Validation"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl">
        <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-8">
          Skills
        </h2>

        <div className="space-y-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg font-medium text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="px-3 py-1.5 text-sm font-normal hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
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
