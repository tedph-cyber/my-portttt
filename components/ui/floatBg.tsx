'use client'
import { motion } from "framer-motion";
import { Shield, Code, Music } from "lucide-react";

export default function FloatBg() {
  return (
    <motion.div
  initial={{ opacity: 1, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} // Slower duration for the main container
  className="absolute inset-0"
>
  <motion.div
    className="absolute top-20 left-20 opacity-30"
    initial={{ opacity: 1, y: -10 }}
    animate={{ opacity: 1, y: [0, -10, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} // Slower duration for the first icon
  >
    <Shield className="w-12 h-12 text-[hsl(var(--cyber-primary))]" />
  </motion.div>
  <motion.div
    className="absolute top-40 right-32 opacity-30"
    initial={{ opacity: 1, y: -10 }}
    animate={{ opacity: 1, y: [0, 10, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} // Adjust delay to maintain staggered effect
  >
    <Code className="w-10 h-10 text-[hsl(var(--cyber-secondary))]" />
  </motion.div>
  <motion.div
    className="absolute bottom-32 left-32 opacity-30"
    initial={{ opacity: 1, y: -10 }}
    animate={{ opacity: 1, y: [0, -10, 0] }}
    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} // Adjust delay for the last icon
  >
    <Music className="w-14 h-14 text-[hsl(var(--music-accent))]" />
  </motion.div>
</motion.div>
  );
}