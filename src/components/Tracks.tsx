import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Smartphone, Bitcoin, Search, Database, Brain } from "lucide-react";

const tracks = [
  { icon: Shield, title: "Web Security", desc: "Find and exploit web vulnerabilities in real-world apps" },
  { icon: Smartphone, title: "Mobile Security", desc: "Reverse engineer mobile apps and uncover flaws" },
  { icon: Bitcoin, title: "Crypto & Blockchain", desc: "Smart contract auditing and DeFi exploit challenges" },
  { icon: Search, title: "Reverse Engineering", desc: "Binary analysis, malware dissection, and CTF puzzles" },
  { icon: Database, title: "Digital Forensics", desc: "Investigate breaches and recover critical evidence" },
  { icon: Brain, title: "AI Security", desc: "Adversarial ML, prompt injection, and AI safety" },
];

export default function Tracks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tracks" className="relative py-24 sm:py-32 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 neon-line" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Competition Tracks
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground">
            Choose Your <span className="gradient-text">Arena</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tracks.map((track, i) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group glass rounded-xl p-6 sm:p-8 cursor-pointer transition-all duration-500 hover:box-glow-cyan hover:border-primary/20 hover:scale-[1.02]"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <track.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                {track.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {track.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
