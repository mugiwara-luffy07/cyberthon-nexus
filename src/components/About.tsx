import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "500+", label: "Hackers" },
  { value: "48h", label: "Non-Stop" },
  { value: "$50K", label: "Prize Pool" },
  { value: "6", label: "Tracks" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 neon-line" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4">
              About the Event
            </p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
              Where Cyber Meets{" "}
              <span className="gradient-text">Innovation</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Cyberthon 26 brings together the world's most talented cybersecurity 
              enthusiasts for 48 hours of intense hacking, learning, and innovation. 
              Push your limits across six specialized tracks and compete for glory.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              Whether you're a seasoned penetration tester or a curious newcomer, 
              Cyberthon offers the ultimate arena to showcase your skills, network 
              with industry leaders, and build solutions that matter.
            </p>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="glass rounded-xl p-6 text-center hover:box-glow-cyan transition-shadow duration-500"
              >
                <p className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </p>
                <p className="font-display text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
