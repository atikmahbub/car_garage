"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, MaskedLines } from "./motion";

const points = [
  {
    title: "Fixed quotes, no surprises",
    desc: "You approve the price before a spanner is lifted. Anything extra gets a phone call and a photo first.",
  },
  {
    title: "OE-grade parts only",
    desc: "Original-equipment quality on every job, so your manufacturer warranty stays fully intact.",
  },
  {
    title: "12-month workmanship guarantee",
    desc: "Every repair is road-tested and backed for 12 months or 12,000 miles — whichever comes later.",
  },
];

export default function Workshop() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yA = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yB = useTransform(scrollYProgress, [0, 1], [120, -40]);

  return (
    <section
      id="workshop"
      ref={ref}
      className="relative mx-auto max-w-7xl overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="relative grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* images */}
        <div className="relative h-125 sm:h-150">
          <motion.div
            style={{ y: yA }}
            className="group absolute top-0 left-0 h-[70%] w-[72%] overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?q=80&w=1600&auto=format&fit=crop"
              alt="Technician working underneath a car on a vehicle lift"
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="img-duotone object-cover"
            />
          </motion.div>
          <motion.div
            style={{ y: yB }}
            className="group absolute right-0 bottom-0 h-[55%] w-[58%] overflow-hidden border-8 border-carbon"
          >
            <Image
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1600&auto=format&fit=crop"
              alt="Detailing work on a dark performance car"
              fill
              sizes="(max-width: 1024px) 70vw, 30vw"
              className="img-duotone object-cover"
            />
          </motion.div>
          {/* accent frame */}
          <motion.div
            style={{ y: yA }}
            className="absolute top-6 left-6 -z-10 h-[70%] w-[72%] border border-ember/40"
          />
        </div>

        {/* copy */}
        <div>
          <Reveal>
            <p className="eyebrow mb-5">The workshop</p>
          </Reveal>
          <MaskedLines
            className="display mb-8 text-5xl sm:text-6xl"
            lines={[
              <span key="1">Dealership standards.</span>,
              <span key="2">
                <span className="text-ember">Independent</span> honesty.
              </span>,
            ]}
          />
          <Reveal delay={0.15}>
            <p className="mb-12 max-w-lg text-[15px] leading-relaxed text-smoke">
              A &amp; R Garage was founded on a simple idea: the care your car
              gets at a main dealer, without the main-dealer bill or the
              upsell. Two brothers, one workshop, and fifteen years of London
              drivers who won&apos;t take their cars anywhere else.
            </p>
          </Reveal>

          <div className="space-y-0 border-t border-line">
            {points.map((p, i) => (
              <Reveal key={p.title} delay={0.1 + i * 0.1}>
                <div className="group flex gap-6 border-b border-line py-6 transition-colors duration-300 hover:border-ember/50">
                  <span className="font-mono text-sm text-ember">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="mb-1 font-semibold text-bone transition-colors duration-300 group-hover:text-ember">
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-smoke">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
