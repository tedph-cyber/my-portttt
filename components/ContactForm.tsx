import { div } from "framer-motion/client"

export default function ContactForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--background))] p-4">
      <form
        action="https://formspree.io/f/mnqyojwp"
        method="POST"
        className="max-w-lg mx-auto bg-[hsl(var(--card))] p-6 rounded-lg shadow-md"
      >
      <h2 className="text-2xl font-semibold mb-4 text-[hsl(var(--foreground))]">
        Get in Touch
      </h2>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-sm font-medium mb-1 text-[hsl(var(--foreground))]"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border border-[hsl(var(--border))] rounded-md bg-[hsl(var(--input))] text text-[hsl(var(--input-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--cyber-primary))]"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-1 text-[hsl(var(--foreground))]"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-[hsl(var(--border))] rounded-md bg-[hsl(var(--input))] text text-[hsl(var(--input-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--cyber-primary))]"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-1 text-[hsl(var(--foreground))]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-2 border border-[hsl(var(--border))] rounded-md bg-[hsl(var(--input))] text text-[hsl(var(--input-foreground))] focus:outline-none focus:ring-2 focus:ring-[hsl(var(--cyber-primary))]"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-[hsl(var(--cyber-primary))] text-[hsl(var(--primary-foreground))] font-semibold py-2 px-4 rounded-md hover:bg-[hsl(var(--cyber-primary)/0.9)] transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
    </div>
  );
}   