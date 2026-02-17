import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Countdown from "./Countdown";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Layer 0: Spline 3D scene */}
      <Suspense
        fallback={
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="font-display text-sm text-muted-foreground tracking-widest uppercase animate-pulse">
              Loading Experience…
            </div>
          </div>
        }
      >
        <Spline
          className="absolute inset-0 w-full h-full"
          scene="https://prod.spline.design/vtLe-VDOLxe3ImeH/scene.splinecode"
        />
      </Suspense>

      {/* Layer 1: Top gradient so text is readable over the 3D scene */}
      <div className="absolute inset-x-0 top-0 h-[55%] z-[2] pointer-events-none bg-gradient-to-b from-background via-background/70 to-transparent" />

      {/* Layer 2: Foreground content — pinned to upper area above the characters */}
      <div className="absolute inset-x-0 top-0 z-10 flex flex-col items-center text-center px-4 pt-28 sm:pt-32 md:pt-36 pointer-events-none">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-3"
        >
          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight gradient-text leading-none drop-shadow-[0_0_40px_hsl(186_100%_49%/0.5)]">
            CYBERTHON
          </h1>
          <span className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground/90 tracking-wider drop-shadow-[0_0_20px_hsl(0_0%_100%/0.3)]">
            26
          </span>
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
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto"
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
    </section>
  );
}
