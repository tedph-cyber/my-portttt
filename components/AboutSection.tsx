'use client';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-r from-[hsl(var(--surface))] to-[hsl(var(--surface-elevated))]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[hsl(var(--foreground))]">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[hsl(var(--cyber-green))] to-[hsl(var(--cyber-blue))] mx-auto"></div>
        </div>

        <Card className="p-8 md:p-12 bg-[hsl(var(--surface-elevated))] border-[hsl(var(--border))] shadow-elevated">
          <div className="text-center">
            <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] leading-relaxed mb-8">
              I'm a passionate technologist who believes in the power of secure,
              well-tested code and the creativity that drives innovation. With
              expertise spanning web development, cybersecurity, and quality
              assurance, I bring a comprehensive approach to digital solutions.
            </p>

            <p className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] leading-relaxed mb-8">
              When I'm not crafting code or securing systems, you'll find me
              immersed in music - creating beats, composing melodies, and
              exploring the intersection of technology and art. This creative
              foundation influences everything I build, bringing rhythm and
              harmony to my work.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/resume_d.pdf";
                  link.download = "resume_d.pdf";
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Resume
              </Button>
              <Button variant="outline" size="lg">
                <a href="/projects">View Projects</a>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};