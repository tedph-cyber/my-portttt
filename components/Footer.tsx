import { Github, Mail, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-[hsl(var(--border)/0.5)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[hsl(var(--cyber-primary))] to-[hsl(var(--music-accent))] bg-clip-text text-transparent">
              TeD
            </h3>
            <p className="text-[hsl(var(--muted-foreground))] mb-4">
              Securing digital frontiers, crafting beautiful web experiences,
              and creating melodies that inspire.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/tedph-cyber"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[hsl(var(--secondary)/0.5)] hover:bg-[hsl(var(--cyber-primary)/0.2)] transition-all duration-300"
              >
                <Github className="w-5 h-5 text-[hsl(var(--cyber-primary))]" />
              </a>
              <a
                href="mailto:hello@tedph.me"
                className="p-2 rounded-full bg-[hsl(var(--secondary)/0.5)] hover:bg-[hsl(var(--warm-accent)/0.2)] transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-[hsl(var(--warm-accent))]" />
              </a>
              <a
                href="https://linkedin.com/in/theophilus-oyekola"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-[hsl(var(--secondary)/0.5)] hover:bg-[hsl(var(--primary)/0.2)] transition-all duration-300"
              >
                <Linkedin className="w-5 h-5 text-[hsl(var(--primary))]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[hsl(var(--foreground))]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-[hsl(var(--muted-foreground))]">
              <li>
                <a
                  href="/#about"
                  className="hover:text-[hsl(var(--cyber-primary))] transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#skills"
                  className="hover:text-[hsl(var(--primary))] transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className="hover:text-[hsl(var(--music-accent))] transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="hover:text-[hsl(var(--warm-accent))] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-[hsl(var(--foreground))]">
              Services
            </h4>
            <ul className="space-y-2 text-[hsl(var(--muted-foreground))]">
              <li>
                <span className="hover:text-[hsl(var(--cyber-primary))] transition-colors cursor-default">
                  Cybersecurity Consulting
                </span>
              </li>
              <li>
                <span className="hover:text-[hsl(var(--primary))] transition-colors cursor-default">
                  Web Development
                </span>
              </li>
              <li>
                <span className="hover:text-[hsl(var(--music-accent))] transition-colors cursor-default">
                  Music Production
                </span>
              </li>
              <li>
                <span className="hover:text-[hsl(var(--warm-accent))] transition-colors cursor-default">
                  Technical Writing
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[hsl(var(--border)/0.3)] flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-[hsl(var(--muted-foreground))] text-sm">
            © 2025 TeD. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-[hsl(var(--muted-foreground))] text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>using Next.js & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
