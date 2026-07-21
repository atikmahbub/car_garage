"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, MaskedLines, Magnetic } from "./motion";
import { ArrowRight, ArrowUpRight } from "./icons";
import { siteConfig } from "@/lib/siteConfig";

const inputCls =
  "w-full border border-line bg-onyx px-4 py-3.5 text-sm text-bone placeholder:text-smoke/50 outline-none transition-colors duration-300 focus:border-ember";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      reg: formData.get("reg"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setSent(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-t border-line bg-onyx">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2">
        {/* info side */}
        <div>
          <Reveal>
            <p className="eyebrow mb-5">Book your slot</p>
          </Reveal>
          <MaskedLines
            className="display mb-8 text-5xl sm:text-6xl"
            lines={[
              <span key="1">Let&apos;s get you</span>,
              <span key="2" className="text-ember">
                booked in.
              </span>,
            ]}
          />
          <Reveal delay={0.15}>
            <p className="mb-12 max-w-md text-[15px] leading-relaxed text-smoke">
              Send the form and we&apos;ll come back within the hour during
              opening times — or call us and speak to a technician, not a call
              centre.
            </p>
          </Reveal>

          <div className="space-y-8">
            <Reveal delay={0.2}>
              <div>
                <div className="eyebrow mb-2 text-smoke!">Call the workshop</div>
                <a
                  href={`tel:${siteConfig.phone.e164}`}
                  className="display text-3xl transition-colors hover:text-ember sm:text-4xl"
                >
                  {siteConfig.phone.display}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <div>
                <div className="eyebrow mb-2 text-smoke!">WhatsApp us</div>
                <a
                  href={siteConfig.phone.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[15px] text-bone/90 transition-colors hover:text-ember"
                >
                  Message us on WhatsApp
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.3}>
              <div>
                <div className="eyebrow mb-2 text-smoke!">Email us</div>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[15px] text-bone/90 transition-colors hover:text-ember"
                >
                  {siteConfig.email}
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* form side */}
        <Reveal delay={0.2}>
          <div className="relative border border-line bg-carbon p-8 sm:p-10">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-100 flex-col items-center justify-center text-center"
                >
                  <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-ember text-2xl text-ember">
                    ✓
                  </span>
                  <h3 className="display mb-3 text-3xl">Request received</h3>
                  <p className="max-w-xs text-sm leading-relaxed text-smoke">
                    We&apos;ll confirm your slot within the hour during opening
                    times. Speak soon.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="eyebrow mb-2 block text-smoke!">
                        Name
                      </label>
                      <input id="name" name="name" required placeholder="John Smith" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="phone" className="eyebrow mb-2 block text-smoke!">
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="07700 900123"
                        className={inputCls}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="reg" className="eyebrow mb-2 block text-smoke!">
                        Vehicle reg
                      </label>
                      <input
                        id="reg"
                        name="reg"
                        required
                        placeholder="AB12 CDE"
                        className={`${inputCls} font-mono uppercase`}
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="eyebrow mb-2 block text-smoke!">
                        Service
                      </label>
                      <select id="service" name="service" className={`${inputCls} appearance-none`}>
                        <option>Short Service</option>
                        <option>Full Service</option>
                        <option>Brakes</option>
                        <option>Suspension</option>
                        <option>Electrical</option>
                        <option>Transmission / Clutch</option>
                        <option>Lighting / Bulbs</option>
                        <option>Something else</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="msg" className="eyebrow mb-2 block text-smoke!">
                      Anything we should know?
                    </label>
                    <textarea
                      id="msg"
                      name="message"
                      rows={4}
                      placeholder="e.g. Knocking noise from front left when braking…"
                      className={`${inputCls} resize-none`}
                    />
                  </div>

                  {error && (
                    <p
                      role="alert"
                      className="border border-ember/40 bg-ember/5 px-4 py-3 text-sm text-ember"
                    >
                      {error}
                    </p>
                  )}

                  <Magnetic className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden bg-ember px-8 py-4 font-semibold text-carbon disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-bone transition-transform duration-400 ease-out group-hover:translate-x-0" />
                      <span className="relative">
                        {submitting ? "Sending…" : "Request Booking"}
                      </span>
                      {!submitting && (
                        <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                      )}
                    </button>
                  </Magnetic>

                  <p className="text-center font-mono text-[10px] tracking-[0.15em] text-smoke/60 uppercase">
                    No spam. No obligation. Reply within the hour.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
