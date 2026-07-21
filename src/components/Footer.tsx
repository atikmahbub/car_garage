"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/lib/siteConfig";

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <footer ref={ref} className="relative overflow-hidden border-t border-line">
      <div className="mx-auto max-w-7xl px-5 pt-20 sm:px-8">
        <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="display flex h-9 w-9 items-center justify-center bg-ember text-base text-carbon">
                AR
              </span>
              <span className="display text-lg">
                A&nbsp;&amp;&nbsp;R <span className="text-smoke">Garage</span>
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-smoke">
              Independent service and repair centre. Engineered care for your
              machine since 2010.
            </p>
          </div>

          <div className="font-mono text-[12px] leading-loose tracking-[0.1em] text-smoke uppercase">
            <div className="eyebrow mb-3">Workshop</div>
            {siteConfig.address.locality}, {siteConfig.address.country}
            <br />
            <a
              href={`tel:${siteConfig.phone.e164}`}
              className="text-bone transition-colors hover:text-ember"
            >
              {siteConfig.phone.display}
            </a>
            <br />
            <a
              href={siteConfig.phone.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone transition-colors hover:text-ember"
            >
              WhatsApp: {siteConfig.phone.display}
            </a>
            <br />
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-bone transition-colors hover:text-ember"
            >
              {siteConfig.email}
            </a>
          </div>

          <div className="font-mono text-[12px] leading-loose tracking-[0.1em] text-smoke uppercase md:text-right">
            <div className="eyebrow mb-3 md:text-right">Accreditation</div>
            Good Garage Scheme Member
            <br />
            IMI Certified Technicians
            <br />
            All Repairs Guaranteed
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-line py-6 font-mono text-[11px] tracking-[0.15em] text-smoke/60 uppercase sm:flex-row">
          <span>© {new Date().getFullYear()} A &amp; R Garage Ltd. All rights reserved.</span>
          <span>Company No. 07123456 · VAT GB 123 4567 89</span>
        </div>
      </div>

      {/* giant outline wordmark rising from the bottom */}
      <motion.div
        style={{ y, opacity }}
        aria-hidden
        className="display text-stroke pointer-events-none -mb-[0.23em] text-center text-[18.5vw] leading-none whitespace-nowrap select-none"
      >
        A&amp;R GARAGE
      </motion.div>
    </footer>
  );
}
