import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-border">
      <div className="max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Aditya Sisodiya
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/heyyadiii"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/adityasisodiya05"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <span className="text-sm text-muted-foreground">
            Built with Next.js and deployed on Vercel
          </span>
        </div>
      </div>
    </footer>
  );
}
