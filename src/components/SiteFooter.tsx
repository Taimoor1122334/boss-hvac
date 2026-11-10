import { useState, type FormEvent } from "react";
import { Camera, Check, Mail, MapPin, Network, Phone, Play } from "lucide-react";
import { navigation, pageHref } from "../lib/router";
import { Logo } from "./ui";

export function SiteFooter({ openQuote }: { openQuote: () => void }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer id="site-footer" className="bg-[#151714] text-white">
      <div className="container-shell pt-16 sm:pt-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.6fr_0.6fr_1fr]">
          <div>
            <Logo footer />
            <p className="body-copy mt-6 max-w-[330px] text-[13px] text-white/55">
              Subscribe for seasonal comfort tips, efficiency insights, and service reminders
              from the BOSS team.
            </p>
            <form onSubmit={handleSubscribe} className="mt-6 flex max-w-[370px] flex-col gap-2 sm:flex-row">
              <input
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                aria-label="Email address"
                className="h-11 flex-1 rounded-full border border-white/20 bg-transparent px-5 font-body text-[12px] text-white outline-none placeholder:text-white/35 focus:border-boss-moss"
              />
              <button
                type="submit"
                className="h-11 rounded-full bg-boss-olive px-6 text-[10px] font-extrabold uppercase tracking-[0.14em] transition hover:bg-boss-moss"
              >
                Submit
              </button>
            </form>
            {subscribed && (
              <p className="mt-3 flex items-center gap-2 font-body text-[12px] text-boss-ice">
                <Check size={13} /> You&apos;re on the list. Welcome to BOSS.
              </p>
            )}
          </div>

          <div>
            <p className="text-[12px] font-bold">Quick Links</p>
            <div className="mt-5 grid gap-3">
              {navigation.slice(0, 3).map((link) => (
                <a key={link.path} href={pageHref(link.path)} className="body-copy text-[12px] text-white/50 transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[12px] font-bold">Explore</p>
            <div className="mt-5 grid gap-3">
              <a href={pageHref("/services")} className="body-copy text-[12px] text-white/50 transition hover:text-white">All Services</a>
              <a href={pageHref("/locations")} className="body-copy text-[12px] text-white/50 transition hover:text-white">Locations</a>
              <a href="#/?section=work" className="body-copy text-[12px] text-white/50 transition hover:text-white">Installations</a>
              <button type="button" onClick={openQuote} className="body-copy text-left text-[12px] text-white/50 transition hover:text-white">Book Service</button>
            </div>
          </div>

          <div>
            <p className="text-[12px] font-bold">Contact</p>
            <div className="mt-5 grid gap-3">
              <a href="mailto:hello@bosshvac.com" className="flex items-center gap-2 body-copy text-[12px] text-white/50 transition hover:text-white">
                <Mail size={14} className="text-boss-moss" /> hello@bosshvac.com
              </a>
              <a href="tel:+18005550199" className="flex items-center gap-2 body-copy text-[12px] text-white/50 transition hover:text-white">
                <Phone size={14} className="text-boss-moss" /> (800) 555-0199
              </a>
              <span className="flex items-center gap-2 body-copy text-[12px] text-white/50">
                <MapPin size={14} className="text-boss-moss" /> 1400 Airway Blvd, Suite 200
              </span>
            </div>
            <div className="mt-6 flex items-center gap-2">
              {[Camera, Network, Play].map((Social, index) => (
                <a
                  key={index}
                  href={pageHref("/contact")}
                  aria-label={["BOSS gallery", "BOSS professional network", "BOSS videos"][index]}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white text-boss-ink transition hover:bg-boss-moss"
                >
                  <Social size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/12 py-7 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="font-body text-[11px] text-white/40">
            © 2026 BOSS Climate Control. All rights reserved.
          </p>
          <p className="font-body text-[11px] text-white/40">
            Perfect air. Every season. · Licensed, insured &amp; locally trusted.
          </p>
        </div>
      </div>
    </footer>
  );
}
