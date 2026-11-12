export type SiteRoute = {
  path: string;
  slug?: string;
  section?: string;
  key: string;
};

export const navigation: { label: string; path: string; section?: string }[] = [
  { label: "Services", path: "/services" },
  { label: "Specials", path: "/", section: "specials" },
  { label: "Financing", path: "/", section: "financing" },
  { label: "Service Area", path: "/locations" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export function navHref(link: { path: string; section?: string }) {
  if (link.section) return `#/?section=${link.section}`;
  return link.path === "/" ? "#/" : `#${link.path}`;
}

export function parseRoute(hash = typeof window === "undefined" ? "" : window.location.hash): SiteRoute {
  const raw = hash.replace(/^#/, "") || "/";
  const [pathPart, query = ""] = raw.split("?");
  const fullPath = pathPart.startsWith("/") ? pathPart : `/${pathPart}`;
  const parts = fullPath.split("/").filter(Boolean);
  const path = parts.length ? `/${parts[0]}` : "/";
  const section = new URLSearchParams(query).get("section") ?? undefined;
  const slug = path === "/service" ? parts[1] : undefined;

  return { path, slug, section, key: raw };
}

export function pageHref(path: string): string {
  return path === "/" ? "#/" : `#${path}`;
}

export function serviceHref(slug: string): string {
  return `#/service/${slug}`;
}

export function homeSectionHref(section: string): string {
  return `#/?section=${section}`;
}

export function routeTitle(route: SiteRoute, serviceName?: string): string {
  switch (route.path) {
    case "/about":
      return "About BOSS Heating & Cooling";
    case "/services":
      return "HVAC Services | BOSS Heating & Cooling";
    case "/service":
      return `${serviceName ?? "Service"} | BOSS Heating & Cooling`;
    case "/locations":
      return "Service Area | BOSS Heating & Cooling";
    case "/contact":
      return "Schedule Service | BOSS Heating & Cooling";
    default:
      return "BOSS Heating & Cooling | Repair, Installation & Maintenance";
  }
}
