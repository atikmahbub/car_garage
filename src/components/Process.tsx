"use client";

import { motion } from "framer-motion";
import { Reveal, MaskedLines, easeOutExpo } from "./motion";

const steps = [
  {
    num: "01",
    title: "Book in 60 seconds",
    desc: "Call, WhatsApp or use the form below. Tell us the reg and the symptom — we'll confirm a slot the same day.",
  },
  {
    num: "02",
    title: "We inspect & quote",
    desc: "A full health check with photos of anything we find. You get a fixed, itemised quote before any work begins.",
  },
  {
    num: "03",
    title: "The work gets done",
    desc: "OE-grade parts, torque-spec fitting, and a technician who treats your car like their own. Courtesy car if you need one.",
  },
  {
    num: "04",
    title: "Road-tested & returned",
    desc: "Every car is road-tested, washed, and handed back with a 12-month guarantee on the work. Simple as that.",
  },
];

export default function Process() {
  return (
    <section id="process" className="border-y border-line bg-onyx">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="mb-16 max-w-2xl">
          <Reveal>
            <p className="eyebrow mb-5">How it works</p>
          </Reveal>
          <MaskedLines
            className="display text-5xl sm:text-7xl"
            lines={[
              <span key="1">From booking</span>,
              <span key="2">
                to <span className="text-ember">back on the road.</span>
              </span>,
            ]}
          />
        </div>

        <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.12, ease: easeOutExpo }}
              className="group relative bg-onyx p-8 transition-colors duration-500 hover:bg-steel"
            >
              <div className="display mb-14 text-7xl text-stroke transition-all duration-500 group-hover:text-ember group-hover:[-webkit-text-stroke:0px]">
                {s.num}
              </div>
              <h3 className="mb-3 text-lg font-semibold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-smoke">{s.desc}</p>

              {/* connecting arrow */}
              {i < steps.length - 1 && (
                <span className="absolute top-1/2 -right-3 z-10 hidden -translate-y-1/2 text-ember lg:block">
                  →
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
