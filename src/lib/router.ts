export type SiteRoute = {
  path: string;
  slug?: string;
  section?: string;
  key: string;
};

export const navigation = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Locations", path: "/locations" },
  { label: "Contact Us", path: "/contact" },
];

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
      return "About BOSS | Built on Craft";
    case "/services":
      return "Services | BOSS Climate Control";
    case "/service":
      return `${serviceName ?? "Service"} | BOSS Climate Control`;
    case "/locations":
      return "Service Locations | BOSS Climate Control";
    case "/contact":
      return "Contact BOSS | Book Service";
    default:
      return "BOSS — Perfect Air, Every Season";
  }
}
