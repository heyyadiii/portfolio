"use client";

import { Mail, Linkedin, Github, Phone, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("adityasisodiya758@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl">
        <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-8">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              {"Let's work together"}
            </h3>
            <p className="text-muted-foreground mb-6">
              I&apos;m currently looking for new opportunities. Whether you have
              a project in mind or just want to connect, feel free to reach out!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>adityasisodiya758@gmail.com</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={copyEmail}
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>+91 6263632734</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:adityasisodiya758@gmail.com"
              className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            >
              <Mail className="h-5 w-5" />
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/adityasisodiya05"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border bg-background hover:bg-accent hover:text-accent-foreground transition-all"
            >
              <Linkedin className="h-5 w-5" />
              Connect on LinkedIn
            </a>
            <a
              href="https://github.com/heyyadiii"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border bg-background hover:bg-accent hover:text-accent-foreground transition-all"
            >
              <Github className="h-5 w-5" />
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
