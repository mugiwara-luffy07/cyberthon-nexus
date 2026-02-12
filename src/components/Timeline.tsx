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
    <section id="timeline" className="relative py-24 sm:py-32 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 neon-line" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6" ref={ref}>
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
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent" />

          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative flex items-center mb-8 ${
                i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Orb */}
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary box-glow-cyan z-10" />

              {/* Card */}
              <div className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? "sm:pr-8 sm:text-right" : "sm:pl-8"}`}>
                <div className="glass rounded-xl p-5 hover:box-glow-cyan transition-shadow duration-500">
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
