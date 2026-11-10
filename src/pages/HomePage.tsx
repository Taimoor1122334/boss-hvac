import {
  Fragment,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Fan,
  MapPin,
  Minus,
  Network,
  Plus,
  ShieldCheck,
  Target,
  Thermometer,
  Wind,
  Zap,
} from "lucide-react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import {
  aboutTags,
  faqs,
  locationMarks,
  missionWords,
  plans,
  projects,
  services,
  stats,
  team,
} from "../data";
import { ArrowLink, Eyebrow, PillButton, WaveLines, serviceIcons } from "../components/ui";
import { Photo } from "../components/Photo";
import { serviceHref } from "../lib/router";
import { cn } from "../utils/cn";

export function HomePage({ openQuote }: { openQuote: () => void }) {
  // Home page sections and their scroll-driven animation timeline.
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState(0);
  const [planIndex, setPlanIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const visiblePlans = [0, 1, 2].map((offset) => plans[(planIndex + offset) % plans.length]);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (prefersReducedMotion) return;

      gsap.set(".hero-line-inner", { yPercent: 115 });
      gsap.set(".hero-fade", { opacity: 0, y: 20 });

      const intro = gsap.timeline({ defaults: { ease: "power4.out" } });
      intro
        .to(".hero-line-inner", { yPercent: 0, duration: 1.25, stagger: 0.14 })
        .to(".hero-fade", { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }, "-=0.7");

      gsap.to(".hero-media", {
        scale: 1.16,
        yPercent: 9,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      gsap.set(reveals, { opacity: 0, y: 38 });
      ScrollTrigger.batch(reveals, {
        start: "top 88%",
        once: true,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.11,
            ease: "power3.out",
            overwrite: true,
          }),
      });

      gsap.fromTo(
        ".mission-statement [data-word]",
        { color: "#9a9d90" },
        {
          color: "#171c18",
          stagger: 0.025,
          ease: "none",
          scrollTrigger: {
            trigger: ".mission-statement",
            start: "top 82%",
            end: "bottom 55%",
            scrub: 0.6,
          },
        }
      );

      gsap.fromTo(
        ".about-photo img",
        { yPercent: -7, scale: 1.14 },
        {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-photo",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".project-image img").forEach((image) => {
        gsap.fromTo(
          image,
          { scale: 1.18 },
          {
            scale: 1,
            duration: 1.3,
            ease: "power3.out",
            scrollTrigger: { trigger: image, start: "top 90%", once: true },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".wave-lines").forEach((wave) => {
        gsap.fromTo(
          wave,
          { xPercent: 3 },
          {
            xPercent: -5,
            ease: "none",
            scrollTrigger: {
              trigger: wave.parentElement ?? wave,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((element) => {
        const target = Number(element.dataset.counter ?? 0);
        const suffix = element.dataset.suffix ?? "";
        const counter = { value: 0 };
        gsap.to(counter, {
          value: target,
          duration: 1.9,
          ease: "power2.out",
          snap: { value: 1 },
          scrollTrigger: { trigger: element, start: "top 90%", once: true },
          onUpdate: () => {
            element.textContent = `${Math.round(counter.value)}${suffix}`;
          },
        });
      });
    }, rootRef.current!);

    const refresh = () => ScrollTrigger.refresh();
    const timer = window.setTimeout(refresh, 500);
    window.addEventListener("load", refresh);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="overflow-x-clip bg-white text-boss-ink">
      {/* Hero */}
      <section id="home" className="hero relative h-[100svh] min-h-[640px] sm:min-h-[710px] max-h-[1020px] overflow-hidden bg-boss-ink text-white">
        <div className="hero-media absolute inset-0 will-change-transform">
          <Photo
            src="/images/boss-hero.jpg"
            alt="Aerial view of a modern neighborhood surrounded by forest"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,15,12,0.38)_0%,rgba(10,15,12,0.05)_35%,rgba(10,15,12,0.5)_64%,rgba(10,15,12,0.94)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#0e1310] via-[#0e1310]/55 to-transparent" />

        <div className="container-shell relative z-10 flex h-full flex-col justify-end pb-12 pt-28 sm:pb-16">
          <h1 className="mb-10 max-w-[1100px] font-normal leading-[0.98] tracking-[-0.065em] text-[clamp(2.8rem,8.5vw,7.15rem)]">
            <span className="hero-line">
              <span className="hero-line-inner">Perfect Air,</span>
            </span>
            <span className="hero-line">
              <span className="hero-line-inner">Every Season.</span>
            </span>
          </h1>

          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="hero-fade max-w-[410px] font-body text-[13px] leading-[1.7] text-white/78 sm:text-[14px]">
              BOSS delivers precision heating, cooling, and air-quality systems for homes and
              businesses—installed right, maintained relentlessly, and built to keep every space
              comfortable.
            </p>
            <div className="hero-fade flex flex-col items-start gap-5 sm:items-end">
              <PillButton label="Book Service" onClick={openQuote} />
              <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white/55">
                <span className="flex items-center gap-1.5"><Check size={12} /> Licensed &amp; insured</span>
                <span className="h-1 w-1 rounded-full bg-white/35" />
                <span>24/7 response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / vision */}
      <section id="vision" className="bg-white py-20 sm:py-28">
        <div className="container-shell">
          <div data-reveal className="flex justify-center">
            <Eyebrow className="text-boss-olive">The BOSS Standard</Eyebrow>
          </div>

          <h2 className="mission-statement mx-auto mt-8 max-w-[1080px] text-center text-[clamp(27px,3.55vw,52px)] font-medium leading-[1.18] tracking-[-0.045em]">
            {missionWords.map((word, index) => (
              <Fragment key={`${word}-${index}`}>
                <span data-word className="transition-colors duration-300">{word}</span>{" "}
                {index === 8 && (
                  <span className="mx-1.5 inline-flex h-[0.86em] w-[2.1em] translate-y-[0.08em] overflow-hidden rounded-full align-baseline shadow-sm sm:mx-2.5">
                    <Photo src="/images/about-install.jpg" alt="" className="h-full w-full object-cover" />
                  </span>
                )}
              </Fragment>
            ))}
          </h2>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <div data-reveal className="flex min-h-[330px] flex-col justify-between rounded-[20px] bg-boss-cream p-7 sm:p-8">
              <p className="text-[11px] font-extrabold uppercase leading-[1.55] tracking-[0.12em] text-boss-olive">
                A New Standard<br />in Comfort
              </p>
              <div>
                <p className="text-[clamp(46px,5vw,70px)] font-medium leading-none tracking-[-0.06em]">1.2M+</p>
                <p className="body-copy mt-4 max-w-[250px] text-[12px] leading-[1.55]">
                  Square feet of homes and workplaces conditioned by BOSS.
                </p>
              </div>
            </div>

            <div data-reveal className="image-reveal group relative min-h-[330px] overflow-hidden rounded-[20px] bg-boss-ink">
              <Photo
                src="/images/mission-thermostat.jpg"
                alt="Smart thermostat held by a technician"
                className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/5 to-black/15" />
              <span className="absolute left-6 top-6 grid h-9 w-9 place-items-center rounded-full border border-white/45 text-white/80">
                <Target size={16} />
              </span>
              <div className="absolute inset-x-6 bottom-7 text-white">
                <p className="text-[20px] font-semibold tracking-[-0.03em]">VISION</p>
                <p className="mt-2 max-w-[260px] font-body text-[12px] leading-[1.55] text-white/78">
                  Healthier spaces, lower energy use, and comfort that never asks for attention.
                </p>
              </div>
            </div>

            <div data-reveal className="flex min-h-[330px] flex-col justify-between rounded-[20px] bg-boss-olive p-7 text-white sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <p className="font-body text-[12px] text-white/68">Design. Install. Maintain.</p>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/40">
                  <Fan size={15} className="soft-spin" />
                </span>
              </div>
              <h3 className="max-w-[270px] text-[clamp(21px,2vw,28px)] font-semibold uppercase leading-[1.25] tracking-[0.01em]">
                Building comfort that lasts
              </h3>
              <div className="flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-full border-2 border-white">
                  <Photo src="/images/project-heatpump.jpg" alt="" className="h-full w-full object-cover" />
                </span>
                <p className="font-body text-[12px] leading-[1.5] text-white/70">
                  For every space,<br />and every season.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white pb-20 pt-4 sm:pb-28">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-2 lg:items-end">
            <div data-reveal>
              <Eyebrow className="text-boss-olive">About BOSS</Eyebrow>
            </div>
            <h2 data-reveal className="section-title text-right text-[clamp(2.1rem,5.2vw,76px)] text-boss-olive">
              Rooted in Craft
            </h2>
          </div>

          <div className="mt-8 grid gap-7 lg:grid-cols-2">
            <div data-reveal className="flex max-w-[520px] flex-wrap gap-2.5">
              {aboutTags.map((tag) => (
                <span key={tag} className="pill-tag">{tag}</span>
              ))}
            </div>
            <p data-reveal className="body-copy max-w-[520px] lg:justify-self-end">
              BOSS is a climate-control company built on old-school accountability and modern
              engineering. From load calculations to the final airflow test, our certified
              technicians make every detail count—so your comfort is quiet, efficient, and
              dependable for years to come.
            </p>
          </div>

          <div data-reveal className="about-photo image-reveal relative mt-12 h-[400px] overflow-hidden rounded-[22px] sm:h-[500px]">
            <Photo
              src="/images/about-install.jpg"
              alt="BOSS technician installing a modern heat pump outside a home"
              className="h-full w-full object-cover photo-wash"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/10" />
            <div className="absolute bottom-6 left-6 w-[min(88%,330px)] rounded-[18px] bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.16)] sm:bottom-9 sm:left-9 sm:p-7">
              <p className="eyebrow text-boss-olive">Signature Service</p>
              <h3 className="mt-5 text-[24px] font-semibold tracking-[-0.04em] text-boss-ink">
                Precision Comfort Upgrade
              </h3>
              <p className="body-copy mt-2 text-[12px]">Complete heating, cooling &amp; air-quality redesign.</p>
              <button type="button" onClick={openQuote} className="arrow-link mt-8">
                Get an estimate <ArrowUpRight size={13} strokeWidth={2.3} />
              </button>
            </div>
            <div className="absolute bottom-9 right-9 hidden items-center gap-3 rounded-full border border-white/35 bg-boss-ink/35 px-5 py-3 text-white backdrop-blur-md sm:flex">
              <ShieldCheck size={17} />
              <span className="text-[10px] font-bold uppercase tracking-[0.14em]">25+ years trusted</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white pb-20 sm:pb-28">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div data-reveal>
              <Eyebrow className="text-boss-olive">Services</Eyebrow>
              <h2 className="section-title mt-4 text-[clamp(2.1rem,5.1vw,72px)] text-boss-olive">
                Comfort, Engineered Right
              </h2>
            </div>
            <p data-reveal className="body-copy max-w-[360px] lg:justify-self-end">
              From single-room fixes to complete mechanical systems, we solve comfort at the
              source—with clean work, honest guidance, and measurable results.
            </p>
          </div>

          <div className="mt-9 grid gap-4 lg:grid-cols-[1.02fr_1fr] lg:items-stretch">
            <div data-reveal className="service-photo image-reveal relative h-[320px] overflow-hidden rounded-[22px] bg-boss-mist sm:h-[380px] lg:h-[460px]">
              <Photo
                key={activeService}
                src={services[activeService].image}
                alt={services[activeService].badge}
                className="plan-enter absolute inset-0 h-full w-full object-cover object-top photo-wash"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white sm:bottom-6 sm:left-6 sm:right-6">
                <div>
                  <p className="eyebrow text-white/75">Currently viewing</p>
                  <p className="mt-1.5 text-[20px] font-semibold tracking-[-0.035em] sm:text-[22px]">
                    {services[activeService].badge}
                  </p>
                  <p className="mt-1 font-body text-[12px] text-white/72">
                    {services[activeService].highlight}
                  </p>
                  <a href={serviceHref(services[activeService].slug)} className="mt-3 inline-flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.15em] text-white transition hover:text-boss-ice">
                    View service details <ArrowUpRight size={12} />
                  </a>
                </div>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/15 backdrop-blur-md">
                  <Thermometer size={18} />
                </span>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:h-[460px] lg:grid-rows-2">
              {services.map((service, index) => {
                const Icon = serviceIcons[service.icon];
                const isActive = activeService === index;
                return (
                  <div
                    key={service.slug}
                    data-reveal
                    role="button"
                    tabIndex={0}
                    aria-pressed={isActive}
                    onClick={() => setActiveService(index)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setActiveService(index);
                      }
                    }}
                    className={cn(
                      "group flex min-h-[195px] cursor-pointer flex-col justify-between rounded-[20px] p-5 text-left transition-all duration-500 hover:-translate-y-1 lg:min-h-0",
                      isActive
                        ? "bg-boss-olive text-white shadow-[0_16px_35px_rgba(102,104,50,0.22)]"
                        : "bg-boss-cream text-boss-ink hover:bg-[#eceee5]"
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <span
                        className={cn(
                          "grid h-9 w-9 place-items-center rounded-full transition-colors",
                          isActive ? "bg-white text-boss-olive" : "bg-boss-olive text-white"
                        )}
                      >
                        <Icon size={17} strokeWidth={1.8} />
                      </span>
                      <span className={cn("text-[10px] font-bold tracking-[0.15em]", isActive ? "text-white/55" : "text-boss-ink/35")}>
                        0{index + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="whitespace-pre-line text-[clamp(20px,1.85vw,26px)] font-semibold leading-[1.12] tracking-[-0.045em]">
                        {service.title}
                      </h3>
                      <p className={cn("body-copy mt-2 text-[12px] leading-[1.5]", isActive && "text-white/72")}>
                        {service.description}
                      </p>
                      <a
                        href={serviceHref(service.slug)}
                        onClick={(event) => event.stopPropagation()}
                        className={cn("mt-3 inline-flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[0.15em]", isActive ? "text-white" : "text-boss-olive")}
                      >
                        Explore service <ArrowUpRight size={12} />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-white pb-20 sm:pb-28">
        <div className="container-shell">
          <div data-reveal className="stats-band relative overflow-hidden rounded-[22px] bg-boss-olive px-7 py-10 text-white sm:px-12 sm:py-12">
            <WaveLines className="text-white/20" />
            <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_2.1fr] lg:items-end">
              <div className="max-w-[260px]">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15">
                  <Zap size={17} />
                </span>
                <p className="body-copy mt-6 text-[12px] leading-[1.6] text-white/72">
                  Trusted by homeowners, builders, and facility teams to keep comfort running.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3 sm:gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center sm:text-left">
                    <p
                      data-counter={stat.value}
                      data-suffix={stat.suffix}
                      className="text-[clamp(1.75rem,4.8vw,4.25rem)] font-medium leading-none tracking-[-0.06em]"
                    >
                      {stat.value}{stat.suffix}
                    </p>
                    <p className="body-copy mt-3 text-[10px] leading-[1.45] text-white/68 sm:text-[12px]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured installations */}
      <section id="work" className="bg-white pb-20 sm:pb-28">
        <div className="container-shell">
          <div className="rounded-[28px] bg-boss-cream px-5 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
              <div data-reveal>
                <Eyebrow className="text-boss-olive">Featured Installations</Eyebrow>
                <h2 className="section-title mt-4 text-[clamp(2.1rem,5.1vw,72px)] text-boss-olive">
                  Proof in Every Space
                </h2>
              </div>
              <div data-reveal>
                <PillButton label="View All Work" href="#/services" variant="olive" />
              </div>
            </div>

            <div className="mt-10 divide-y divide-boss-ink/12 border-t border-boss-ink/12">
              {projects.map((project) => (
                <div
                  key={project.title}
                  data-reveal
                  className="grid gap-6 py-8 lg:grid-cols-[0.95fr_0.95fr_1.25fr] lg:items-center lg:gap-10 lg:py-9"
                >
                  <div className="flex h-full flex-col justify-between gap-8">
                    <div>
                      <p className="flex items-center gap-2 font-body text-[12px] text-boss-ink/50">
                        <MapPin size={13} /> {project.location}
                      </p>
                      <h3 className="mt-4 text-[clamp(23px,2.15vw,31px)] font-semibold leading-tight tracking-[-0.045em]">
                        {project.title}
                      </h3>
                    </div>
                    <ArrowLink label="Read More" href="#/services" />
                  </div>
                  <div className="project-image image-reveal h-[210px] overflow-hidden rounded-[14px] sm:h-[230px]">
                    <Photo src={project.image} alt={project.title} className="h-full w-full object-cover photo-wash" />
                  </div>
                  <div>
                    <p className="body-copy max-w-[430px] text-[13px] leading-[1.65]">{project.description}</p>
                    <div className="mt-5">
                      {project.metrics.map(([label, value]) => (
                        <div key={label} className="flex items-center justify-between gap-4 border-b border-boss-ink/12 py-2.5 last:border-b-0">
                          <span className="text-[9px] font-extrabold uppercase tracking-[0.16em] text-boss-ink/45">
                            {label}
                          </span>
                          <span className="text-right text-[11px] font-bold text-boss-ink sm:text-[12px]">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Locations / partnership strip */}
      <section id="locations" className="bg-white pb-20 sm:pb-28">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.85fr_1px_2.15fr] lg:items-center lg:gap-12">
          <div data-reveal>
            <Eyebrow className="text-boss-olive">Service Locations</Eyebrow>
            <p className="body-copy mt-5 max-w-[300px]">
              Local technicians, fully stocked vehicles, and fast response across every BOSS
              service region.
            </p>
          </div>
          <div className="hidden h-24 w-px bg-boss-ink/15 lg:block" />
          <div data-reveal className="grid gap-5 md:grid-cols-3">
            {locationMarks.map((mark) => (
              <div key={mark.name} className="group flex items-center gap-3 border-t border-boss-ink/10 pt-5 sm:border-t-0 sm:pt-0">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-boss-cream text-boss-olive transition group-hover:bg-boss-olive group-hover:text-white">
                  <Wind size={16} />
                </span>
                <div>
                  <p className="text-[15px] font-bold tracking-[-0.035em] text-boss-ink/80">{mark.name}</p>
                  <p className="font-body text-[11px] text-boss-ink/45">{mark.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Care plans */}
      <section className="bg-white pb-20 sm:pb-28">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div data-reveal>
              <Eyebrow className="text-boss-olive">Comfort Plans</Eyebrow>
              <h2 className="section-title mt-4 max-w-[620px] text-[clamp(2.1rem,5.1vw,72px)] text-boss-olive">
                Care That<br className="hidden sm:block" /> Never Stops
              </h2>
            </div>
            <p data-reveal className="body-copy max-w-[360px] lg:justify-self-end">
              Choose proactive protection for every system—so comfort stays steady, efficiency
              stays high, and surprises stay rare.
            </p>
          </div>

          <div key={planIndex} className="plan-enter mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visiblePlans.map((plan) => (
              <article key={plan.title} className="rounded-[20px] bg-boss-cream p-4 transition-transform duration-500 hover:-translate-y-1">
                <div className="image-reveal relative h-[220px] overflow-hidden rounded-[13px] sm:h-[240px]">
                  <Photo src={plan.image} alt={plan.title} className="h-full w-full object-cover photo-wash transition-transform duration-700 hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-black/28 px-4 py-2 font-body text-[11px] font-semibold text-white backdrop-blur-md">
                    {plan.category}
                  </span>
                </div>
                <div className="px-2 pb-1 pt-5">
                  <h3 className="text-[20px] font-semibold tracking-[-0.04em]">{plan.title}</h3>
                  <p className="body-copy mt-2 min-h-[48px] text-[12px] leading-[1.55]">{plan.description}</p>
                  <div className="mt-4 border-t border-boss-ink/12 pt-4" />
                  <div className="flex items-end justify-between gap-3">
                    <div>
                      <p className="font-body text-[10px] text-boss-ink/45">Next available visit</p>
                      <p className="mt-1 text-[11px] font-bold">{plan.date}</p>
                      <p className="mt-1 text-[10px] font-semibold text-boss-olive">{plan.price}</p>
                    </div>
                    <ArrowLink
                      label="Learn More"
                      href="#/contact"
                      onClick={(event) => {
                        event.preventDefault();
                        openQuote();
                      }}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                aria-label="Previous care plans"
                onClick={() => setPlanIndex((index) => (index - 1 + plans.length) % plans.length)}
                className="grid h-10 w-10 place-items-center rounded-full border border-boss-ink/20 text-boss-ink transition hover:bg-boss-ink hover:text-white"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                aria-label="Next care plans"
                onClick={() => setPlanIndex((index) => (index + 1) % plans.length)}
                className="grid h-10 w-10 place-items-center rounded-full bg-boss-olive text-white transition hover:bg-boss-olive-dark"
              >
                <ArrowRight size={16} />
              </button>
            </div>
            <PillButton label="Build My Plan" onClick={openQuote} variant="olive" />
          </div>
        </div>
      </section>

      {/* Olive CTA */}
      <section className="bg-white pb-20 sm:pb-28">
        <div className="container-shell">
          <div className="relative overflow-hidden rounded-[22px] bg-boss-olive px-6 py-16 text-center text-white sm:py-20">
            <WaveLines className="text-white/18" />
            <div className="relative z-10">
              <h2 data-reveal className="section-title mx-auto max-w-[850px] text-[clamp(2.1rem,5.6vw,78px)] font-normal">
                Comfort Is Just<br />a Call Away
              </h2>
              <p data-reveal className="body-copy mx-auto mt-5 max-w-[520px] text-[13px] text-white/70">
                Tell us what is not working. Our team will find the cause, explain the options
                clearly, and get your space feeling right again.
              </p>
              <div data-reveal className="mt-8 flex justify-center">
                <PillButton label="Schedule Service" onClick={openQuote} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white pb-20 sm:pb-28">
        <div className="container-shell">
          <div data-reveal>
            <Eyebrow className="text-boss-olive">The BOSS Team</Eyebrow>
            <p className="body-copy mt-5 max-w-[350px]">
              Certified technicians, system designers, and comfort specialists—one accountable team
              from first call to final check.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {team.map((member, index) => (
              <article
                key={member.name}
                data-reveal
                className={cn(
                  "group image-reveal relative h-[340px] overflow-hidden rounded-[18px] bg-boss-mist sm:h-[430px]",
                  index % 2 === 1 ? "lg:mt-14" : "lg:mt-0"
                )}
              >
                <Photo src={member.image} alt={member.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-3 bottom-3 flex items-center justify-between gap-2 rounded-[13px] border border-white/25 bg-black/30 px-3 py-2.5 text-white backdrop-blur-md sm:px-4 sm:py-3">
                  <div>
                    <h4 className="text-[12px] font-semibold leading-tight sm:text-[14px]">{member.name}</h4>
                    <p className="mt-0.5 font-body text-[9px] text-white/68 sm:text-[10px]">{member.role}</p>
                  </div>
                  <a href="#/contact" aria-label={`Connect with ${member.name}`} className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/40 transition hover:bg-white hover:text-boss-ink">
                    <Network size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white pb-20 sm:pb-28">
        <div className="container-shell max-w-[920px]">
          <div data-reveal className="text-center">
            <Eyebrow className="text-boss-olive">Frequently Asked Questions</Eyebrow>
            <h2 className="section-title mt-4 text-[clamp(2.1rem,5.3vw,74px)] text-boss-olive">
              All You Need to Know
            </h2>
          </div>

          <div className="mt-12 border-t border-boss-ink/15">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question} data-reveal className="border-b border-boss-ink/15">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center gap-4 py-5 text-left"
                  >
                    <span className="grid h-5 w-5 shrink-0 place-items-center text-boss-olive">
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </span>
                    <span className="font-body text-[14px] font-semibold text-boss-ink sm:text-[15px]">
                      {faq.question}
                    </span>
                  </button>
                  <div className={cn("grid transition-all duration-500 ease-out", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                    <div className="overflow-hidden">
                      <p className="body-copy max-w-[760px] pb-5 pl-9 text-[13px]">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div data-reveal className="mt-9 flex flex-col gap-5 rounded-[18px] bg-boss-cream p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-boss-ink">
                Have any questions?
              </p>
              <p className="body-copy mt-2 max-w-[360px] text-[12px]">
                We&apos;re here to help—reach out anytime. A BOSS specialist is always ready to assist.
              </p>
            </div>
            <PillButton label="Reach Out" onClick={openQuote} variant="olive" />
          </div>
        </div>
      </section>
    </div>
  );
}
