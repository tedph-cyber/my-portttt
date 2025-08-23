'use client';
import { Shield, Code, Music } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Github, Mail, Linkedin } from "lucide-react";
// import FloatBg from "./ui/floatBg";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Floating Icons */}
      <div className="absolute top-20 left-20 floating-animation opacity-30">
        <Shield
          className="w-12 h-12"
          style={{ color: "hsl(var(--cyber-primary))" }}
        />
      </div>
      <div
        className="absolute top-40 right-32 floating-animation opacity-30"
        style={{ animationDelay: "2s" }}
      >
        <Code
          className="w-10 h-10"
          style={{ color: "hsl(var(--cyber-secondary))" }}
        />
      </div>
      <div
        className="absolute bottom-32 left-32 floating-animation opacity-30"
        style={{ animationDelay: "4s" }}
      >
        <Music
          className="w-14 h-14"
          style={{ color: "hsl(var(--music-accent))" }}
        />
      </div>
      {/* <FloatBg /> */}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Name & Title */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[hsl(var(--cyber-primary))] via-[hsl(var(--cyber-secondary))] to-[hsl(var(--music-accent))] bg-clip-text text-transparent">
            TeD
          </h1>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Badge
              variant="secondary"
              className="text-lg px-4 py-2 bg-[hsl(var(--cyber-primary)/0.2)] text-[hsl(var(--cyber-primary))] border-[hsl(var(--cyber-primary)/0.3)]"
            >
              <Shield className="w-4 h-4 mr-2" />
              Cybersecurity Expert
            </Badge>
            <Badge
              variant="secondary"
              className="text-lg px-4 py-2 bg-[hsl(var(--primary)/0.2)] text-[hsl(var(--primary))] border-[hsl(var(--primary)/0.3)]"
            >
              <Code className="w-4 h-4 mr-2" />
              Web Developer
            </Badge>
            <Badge
              variant="secondary"
              className="text-lg px-4 py-2 bg-[hsl(var(--music-accent)/0.2)] text-[hsl(var(--music-accent))] border-[hsl(var(--music-accent)/0.3)]"
            >
              <Music className="w-4 h-4 mr-2" />
              Music Prodigy
            </Badge>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-[hsl(var(--muted-foreground))] mb-8 max-w-3xl mx-auto leading-relaxed">
          Securing digital frontiers by day, crafting beautiful web experiences around the clock, and creating melodies that inspire souls. Where technology meets artistry.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="hero" size="lg" className="text-lg px-8 py-4">
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 py-4 border-[hsl(var(--cyber-primary))] text-[hsl(var(--cyber-primary))] hover:bg-[hsl(var(--cyber-primary))] hover:text-[hsl(var(--primary-foreground))]"
          >
            Let's Connect
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/tedph-cyber"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[hsl(var(--secondary)/0.5)] hover:bg-[hsl(var(--cyber-primary)/0.2)] transition-all duration-300 hover:scale-110 glow-effect"
          >
            <Github className="w-6 h-6 text-[hsl(var(--cyber-primary))]" />
          </a>
          <a
            href="mailto:help@tedph.me"
            className="p-3 rounded-full bg-[hsl(var(--secondary)/0.5)] hover:bg-[hsl(var(--warm-accent)/0.2)] transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-6 h-6 text-[hsl(var(--warm-accent))]" />
          </a>
          <a
            href="https://linkedin.com/in/theophilus-oyekola"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-[hsl(var(--secondary)/0.5)] hover:bg-[hsl(var(--primary)/0.2)] transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-6 h-6 text-[hsl(var(--primary))]" />
          </a>
        </div>
      </div>
    </section>
  );
}