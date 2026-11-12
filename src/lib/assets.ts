function stockPhoto(id: number, w = 1400, h = 1000) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;
}

export const stock = {
  acService: stockPhoto(6471911, 1600, 1200),
  acGauges: stockPhoto(6471913, 1600, 1200),
  mechanical: stockPhoto(20046689, 1600, 1100),
  ducts: stockPhoto(11538226, 1600, 1100),
  home: stockPhoto(1571460, 1600, 1100),
  crew: stockPhoto(1216589, 1400, 1000),
  equipment: stockPhoto(3964341, 1400, 1000),
  elena: stockPhoto(1181690, 900, 1200),
  daniel: stockPhoto(2379004, 900, 1200),
  maya: stockPhoto(1108101, 900, 1200),
};

export function asset(path: string): string {
  if (/^(https?:)?\/\/|^data:|^blob:/i.test(path)) return path;

  const clean = path.replace(/^\.?\//, "");
  if (typeof document === "undefined") return `/${clean}`;

  return new URL(clean, document.baseURI).href;
}

export const DEFAULT_FALLBACK = stock.acService;

export const EMERGENCY_IMAGE =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23171c18'/%3E%3Cstop offset='1' stop-color='%23666832'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='1200' height='800' fill='url(%23g)'/%3E%3Cg fill='none' stroke='%23ffffff' stroke-opacity='.18' stroke-width='1'%3E%3Cpath d='M-50 180 C220 80 350 270 620 170 S980 60 1250 180'/%3E%3Cpath d='M-50 230 C220 130 350 320 620 220 S980 110 1250 230'/%3E%3Cpath d='M-50 280 C220 180 350 370 620 270 S980 160 1250 280'/%3E%3Cpath d='M-50 330 C220 230 350 420 620 320 S980 210 1250 330'/%3E%3Cpath d='M-50 380 C220 280 350 470 620 370 S980 260 1250 380'/%3E%3Cpath d='M-50 430 C220 330 350 520 620 420 S980 310 1250 430'/%3E%3Cpath d='M-50 480 C220 380 350 570 620 470 S980 360 1250 480'/%3E%3Cpath d='M-50 530 C220 430 350 620 620 520 S980 410 1250 530'/%3E%3C/g%3E%3Cg transform='translate(600 400)' stroke='%23ffffff' stroke-opacity='.35' stroke-width='4' stroke-linecap='round'%3E%3Cpath d='M0-46V46M-40-23L40 23M-40 23L40-23'/%3E%3C/g%3E%3C/svg%3E";
