import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { navigation, pageHref, type SiteRoute } from "../lib/router";
import { Logo } from "./ui";
import { cn } from "../utils/cn";

export function SiteHeader({
  route,
  openQuote,
}: {
  route: SiteRoute;
  openQuote: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activePath = route.path === "/service" ? "/services" : route.path;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [route.key]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 z-50 px-3 transition-all duration-500 sm:px-5",
        scrolled ? "top-2" : "top-4"
      )}
    >
      <div className="container-shell relative">
        <div
          className={cn(
            "flex h-[60px] items-center justify-between rounded-full border border-white/15 px-3 shadow-[0_12px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl transition-colors duration-500 sm:h-[66px] sm:px-4",
            scrolled ? "bg-boss-ink/92" : "bg-boss-ink/58"
          )}
        >
          <a href={pageHref("/")} onClick={() => setMenuOpen(false)} className="shrink-0">
            <Logo />
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary navigation">
            {navigation.map((link) => (
              <a
                key={link.path}
                href={pageHref(link.path)}
                aria-current={activePath === link.path ? "page" : undefined}
                className={cn(
                  "rounded-full px-4 py-2.5 text-[11px] font-semibold transition-all duration-300 xl:px-5 xl:text-[12px]",
                  activePath === link.path
                    ? "bg-white text-boss-ink"
                    : "text-white/72 hover:bg-white/10 hover:text-white"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+18005550199"
              className="hidden items-center gap-2 rounded-full border border-white/20 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.13em] text-white/80 xl:flex"
            >
              <Phone size={13} /> 24/7 Service
            </a>
            <button
              type="button"
              onClick={openQuote}
              className="hidden h-9 items-center rounded-full border border-white/40 px-5 text-[11px] font-semibold text-white transition hover:bg-white hover:text-boss-ink sm:inline-flex"
            >
              Let&apos;s Talk
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="grid h-9 w-9 place-items-center rounded-full border border-white/25 text-white lg:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="absolute left-0 right-0 top-[72px] rounded-3xl border border-boss-ink/10 bg-boss-cream p-4 shadow-2xl lg:hidden">
            <div className="grid gap-1">
              {navigation.map((link) => (
                <a
                  key={link.path}
                  href={pageHref(link.path)}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-semibold transition",
                    activePath === link.path
                      ? "bg-boss-olive text-white"
                      : "text-boss-ink hover:bg-boss-ink hover:text-white"
                  )}
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  openQuote();
                }}
                className="mt-2 rounded-xl bg-boss-olive px-4 py-3 text-left text-sm font-semibold text-white"
              >
                Request an estimate →
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
