import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, Music } from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@tedph.me",
    href: "mailto:hello@tedph.me",
    color: "text-[hsl(var(--cyber-green))]",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/tedph-cyber",
    href: "https://github.com/tedph-cyber",
    color: "text-[hsl(var(--cyber-blue))]",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/theophilus-oyekola",
    href: "https://linkedin.com/in/theophilus-oyekola",
    color: "text-[hsl(var(--cyber-purple))]",
  },
  {
    icon: Music,
    label: "Music",
    value: "Listen to my tracks",
    href: "#",
    color: "text-[hsl(var(--primary))]",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[hsl(var(--cyber-green))] to-[hsl(var(--cyber-blue))] bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-xl text-[hsl(var(--muted-foreground))] mb-12 max-w-2xl mx-auto">
          Ready to collaborate on your next project? Whether it's web
          development, security consulting, or QA services, I'd love to hear
          from you.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <Card
              key={method.label}
              className="p-6 bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border))] hover:shadow-elevated transform hover:-translate-y-1 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a
                href={method.href}
                className="block group"
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  method.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                <div
                  className={`w-12 h-12 bg-[hsl(var(--surface))] rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  <method.icon className={`w-6 h-6 ${method.color}`} />
                </div>
                <h3 className="font-semibold mb-2 text-[hsl(var(--foreground))]">
                  {method.label}
                </h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
                  {method.value}
                </p>
              </a>
            </Card>
          ))}
        </div>

        <Button variant="hero" size="lg" className="animate-pulse-glow">
          <a href="mailto:hello@tedph.me">Start a Conversation</a>
        </Button>
      </div>
    </section>
  );
};