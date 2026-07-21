"use client";

import { Fragment } from "react";
import { Reveal, MaskedLines, Magnetic } from "./motion";
import { ArrowRight, ArrowUpRight } from "./icons";
import { siteConfig, formatHour } from "@/lib/siteConfig";

const details = [
  {
    label: "Address",
    value: <>{siteConfig.address.locality}, {siteConfig.address.country}</>,
  },
  {
    label: "Phone",
    value: (
      <a href={`tel:${siteConfig.phone.e164}`} className="transition-colors hover:text-ember">
        {siteConfig.phone.display}
      </a>
    ),
  },
  {
    label: "WhatsApp",
    value: (
      <a
        href={siteConfig.phone.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 transition-colors hover:text-ember"
      >
        {siteConfig.phone.display} <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    ),
  },
  {
    label: "Email",
    value: (
      <a
        href={`mailto:${siteConfig.email}`}
        className="transition-colors hover:text-ember"
      >
        {siteConfig.email}
      </a>
    ),
  },
];

export default function Location() {
  return (
    <section id="location" className="border-t border-line">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2 lg:items-center">
        {/* copy */}
        <div>
          <Reveal>
            <p className="eyebrow mb-5">Location</p>
          </Reveal>
          <MaskedLines
            className="display mb-8 text-5xl sm:text-6xl"
            lines={[
              <span key="1">Easy to find.</span>,
              <span key="2">
                Hard to <span className="text-ember">leave.</span>
              </span>,
            ]}
          />
          <Reveal delay={0.15}>
            <p className="mb-12 max-w-md text-[15px] leading-relaxed text-smoke">
              Free customer parking on site, with easy access from across
              Nottingham. Drop the car in on your commute — collection and
              drop-off made simple.
            </p>
          </Reveal>

          <div className="space-y-0 border-t border-line">
            {details.map((d, i) => (
              <Reveal key={d.label} delay={0.1 + i * 0.08}>
                <div className="grid grid-cols-3 gap-4 border-b border-line py-5">
                  <span className="font-mono text-[11px] tracking-[0.25em] text-smoke uppercase">
                    {d.label}
                  </span>
                  <span className="col-span-2 text-[15px] leading-relaxed text-bone">
                    {d.value}
                  </span>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.35}>
              <div className="grid grid-cols-3 gap-4 border-b border-line py-5">
                <span className="font-mono text-[11px] tracking-[0.25em] text-smoke uppercase">
                  Hours
                </span>
                <div className="col-span-2 grid max-w-xs grid-cols-2 gap-y-1 text-sm text-smoke">
                  {siteConfig.hours.map((h) => (
                    <Fragment key={h.label}>
                      <span>{h.label}</span>
                      <span className="text-bone">
                        {formatHour(h.opens)} – {formatHour(h.closes)}
                      </span>
                    </Fragment>
                  ))}
                  <span>Sunday</span>
                  <span className="text-ember">Closed</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4} className="mt-10">
            <Magnetic className="inline-block">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(
                  `${siteConfig.address.locality}, ${siteConfig.address.country}`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 overflow-hidden bg-bone px-8 py-4 font-semibold text-carbon"
              >
                <span className="absolute inset-0 -translate-x-full bg-ember transition-transform duration-400 ease-out group-hover:translate-x-0" />
                <span className="relative">Get Directions</span>
                <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </Magnetic>
          </Reveal>
        </div>

        {/* map */}
        <Reveal delay={0.2}>
          <div className="relative h-105 overflow-hidden border border-line sm:h-130">
            <iframe
              title="A & R Garage location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                `${siteConfig.address.locality}, ${siteConfig.address.country}`,
              )}&z=12&output=embed`}
              className="map-dark h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute inset-0 border border-line" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
