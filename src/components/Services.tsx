"use client";

import { motion } from "framer-motion";
import { Reveal, MaskedLines, easeOutExpo } from "./motion";

const services = [
  {
    num: "01",
    title: "MOT Testing",
    desc: "DVSA-approved Class 4 MOT testing with same-day results, free re-tests within 10 working days and honest advisories — never invented work.",
  },
  {
    num: "02",
    title: "Servicing",
    desc: "Interim and full manufacturer-schedule servicing using OE-grade parts and oils. Your warranty stays intact; your service book stays stamped.",
  },
  {
    num: "03",
    title: "Diagnostics",
    desc: "Dealer-level diagnostic equipment across all major marques. We find the actual fault — not just the code — before a single part is ordered.",
  },
  {
    num: "04",
    title: "Brakes & Clutches",
    desc: "Discs, pads, callipers, hydraulics and full clutch replacement. Fitted to torque spec, road-tested, and guaranteed for 12 months.",
  },
  {
    num: "05",
    title: "Tyres & Alignment",
    desc: "Premium and mid-range tyres fitted while you wait, with four-wheel laser alignment to keep the car tracking straight and tyres wearing even.",
  },
  {
    num: "06",
    title: "Air Con & Electrics",
    desc: "Re-gas for R134a and R1234yf systems, leak detection, battery health checks and auto-electrical fault finding.",
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

      <div className="grid grid-cols-1 border-t border-l border-line md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.article
            key={s.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: (i % 3) * 0.12, ease: easeOutExpo }}
            className="group relative overflow-hidden border-r border-b border-line p-8 transition-colors duration-500 hover:bg-onyx sm:p-10"
          >
            {/* ember wipe on hover */}
            <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-ember transition-transform duration-500 ease-out group-hover:scale-x-100" />

            <div className="mb-10 flex items-start justify-between">
              <span className="font-mono text-sm text-smoke/60 transition-colors duration-300 group-hover:text-ember">
                /{s.num}
              </span>
              <span className="text-xl text-smoke/40 transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-ember">
                ↗
              </span>
            </div>

            <h3 className="display mb-4 text-3xl transition-colors duration-300 group-hover:text-ember">
              {s.title}
            </h3>
            <p className="text-sm leading-relaxed text-smoke">{s.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
