"use client";

import { motion } from "framer-motion";
import { Reveal, MaskedLines, easeOutExpo } from "./motion";
import { ArrowUpRight } from "./icons";

const plans = [
  {
    name: "Short Service",
    tag: "Quick turnaround",
    featured: false,
    desc: "The essential reset between full services. Fresh oil, a new filter, and a look over the car while it's on the ramp.",
    items: ["Engine oil", "Oil filter"],
  },
  {
    name: "Full Service",
    tag: "Most popular",
    featured: true,
    desc: "The complete once-a-year service. Every filter and fluid your car relies on, checked and replaced in a single visit.",
    items: [
      "Engine oil",
      "Oil filter",
      "Air filter",
      "Cabin filter",
      "Antifreeze & coolant",
      "Brake fluid",
      "Screen wash",
    ],
  },
];

const repairs = [
  {
    num: "01",
    title: "Brakes",
    desc: "Fitted to torque spec and road-tested before handover.",
    items: ["Brake discs", "Brake pads", "Brake fluid"],
  },
  {
    num: "02",
    title: "Suspension",
    desc: "Knocks, clunks and wander diagnosed and put right.",
    items: ["Shock absorbers", "Coil springs", "Ball joints", "Suspension arms"],
  },
  {
    num: "03",
    title: "Electrical",
    desc: "Charging and starting faults found — not guessed at.",
    items: ["Batteries", "Alternator", "Starter system", "Sensors", "Ignition"],
  },
  {
    num: "04",
    title: "Transmission",
    desc: "From a slipping clutch to a clicking CV joint.",
    items: ["Clutch", "Wheel bearings", "Driveshaft", "CV joint kit", "Drive belt"],
  },
  {
    num: "05",
    title: "Lighting",
    desc: "Blown bulbs replaced while you wait.",
    items: ["Bulb replacement"],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <Reveal>
            <p className="eyebrow mb-5">What we do</p>
          </Reveal>
          <MaskedLines
            className="display text-5xl sm:text-7xl"
            lines={[
              <span key="1">Every job.</span>,
              <span key="2">
                Done <span className="text-ember">properly.</span>
              </span>,
            ]}
          />
        </div>
        <Reveal delay={0.2} className="max-w-sm">
          <p className="text-[15px] leading-relaxed text-smoke">
            No upselling, no jargon, no surprises. A fixed quote before we
            start, photos of anything we find, and a call before any extra
            work.
          </p>
        </Reveal>
      </div>

      {/* servicing plans */}
      <Reveal>
        <p className="eyebrow mb-6 text-smoke!">/ Servicing</p>
      </Reveal>
      <div className="mb-20 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-2">
        {plans.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: i * 0.12, ease: easeOutExpo }}
            className={`group relative flex flex-col p-8 transition-colors duration-500 sm:p-10 ${
              p.featured ? "bg-onyx" : "bg-carbon hover:bg-onyx"
            }`}
          >
            {/* ember top edge on the featured plan */}
            {p.featured && (
              <span className="absolute inset-x-0 top-0 h-0.5 bg-ember" />
            )}

            <div className="mb-8 flex items-center justify-between">
              <span
                className={`font-mono text-[11px] tracking-[0.2em] uppercase ${
                  p.featured ? "text-ember" : "text-smoke/60"
                }`}
              >
                {p.tag}
              </span>
              <ArrowUpRight className="h-5 w-5 text-smoke/40 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ember" />
            </div>

            <h3 className="display mb-3 text-4xl transition-colors duration-300 group-hover:text-ember sm:text-5xl">
              {p.name}
            </h3>
            <p className="mb-8 max-w-sm text-sm leading-relaxed text-smoke">{p.desc}</p>

            <ul className="mb-10 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {p.items.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-bone/90">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center border border-ember/50 text-[10px] text-ember">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-auto inline-flex items-center gap-3 font-mono text-[12px] tracking-[0.2em] text-bone uppercase transition-colors duration-300 hover:text-ember"
            >
              Book this service
              <span className="h-px w-8 bg-ember transition-all duration-300 group-hover:w-12" />
            </a>
          </motion.article>
        ))}
      </div>

      {/* repairs */}
      <Reveal>
        <p className="eyebrow mb-6 text-smoke!">/ Repairs</p>
      </Reveal>
      <div className="border-t border-line">
        {repairs.map((r, i) => (
          <motion.a
            key={r.num}
            href="#contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: i * 0.06, ease: easeOutExpo }}
            className="group relative block overflow-hidden border-b border-line py-7 transition-colors duration-500 hover:bg-onyx sm:py-8"
          >
            {/* ember wipe on hover */}
            <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-ember transition-transform duration-500 ease-out group-hover:scale-x-100" />

            <div className="grid grid-cols-1 items-center gap-4 px-1 sm:px-4 lg:grid-cols-[5rem_16rem_1fr_auto] lg:gap-8">
              <span className="font-mono text-sm text-smoke/60 transition-colors duration-300 group-hover:text-ember">
                /{r.num}
              </span>

              <h3 className="display text-3xl transition-all duration-300 group-hover:translate-x-1 group-hover:text-ember sm:text-4xl">
                {r.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {r.items.map((item) => (
                  <span
                    key={item}
                    className="border border-line px-3 py-1.5 font-mono text-[11px] tracking-[0.12em] text-smoke uppercase transition-colors duration-300 group-hover:border-ember/40 group-hover:text-bone"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <ArrowUpRight className="hidden h-5 w-5 text-smoke/40 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ember lg:block" />
            </div>
          </motion.a>
        ))}
      </div>

      {/* helper note */}
      <Reveal delay={0.1}>
        <p className="mt-10 text-sm leading-relaxed text-smoke">
          Not sure what your car needs?{" "}
          <a
            href="#contact"
            className="text-bone underline decoration-ember underline-offset-4 transition-colors hover:text-ember"
          >
            Describe the symptom
          </a>{" "}
          — we&apos;ll diagnose it and quote before touching a spanner.
        </p>
      </Reveal>
    </section>
  );
}
