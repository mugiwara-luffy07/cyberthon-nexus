import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Countdown from "./Countdown";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden bg-background">
      {/* Deep purple ambient glow to match the Spline scene lighting */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(263_60%_12%)] via-background to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-secondary/15 blur-[150px]" />
      </div>

      {/* Foreground text content — top portion */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto pt-28 sm:pt-32 md:pt-36">
        {/* Glitch Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-4"
        >
          <div className="relative inline-block">
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight gradient-text leading-none drop-shadow-[0_0_40px_hsl(186_100%_49%/0.5)]">
              CYBERTHON
            </h1>
            <h1
              aria-hidden
              className="absolute inset-0 font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-primary leading-none opacity-60"
              style={{ animation: "glitch-1 3s infinite linear alternate-reverse" }}
            >
              CYBERTHON
            </h1>
            <h1
              aria-hidden
              className="absolute inset-0 font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-secondary leading-none opacity-40"
              style={{ animation: "glitch-2 2.5s infinite linear alternate-reverse" }}
            >
              CYBERTHON
            </h1>
          </div>
          <div className="mt-1">
            <span className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground/90 tracking-wider drop-shadow-[0_0_20px_hsl(0_0%_100%/0.3)]">
              26
            </span>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 font-light"
        >
          The World's Most Elite{" "}
          <span className="text-primary font-medium">Cybersecurity</span>{" "}
          Hackathon
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <Countdown />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
        >
          <a
            href="#register"
            className="group relative px-8 py-4 font-display text-sm tracking-[0.15em] uppercase bg-primary text-primary-foreground rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 box-glow-cyan"
          >
            <span className="relative z-10">Register Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#sponsors"
            className="group px-8 py-4 font-display text-sm tracking-[0.15em] uppercase border border-primary/30 text-primary rounded-lg transition-all duration-300 hover:border-primary/80 hover:scale-105 hover:box-glow-cyan"
          >
            Sponsor Us
          </a>
        </motion.div>
      </div>

      {/* Spline 3D characters — fills the remaining bottom area */}
      <div className="relative z-10 w-full flex-1 min-h-[350px] sm:min-h-[400px] md:min-h-[450px]">
        {/* Fade from text area into 3D scene */}
        <div className="absolute inset-x-0 top-0 h-24 z-10 bg-gradient-to-b from-background to-transparent pointer-events-none" />
        <Suspense fallback={null}>
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/vtLe-VDOLxe3ImeH/scene.splinecode" />
          </div>
        </Suspense>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-primary/30 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
