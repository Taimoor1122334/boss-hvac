import { useState } from "react";
import { ArrowUpRight, Check, MapPin, ShieldCheck, Thermometer, Zap } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { InnerCTA } from "../components/InnerCTA";
import { Photo } from "../components/Photo";
import { ArrowLink, Eyebrow, PillButton, WaveLines, serviceIcons } from "../components/ui";
import { pageHref, serviceHref } from "../lib/router";
import { plans, projects, services, stats } from "../data";
import { cn } from "../utils/cn";

const filters = ["All", "Residential", "Commercial", "Air Quality", "Maintenance"] as const;
type Filter = (typeof filters)[number];

const process = [
  {
    icon: Thermometer,
    title: "Assess",
    description: "We measure the space, equipment, airflow, and comfort concerns before recommending anything.",
  },
  {
    icon: Zap,
    title: "Design",
    description: "Clear options, transparent pricing, and efficiency estimates tailored to how you use the space.",
  },
  {
    icon: ShieldCheck,
    title: "Deliver",
    description: "Certified technicians complete the work cleanly, on schedule, and to documented standards.",
  },
  {
    icon: Check,
    title: "Verify",
    description: "Performance testing and a complete handover confirm the system is doing exactly what it should.",
  },
];

export function ServicesPage({ openQuote }: { openQuote: () => void }) {
  const [filter, setFilter] = useState<Filter>("All");
  const filteredServices = filter === "All" ? services : services.filter((service) => service.category === filter);

  return (
    <>
      <PageHero
        eyebrow="BOSS Services"
        title={"Every Service.\nOne Standard."}
        description="Heating, cooling, air quality, and preventive care—engineered as complete systems, delivered by local technicians who know what reliable comfort requires."
        image="images/boss-service-team.jpg"
        fallback="images/boss-hero.jpg"
        crumb="Services"
        ctaLabel="Request an Estimate"
        onCta={openQuote}
        meta={["Residential & commercial", "Certified technicians", "24/7 emergency support"]}
      />

      <section id="all-services" className="bg-white py-20 sm:py-28">
        <div className="container-shell">
          <div data-reveal className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <Eyebrow className="text-boss-olive">All Services</Eyebrow>
              <h2 className="section-title mt-4 text-[clamp(2.1rem,5.1vw,72px)] text-boss-olive">Comfort, Engineered Right</h2>
            </div>
            <p className="body-copy max-w-[390px] lg:justify-self-end">
              Choose a service to see exactly what is included, how the work is performed, and the
              results you can expect.
            </p>
          </div>

          <div data-reveal className="mt-9 flex flex-wrap gap-2.5">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={cn(
                  "h-10 rounded-full border px-5 font-body text-[12px] font-semibold transition-all duration-300",
                  filter === item
                    ? "border-boss-olive bg-boss-olive text-white"
                    : "border-boss-ink/15 text-boss-ink/60 hover:border-boss-olive hover:text-boss-olive"
                )}
              >
                {item}
              </button>
            ))}
          </div>

          <div key={filter} className="plan-enter mt-8 grid gap-5 md:grid-cols-2">
            {filteredServices.map((service, index) => {
              const Icon = serviceIcons[service.icon];
              return (
                <a
                  key={service.slug}
                  href={serviceHref(service.slug)}
                  data-reveal
                  className="group overflow-hidden rounded-[22px] bg-boss-cream transition-transform duration-500 hover:-translate-y-1"
                >
                  <div className="image-reveal relative h-[280px] overflow-hidden sm:h-[330px]">
                    <Photo src={service.image} fallback="images/about-install.jpg" alt={service.badge} className="h-full w-full object-cover photo-wash transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
                    <span className="absolute left-5 top-5 rounded-full border border-white/45 bg-black/25 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                      {service.category}
                    </span>
                    <span className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full bg-white text-boss-olive">
                      <Icon size={19} strokeWidth={1.8} />
                    </span>
                    <span className="absolute bottom-5 left-6 text-[11px] font-bold tracking-[0.18em] text-white/70">0{index + 1}</span>
                  </div>
                  <div className="p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-5">
                      <h3 className="whitespace-pre-line text-[clamp(27px,3vw,40px)] font-semibold leading-[1.08] tracking-[-0.05em]">{service.title}</h3>
                      <span className="mt-2 grid h-9 w-9 shrink-0 place-items-center rounded-full bg-boss-olive text-white transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight size={16} />
                      </span>
                    </div>
                    <p className="body-copy mt-3 max-w-[430px] text-[13px]">{service.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-boss-ink/12 px-3 py-1.5 font-body text-[10px] font-semibold text-boss-ink/60">{tag}</span>
                      ))}
                    </div>
                    <div className="mt-6 border-t border-boss-ink/10 pt-5">
                      <span className="arrow-link">View service details <ArrowUpRight size={13} strokeWidth={2.3} /></span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-28">
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-[24px] bg-boss-ink px-6 py-12 text-white sm:px-12 sm:py-14">
            <WaveLines className="text-white/12" />
            <div className="relative z-10">
              <div data-reveal className="grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
                <div>
                  <Eyebrow className="text-boss-ice">How We Work</Eyebrow>
                  <h2 className="section-title mt-4 text-[clamp(2.05rem,4.7vw,66px)] font-normal">One Process, Every Service</h2>
                </div>
                <p className="body-copy max-w-[360px] text-[13px] text-white/62 lg:justify-self-end">
                  A clear sequence that keeps the work accurate, the pricing transparent, and the result measurable.
                </p>
              </div>
              <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {process.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} data-reveal className="rounded-[18px] border border-white/12 bg-white/5 p-6">
                      <div className="flex items-center justify-between">
                        <span className="grid h-10 w-10 place-items-center rounded-full bg-boss-ice/15 text-boss-ice"><Icon size={18} /></span>
                        <span className="text-[10px] font-bold tracking-[0.18em] text-white/35">0{index + 1}</span>
                      </div>
                      <h3 className="mt-9 text-[23px] font-semibold tracking-[-0.04em]">{step.title}</h3>
                      <p className="body-copy mt-2 text-[12px] leading-[1.6] text-white/58">{step.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-28">
        <div className="container-shell">
          <div data-reveal className="relative overflow-hidden rounded-[22px] bg-boss-olive px-7 py-11 text-white sm:px-12">
            <WaveLines className="text-white/20" />
            <div className="relative z-10 grid gap-10 lg:grid-cols-[0.8fr_2fr] lg:items-end">
              <div>
                <Eyebrow className="text-white/75">The BOSS Difference</Eyebrow>
                <p className="body-copy mt-5 max-w-[270px] text-[12px] text-white/70">
                  Measured work, documented results, and local teams who stay accountable long after installation.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 sm:gap-5">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p data-counter={stat.value} data-suffix={stat.suffix} className="text-[clamp(1.75rem,4.7vw,4.1rem)] font-medium leading-none tracking-[-0.06em]">{stat.value}{stat.suffix}</p>
                    <p className="body-copy mt-3 text-[10px] text-white/70 sm:text-[12px]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-28">
        <div className="container-shell">
          <div data-reveal className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow className="text-boss-olive">Comfort Plans</Eyebrow>
              <h2 className="section-title mt-4 text-[clamp(2.05rem,4.7vw,66px)] text-boss-olive">Care That Never Stops</h2>
            </div>
            <PillButton label="Build My Plan" onClick={openQuote} variant="olive" />
          </div>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {plans.slice(0, 3).map((plan) => (
              <article key={plan.title} data-reveal className="rounded-[20px] bg-boss-cream p-4">
                <div className="image-reveal h-[210px] overflow-hidden rounded-[13px]">
                  <Photo src={plan.image} fallback="images/about-install.jpg" alt={plan.title} className="h-full w-full object-cover" />
                </div>
                <div className="px-2 pb-1 pt-5">
                  <span className="eyebrow text-boss-olive">{plan.category}</span>
                  <h3 className="mt-3 text-[21px] font-semibold tracking-[-0.04em]">{plan.title}</h3>
                  <p className="body-copy mt-2 min-h-[48px] text-[12px]">{plan.description}</p>
                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-boss-ink/10 pt-4">
                    <span className="text-[11px] font-bold text-boss-olive">{plan.price}</span>
                    <ArrowLink label="Learn More" href={pageHref("/contact")} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-boss-cream py-20 sm:py-28">
        <div className="container-shell">
          <div data-reveal>
            <Eyebrow className="text-boss-olive">Recent Installations</Eyebrow>
            <h2 className="section-title mt-4 text-[clamp(2.05rem,4.8vw,68px)] text-boss-olive">Proof in Every Space</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} data-reveal className="overflow-hidden rounded-[20px] bg-white">
                <div className="image-reveal h-[230px] overflow-hidden">
                  <Photo src={project.image} fallback="images/about-install.jpg" alt={project.title} className="h-full w-full object-cover photo-wash" />
                </div>
                <div className="p-6">
                  <p className="flex items-center gap-2 font-body text-[11px] text-boss-ink/50"><MapPin size={12} /> {project.location}</p>
                  <h3 className="mt-3 text-[23px] font-semibold tracking-[-0.045em]">{project.title}</h3>
                  <p className="body-copy mt-2 text-[12px]">{project.description}</p>
                  <div className="mt-5 border-t border-boss-ink/10 pt-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-boss-ink/40">Impact</p>
                    <p className="mt-1 text-[12px] font-bold text-boss-olive">{project.metrics[2][1]}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <InnerCTA
        eyebrow="Find Your Solution"
        title={"The Right System.\nThe Right Team."}
        description="Tell us what your space needs. We'll give you a clear recommendation, an honest price, and workmanship you can trust."
        buttonLabel="Schedule Service"
        onAction={openQuote}
      />
    </>
  );
}
