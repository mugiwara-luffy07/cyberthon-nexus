import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import Countdown from "./Countdown";
import heroFallback from "@/assets/hero-fallback.jpg";

const Spline = lazy(() => import("@splinetool/react-spline"));

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Cinematic fallback image (shows while 3D loads / if WebGL unavailable) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroFallback})` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-background/60 to-background/30" />

      {/* 3D Spline Background */}
      <Suspense fallback={null}>
        <div className="absolute inset-0 z-[1]">
          <Spline scene="https://prod.spline.design/vtLe-VDOLxe3ImeH/scene.splinecode" />
        </div>
      </Suspense>

      {/* Radial gradient overlays */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/8 blur-[100px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Glitch Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <div className="relative inline-block">
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight gradient-text leading-none">
              CYBERTHON
            </h1>
            {/* Glitch layers */}
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
          <div className="mt-2">
            <span className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-foreground/90 tracking-wider">
              26
            </span>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-base sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light"
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
          className="mb-12"
        >
          <Countdown />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
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
