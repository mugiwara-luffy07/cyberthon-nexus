import { motion, useInView } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import { Send } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 neon-line" />
      <div className="max-w-2xl mx-auto px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="font-display text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Get In Touch
          </p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground">
            Send Us a <span className="gradient-text">Message</span>
          </h2>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="glass rounded-2xl p-6 sm:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="font-display text-xs tracking-wider uppercase text-muted-foreground mb-2 block">
                Name
              </label>
              <input
                type="text"
                required
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-display text-xs tracking-wider uppercase text-muted-foreground mb-2 block">
                Email
              </label>
              <input
                type="email"
                required
                className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300"
                placeholder="you@email.com"
              />
            </div>
          </div>
          <div>
            <label className="font-display text-xs tracking-wider uppercase text-muted-foreground mb-2 block">
              Message
            </label>
            <textarea
              required
              rows={4}
              className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all duration-300 resize-none"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 font-display text-sm tracking-[0.15em] uppercase bg-primary text-primary-foreground rounded-lg px-6 py-4 hover:scale-[1.02] transition-all duration-300 box-glow-cyan"
          >
            {sent ? "Message Sent ✓" : (
              <>
                Send Message
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
