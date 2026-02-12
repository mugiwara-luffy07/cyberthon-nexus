import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const events = [
  { time: "9:00 AM", title: "Opening Ceremony", desc: "Kickoff & keynote speakers" },
  { time: "10:30 AM", title: "Hacking Begins", desc: "48-hour clock starts" },
  { time: "2:00 PM", title: "Workshop Track", desc: "Hands-on security workshops" },
  { time: "8:00 PM", title: "Midnight CTF", desc: "Special bonus challenge round" },
  { time: "Day 2 — 12:00 PM", title: "Mentor Hours", desc: "1-on-1 with industry experts" },
  { time: "Day 2 — 9:00 AM", title: "Final Submissions", desc: "Code freeze & demos" },
  { time: "Day 2 — 2:00 PM", title: "Awards Ceremony", desc: "Winners announced & prizes" },
];

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="timeline" className="relative py-24 sm:py-32 overflow-hidden bg-background">
      {/* Atmospheric background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="absolute top-0 left-0 right-0 neon-line" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Event Schedule
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground">
            The <span className="gradient-text">Timeline</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical glowing line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent" />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 bg-gradient-to-b from-primary via-secondary to-primary/20 origin-top"
              style={{ boxShadow: "0 0 8px hsl(var(--primary) / 0.5), 0 0 20px hsl(var(--primary) / 0.2)" }}
            />
          </div>

          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={`relative flex items-center mb-10 ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Glowing orb */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10">
                <div className="w-3 h-3 rounded-full bg-primary box-glow-cyan" />
                <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary animate-ping opacity-30" />
              </div>

              {/* Connecting line to card */}
              <div
                className={`hidden sm:block absolute top-1/2 h-px w-8 bg-gradient-to-r ${
                  i % 2 === 0
                    ? "right-1/2 mr-[6px] from-transparent to-primary/40"
                    : "left-1/2 ml-[6px] from-primary/40 to-transparent"
                }`}
              />

              {/* Card */}
              <div className={`ml-12 sm:ml-0 sm:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8"}`}>
                <div className="glass rounded-xl p-5 hover:box-glow-cyan transition-all duration-500 hover:border-primary/20">
                  <p className="font-display text-xs tracking-[0.2em] text-primary mb-1">
                    {event.time}
                  </p>
                  <h3 className="font-display text-sm font-semibold text-foreground mb-1">
                    {event.title}
                  </h3>
                  <p className="font-body text-xs text-muted-foreground">
                    {event.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
