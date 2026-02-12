import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const sponsors = [
  "CrowdStrike", "Palo Alto Networks", "Cloudflare", "HackerOne",
  "Fortinet", "SentinelOne", "Snyk", "Rapid7",
];

export default function Sponsors() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sponsors" className="relative py-24 sm:py-32 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 neon-line" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Partners
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground">
            Our <span className="gradient-text">Sponsors</span>
          </h2>
        </motion.div>

        {/* Scrolling marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[...sponsors, ...sponsors].map((name, i) => (
              <div
                key={i}
                className="glass rounded-xl px-10 py-6 flex items-center justify-center min-w-[200px] hover:box-glow-cyan transition-shadow duration-500"
              >
                <span className="font-display text-sm tracking-wider text-muted-foreground">
                  {name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12 font-body text-sm text-muted-foreground"
        >
          Interested in sponsoring?{" "}
          <a href="#contact" className="text-primary hover:underline">
            Get in touch
          </a>
        </motion.p>
      </div>
    </section>
  );
}
