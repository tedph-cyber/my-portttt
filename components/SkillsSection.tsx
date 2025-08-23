import { Shield, Code, TestTube, Music } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Full-stack development with modern frameworks and technologies",
    color: "text-[hsl(var(--cyber-green))]",
    bgColor: "bg-[hsl(var(--cyber-green)/0.1)]",
    borderColor: "border-[hsl(var(--cyber-green)/0.3)]",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Protecting digital assets and implementing security best practices",
    color: "text-[hsl(var(--cyber-blue))]",
    bgColor: "bg-[hsl(var(--cyber-blue)/0.1)]",
    borderColor: "border-[hsl(var(--cyber-blue)/0.3)]",
  },
  {
    icon: TestTube,
    title: "QA Testing",
    description: "Ensuring quality through comprehensive testing strategies",
    color: "text-[hsl(var(--cyber-purple))]",
    bgColor: "bg-[hsl(var(--cyber-purple)/0.1)]",
    borderColor: "border-[hsl(var(--cyber-purple)/0.3)]",
  },
  {
    icon: Music,
    title: "Music Production",
    description: "Creating and producing music with passion and creativity",
    color: "text-[hsl(var(--primary))]",
    bgColor: "bg-[hsl(var(--primary)/0.1)]",
    borderColor: "border-[hsl(var(--primary)/0.3)]",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[hsl(var(--cyber-green))] to-[hsl(var(--cyber-blue))] bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
            A unique blend of technical expertise and creative passion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.title}
              className={`group p-6 bg-[hsl(var(--surface-elevated))] border ${skill.borderColor} hover:shadow-elevated transform hover:-translate-y-2 transition-all duration-300 animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-12 h-12 ${skill.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <skill.icon className={`w-6 h-6 ${skill.color}`} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--foreground))]">
                {skill.title}
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
                {skill.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};