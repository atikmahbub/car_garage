"use client";

import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { easeOutExpo } from "./motion";
import { ArrowUpRight } from "./icons";
import { siteConfig, formatHour } from "@/lib/siteConfig";

const links = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Location", href: "#location" },
  { label: "Contact Us", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 40));

  // lock page scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: easeOutExpo }}
        className={`fixed inset-x-0 top-0 z-100 transition-all duration-500 ${
          scrolled
            ? "border-b border-line/80 bg-carbon/85 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="group flex items-center gap-3">
            <span className="display flex h-10 w-10 items-center justify-center bg-ember text-lg text-carbon">
              AR
            </span>
            <span className="display text-lg tracking-wide">
              A&nbsp;&amp;&nbsp;R <span className="text-smoke">Garage</span>
            </span>
          </a>

          <div className="flex items-center gap-5">
            <a
              href="#contact"
              className="hidden items-center gap-2 border border-bone/50 bg-carbon/55 px-5 py-2.5 text-[13px] font-semibold tracking-wide text-bone shadow-[0_4px_18px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-300 hover:border-ember hover:bg-carbon/80 hover:text-ember focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-ember sm:inline-flex"
            >
              Book a Service
            </a>

            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="group flex h-10 w-10 flex-col items-center justify-center gap-1.5"
            >
              <span className="block h-0.5 w-6 bg-bone transition-all duration-300 group-hover:w-4 group-hover:bg-ember" />
              <span className="block h-0.5 w-6 bg-bone transition-colors duration-300 group-hover:bg-ember" />
              <span className="block h-0.5 w-6 bg-bone transition-all duration-300 group-hover:w-4 group-hover:bg-ember" />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            {/* backdrop */}
            <motion.button
              aria-label="Close menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-110 bg-carbon/70 backdrop-blur-sm"
            />

            {/* drawer from the right */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.65, ease: easeOutExpo }}
              className="fixed top-0 right-0 bottom-0 z-120 flex w-full max-w-105 flex-col justify-between border-l border-line bg-onyx px-8 py-8 sm:px-12"
            >
              <div className="flex items-center justify-between">
                <span className="eyebrow">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="group relative flex h-10 w-10 items-center justify-center"
                >
                  <span className="absolute block h-0.5 w-6 rotate-45 bg-bone transition-colors duration-300 group-hover:bg-ember" />
                  <span className="absolute block h-0.5 w-6 -rotate-45 bg-bone transition-colors duration-300 group-hover:bg-ember" />
                </button>
              </div>

              <ul className="space-y-3">
                {links.map((l, i) => (
                  <li key={l.href} className="overflow-hidden">
                    <motion.a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "110%", transition: { duration: 0.3, delay: 0 } }}
                      transition={{
                        delay: 0.2 + i * 0.07,
                        duration: 0.8,
                        ease: easeOutExpo,
                      }}
                      className="group flex items-baseline gap-4 py-1"
                    >
                      <span className="font-mono text-xs text-ember">
                        0{i + 1}
                      </span>
                      <span className="display text-5xl text-bone transition-colors duration-300 group-hover:text-ember sm:text-6xl">
                        {l.label}
                      </span>
                    </motion.a>
                  </li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.7, ease: easeOutExpo }}
                className="space-y-4 border-t border-line pt-6"
              >
                <a
                  href={`tel:${siteConfig.phone.e164}`}
                  className="block font-mono text-sm tracking-[0.15em] text-smoke transition-colors hover:text-ember"
                >
                  {siteConfig.phone.display}
                </a>
                <a
                  href={siteConfig.phone.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-sm tracking-[0.15em] text-smoke transition-colors hover:text-ember"
                >
                  WhatsApp <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="block font-mono text-sm tracking-[0.15em] text-smoke transition-colors hover:text-ember"
                >
                  {siteConfig.email}
                </a>
                <p className="font-mono text-xs leading-relaxed tracking-[0.15em] text-smoke/60 uppercase">
                  {siteConfig.hours
                    .map(
                      (h) =>
                        `${h.shortLabel} ${formatHour(h.opens)}–${formatHour(h.closes)}`,
                    )
                    .join(" · ")}
                </p>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
