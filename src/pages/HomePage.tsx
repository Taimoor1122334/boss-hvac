import { useState } from "react";
import { Flame, Phone, Snowflake, Wrench } from "lucide-react";
import { faqs, locationRegions, plans } from "../data";
import { stock } from "../lib/assets";
import { Photo } from "../components/Photo";
import { homeSectionHref, pageHref, serviceHref } from "../lib/router";

const jobs = [
  {
    title: "Air conditioning",
    text: "Repair, replacement, and new installs.",
    href: serviceHref("cooling-systems"),
    icon: Snowflake,
  },
  {
    title: "Heating",
    text: "Furnaces, heat pumps, and no-heat calls.",
    href: serviceHref("heating-furnaces"),
    icon: Flame,
  },
  {
    title: "Maintenance",
    text: "Seasonal tune-ups from $19 a month.",
    href: homeSectionHref("specials"),
    icon: Wrench,
  },
  {
    title: "Financing",
    text: "Monthly payments on qualifying systems.",
    href: homeSectionHref("financing"),
    icon: Phone,
  },
];

const workList = [
  "AC repair, installation, and replacement",
  "Furnace repair, installation, and replacement",
  "Heat pumps",
  "Preventive maintenance",
  "Indoor air quality and filtration",
  "Ductless systems for homes without ducts",
];

const reviews = [
  {
    name: "Dana P.",
    area: "North County",
    text: "The furnace died on a Sunday night. A tech was here in about an hour, showed me the cracked heat exchanger, and had heat back on before morning.",
  },
  {
    name: "Chris Alvarez",
    area: "Metro Core",
    text: "They quoted the AC replacement in writing, including the electrical. The price on the invoice matched the quote.",
  },
  {
    name: "Helen Cho",
    area: "West Valley",
    text: "A maintenance visit caught a clogged condensate drain before it leaked into the ceiling. No extra sales pitch.",
  },
];

export function HomePage({ openQuote }: { openQuote: () => void }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-white text-boss-ink">
      <section className="bg-boss-mist">
        <div className="container-shell grid items-center gap-8 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-14">
          <div>
            <p className="text-[13px] font-bold uppercase tracking-wide text-boss-olive">
              Heating and cooling since 2001
            </p>
            <h1 className="mt-2 max-w-[14ch] text-[clamp(2.3rem,4.4vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.02em]">
              AC and furnace repair, replacement, and maintenance.
            </h1>
            <p className="mt-4 max-w-[480px] text-[18px] leading-snug text-boss-ink/75">
              We tell you what failed, what it costs, and when we can be there. Same-day visits when the schedule allows. No-heat and no-cool calls are answered overnight.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={openQuote}
                className="h-11 rounded-md bg-boss-moss px-5 text-[16px] font-semibold text-boss-ink transition-colors hover:bg-boss-moss-dark"
              >
                Schedule service
              </button>
              <a
                href="tel:+18005550199"
                className="inline-flex h-11 items-center rounded-md border border-boss-ink/20 bg-white px-5 text-[16px] font-semibold transition-colors hover:border-boss-ink hover:bg-boss-mist"
              >
                Call (800) 555-0199
              </a>
            </div>
            <p className="mt-4 text-[14px] text-boss-ink/65">
              North County, Metro Core, Coastal District, West Valley, Riverside, and South Bay.
            </p>
          </div>
          <div className="relative">
            <Photo
              src={stock.acService}
              alt="BOSS technician installing outdoor heating and cooling equipment"
              className="h-[320px] w-full rounded-md object-cover object-[center_35%] sm:h-[420px]"
            />
            <p className="absolute bottom-3 left-3 rounded-md bg-white px-3 py-2 text-[14px] font-semibold shadow-sm">
              Maintenance plans from $19/mo
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-boss-ink/10">
        <div className="container-shell grid sm:grid-cols-2 lg:grid-cols-4">
          {jobs.map((job) => (
            <a
              key={job.title}
              href={job.href}
              className="flex gap-3 border-boss-ink/10 px-1 py-5 transition-colors hover:bg-boss-mist sm:border-r sm:px-5 sm:last:border-r-0"
            >
              <job.icon size={20} className="mt-0.5 shrink-0 text-boss-olive" />
              <span>
                <span className="block text-[18px] font-semibold">{job.title}</span>
                <span className="mt-0.5 block text-[15px] text-boss-ink/70">{job.text}</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-shell grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Photo
            src={stock.acGauges}
            alt="BOSS service crew beside a stocked truck"
            className="h-[280px] w-full rounded-md object-cover sm:h-[360px]"
          />
          <div>
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-semibold leading-tight">
              What you can call us for
            </h2>
            <p className="mt-3 max-w-[520px] text-[17px] leading-snug text-boss-ink/75">
              Most calls are a system that stopped cooling, a furnace that will not light, or equipment that is old enough to replace. We also set up maintenance so those calls happen less often.
            </p>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {workList.map((item) => (
                <li key={item} className="border-l-2 border-boss-moss pl-3 text-[16px]">
                  {item}
                </li>
              ))}
            </ul>
            <a href={pageHref("/services")} className="mt-5 inline-block font-semibold text-boss-olive underline-offset-4 transition-colors hover:text-boss-olive-dark hover:underline">
              See all services
            </a>
          </div>
        </div>
      </section>

      <section className="bg-boss-ink py-14 text-white">
        <div className="container-shell grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-semibold">No cooling right now?</h2>
            <p className="mt-3 max-w-[460px] text-[17px] leading-snug text-white/75">
              If the house is hot, check the thermostat is set to cool and the breakers are on. Then call. We handle refrigerant leaks, failed capacitors, frozen coils, and full replacements.
            </p>
            <a href="tel:+18005550199" className="mt-5 inline-flex h-11 items-center rounded-md bg-white px-5 font-semibold text-boss-ink transition-colors hover:bg-boss-mist">
              Call for AC repair
            </a>
          </div>
          <div>
            <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-semibold">No heat right now?</h2>
            <p className="mt-3 max-w-[460px] text-[17px] leading-snug text-white/75">
              If you smell gas, leave and call the gas company. For a furnace that will not start, a heat pump blowing cold air, or a thermostat with no power, call us. We run heating calls overnight.
            </p>
            <a href="tel:+18005550199" className="mt-5 inline-flex h-11 items-center rounded-md bg-boss-moss px-5 font-semibold text-boss-ink transition-colors hover:bg-boss-moss-dark">
              Call for furnace repair
            </a>
          </div>
        </div>
      </section>

      <section id="specials" className="py-14 sm:py-16">
        <div className="container-shell">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-semibold">Maintenance specials</h2>
              <p className="mt-2 max-w-[520px] text-[17px] text-boss-ink/75">
                Two visits a year, priority scheduling, and a written note of what we found. Memberships start at $19 a month.
              </p>
            </div>
            <button type="button" onClick={openQuote} className="h-11 rounded-md bg-boss-olive px-5 font-semibold text-white transition-colors hover:bg-boss-olive-dark">
              Ask about a plan
            </button>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {plans.slice(0, 3).map((plan) => (
              <article key={plan.title} className="rounded-md border border-boss-ink/10 p-5">
                <p className="text-[13px] font-bold uppercase tracking-wide text-boss-olive">{plan.category}</p>
                <h3 className="mt-2 text-[22px] font-semibold">{plan.title}</h3>
                <p className="mt-2 text-[16px] leading-snug text-boss-ink/75">{plan.description}</p>
                <p className="mt-4 text-[18px] font-semibold">{plan.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="financing" className="border-y border-boss-ink/10 bg-boss-mist py-14">
        <div className="container-shell grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-semibold">Financing on replacement systems</h2>
            <p className="mt-3 max-w-[540px] text-[17px] leading-snug text-boss-ink/75">
              A new furnace or air conditioner can be paid over time on approved credit. We put the monthly amount on the quote before you decide. Terms depend on the lender and the equipment, and we will walk through them in plain numbers.
            </p>
            <button type="button" onClick={openQuote} className="mt-5 h-11 rounded-md bg-boss-ink px-5 font-semibold text-white transition-colors hover:bg-boss-olive">
              Get a written quote
            </button>
          </div>
          <ul className="grid gap-3 text-[16px]">
            <li className="rounded-md bg-white px-4 py-3">Quote first, then a payment option if you want one.</li>
            <li className="rounded-md bg-white px-4 py-3">Available on qualifying installs, not on a service call fee.</li>
            <li className="rounded-md bg-white px-4 py-3">No rate printed here. The current offer goes on your proposal.</li>
          </ul>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-shell">
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-semibold">Recent jobs, in their words</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <figure key={review.name} className="rounded-md border border-boss-ink/10 p-5">
                <blockquote className="text-[16px] leading-snug">{review.text}</blockquote>
                <figcaption className="mt-4 text-[14px] font-semibold">
                  {review.name}
                  <span className="font-normal text-boss-ink/60"> · {review.area}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-boss-ink/10 py-14">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <h2 className="text-[clamp(1.8rem,3vw,2.4rem)] font-semibold">Questions we get on the phone</h2>
          <div>
            {faqs.map((faq, index) => {
              const open = openFaq === index;
              return (
                <div key={faq.question} className="border-b border-boss-ink/10">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-4 text-left text-[17px] font-semibold transition-colors hover:text-boss-olive"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? -1 : index)}
                  >
                    {faq.question}
                    <span className="text-boss-olive">{open ? "–" : "+"}</span>
                  </button>
                  {open && <p className="pb-4 text-[16px] leading-snug text-boss-ink/75">{faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-boss-olive py-12 text-white">
        <div className="container-shell flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-[clamp(1.7rem,3vw,2.2rem)] font-semibold">Tell us what stopped working.</h2>
            <p className="mt-2 text-[16px] text-white/80">
              Areas we cover: {locationRegions.map((region) => region.name).join(", ")}.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={openQuote} className="h-11 rounded-md bg-boss-moss px-5 font-semibold text-boss-ink transition-colors hover:bg-boss-moss-dark">
              Request an appointment
            </button>
            <a href={pageHref("/contact")} className="inline-flex h-11 items-center rounded-md border border-white/40 px-5 font-semibold transition-colors hover:bg-white hover:text-boss-ink">
              Contact page
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
