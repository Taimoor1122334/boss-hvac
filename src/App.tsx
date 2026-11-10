import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { QuoteModal } from "./components/QuoteModal";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { LocationsPage } from "./pages/LocationsPage";
import { ContactPage } from "./pages/ContactPage";
import { usePageReveals } from "./hooks/usePageReveals";
import { ScrollTrigger } from "./lib/gsap";
import {
  homeSectionHref,
  pageHref,
  parseRoute,
  routeTitle,
  type SiteRoute,
} from "./lib/router";

export default function App() {
  const [route, setRoute] = useState<SiteRoute>(() => parseRoute());
  const [quoteOpen, setQuoteOpen] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  const openQuote = () => setQuoteOpen(true);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    if (!window.location.hash) {
      window.history.replaceState(null, "", "#/");
    }
    const onHashChange = () => setRoute(parseRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Every page opens at the very top. This runs before the reveal
  // animations measure positions, so a new page never starts mid-scroll.
  useLayoutEffect(() => {
    if (!route.section) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [route.key]);

  useEffect(() => {
    setQuoteOpen(false);
    const serviceName = route.slug
      ? route.slug
          .split("-")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      : undefined;
    document.title = routeTitle(route, serviceName);
    const section = route.section;

    if (section) {
      const timer = window.setTimeout(() => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth", block: "start" });
        ScrollTrigger.refresh();
      }, 300);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => ScrollTrigger.refresh(), 80);
    return () => window.clearTimeout(timer);
  }, [route.key, route.path, route.slug, route.section]);

  useEffect(() => {
    const onDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented) return;
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href") ?? "";

      if (href.startsWith("#/")) {
        // Clicking the page you're already on returns you to the top.
        if (parseRoute(href).key === route.key) {
          event.preventDefault();
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        }
        return;
      }

      if (!href.startsWith("#")) return;

      const id = href.slice(1);
      const section = document.getElementById(id);

      if (route.path === "/" && section) {
        event.preventDefault();
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", homeSectionHref(id));
        return;
      }

      const pageMap: Record<string, string> = {
        about: pageHref("/about"),
        services: pageHref("/services"),
        locations: pageHref("/locations"),
        contact: pageHref("/contact"),
      };

      event.preventDefault();
      window.location.hash = pageMap[id] ?? homeSectionHref(id);
    };

    document.addEventListener("click", onDocumentClick);
    return () => document.removeEventListener("click", onDocumentClick);
  }, [route.path]);

  usePageReveals(route.path !== "/", route.key, mainRef);

  const page = (() => {
    switch (route.path) {
      case "/about":
        return <AboutPage openQuote={openQuote} />;
      case "/services":
        return <ServicesPage openQuote={openQuote} />;
      case "/service":
        return <ServiceDetailPage slug={route.slug} openQuote={openQuote} />;
      case "/locations":
        return <LocationsPage openQuote={openQuote} />;
      case "/contact":
        return <ContactPage openQuote={openQuote} />;
      default:
        return <HomePage openQuote={openQuote} />;
    }
  })();

  return (
    <div className="min-h-screen overflow-x-clip bg-white text-boss-ink">
      <SiteHeader route={route} openQuote={openQuote} />
      <main ref={mainRef} className="min-h-screen">
        {page}
      </main>
      <SiteFooter openQuote={openQuote} />
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />
    </div>
  );
}
