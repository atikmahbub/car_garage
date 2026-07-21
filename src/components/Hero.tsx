"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MaskedLines, Magnetic, easeOutExpo } from "./motion";
import { ArrowRight } from "./icons";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-svh flex-col justify-end overflow-hidden pt-24"
    >
      {/* background */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-x-0 top-0 h-[56svh] md:inset-0 md:h-auto"
      >
        <Image
          src="/images/hero.jpg"
          alt="Red Ferrari 488 GTB in a dramatic showroom"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* soft overlays for text legibility */}
        <div className="absolute inset-0 bg-carbon/35" />
        <div className="absolute inset-x-0 bottom-0 h-[55%] bg-linear-to-t from-carbon via-carbon/60 to-transparent" />
      </motion.div>

      {/* headline block */}
      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-12 sm:px-8 sm:pb-16 lg:pb-20"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: easeOutExpo }}
          className="eyebrow mb-6"
        >
          Independent Service &amp; Repair Centre — Nottingham
        </motion.p>

        <MaskedLines
          className="display text-[14.5vw] leading-[0.92] sm:text-[11vw] md:text-[10vw] lg:text-[8.5vw] xl:text-[7.5rem]"
          delay={0.45}
          lines={[
            <span key="1">Engineered care</span>,
            <span key="2">
              for your <span className="text-ember">machine.</span>
            </span>,
          ]}
        />

        <div className="mt-8 flex flex-col gap-7 sm:mt-10 md:flex-row md:items-end md:justify-between md:gap-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.9, ease: easeOutExpo }}
            className="max-w-md text-sm leading-relaxed text-smoke sm:text-[15px]"
          >
            Short and full servicing, MOT testing, brakes, suspension,
            electrical and transmission repairs — dealership standards with
            independent honesty. Trusted by Nottingham drivers for over 7
            years.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.9, ease: easeOutExpo }}
            className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
          >
            <Magnetic className="w-full sm:w-auto">
              <a
                href="#contact"
                className="group relative flex w-full items-center justify-center gap-3 overflow-hidden bg-ember px-8 py-4 font-semibold text-carbon sm:w-auto"
              >
                <span className="absolute inset-0 -translate-x-full bg-bone transition-transform duration-400 ease-out group-hover:translate-x-0" />
                <span className="relative">Book a Service</span>
                <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </Magnetic>
            <Magnetic className="w-full sm:w-auto">
              <a
                href="#services"
                className="flex w-full items-center justify-center gap-3 border border-bone/25 px-8 py-4 font-semibold text-bone transition-colors duration-300 hover:border-ember hover:text-ember sm:w-auto"
              >
                Our Services
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        style={{ opacity: fade }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] text-smoke uppercase">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="block h-8 w-px bg-linear-to-b from-ember to-transparent"
        />
      </motion.div>
    </section>
  );
}
