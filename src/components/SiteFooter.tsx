import { Mail, MapPin, Phone } from "lucide-react";
import { navigation, navHref, pageHref } from "../lib/router";
import { locationRegions } from "../data";
import { Logo } from "./ui";

const jobs = [
  ["AC repair and replacement", "/service/cooling-systems"],
  ["Furnace repair and replacement", "/service/heating-furnaces"],
  ["Indoor air quality", "/service/indoor-air-quality"],
  ["Maintenance plans", "/services"],
];

export function SiteFooter({ openQuote }: { openQuote: () => void }) {
  return (
    <footer id="site-footer" className="bg-boss-ink text-white">
      <div className="container-shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo footer />
          <p className="mt-4 max-w-[280px] text-[15px] leading-snug text-white/75">
            Heating and cooling repair, replacement, and maintenance. We price the work before we start.
          </p>
          <button
            type="button"
            onClick={openQuote}
            className="mt-5 h-10 rounded-md bg-boss-moss px-4 text-[15px] font-semibold text-boss-ink transition-colors hover:bg-boss-moss-dark"
          >
            Request an appointment
          </button>
        </div>

        <div>
          <p className="text-[14px] font-semibold uppercase tracking-wide text-white/60">Services</p>
          <div className="mt-3 grid gap-2">
            {jobs.map(([label, path]) => (
              <a key={label} href={pageHref(path)} className="text-[15px] text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[14px] font-semibold uppercase tracking-wide text-white/60">Company</p>
          <div className="mt-3 grid gap-2">
            {navigation.map((link) => (
              <a key={link.label} href={navHref(link)} className="text-[15px] text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[14px] font-semibold uppercase tracking-wide text-white/60">Service area</p>
          <p className="mt-3 text-[15px] leading-snug text-white/85">
            {locationRegions.map((region) => region.name).join(" · ")}
          </p>
          <div className="mt-4 grid gap-2 text-[15px]">
            <a href="tel:+18005550199" className="inline-flex items-center gap-2 underline-offset-4 transition-colors hover:text-white hover:underline">
              <Phone size={15} /> (800) 555-0199
            </a>
            <a href="mailto:hello@bosshvac.com" className="inline-flex items-center gap-2 text-white/85 underline-offset-4 transition-colors hover:text-white hover:underline">
              <Mail size={15} /> hello@bosshvac.com
            </a>
            <span className="inline-flex items-start gap-2 text-white/85">
              <MapPin size={15} className="mt-0.5 shrink-0" /> 1400 Airway Blvd, Suite 200
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="container-shell py-4 text-[13px] text-white/55">
          © 2026 BOSS Heating &amp; Cooling. Licensed and insured.
        </p>
      </div>
    </footer>
  );
}
