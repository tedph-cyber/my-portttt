import PreviewWithRedirect from "@/components/PreviewwithRedirect";

const projects = [
  {
    name: "Soundboard App",
    description:
      "A dynamic soundboard application built with Next.js and Tailwind CSS, featuring a collection of sound clips for quick access.",
    url: "https://ted-soundboard.vercel.app/",
  },
  {
    name: "Quasest Shop",
    description:
      "A server-rendered e-commerce platform built with quasest, optimized for performance and SEO. A mobile app version was also developed.",
    url: "https://quasest.onrender.com",
  },
  {
    name: "Tari's Portfolio",
    description:
      "Portfolio showcasing a web app deployed on Vercel's platform",
    url: "https://0x73t.vercel.app/",
  },
  {
    name: "trafficChat",
    description: "A chat application focused on real-time communication and traffic navigation. With the backend using Python",
    url: "https://traffichat.vercel.app/",
  },
  {
    name: "Celebr8",
    description: "A platform for celebrating special moments and events with friends and family. Built with Next.js and Tailwind CSS and some backend work with nodejs",
    url: "https://celebr8.onrender.com/",
  }
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 bg-[hsl(var(--background))] text-center"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[hsl(var(--cyber-purple))] to-[hsl(var(--cyber-blue))] bg-clip-text text-transparent">
          My Projects
        </h2>
        <p className="text-lg mb-12 text-[hsl(var(--muted-foreground))] max-w-2xl mx-auto">
          A showcase of some of my recent works.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index} // It's better to use a unique ID if your project data has one
              className="bg-[hsl(var(--card))] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4 text-[hsl(var(--foreground))]">
                {project.name}
              </h3>
              <p className="text-[hsl(var(--muted-foreground))] mb-4">
                {project.description}
              </p>
              <PreviewWithRedirect url={project.url} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
