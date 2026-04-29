import { GraduationCap, Calendar, Building2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl">
        <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-8">
          About
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I&apos;m a Backend Developer specializing in Java ecosystem.
              Currently pursuing B.Tech in Computer Science at Chameli Devi
              Group of Institutions, Indore.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My focus is on building robust, database-driven applications with
              clean architecture. I enjoy solving complex problems through
              efficient backend logic and optimized database design.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
              <GraduationCap className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium text-foreground">Education</h3>
                <p className="text-sm text-muted-foreground">
                  B.Tech in Computer Science & IT
                </p>
                <p className="text-sm text-muted-foreground">
                  Chameli Devi Group of Institutions
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
              <Calendar className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium text-foreground">Graduation</h3>
                <p className="text-sm text-muted-foreground">
                  Expected May 2026
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border">
              <Building2 className="h-5 w-5 text-primary mt-1" />
              <div>
                <h3 className="font-medium text-foreground">Location</h3>
                <p className="text-sm text-muted-foreground">Indore, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
