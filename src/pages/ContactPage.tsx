import { useState, type ChangeEvent, type FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Phone, Send, ShieldCheck } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { InnerCTA } from "../components/InnerCTA";
import { ServiceMap } from "../components/ServiceMap";
import { Photo } from "../components/Photo";
import { FAQAccordion } from "../components/FAQAccordion";
import { Eyebrow, PillButton, WaveLines } from "../components/ui";
import { faqs, locationRegions } from "../data";

const inputClass =
  "w-full rounded-xl border border-boss-ink/12 bg-white px-4 py-3 font-body text-[13px] text-boss-ink outline-none transition placeholder:text-boss-ink/35 focus:border-boss-olive";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "AC installation or replacement",
  message: "",
};

export function ContactPage({ openQuote }: { openQuote: () => void }) {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const update = (field: keyof typeof initialForm) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((current) => ({ ...current, [field]: event.target.value }));

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact BOSS"
        title={"Let's Get Your\nComfort Right"}
        description="Questions, estimates, service scheduling, or an urgent repair—reach the BOSS team through whichever channel works best for you."
        image="images/boss-workshop.jpg"
        fallback="images/boss-hero.jpg"
        crumb="Contact Us"
        ctaLabel="Call Now"
        ctaHref="tel:+18005550199"
        meta={["24/7 emergency line", "Fast local dispatch", "Clear upfront pricing"]}
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="container-shell">
          <div data-reveal className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <Eyebrow className="text-boss-olive">Contact Information</Eyebrow>
              <h2 className="section-title mt-4 text-[clamp(2.1rem,5vw,70px)] text-boss-olive">Guide to Reaching Out</h2>
            </div>
            <p className="body-copy max-w-[390px] lg:justify-self-end">
              Our comfort specialists answer questions, confirm service availability, and help you choose the right next step.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Phone, label: "Call us", value: "(800) 555-0199", detail: "Emergency line open 24/7", href: "tel:+18005550199" },
              { icon: Mail, label: "Email us", value: "hello@bosshvac.com", detail: "Replies within one business day", href: "mailto:hello@bosshvac.com" },
              { icon: MapPin, label: "Visit us", value: "1400 Airway Blvd", detail: "Suite 200 · Mon–Fri, 7am–6pm", href: "#/locations" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a key={item.label} href={item.href} data-reveal className="group rounded-[20px] bg-boss-cream p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-boss-olive text-white"><Icon size={19} /></span>
                    <ArrowUpRight size={18} className="text-boss-olive transition-transform duration-300 group-hover:rotate-45" />
                  </div>
                  <p className="mt-9 text-[10px] font-extrabold uppercase tracking-[0.16em] text-boss-ink/45">{item.label}</p>
                  <h3 className="mt-2 text-[21px] font-semibold tracking-[-0.045em]">{item.value}</h3>
                  <p className="body-copy mt-1 text-[12px]">{item.detail}</p>
                </a>
              );
            })}
          </div>

          <div data-reveal className="mt-5 flex flex-col gap-4 rounded-[18px] border border-boss-ink/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <ShieldCheck size={20} className="text-boss-olive" />
              <p className="font-body text-[12px] font-semibold">No-heat or no-cooling emergency? Call the 24/7 line for priority dispatch.</p>
            </div>
            <PillButton label="Request an Estimate" onClick={openQuote} variant="olive" />
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-28">
        <div className="container-shell grid gap-5 lg:grid-cols-[1.45fr_0.55fr]">
          <div data-reveal>
            <ServiceMap regions={locationRegions.slice(0, 4)} activeId="north-county" />
          </div>
          <aside data-reveal className="flex flex-col overflow-hidden rounded-[22px] bg-boss-cream">
            <div className="image-reveal h-[200px] overflow-hidden">
              <Photo src="images/boss-workshop.jpg" fallback="images/about-install.jpg" alt="BOSS operations center" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <Eyebrow className="text-boss-olive">Head Office</Eyebrow>
                <h3 className="mt-4 text-[24px] font-semibold tracking-[-0.045em]">BOSS Operations Center</h3>
                <p className="body-copy mt-2 text-[12px]">1400 Airway Blvd, Suite 200<br />North County, 92001</p>
                <div className="mt-6 grid gap-2 border-t border-boss-ink/10 pt-5">
                  <p className="font-body text-[11px] font-semibold">Monday – Friday · 7:00 AM – 6:00 PM</p>
                  <p className="font-body text-[11px] font-semibold">Saturday · 8:00 AM – 2:00 PM</p>
                  <p className="font-body text-[11px] font-semibold text-boss-olive">Emergency service · 24 hours</p>
                </div>
              </div>
              <a href="tel:+18005550199" className="arrow-link mt-7">Call dispatch <ArrowUpRight size={13} strokeWidth={2.3} /></a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-28">
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-[24px] bg-boss-olive px-5 py-14 text-white sm:px-10 sm:py-16">
            <WaveLines className="text-white/18" />
            <div className="relative z-10">
              <div data-reveal className="text-center">
                <Eyebrow className="text-white/75">Send Us a Message</Eyebrow>
                <h2 className="section-title mt-4 text-[clamp(2.05rem,5vw,68px)] font-normal">Let&apos;s Hear From You</h2>
                <p className="body-copy mx-auto mt-4 max-w-[520px] text-[13px] text-white/70">
                  Share a few details and a BOSS specialist will follow up with the right next step.
                </p>
              </div>

              <div data-reveal className="mx-auto mt-9 max-w-[760px] rounded-[20px] bg-boss-cream p-6 text-boss-ink sm:p-8">
                {sent ? (
                  <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                    <CheckCircle2 size={52} strokeWidth={1.4} className="text-boss-olive" />
                    <h3 className="mt-6 text-[32px] font-semibold tracking-[-0.05em]">Message received.</h3>
                    <p className="body-copy mt-3 max-w-[430px] text-[13px]">
                      Thanks for contacting BOSS. A comfort specialist will review your request and
                      get back to you shortly with availability and next steps.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setForm(initialForm);
                        setSent(false);
                      }}
                      className="mt-8 rounded-full bg-boss-olive px-7 py-3 text-[10px] font-extrabold uppercase tracking-[0.15em] text-white transition hover:bg-boss-olive-dark"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-boss-ink/55">First name</span>
                        <input required value={form.firstName} onChange={update("firstName")} autoComplete="given-name" placeholder="Alex" className={inputClass} />
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-boss-ink/55">Last name</span>
                        <input required value={form.lastName} onChange={update("lastName")} autoComplete="family-name" placeholder="Morgan" className={inputClass} />
                      </label>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-boss-ink/55">Email</span>
                        <input required type="email" value={form.email} onChange={update("email")} autoComplete="email" placeholder="alex@example.com" className={inputClass} />
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-boss-ink/55">Phone</span>
                        <input required type="tel" value={form.phone} onChange={update("phone")} autoComplete="tel" placeholder="(555) 019-2026" className={inputClass} />
                      </label>
                    </div>
                    <label className="block">
                      <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-boss-ink/55">Subject</span>
                      <select value={form.subject} onChange={update("subject")} className={inputClass}>
                        <option>AC installation or replacement</option>
                        <option>Heating or furnace service</option>
                        <option>Heat pump consultation</option>
                        <option>Indoor air quality</option>
                        <option>Preventive maintenance</option>
                        <option>Emergency repair</option>
                        <option>Commercial facility service</option>
                        <option>General question</option>
                      </select>
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-boss-ink/55">Message</span>
                      <textarea required rows={5} value={form.message} onChange={update("message")} placeholder="Tell us what your space needs..." className={cnResize(inputClass)} />
                    </label>
                    <button type="submit" className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-boss-olive text-[10px] font-extrabold uppercase tracking-[0.15em] text-white transition hover:bg-boss-olive-dark">
                      <Send size={14} /> Send message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-28">
        <div className="container-shell max-w-[950px]">
          <div data-reveal className="text-center">
            <Eyebrow className="text-boss-olive">Frequently Asked Questions</Eyebrow>
            <h2 className="section-title mt-4 text-[clamp(2.05rem,5vw,68px)] text-boss-olive">All You Need to Know</h2>
          </div>
          <div className="mt-11">
            <FAQAccordion items={faqs} />
          </div>
          <div data-reveal className="mt-9 flex flex-col gap-5 rounded-[18px] bg-boss-cream p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-boss-ink">Still have a question?</p>
              <p className="body-copy mt-2 max-w-[380px] text-[12px]">Our team is ready to help with service details, scheduling, and system recommendations.</p>
            </div>
            <PillButton label="Reach Out" onClick={openQuote} variant="olive" />
          </div>
        </div>
      </section>

      <InnerCTA
        eyebrow="BOSS Is Ready"
        title={"Your Comfort Is\nOur Priority"}
        description="One call connects you to a local team, a clear plan, and service done properly the first time."
        buttonLabel="Schedule Service"
        onAction={openQuote}
      />
    </>
  );
}

function cnResize(base: string) {
  return `${base} resize-none`;
}
