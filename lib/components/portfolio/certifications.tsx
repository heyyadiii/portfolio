import { Award, Trophy, Users } from "lucide-react";

const certifications = [
  {
    title: "SnowHack Hackathon",
    description:
      "Secured Top 4 position at Chameli Devi Group of Institutions",
    icon: Trophy,
    type: "Achievement",
  },
  {
    title: "Generation AI Workshop",
    description:
      "Google Developer Group (GDSC) workshop focused on generative AI tools and real-world applications",
    icon: Award,
    type: "Workshop",
  },
  {
    title: "Science Communication Seminar",
    description:
      "IIT Indore seminar on innovative strategies for science education and engagement",
    icon: Users,
    type: "Seminar",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl">
        <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-8">
          Certifications & Activities
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <cert.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-medium text-muted-foreground uppercase">
                  {cert.type}
                </span>
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
