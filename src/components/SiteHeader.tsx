import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { navigation, navHref, type SiteRoute } from "../lib/router";
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

  useEffect(() => {
    setMenuOpen(false);
  }, [route.key]);

  const isCurrent = (link: (typeof navigation)[number]) => {
    if (link.section) return route.path === "/" && route.section === link.section;
    if (link.path === "/services") return route.path === "/services" || route.path === "/service";
    return route.path === link.path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="bg-boss-ink text-white">
        <div className="container-shell flex h-9 items-center justify-between gap-4 text-[13px]">
          <p className="truncate">Licensed and insured · Local crews since 2001</p>
          <a href="tel:+18005550199" className="inline-flex shrink-0 items-center gap-1.5 font-semibold transition-colors hover:text-boss-moss">
            <Phone size={13} />
            (800) 555-0199
          </a>
        </div>
      </div>

      <div className="border-b border-boss-ink/10">
        <div className="container-shell flex h-24 items-center justify-between gap-4">
          <a href="#/" className="shrink-0" onClick={() => setMenuOpen(false)}>
            <Logo />
          </a>

          <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary navigation">
            {navigation.map((link) => (
              <a
                key={link.label}
                href={navHref(link)}
                aria-current={isCurrent(link) ? "page" : undefined}
                className={cn(
                  "text-[15px] font-semibold underline-offset-4 transition-colors hover:text-boss-olive hover:underline",
                  isCurrent(link) ? "text-boss-olive" : "text-boss-ink/80"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={openQuote}
              className="hidden h-10 items-center rounded-md bg-boss-moss px-4 text-[15px] font-semibold text-boss-ink transition-colors hover:bg-boss-moss-dark sm:inline-flex"
            >
              Schedule service
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="grid h-10 w-10 place-items-center rounded-md border border-boss-ink/15 text-boss-ink transition-colors hover:bg-boss-mist xl:hidden"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-b border-boss-ink/10 bg-white px-4 py-3 xl:hidden" aria-label="Mobile navigation">
          <div className="container-shell grid gap-1">
            {navigation.map((link) => (
              <a
                key={link.label}
                href={navHref(link)}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2.5 text-[16px] font-semibold transition-colors hover:bg-boss-mist hover:text-boss-olive",
                  isCurrent(link) ? "bg-boss-mist text-boss-olive" : "text-boss-ink"
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
              className="mt-2 rounded-md bg-boss-moss px-3 py-3 text-left text-[16px] font-semibold text-boss-ink transition-colors hover:bg-boss-moss-dark"
            >
              Schedule service
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
