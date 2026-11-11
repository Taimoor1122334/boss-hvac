import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Network, ShieldCheck, Target } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { InnerCTA } from "../components/InnerCTA";
import { Photo } from "../components/Photo";
import { Eyebrow, PillButton, WaveLines } from "../components/ui";
import { coreValues, milestones, stats, team } from "../data";
import { cn } from "../utils/cn";

export function AboutPage({ openQuote }: { openQuote: () => void }) {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const milestone = milestones[activeMilestone];

  return (
    <>
      <PageHero
        eyebrow="About BOSS"
        title={"Built on Craft.\nDriven by Care."}
        description="For more than 25 years, BOSS has raised the standard for residential and commercial comfort—one precise installation, one honest recommendation, and one dependable service call at a time."
        image="images/boss-workshop.jpg"
        fallback="images/boss-hero.jpg"
        crumb="About Us"
        ctaLabel="Book a Consultation"
        onCta={openQuote}
        meta={["Founded 2001", "25+ years of service", "Certified local teams"]}
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div data-reveal>
            <Eyebrow className="text-boss-olive">A Message From Our Founder</Eyebrow>
            <p className="mt-7 max-w-[900px] text-[clamp(26px,3.1vw,45px)] font-medium leading-[1.28] tracking-[-0.045em] text-boss-ink/85">
              BOSS began with a simple belief: comfort should never depend on guesswork. We
              built this company around proper measurements, clean workmanship, and the kind of
              accountability you can count on when the temperature outside is unforgiving.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <PillButton label="Explore Services" href="#/services" variant="olive" />
              <span className="font-body text-[12px] text-boss-ink/50">Sam, Founder &amp; CEO</span>
            </div>
          </div>

          <div data-reveal className="relative overflow-hidden rounded-[20px] bg-boss-mist">
            <Photo src="images/sam.png" alt="Sam, BOSS founder and CEO" className="h-[310px] w-full object-cover sm:h-[370px]" />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-[13px] border border-white/25 bg-black/30 px-4 py-3 text-white backdrop-blur-md">
              <div>
                <p className="text-[14px] font-semibold">Sam</p>
                <p className="font-body text-[10px] text-white/70">Founder &amp; CEO</p>
              </div>
              <a href="#/contact" aria-label="Contact Sam" className="grid h-8 w-8 place-items-center rounded-full border border-white/40">
                <Network size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-28">
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-[26px] bg-boss-cream px-6 py-12 sm:px-12 sm:py-14">
            <WaveLines className="text-boss-olive/12" />
            <div className="relative z-10">
              <div data-reveal className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
                <div>
                  <Eyebrow className="text-boss-olive">Core Values</Eyebrow>
                  <h2 className="section-title mt-4 text-[clamp(2.1rem,5vw,70px)] text-boss-olive">
                    Our Guiding<br />Principles
                  </h2>
                </div>
                <div className="grid grid-cols-3 gap-3 sm:gap-7">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p data-counter={stat.value} data-suffix={stat.suffix} className="text-[clamp(1.7rem,4vw,3.4rem)] font-medium leading-none tracking-[-0.06em] text-boss-olive">
                        {stat.value}{stat.suffix}
                      </p>
                      <p className="body-copy mt-2 text-[10px] leading-[1.4] sm:text-[11px]">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {coreValues.map((value) => (
                  <article key={value.title} data-reveal className="group overflow-hidden rounded-[18px] bg-white">
                    <div className="image-reveal relative h-[210px] overflow-hidden">
                      <Photo src={value.image} alt={value.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <span className="absolute left-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-white/45 text-[11px] font-bold text-white">
                        {value.number}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-[21px] font-semibold tracking-[-0.04em]">{value.title}</h3>
                      <p className="body-copy mt-2 text-[12px] leading-[1.6]">{value.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-28">
        <div className="container-shell">
          <div data-reveal className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <Eyebrow className="text-boss-olive">Vision &amp; Mission</Eyebrow>
            <h2 className="section-title text-[clamp(2.05rem,4.8vw,68px)] text-boss-olive lg:text-right">
              Our Commitment to Every Space
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_1fr_1.05fr]">
            <div data-reveal className="rounded-[20px] bg-boss-cream p-7 sm:p-8">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-boss-olive text-white"><Target size={18} /></span>
              <h3 className="mt-10 text-[26px] font-semibold tracking-[-0.045em]">Our Vision</h3>
              <p className="body-copy mt-3 text-[13px]">A future where every home and workplace enjoys efficient, healthy, dependable comfort.</p>
              <div className="mt-8 grid gap-3 border-t border-boss-ink/10 pt-6">
                {["Lower energy use by design", "Healthier indoor environments", "Comfort built to last"].map((item) => (
                  <p key={item} className="flex items-center gap-3 font-body text-[12px] text-boss-ink/65">
                    <Check size={14} className="text-boss-olive" /> {item}
                  </p>
                ))}
              </div>
            </div>

            <div data-reveal className="rounded-[20px] bg-boss-olive p-7 text-white sm:p-8">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15"><ShieldCheck size={18} /></span>
              <h3 className="mt-10 text-[26px] font-semibold tracking-[-0.045em]">Our Mission</h3>
              <p className="body-copy mt-3 text-[13px] text-white/72">To engineer, install, and maintain climate systems with measurable precision and genuine care.</p>
              <div className="mt-8 grid gap-3 border-t border-white/20 pt-6">
                {["Honest, documented recommendations", "Certified workmanship on every visit", "Local teams available around the clock"].map((item) => (
                  <p key={item} className="flex items-center gap-3 font-body text-[12px] text-white/75">
                    <Check size={14} className="text-boss-ice" /> {item}
                  </p>
                ))}
              </div>
            </div>

            <div data-reveal className="image-reveal min-h-[330px] overflow-hidden rounded-[20px]">
              <Photo src="images/boss-service-team.jpg" alt="BOSS certified service team" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-boss-cream py-20 sm:py-28">
        <div className="container-shell">
          <div data-reveal>
            <Eyebrow className="text-boss-olive">Achievements</Eyebrow>
            <h2 className="section-title mt-4 text-[clamp(2.1rem,5vw,70px)] text-boss-olive">Milestones That Move Us Forward</h2>
          </div>

          <div className="mt-11 grid gap-7 lg:grid-cols-[0.75fr_1.25fr]">
            <div data-reveal className="flex flex-col gap-2">
              {milestones.map((item, index) => (
                <button
                  key={item.year}
                  type="button"
                  onClick={() => setActiveMilestone(index)}
                  className={cn(
                    "group flex items-center justify-between rounded-[14px] border px-5 py-4 text-left transition-all duration-300",
                    activeMilestone === index
                      ? "border-boss-olive bg-boss-olive text-white"
                      : "border-boss-ink/10 bg-white text-boss-ink hover:border-boss-olive/50"
                  )}
                >
                  <div>
                    <p className="text-[22px] font-semibold tracking-[-0.04em]">{item.year}</p>
                    <p className={cn("font-body text-[11px]", activeMilestone === index ? "text-white/65" : "text-boss-ink/45")}>{item.category}</p>
                  </div>
                  <ArrowRight size={17} className={cn("transition-transform", activeMilestone === index && "translate-x-1")} />
                </button>
              ))}
            </div>

            <article data-reveal className="overflow-hidden rounded-[22px] bg-white">
              <div className="image-reveal h-[300px] overflow-hidden sm:h-[380px]">
                <Photo key={milestone.year} src={milestone.image} alt={milestone.title} className="plan-enter h-full w-full object-cover" />
              </div>
              <div className="grid gap-6 p-7 sm:grid-cols-[1fr_auto] sm:items-end sm:p-9">
                <div>
                  <p className="eyebrow text-boss-olive">{milestone.category}</p>
                  <h3 className="mt-4 text-[clamp(27px,3vw,40px)] font-semibold tracking-[-0.05em]">{milestone.title}</h3>
                  <p className="body-copy mt-3 max-w-[480px] text-[13px]">{milestone.description}</p>
                </div>
                <div className="border-t border-boss-ink/10 pt-5 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
                  <p className="text-[38px] font-medium leading-none tracking-[-0.06em] text-boss-olive">{milestone.metric}</p>
                  <p className="body-copy mt-2 max-w-[150px] text-[11px]">{milestone.metricLabel}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="container-shell">
          <div data-reveal className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <Eyebrow className="text-boss-olive">The Faces of BOSS</Eyebrow>
              <h2 className="section-title mt-4 text-[clamp(2.1rem,5vw,70px)] text-boss-olive">One Accountable Team</h2>
            </div>
            <p className="body-copy max-w-[400px] lg:justify-self-end">
              Designers, engineers, and field technicians working together from the first
              assessment through every seasonal service visit.
            </p>
          </div>

          <div className="mt-11 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {team.map((member, index) => (
              <article key={member.name} data-reveal className={cn("group image-reveal relative h-[340px] overflow-hidden rounded-[18px] sm:h-[430px]", index % 2 === 1 && "lg:mt-14")}>
                <Photo src={member.image} alt={member.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 rounded-[13px] border border-white/25 bg-black/30 px-3 py-2.5 text-white backdrop-blur-md sm:px-4 sm:py-3">
                  <div>
                    <h4 className="text-[12px] font-semibold leading-tight sm:text-[14px]">{member.name}</h4>
                    <p className="mt-0.5 font-body text-[9px] text-white/68 sm:text-[10px]">{member.role}</p>
                  </div>
                  <a href="#/contact" aria-label={`Contact ${member.name}`} className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/40 transition hover:bg-white hover:text-boss-ink">
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InnerCTA
        eyebrow="Work With BOSS"
        title={"Comfort Done Right\nStarts Here"}
        description="From a single repair to a complete mechanical redesign, our team is ready to make your space feel exactly right."
        buttonLabel="Request an Estimate"
        onAction={openQuote}
      />
    </>
  );
}
