export default function Navbar() {
  return (
    <nav className="w-full py-4 px-8 bg-[hsl(var(--gradient-cyber))] shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-gradient-to-r from-[hsl(var(--cyber-secondary))] to-[hsl(var(--cyber-primary))] bg-clip-text">
        <div className="text-xl font-bold text-transparent">
          <a
            href="/"
            className="text-[hsl(var(--cyber-green))] hover:text-[hsl(var(--primary))] transition"
          >
            TeD
          </a>
        </div>
        <div className="space-x-4">
          <a
            href="/#skills"
            className="text-transparent hover:text-[hsl(var(--primary))] transition"
          >
            Skills
          </a>
          <a
            href="/#about"
            className="text-transparent hover:text-[hsl(var(--primary))] transition"
          >
            About
          </a>
          <a
            href="/projects"
            className="text-transparent hover:text-[hsl(var(--primary))] transition"
          >
            Projects
          </a>
          <a
            href="/#contact"
            className="text-transparent hover:text-[hsl(var(--primary))] transition"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
