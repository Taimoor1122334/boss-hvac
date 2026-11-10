import { MapPin, Navigation } from "lucide-react";
import type { LocationRegion } from "../data";
import { cn } from "../utils/cn";

export function ServiceMap({
  regions,
  activeId,
  onSelect,
}: {
  regions: LocationRegion[];
  activeId?: string;
  onSelect?: (id: string) => void;
}) {
  return (
    <div className="relative h-[390px] overflow-hidden rounded-[22px] border border-boss-ink/10 bg-[#e9ebe2] sm:h-[500px]">
      <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(23,28,24,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(23,28,24,0.07)_1px,transparent_1px)] [background-size:42px_42px]" />

      <svg viewBox="0 0 1000 560" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <path d="M-40 120 C180 160 220 60 420 115 S720 205 1040 125" fill="none" stroke="#ffffff" strokeWidth="19" strokeLinecap="round" />
        <path d="M-40 380 C170 340 310 460 510 385 S790 290 1040 350" fill="none" stroke="#ffffff" strokeWidth="17" strokeLinecap="round" />
        <path d="M150 -40 C210 150 170 300 255 600" fill="none" stroke="#ffffff" strokeWidth="16" strokeLinecap="round" />
        <path d="M630 -40 C590 170 690 280 660 600" fill="none" stroke="#ffffff" strokeWidth="16" strokeLinecap="round" />
        <path d="M-40 250 C250 280 390 205 620 255 S850 315 1040 240" fill="none" stroke="#b9c1ae" strokeWidth="2" strokeDasharray="8 10" />
        <path d="M-20 500 C240 420 410 540 650 470 S870 405 1020 460" fill="none" stroke="#b9c1ae" strokeWidth="2" strokeDasharray="8 10" />
        <circle cx="540" cy="255" r="92" fill="#9cc6d3" opacity="0.18" />
        <circle cx="540" cy="255" r="58" fill="#9cc6d3" opacity="0.16" />
      </svg>

      <div className="absolute left-5 top-5 rounded-full border border-boss-ink/10 bg-white/88 px-4 py-2.5 text-[9px] font-extrabold uppercase tracking-[0.16em] text-boss-ink/65 backdrop-blur-md sm:left-7 sm:top-7">
        BOSS Service Network
      </div>

      <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-boss-ink/10 bg-white/88 px-4 py-2.5 font-body text-[10px] text-boss-ink/60 backdrop-blur-md sm:bottom-7 sm:left-7">
        <Navigation size={12} className="text-boss-olive" /> Live dispatch coverage
      </div>

      {regions.map((region) => {
        const active = activeId === region.id;
        return (
          <button
            key={region.id}
            type="button"
            onClick={() => onSelect?.(region.id)}
            aria-label={`Show ${region.name} service region`}
            className="group absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${region.mapX}%`, top: `${region.mapY}%` }}
          >
            <span className={cn(
              "relative flex items-center gap-2 rounded-full border px-3 py-2 text-[10px] font-bold shadow-lg transition-all duration-300 sm:px-4",
              active ? "scale-110 border-boss-olive bg-boss-olive text-white" : "border-boss-ink/10 bg-white text-boss-ink group-hover:scale-105"
            )}>
              <MapPin size={12} className={active ? "text-boss-ice" : "text-boss-olive"} />
              <span className="hidden sm:inline">{region.name}</span>
              <span className="sm:hidden">{region.number}</span>
              {active && <span className="absolute -bottom-2 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-boss-olive" />}
            </span>
          </button>
        );
      })}
    </div>
  );
}
