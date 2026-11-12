import { ArrowUpRight, Check, ShieldCheck, Thermometer } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { InnerCTA } from "../components/InnerCTA";
import { Photo } from "../components/Photo";
import { FAQAccordion } from "../components/FAQAccordion";
import { Eyebrow, PillButton, WaveLines, serviceIcons } from "../components/ui";
import { serviceHref } from "../lib/router";
import { serviceDetails, services } from "../data";
import { stock } from "../lib/assets";

export function ServiceDetailPage({ slug, openQuote }: { slug?: string; openQuote: () => void }) {
  const detail = serviceDetails.find((item) => item.slug === slug) ?? serviceDetails[0];
  const service = services.find((item) => item.slug === detail.slug) ?? services[0];
  const related = services.filter((item) => item.slug !== detail.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={detail.eyebrow}
        title={detail.title}
        description={detail.heroText}
        image={detail.heroImage}
        fallback={service.image}
        crumb="Services"
        ctaLabel="Request an Estimate"
        onCta={openQuote}
        meta={["Certified technicians", "Upfront pricing", "Workmanship guarantee"]}
      >
        <a href="#/services" className="mt-6 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white/65 transition hover:text-white">
          ← All services
        </a>
      </PageHero>

      <section className="bg-white py-20 sm:py-28">
        <div className="container-shell grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div data-reveal>
            <Eyebrow className="text-boss-olive">{detail.overviewLabel}</Eyebrow>
            <h2 className="section-title mt-5 max-w-[680px] text-[clamp(2.05rem,4.5vw,62px)] text-boss-ink">
              {detail.overviewTitle}
            </h2>
            <p className="body-copy mt-6 max-w-[620px] text-[15px]">{detail.overviewText}</p>
            <div className="mt-8 grid gap-3">
              {detail.included.slice(0, 3).map((item) => (
                <p key={item.title} className="flex items-start gap-3 font-body text-[13px] font-semibold text-boss-ink/75">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-boss-olive text-white"><Check size={12} /></span>
                  {item.title}
                </p>
              ))}
            </div>
            <div className="mt-9">
              <PillButton label="Book This Service" onClick={openQuote} variant="olive" />
            </div>
          </div>
          <div data-reveal className="image-reveal relative min-h-[430px] overflow-hidden rounded-[22px] bg-boss-cream sm:min-h-[540px]">
            <Photo src={detail.overviewImage} fallback={stock.acService} alt={detail.shortTitle} className="h-full w-full object-cover" />
            <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-full border border-white/25 bg-black/35 px-5 py-3 text-white backdrop-blur-md">
              <Thermometer size={17} className="text-boss-ice" />
              <span className="text-[10px] font-bold uppercase tracking-[0.14em]">Measured comfort, verified results</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-28">
        <div className="container-shell">
          <div data-reveal className="relative overflow-hidden rounded-[22px] bg-boss-olive px-7 py-11 text-white sm:px-12">
            <WaveLines className="text-white/20" />
            <div className="relative z-10 grid gap-8 sm:grid-cols-3">
              {detail.stats.map((stat) => (
                <div key={stat.label} className="border-b border-white/18 pb-6 last:border-b-0 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-8 last:sm:border-r-0 last:sm:pr-0">
                  <p className="text-[clamp(34px,4.2vw,58px)] font-medium leading-none tracking-[-0.06em]">{stat.value}</p>
                  <p className="body-copy mt-3 text-[11px] text-white/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-boss-cream py-20 sm:py-28">
        <div className="container-shell">
          <div data-reveal className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <Eyebrow className="text-boss-olive">What Is Included</Eyebrow>
              <h2 className="section-title mt-4 text-[clamp(2.05rem,4.8vw,68px)] text-boss-olive">{detail.includedTitle}</h2>
            </div>
            <p className="body-copy max-w-[390px] lg:justify-self-end">
              Every visit follows a documented checklist, so nothing important is left to chance.
            </p>
          </div>

          <div className="mt-11 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {detail.included.map((item, index) => (
              <article key={item.title} data-reveal className="rounded-[18px] bg-white p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-boss-olive text-white"><Check size={17} /></span>
                  <span className="text-[10px] font-bold tracking-[0.18em] text-boss-ink/30">0{index + 1}</span>
                </div>
                <h3 className="mt-8 text-[21px] font-semibold tracking-[-0.045em]">{item.title}</h3>
                <p className="body-copy mt-2 text-[12px] leading-[1.6]">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-boss-ink py-20 text-white sm:py-28">
        <div className="container-shell">
          <div className="relative">
            <WaveLines className="text-white/10" />
            <div className="relative z-10">
              <div data-reveal className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
                <div>
                  <Eyebrow className="text-boss-ice">Our Process</Eyebrow>
                  <h2 className="section-title mt-4 text-[clamp(2.05rem,4.8vw,68px)] font-normal">From First Call to Final Check</h2>
                </div>
                <p className="body-copy max-w-[380px] text-[13px] text-white/60 lg:justify-self-end">
                  A clear, accountable workflow designed around your schedule and your space.
                </p>
              </div>

              <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {detail.process.map((step) => (
                  <article key={step.number} data-reveal className="rounded-[18px] border border-white/12 bg-white/5 p-6">
                    <p className="text-[11px] font-bold tracking-[0.2em] text-boss-ice">{step.number}</p>
                    <h3 className="mt-10 text-[23px] font-semibold tracking-[-0.045em]">{step.title}</h3>
                    <p className="body-copy mt-2 text-[12px] leading-[1.6] text-white/58">{step.description}</p>
                  </article>
                ))}
              </div>

              <div data-reveal className="mt-6 flex flex-col gap-5 rounded-[18px] bg-boss-olive p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/15"><ShieldCheck size={21} /></span>
                  <div>
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/70">The outcome</p>
                    <p className="mt-2 max-w-[700px] text-[18px] font-medium leading-[1.45] tracking-[-0.03em] sm:text-[22px]">{detail.outcome}</p>
                  </div>
                </div>
                <PillButton label="Get Started" onClick={openQuote} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="container-shell">
          <div data-reveal>
            <Eyebrow className="text-boss-olive">On Site With BOSS</Eyebrow>
            <h2 className="section-title mt-4 text-[clamp(2.05rem,4.8vw,68px)] text-boss-olive">Details That Make the Difference</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {detail.gallery.map((item) => (
              <article key={item.title} data-reveal className="overflow-hidden rounded-[20px] bg-boss-cream">
                <div className="image-reveal h-[240px] overflow-hidden">
                  <Photo src={item.image} fallback={stock.acService} alt={item.title} className="h-full w-full object-cover photo-wash" />
                </div>
                <div className="p-6">
                  <h3 className="text-[20px] font-semibold tracking-[-0.04em]">{item.title}</h3>
                  <p className="body-copy mt-2 text-[12px]">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-28">
        <div className="container-shell max-w-[950px]">
          <div data-reveal className="text-center">
            <Eyebrow className="text-boss-olive">Service Questions</Eyebrow>
            <h2 className="section-title mt-4 text-[clamp(2.05rem,4.8vw,66px)] text-boss-olive">Good to Know</h2>
          </div>
          <div className="mt-11">
            <FAQAccordion items={detail.faqs} />
          </div>
        </div>
      </section>

      <section className="bg-boss-cream py-20 sm:py-28">
        <div className="container-shell">
          <div data-reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow className="text-boss-olive">Explore More</Eyebrow>
              <h2 className="section-title mt-4 text-[clamp(2.05rem,4.7vw,64px)] text-boss-olive">Other BOSS Services</h2>
            </div>
            <PillButton label="All Services" href="#/services" variant="olive" />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => {
              const Icon = serviceIcons[item.icon];
              return (
                <a key={item.slug} href={serviceHref(item.slug)} data-reveal className="group rounded-[18px] bg-white p-6 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex items-start justify-between">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-boss-olive text-white"><Icon size={18} /></span>
                    <ArrowUpRight size={17} className="text-boss-olive transition-transform duration-300 group-hover:rotate-45" />
                  </div>
                  <h3 className="mt-8 whitespace-pre-line text-[25px] font-semibold leading-[1.1] tracking-[-0.045em]">{item.title}</h3>
                  <p className="body-copy mt-3 text-[12px]">{item.description}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <InnerCTA
        eyebrow={detail.eyebrow}
        title={"Ready to Get\nStarted?"}
        description={`Talk with a BOSS specialist about ${detail.shortTitle.toLowerCase()} and receive a clear recommendation for your space.`}
        buttonLabel="Request an Estimate"
        onAction={openQuote}
      />
    </>
  );
}
