import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "SQL", "HTML", "CSS"],
  },
  {
    title: "Backend Technologies",
    skills: ["Spring Core", "Spring Boot", "Servlets", "JSP", "JDBC", "REST APIs"],
  },
  {
    title: "Database",
    skills: ["MySQL", "Database Design", "Query Optimization"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Eclipse", "NetBeans", "Postman", "Maven"],
  },
  {
    title: "Concepts",
    skills: ["OOP", "MVC Architecture", "CRUD Operations", "Exception Handling", "Data Validation"],
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
