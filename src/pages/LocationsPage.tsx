import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Check, MapPin, Navigation, Phone } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { InnerCTA } from "../components/InnerCTA";
import { ServiceMap } from "../components/ServiceMap";
import { Photo } from "../components/Photo";
import { Eyebrow, PillButton, WaveLines } from "../components/ui";
import { locationRegions, type LocationRegion } from "../data";
import { cn } from "../utils/cn";

const filters = ["All", "Residential", "Commercial", "Coastal"] as const;
type Filter = (typeof filters)[number];

const coverageStats = [
  { value: 6, suffix: "", label: "Local service regions" },
  { value: 29, suffix: "", label: "Field crews on the road" },
  { value: 42, suffix: " min", label: "Average response window" },
];

export function LocationsPage({ openQuote }: { openQuote: () => void }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [activeId, setActiveId] = useState(locationRegions[0].id);

  const filtered = useMemo<LocationRegion[]>(
    () => (filter === "All" ? locationRegions : locationRegions.filter((region) => region.category === filter)),
    [filter]
  );

  useEffect(() => {
    if (filtered.length && !filtered.some((region) => region.id === activeId)) {
      setActiveId(filtered[0].id);
    }
  }, [filtered, activeId]);

  const activeRegion = filtered.find((region) => region.id === activeId) ?? filtered[0] ?? locationRegions[0];

  const focusMap = (id: string) => {
    setActiveId(id);
    window.setTimeout(() => {
      document.getElementById("coverage-map")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  return (
    <>
      <PageHero
        eyebrow="Service Locations"
        title={"Local Teams.\nFast Response."}
        description="BOSS crews are based where you live and work. Fully stocked vehicles, local dispatch, and technicians who understand the buildings and climate in every region we cover."
        image="images/boss-hero.jpg"
        fallback="images/boss-service-team.jpg"
        crumb="Locations"
        ctaLabel="Find My Technician"
        onCta={openQuote}
        meta={["6 local regions", "29 field crews", "24/7 dispatch"]}
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="container-shell">
          <div data-reveal className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <Eyebrow className="text-boss-olive">Where We Work</Eyebrow>
              <h2 className="section-title mt-4 text-[clamp(2.1rem,5vw,70px)] text-boss-olive">Coverage Close to Home</h2>
            </div>
            <p className="body-copy max-w-[390px] lg:justify-self-end">
              Select a service region to see response times, local specialties, and the team assigned to your area.
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

          <div key={filter} className="plan-enter mt-8 grid gap-5 lg:grid-cols-2">
            {filtered.map((region) => (
              <article
                key={region.id}
                data-reveal
                className={cn(
                  "overflow-hidden rounded-[20px] border bg-boss-cream transition-all duration-300",
                  activeId === region.id ? "border-boss-olive shadow-[0_16px_35px_rgba(23,28,24,0.08)]" : "border-transparent"
                )}
              >
                <div className="grid gap-0 sm:grid-cols-[0.9fr_1.1fr]">
                  <div className="image-reveal relative h-[210px] overflow-hidden sm:h-full sm:min-h-[300px]">
                    <Photo src={region.image} fallback="images/boss-hero.jpg" alt={region.name} className="h-full w-full object-cover photo-wash" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/50 bg-black/25 px-3 py-1.5 text-[10px] font-bold tracking-[0.15em] text-white backdrop-blur-md">
                      {region.number}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="eyebrow text-boss-olive">{region.category}</span>
                      <span className="font-body text-[10px] text-boss-ink/45">{region.response}</span>
                    </div>
                    <h3 className="mt-4 text-[28px] font-semibold tracking-[-0.05em]">{region.name}</h3>
                    <p className="mt-1 flex items-center gap-1.5 font-body text-[11px] text-boss-ink/50"><MapPin size={12} /> {region.area}</p>
                    <p className="body-copy mt-3 text-[12px]">{region.description}</p>
                    <div className="mt-5 grid gap-2">
                      {region.checklist.map((item) => (
                        <p key={item} className="flex items-center gap-2.5 font-body text-[11px] font-semibold text-boss-ink/70">
                          <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-boss-olive text-white"><Check size={10} /></span>
                          {item}
                        </p>
                      ))}
                    </div>
                    <button type="button" onClick={() => focusMap(region.id)} className="arrow-link mt-6">
                      View on coverage map <ArrowUpRight size={13} strokeWidth={2.3} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="coverage-map" className="bg-boss-cream py-20 sm:py-28">
        <div className="container-shell">
          <div data-reveal className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            <div>
              <Eyebrow className="text-boss-olive">Live Dispatch Coverage</Eyebrow>
              <h2 className="section-title mt-4 text-[clamp(2.05rem,4.8vw,66px)] text-boss-olive">Always Close By</h2>
            </div>
            <p className="body-copy max-w-[370px] lg:justify-self-end">
              Tap a marker to see the local crew, arrival window, and service address for that region.
            </p>
          </div>

          <div className="mt-9 grid gap-5 lg:grid-cols-[1.45fr_0.55fr]">
            <div data-reveal>
              <ServiceMap regions={filtered} activeId={activeRegion.id} onSelect={setActiveId} />
            </div>
            <aside data-reveal className="flex flex-col justify-between rounded-[22px] bg-white p-6 sm:p-7">
              <div>
                <span className="eyebrow text-boss-olive">Selected region · {activeRegion.number}</span>
                <h3 className="mt-4 text-[31px] font-semibold tracking-[-0.05em]">{activeRegion.name}</h3>
                <p className="body-copy mt-2 text-[12px]">{activeRegion.area}</p>
                <div className="mt-7 grid gap-3 border-t border-boss-ink/10 pt-6">
                  <p className="flex items-center gap-3 font-body text-[12px] font-semibold"><Navigation size={15} className="text-boss-olive" /> {activeRegion.response}</p>
                  <p className="flex items-center gap-3 font-body text-[12px] font-semibold"><Check size={15} className="text-boss-olive" /> {activeRegion.team}</p>
                  <p className="flex items-center gap-3 font-body text-[12px] font-semibold"><MapPin size={15} className="text-boss-olive" /> {activeRegion.address}</p>
                  <p className="flex items-center gap-3 font-body text-[12px] font-semibold"><Phone size={15} className="text-boss-olive" /> (800) 555-0199</p>
                </div>
              </div>
              <div className="mt-8">
                <PillButton label="Request Local Service" onClick={openQuote} variant="olive" />
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="container-shell">
          <div data-reveal className="relative overflow-hidden rounded-[22px] bg-boss-olive px-7 py-11 text-white sm:px-12">
            <WaveLines className="text-white/20" />
            <div className="relative z-10 grid gap-9 lg:grid-cols-[0.8fr_2fr] lg:items-end">
              <div>
                <Eyebrow className="text-white/75">Coverage By the Numbers</Eyebrow>
                <p className="body-copy mt-5 max-w-[270px] text-[12px] text-white/70">
                  Local dispatch means faster answers and technicians who already know your area.
                </p>
              </div>
              <div className="grid grid-cols-1 min-[480px]:grid-cols-3 gap-4">
                {coverageStats.map((stat) => (
                  <div key={stat.label}>
                    <p data-counter={stat.value} data-suffix={stat.suffix} className="text-[clamp(1.9rem,4.6vw,3.9rem)] font-medium leading-none tracking-[-0.06em]">
                      {stat.value}{stat.suffix}
                    </p>
                    <p className="body-copy mt-3 text-[10px] text-white/70 sm:text-[12px]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <InnerCTA
        eyebrow="Your Address, Our Team"
        title={"A Local Technician\nIs Ready"}
        description="Share your address and comfort needs. We'll confirm coverage, availability, and the fastest path to service."
        buttonLabel="Book Service"
        onAction={openQuote}
      />
    </>
  );
}
