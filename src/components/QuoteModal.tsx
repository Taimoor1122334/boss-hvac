import { useEffect, useState, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Phone, X } from "lucide-react";
import { Logo } from "./ui";

export function QuoteModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (!open) return;
    setSent(false);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onEscape);
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-end bg-boss-ink/70 p-2 backdrop-blur-sm sm:p-5"
      onMouseDown={onClose}
      role="presentation"
    >
      <div
        className="relative h-full max-h-[860px] w-full max-w-[520px] overflow-y-auto rounded-[26px] bg-boss-cream p-6 shadow-2xl sm:p-9"
        onMouseDown={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Request a BOSS estimate"
      >
        <div className="flex items-start justify-between">
          <div className="rounded-full bg-boss-ink px-4 py-3">
            <Logo />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full border border-boss-ink/15 text-boss-ink transition hover:bg-boss-ink hover:text-white"
            aria-label="Close quote form"
          >
            <X size={18} />
          </button>
        </div>

        {sent ? (
          <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
            <CheckCircle2 size={54} strokeWidth={1.4} className="mb-6 text-boss-olive" />
            <p className="eyebrow text-boss-olive">Request received</p>
            <h3 className="section-title mt-4 text-[38px] text-boss-ink">Comfort is on the way.</h3>
            <p className="body-copy mt-4 max-w-[350px]">
              Thanks for reaching out. A BOSS comfort specialist will contact you shortly to confirm
              the details and schedule your visit.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 rounded-full bg-boss-olive px-7 py-3 text-[10px] font-extrabold uppercase tracking-[0.15em] text-white transition hover:bg-boss-olive-dark"
            >
              Back to site
            </button>
          </div>
        ) : (
          <>
            <div className="mt-10">
              <p className="eyebrow text-boss-olive">Book with BOSS</p>
              <h3 className="section-title mt-3 text-[40px] text-boss-ink sm:text-[48px]">
                Request an estimate
              </h3>
              <p className="body-copy mt-3 max-w-[390px]">
                Tell us what your space needs. We'll design the right heating, cooling, or air
                quality solution—no pressure, just honest expertise.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-boss-ink/60">
                    Full name
                  </span>
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    placeholder="Alex Morgan"
                    className="w-full rounded-xl border border-boss-ink/12 bg-white px-4 py-3 text-sm outline-none transition focus:border-boss-olive"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-boss-ink/60">
                    Phone
                  </span>
                  <input
                    required
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="(555) 019-2026"
                    className="w-full rounded-xl border border-boss-ink/12 bg-white px-4 py-3 text-sm outline-none transition focus:border-boss-olive"
                  />
                </label>
              </div>
              <label className="block">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-boss-ink/60">
                  Email
                </span>
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="alex@example.com"
                  className="w-full rounded-xl border border-boss-ink/12 bg-white px-4 py-3 text-sm outline-none transition focus:border-boss-olive"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-boss-ink/60">
                  Service needed
                </span>
                <select
                  name="service"
                  defaultValue="AC installation or replacement"
                  className="w-full rounded-xl border border-boss-ink/12 bg-white px-4 py-3 text-sm outline-none transition focus:border-boss-olive"
                >
                  <option>AC installation or replacement</option>
                  <option>Heating or furnace service</option>
                  <option>Heat pump consultation</option>
                  <option>Indoor air quality</option>
                  <option>Preventive maintenance</option>
                  <option>Emergency repair</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.15em] text-boss-ink/60">
                  Tell us more
                </span>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="My upstairs rooms never cool evenly..."
                  className="w-full resize-none rounded-xl border border-boss-ink/12 bg-white px-4 py-3 text-sm outline-none transition focus:border-boss-olive"
                />
              </label>
              <button
                type="submit"
                className="btn-pill btn-olive mt-2 w-full !justify-between"
              >
                <span className="btn-text-mask">
                  <span>Send request</span>
                  <span aria-hidden="true">Send request</span>
                </span>
                <span className="btn-arrow">
                  <ArrowUpRight size={15} strokeWidth={2.2} />
                </span>
              </button>
            </form>

            <a
              href="tel:+18005550199"
              className="mt-6 flex items-center justify-center gap-2 text-xs font-semibold text-boss-ink/60 transition hover:text-boss-olive"
            >
              <Phone size={14} /> Need help now? Call (800) 555-0199
            </a>
          </>
        )}
      </div>
    </div>
  );
}
