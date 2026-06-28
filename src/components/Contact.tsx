"use client";

import { useState, FormEvent } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { cn } from "@/lib/utils";

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!form.name.trim()) newErrors.name = "Jméno je povinné";
    if (!form.email.trim()) {
      newErrors.email = "E-mail je povinný";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Zadejte platný e-mail";
    }
    if (!form.message.trim()) newErrors.message = "Zpráva je povinná";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    // Simulate send — replace with real endpoint
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  };

  const inputClass = (field: keyof FormState) =>
    cn(
      "w-full bg-transparent border-b py-3 text-ink font-sans text-base placeholder:text-dust/50 focus:outline-none transition-colors duration-200",
      errors[field]
        ? "border-red-400 focus:border-red-500"
        : "border-mist focus:border-gold"
    );

  return (
    <section
      id="kontakt"
      aria-labelledby="contact-title"
      className="relative py-24 md:py-40 bg-charcoal text-cream"
    >
      {/* Fade in from cream above */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-cream to-transparent pointer-events-none z-0"
      />
      {/* Fade out to ink (Footer) below */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink pointer-events-none z-0"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Left column — info */}
          <div>
            <ScrollReveal>
              <p className="text-xs font-sans uppercase tracking-[0.3em] text-gold mb-3">
                Kontakt
              </p>
              <h2
                id="contact-title"
                className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-light italic leading-none text-cream mb-10"
              >
                Pojďme
                <br />
                spolupracovat
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="space-y-8">
                <div>
                  <p className="text-xs font-sans uppercase tracking-widest text-cream/40 mb-1">
                    Adresa
                  </p>
                  <address className="font-sans text-base text-cream/80 not-italic leading-relaxed">
                    Padělky 3891/V
                    <br />
                    Zlín 76001
                  </address>
                </div>

                <div>
                  <p className="text-xs font-sans uppercase tracking-widest text-cream/40 mb-1">
                    Telefon
                  </p>
                  <a
                    href="tel:+420607830558"
                    className="font-sans text-base text-cream/80 hover:text-gold transition-colors duration-200"
                  >
                    +420 607 830 558
                  </a>
                </div>

                <div>
                  <p className="text-xs font-sans uppercase tracking-widest text-cream/40 mb-1">
                    E-mail
                  </p>
                  <a
                    href="mailto:fotograf@holikovapetra.cz"
                    className="font-sans text-base text-cream/80 hover:text-gold transition-colors duration-200 break-all"
                  >
                    fotograf@holikovapetra.cz
                  </a>
                </div>

                <div className="flex gap-4 pt-2">
                  <a
                    href="https://www.facebook.com/PetraHolikovaFotograf"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook (otevře se v novém okně)"
                    className="text-cream/40 hover:text-gold transition-colors duration-200 p-2 -m-2"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/fotograf_holikova_petra/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram (otevře se v novém okně)"
                    className="text-cream/40 hover:text-gold transition-colors duration-200 p-2 -m-2"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right column — form */}
          <ScrollReveal delay={100}>
            {status === "success" ? (
              <div
                role="alert"
                aria-live="polite"
                className="flex flex-col items-start justify-center h-full gap-4"
              >
                <div className="w-12 h-12 rounded-full border border-gold flex items-center justify-center mb-4">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="#A08050"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-3xl font-light italic text-cream">
                  Děkuji za zprávu!
                </h3>
                <p className="text-cream/60 font-sans text-base">
                  Ozvu se Vám co nejdříve.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Kontaktní formulář"
                className="space-y-8"
              >
                <div>
                  <label htmlFor="name" className="sr-only">
                    Jméno a příjmení
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Jméno a příjmení"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className={cn(inputClass("name"), "text-cream")}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-1 text-xs text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="sr-only">
                    E-mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className={cn(inputClass("email"), "text-cream")}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" role="alert" className="mt-1 text-xs text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="sr-only">
                    Telefon (nepovinné)
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="Telefon (nepovinné)"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    className={cn(inputClass("phone"), "text-cream")}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="sr-only">
                    Vaše zpráva
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Vaše zpráva..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className={cn(
                      inputClass("message"),
                      "text-cream resize-none"
                    )}
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                  {errors.message && (
                    <p id="message-error" role="alert" className="mt-1 text-xs text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className={cn(
                    "inline-flex items-center gap-3 bg-gold hover:bg-gold-light text-cream text-sm font-sans font-medium px-8 py-4 rounded-full transition-all duration-300",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal",
                    "disabled:opacity-60 disabled:cursor-not-allowed"
                  )}
                  aria-label={
                    status === "submitting" ? "Odesílám zprávu…" : "Odeslat zprávu"
                  }
                >
                  {status === "submitting" ? (
                    <>
                      <span
                        className="w-4 h-4 border-2 border-cream/30 border-t-cream rounded-full animate-spin"
                        aria-hidden="true"
                      />
                      Odesílám…
                    </>
                  ) : (
                    <>
                      Odeslat zprávu
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 8h10M8 3l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
