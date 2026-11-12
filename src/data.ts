import { stock } from "./lib/assets";

const px = (id: string | number, w = 1200, h = 900, ext: "jpeg" | "png" = "jpeg") =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.${ext}?auto=compress&cs=tinysrgb&fit=crop&w=${w}&h=${h}`;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "Contact", href: "/contact" },
];

export const aboutTags = [
  "Air Conditioning",
  "Heating Systems",
  "Heat Pumps",
  "Indoor Air Quality",
  "Ductwork",
  "Smart Controls",
];

export type ServiceIcon = "snowflake" | "flame" | "wind" | "wrench";

export type Service = {
  slug: string;
  title: string;
  description: string;
  category: "Residential" | "Commercial" | "Air Quality" | "Maintenance";
  image: string;
  badge: string;
  highlight: string;
  icon: ServiceIcon;
  tags: string[];
};

export const services: Service[] = [
  {
    slug: "cooling-systems",
    title: "Cooling\nSystems",
    description: "High-efficiency AC installs, replacements, and precision tune-ups.",
    category: "Residential",
    image: stock.acService,
    badge: "Precision Cooling",
    highlight: "Up to 30% lower cooling costs",
    icon: "snowflake",
    tags: ["AC installation", "Repairs", "Seasonal tune-ups"],
  },
  {
    slug: "heating-furnaces",
    title: "Heating &\nFurnaces",
    description: "Dependable heat, engineered for quiet performance and lasting comfort.",
    category: "Residential",
    image: stock.acGauges,
    badge: "Winter Ready",
    highlight: "97% AFUE high-efficiency options",
    icon: "flame",
    tags: ["Furnaces", "Heat pumps", "Emergency heat"],
  },
  {
    slug: "indoor-air-quality",
    title: "Indoor\nAir Quality",
    description: "Filtration, purification, and ventilation that help every room breathe.",
    category: "Air Quality",
    image: px(11538226),
    badge: "Cleaner Air",
    highlight: "Removes up to 99% of airborne particles",
    icon: "wind",
    tags: ["Filtration", "Duct sealing", "Ventilation"],
  },
  {
    slug: "smart-maintenance",
    title: "Smart\nMaintenance",
    description: "Proactive service plans that prevent breakdowns before they happen.",
    category: "Maintenance",
    image: stock.crew,
    badge: "Always Protected",
    highlight: "Priority response, 24 hours a day",
    icon: "wrench",
    tags: ["Care plans", "Diagnostics", "Priority service"],
  },
];

export type ServiceDetail = {
  slug: string;
  eyebrow: string;
  title: string;
  shortTitle: string;
  heroText: string;
  heroImage: string;
  overviewLabel: string;
  overviewTitle: string;
  overviewText: string;
  overviewImage: string;
  stats: { value: string; label: string }[];
  includedTitle: string;
  included: { title: string; description: string }[];
  process: { number: string; title: string; description: string }[];
  gallery: { image: string; title: string; description: string }[];
  outcome: string;
  faqs: { question: string; answer: string }[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "cooling-systems",
    eyebrow: "Cooling Systems",
    title: "Cooling That Feels Effortless",
    shortTitle: "Cooling Systems",
    heroText:
      "Whole-home cooling designed around your space, your climate, and the way you actually live—quiet, even, and efficient from the first warm day to the last.",
    heroImage: px(7347538, 1800, 1050),
    overviewLabel: "Built Around Your Home",
    overviewTitle: "No guesswork. No oversized equipment. Just the right fit.",
    overviewText:
      "A proper cooling system starts with a load calculation, not a sales pitch. BOSS measures room-by-room heat gain, duct capacity, insulation, airflow, and sun exposure before recommending equipment. The result is steadier temperatures, lower humidity, quieter operation, and a system that does not waste energy fighting itself.",
    overviewImage: stock.home,
    stats: [
      { value: "Up to 30%", label: "Lower cooling costs" },
      { value: "SEER2 18+", label: "High-efficiency options" },
      { value: "10 Years", label: "Parts coverage available" },
    ],
    includedTitle: "Every cooling project includes",
    included: [
      { title: "Load & airflow assessment", description: "Room-by-room measurements and duct static pressure testing." },
      { title: "Right-sized equipment", description: "Variable-speed systems matched precisely to your home's demand." },
      { title: "Clean installation", description: "Protected work areas, sealed connections, and careful refrigerant charging." },
      { title: "Performance verification", description: "Temperature split, airflow, drainage, and thermostat calibration." },
      { title: "Smart control setup", description: "Schedules and zoning configured before our team leaves." },
      { title: "Aftercare guidance", description: "Filter schedules, warranty details, and a clear maintenance plan." },
    ],
    process: [
      { number: "01", title: "Comfort Consultation", description: "We listen to the hot rooms, noise concerns, and energy goals first." },
      { number: "02", title: "System Design", description: "Measured load calculations and equipment options with clear pricing." },
      { number: "03", title: "Precision Install", description: "Certified technicians complete the work cleanly and on schedule." },
      { number: "04", title: "Verified Handover", description: "Final airflow testing, controls walkthrough, and warranty registration." },
    ],
    gallery: [
      { image: px(40476251, 1000, 800), title: "Condenser placement", description: "Clearances and airflow checked for long-term reliability." },
      { image: px(27134985, 1000, 800), title: "Modern equipment", description: "Compact, quiet systems for tight exterior spaces." },
      { image: px(27681472, 1000, 800), title: "Detailed commissioning", description: "Every connection tested before handover." },
    ],
    outcome: "Even temperatures, lower humidity, and cooling costs you can actually predict.",
    faqs: [
      { question: "How long does a cooling installation take?", answer: "Most straightforward replacements are completed in one day. Full system redesigns with duct modifications typically take two to three days, and you'll have the schedule before work begins." },
      { question: "Will a new AC really lower my bills?", answer: "When the system is correctly sized and commissioned, modern variable-speed equipment can substantially reduce energy use. We show expected savings based on your current equipment and utility profile." },
      { question: "Do you service all major brands?", answer: "Yes. BOSS technicians service and install all major residential and light-commercial cooling brands, and we help you compare warranty and efficiency options without brand bias." },
      { question: "When should I replace instead of repair?", answer: "We compare the repair cost, equipment age, refrigerant type, efficiency loss, and reliability history. You receive a straightforward recommendation for both paths." },
    ],
  },
  {
    slug: "heating-furnaces",
    eyebrow: "Heating & Furnaces",
    title: "Steady Warmth, All Winter Long",
    shortTitle: "Heating & Furnaces",
    heroText:
      "From high-efficiency furnaces to all-electric heat pumps, BOSS builds heating systems that keep every room comfortable without driving up winter energy bills.",
    heroImage: px(20046689, 1800, 1050),
    overviewLabel: "Comfort You Can Count On",
    overviewTitle: "Warmth that is quiet, safe, and engineered for your climate.",
    overviewText:
      "Heating problems are rarely just about the furnace. Uneven rooms, dry air, short cycling, and rising bills often point to duct losses, poor controls, or incorrect sizing. Our technicians inspect the complete system, explain what is happening in plain language, and build a solution around long-term reliability and safety.",
    overviewImage: stock.mechanical,
    stats: [
      { value: "97%", label: "AFUE furnace options" },
      { value: "24/7", label: "No-heat response" },
      { value: "100%", label: "Combustion safety check" },
    ],
    includedTitle: "Every heating project includes",
    included: [
      { title: "Complete system inspection", description: "Heat exchanger, ignition, venting, gas pressure, and electrical checks." },
      { title: "Heat-loss calculation", description: "Equipment sized to the home's construction and local design temperature." },
      { title: "Efficiency comparison", description: "Gas, dual-fuel, and heat-pump options with operating-cost estimates." },
      { title: "Safe installation", description: "Code-compliant venting, drainage, and combustion setup." },
      { title: "Airflow balancing", description: "Supply and return adjustments for consistent room temperatures." },
      { title: "Winter readiness report", description: "Documented safety readings and maintenance schedule." },
    ],
    process: [
      { number: "01", title: "Heating Assessment", description: "We test the existing system and identify comfort or safety issues." },
      { number: "02", title: "Options & Savings", description: "Clear equipment comparisons, rebates, and expected energy use." },
      { number: "03", title: "Certified Installation", description: "Licensed work with clean removal and responsible disposal." },
      { number: "04", title: "Safety Verification", description: "Combustion analysis, airflow test, and complete controls walkthrough." },
    ],
    gallery: [
      { image: px(6471911, 1000, 800), title: "Precision diagnostics", description: "Accurate readings before any recommendation." },
      { image: px(6471912, 1000, 800), title: "System calibration", description: "Refrigerant and pressure checks performed to specification." },
      { image: px(6471913, 1000, 800), title: "Final electrical test", description: "Every connection verified for safe operation." },
    ],
    outcome: "Reliable heat, even room temperatures, and full confidence in your system's safety.",
    faqs: [
      { question: "Should I choose a furnace or a heat pump?", answer: "It depends on your climate, fuel costs, existing ductwork, and efficiency goals. We model both options and explain the tradeoffs so you can choose with confidence." },
      { question: "What counts as a heating emergency?", answer: "No heat during cold weather, gas odor, carbon-monoxide alarms, repeated breaker trips, or unusual burner noise. Call BOSS immediately and leave the property if you smell gas." },
      { question: "How often should a furnace be inspected?", answer: "Once a year before winter. Annual service verifies combustion safety, cleans critical components, and catches wear before it becomes a mid-season failure." },
      { question: "Can you help with rebates?", answer: "Yes. We identify available utility and manufacturer incentives, prepare the required documentation, and include eligible savings in your quote." },
    ],
  },
  {
    slug: "indoor-air-quality",
    eyebrow: "Indoor Air Quality",
    title: "Air That Feels Genuinely Clean",
    shortTitle: "Indoor Air Quality",
    heroText:
      "Advanced filtration, balanced ventilation, humidity control, and sealed ductwork—designed to make the air inside your space as considered as the temperature.",
    heroImage: px(11538226, 1800, 1050),
    overviewLabel: "The Hidden Half of Comfort",
    overviewTitle: "Comfort is not just temperature. It is what you breathe.",
    overviewText:
      "Dust, pollen, excess humidity, volatile compounds, and leaky ducts can circulate through a building all day. BOSS starts with measured data, then combines the right filtration, fresh-air strategy, and duct corrections into one practical plan. No one-size-fits-all gadgets—just verified improvements you can feel.",
    overviewImage: stock.acService,
    stats: [
      { value: "99%", label: "Particle capture available" },
      { value: "MERV 13+", label: "Upgraded filtration" },
      { value: "35–55%", label: "Target indoor humidity" },
    ],
    includedTitle: "Every air-quality project includes",
    included: [
      { title: "Air-quality assessment", description: "Particle, humidity, CO₂, and airflow readings where applicable." },
      { title: "Duct inspection", description: "Leakage, contamination, pressure, and insulation evaluation." },
      { title: "Filtration design", description: "Media, HEPA, or electronic options matched to your equipment." },
      { title: "Ventilation balancing", description: "Fresh-air intake and exhaust tuned for healthy air changes." },
      { title: "Humidity control", description: "Whole-home dehumidification or humidification as needed." },
      { title: "Verified results", description: "Before-and-after readings and a simple filter care schedule." },
    ],
    process: [
      { number: "01", title: "Measure", description: "We establish a real baseline for particles, humidity, and airflow." },
      { number: "02", title: "Find the Source", description: "Duct leakage, filtration gaps, and ventilation issues are traced." },
      { number: "03", title: "Install Solutions", description: "Filtration, sealing, purification, and controls work together." },
      { number: "04", title: "Verify & Maintain", description: "Post-install readings and a plan that keeps performance steady." },
    ],
    gallery: [
      { image: px(2464420, 1000, 800), title: "Ventilation review", description: "Supply and return paths checked for balanced airflow." },
      { image: px(5502720, 1000, 800), title: "Mechanical filtration", description: "Equipment selected for the building's actual load." },
      { image: px(30892571, 1000, 800), title: "Clean delivery", description: "Sealed registers and tidy finishes throughout." },
    ],
    outcome: "Less dust, fewer allergens, balanced humidity, and fresher air in every room.",
    faqs: [
      { question: "Will better filtration restrict my HVAC airflow?", answer: "Not when it is designed correctly. We measure static pressure and specify media area and equipment compatibility so filtration improves air quality without stressing the system." },
      { question: "Do I need duct cleaning?", answer: "Only when inspection shows debris, biological growth, or airflow restriction. We show you the evidence first and pair cleaning with sealing if leakage is the real cause." },
      { question: "Can air quality help with allergies?", answer: "Proper filtration, humidity control, and ventilation can significantly reduce airborne triggers. We tailor the plan to your space and the contaminants actually present." },
      { question: "How often do filters need changing?", answer: "Most homes need a filter check every 30 to 90 days depending on the media, pets, and runtime. Your handover includes the exact interval for your system." },
    ],
  },
  {
    slug: "smart-maintenance",
    eyebrow: "Smart Maintenance",
    title: "Fewer Breakdowns. Longer System Life.",
    shortTitle: "Smart Maintenance",
    heroText:
      "A proactive care program that combines scheduled service, system diagnostics, priority response, and clear reporting—so comfort never depends on luck.",
    heroImage: stock.crew,
    overviewLabel: "Care Before Repair",
    overviewTitle: "The best service call is the one you never need.",
    overviewText:
      "Most HVAC failures build slowly: a weakening capacitor, a clogged drain, a filter restriction, a small refrigerant loss. BOSS maintenance catches those signs early with measured inspections, documented results, and practical recommendations. Members receive priority scheduling, repair discounts, and a complete service history for every system.",
    overviewImage: stock.mechanical,
    stats: [
      { value: "21 Points", label: "Every seasonal visit" },
      { value: "98%", label: "First-time fix rate" },
      { value: "24/7", label: "Member priority line" },
    ],
    includedTitle: "Every BOSS care plan includes",
    included: [
      { title: "Two seasonal tune-ups", description: "Cooling and heating systems prepared before peak demand." },
      { title: "Measured diagnostics", description: "Refrigerant, electrical, airflow, combustion, and drainage checks." },
      { title: "Filter & coil care", description: "Clean components that protect efficiency and indoor air quality." },
      { title: "Priority scheduling", description: "Members move to the front of the queue, even during heat waves." },
      { title: "Repair savings", description: "Preferred pricing on parts and labor for covered systems." },
      { title: "Digital service history", description: "Clear reports, photos, and recommendations after every visit." },
    ],
    process: [
      { number: "01", title: "System Enrollment", description: "We record equipment, warranties, filters, and performance baseline." },
      { number: "02", title: "Seasonal Service", description: "Scheduled visits arrive before extreme temperatures do." },
      { number: "03", title: "Clear Reporting", description: "You receive findings, priorities, and straightforward options." },
      { number: "04", title: "Priority Support", description: "One call connects you to a team that already knows your system." },
    ],
    gallery: [
      { image: px(7347538, 1000, 800), title: "Preventive inspection", description: "Small issues found before they become repairs." },
      { image: px(6471913, 1000, 800), title: "Electrical verification", description: "Safe, stable operation confirmed at every visit." },
      { image: stock.acGauges, title: "Accountable local team", description: "The same standards on every service call." },
    ],
    outcome: "Longer equipment life, steadier efficiency, and a team that knows your system inside and out.",
    faqs: [
      { question: "Can I join a plan with older equipment?", answer: "Yes. We begin with a full condition assessment and note any immediate safety or reliability concerns before enrollment. The plan then keeps the system monitored and maintained." },
      { question: "What if I need a repair between visits?", answer: "Members receive priority scheduling and preferred repair pricing. Your service history is already on file, so diagnosis is faster." },
      { question: "Are plans available for commercial properties?", answer: "Yes. Facility Coverage is built around equipment lists, operating hours, compliance needs, and predictable annual budgeting." },
      { question: "Can I cancel or change my plan?", answer: "Plans are flexible. Contact our team and we will adjust coverage, transfer it to a new address, or cancel with no pressure." },
    ],
  },
];

export const stats = [
  { value: 25, suffix: "+", label: "Years of Climate Expertise" },
  { value: 98, suffix: "%", label: "First-Time Fix Rate" },
  { value: 24, suffix: "/7", label: "Emergency Response" },
];

export type Project = {
  location: string;
  title: string;
  image: string;
  description: string;
  metrics: [string, string][];
};

export const projects: Project[] = [
  {
    location: "Riverbend · North County",
    title: "Whole-Home Heat Pump",
    image: px(20046689, 1000, 800),
    description:
      "A complete dual-fuel comfort upgrade replacing an aging furnace and AC with whisper-quiet, all-electric climate control.",
    metrics: [
      ["System Installed", "Dual-fuel heat pump"],
      ["Completion", "October 22, 2025"],
      ["Impact", "38% lower energy use"],
    ],
  },
  {
    location: "Meridian Business Park",
    title: "Rooftop Retrofit",
    image: px(17159024, 1000, 800),
    description:
      "A phased commercial retrofit delivering zoned temperature control and dependable airflow across 60,000 square feet.",
    metrics: [
      ["System Installed", "12 rooftop units"],
      ["Completion", "March 16, 2025"],
      ["Impact", "22% operating savings"],
    ],
  },
  {
    location: "The Atrium Lofts",
    title: "Clean Air Renewal",
    image: px(11538226, 1000, 800),
    description:
      "Full duct restoration, balanced ventilation, and hospital-grade filtration for a healthier multi-residence environment.",
    metrics: [
      ["System Installed", "Sealed duct network"],
      ["Completion", "March 3, 2025"],
      ["Impact", "99% particle capture"],
    ],
  },
];

export const locationMarks = [
  { name: "North County", detail: "Residential & estates" },
  { name: "Metro Core", detail: "Commercial specialists" },
  { name: "Coastal District", detail: "24/7 rapid response" },
];

export type LocationRegion = {
  id: string;
  number: string;
  name: string;
  category: "Residential" | "Commercial" | "Coastal";
  area: string;
  description: string;
  image: string;
  response: string;
  team: string;
  address: string;
  checklist: string[];
  mapX: number;
  mapY: number;
};

export const locationRegions: LocationRegion[] = [
  {
    id: "north-county",
    number: "01",
    name: "North County",
    category: "Residential",
    area: "Riverbend · Oak Heights · Willow Park",
    description: "Whole-home heating and cooling for established neighborhoods, new builds, and multi-level estates.",
    image: px(9473065, 1000, 800),
    response: "Average arrival 42 min",
    team: "8 residential crews",
    address: "1400 Airway Blvd, Suite 200",
    checklist: ["Same-day comfort consultations", "Heat pump and furnace specialists", "Estate zoning & smart controls"],
    mapX: 27,
    mapY: 29,
  },
  {
    id: "metro-core",
    number: "02",
    name: "Metro Core",
    category: "Commercial",
    area: "Downtown · Meridian Park · Central Exchange",
    description: "Rooftop systems, multi-zone controls, and facility maintenance for offices, retail, and hospitality.",
    image: px(33719015, 1000, 800),
    response: "Average arrival 28 min",
    team: "6 commercial crews",
    address: "88 Meridian Way, Floor 4",
    checklist: ["Rooftop and VRF systems", "After-hours scheduled service", "Facility compliance reporting"],
    mapX: 54,
    mapY: 46,
  },
  {
    id: "coastal-district",
    number: "03",
    name: "Coastal District",
    category: "Coastal",
    area: "Harbor Point · Seabrook · Bay Terrace",
    description: "Corrosion-resistant equipment, humidity control, and rapid-response service for coastal properties.",
    image: px(20286941, 1000, 800),
    response: "Average arrival 35 min",
    team: "5 coastal crews",
    address: "210 Harbor Service Road",
    checklist: ["Salt-air equipment protection", "Whole-home dehumidification", "Storm-season priority response"],
    mapX: 73,
    mapY: 68,
  },
  {
    id: "west-valley",
    number: "04",
    name: "West Valley",
    category: "Residential",
    area: "Summit Ridge · Cedar Grove · Westfield",
    description: "High-efficiency upgrades and seasonal maintenance for warm-climate homes and growing communities.",
    image: px(8148350, 1000, 800),
    response: "Average arrival 48 min",
    team: "6 residential crews",
    address: "765 Cedar Commerce Drive",
    checklist: ["High-SEER2 cooling systems", "Solar-ready comfort planning", "Indoor air quality upgrades"],
    mapX: 18,
    mapY: 64,
  },
  {
    id: "riverside",
    number: "05",
    name: "Riverside",
    category: "Commercial",
    area: "Riverfront · Millworks · Eastbank",
    description: "Ventilation and mechanical service for warehouses, mixed-use buildings, and production spaces.",
    image: px(4534504, 1000, 800),
    response: "Average arrival 39 min",
    team: "4 industrial crews",
    address: "19 Millworks Avenue",
    checklist: ["Large-format ventilation", "Exhaust and make-up air", "Planned shutdown coordination"],
    mapX: 49,
    mapY: 74,
  },
  {
    id: "south-bay",
    number: "06",
    name: "South Bay",
    category: "Coastal",
    area: "Bay Terrace · Marina Row · Southpoint",
    description: "Compact systems, quiet operation, and air-quality solutions for waterfront homes and condominiums.",
    image: px(39693866, 1000, 800),
    response: "Average arrival 44 min",
    team: "5 coastal crews",
    address: "6 Marina Service Court",
    checklist: ["Low-profile outdoor units", "Condominium system access", "Balanced humidity control"],
    mapX: 79,
    mapY: 35,
  },
];

export type Plan = {
  category: string;
  title: string;
  description: string;
  image: string;
  date: string;
  price: string;
};

export const plans: Plan[] = [
  {
    category: "Protection",
    title: "Seasonal Tune-Up",
    description: "A precision 21-point inspection before every heating and cooling season.",
    image: px(6580240, 1000, 800),
    date: "April 9, 2026",
    price: "From $19/mo",
  },
  {
    category: "Maintenance",
    title: "Priority Care Plan",
    description: "Scheduled service, repair discounts, and front-of-line scheduling.",
    image: px(7347538, 1000, 800),
    date: "February 15, 2026",
    price: "From $29/mo",
  },
  {
    category: "Air Quality",
    title: "Pure Air Program",
    description: "Filter changes, duct checks, and continuous indoor air monitoring.",
    image: px(34725849, 1000, 800),
    date: "November 3, 2026",
    price: "From $24/mo",
  },
  {
    category: "Commercial",
    title: "Facility Coverage",
    description: "Multi-unit maintenance engineered for predictable operating costs.",
    image: px(36360393, 1000, 800, "png"),
    date: "January 12, 2026",
    price: "Custom quote",
  },
  {
    category: "Efficiency",
    title: "Heat Pump Care",
    description: "Specialized year-round service for modern all-electric systems.",
    image: px(20046689, 1000, 800),
    date: "May 21, 2026",
    price: "From $27/mo",
  },
  {
    category: "Comfort",
    title: "Whole-Home Check",
    description: "Room-by-room airflow balancing and smart thermostat calibration.",
    image: px(6903218, 1000, 800),
    date: "June 8, 2026",
    price: "From $21/mo",
  },
];

export const team = [
  { name: "Sam", role: "Founder & CEO", image: "images/sam.png" },
  { name: "Elena Reyes", role: "Comfort Specialist", image: stock.elena },
  { name: "Daniel Brooks", role: "Lead Systems Engineer", image: stock.daniel },
  { name: "Maya Chen", role: "Air Quality Lead", image: stock.maya },
];

export const coreValues = [
  {
    number: "01",
    title: "Precision",
    description: "We measure twice, calculate properly, and verify every system before we call the work complete.",
    image: stock.home,
  },
  {
    number: "02",
    title: "Accountability",
    description: "Clear pricing, documented findings, and technicians who stand behind every recommendation.",
    image: stock.mechanical,
  },
  {
    number: "03",
    title: "Efficiency",
    description: "Comfort engineered to use less energy, last longer, and lower the total cost of ownership.",
    image: px(20046689, 1000, 800),
  },
  {
    number: "04",
    title: "Care",
    description: "Respect for your home, your time, and the people who rely on the air inside it.",
    image: stock.crew,
  },
];

export const milestones = [
  {
    year: "2001",
    category: "The Beginning",
    title: "First BOSS Service Van",
    description: "Founded on one promise: diagnose the real problem and fix it properly the first time.",
    image: px(6471911, 1000, 800),
    metric: "1 Van",
    metricLabel: "One standard, from day one",
  },
  {
    year: "2009",
    category: "Residential Growth",
    title: "Whole-Home Design",
    description: "Introduced room-by-room load calculations and airflow verification as standard practice.",
    image: px(9473065, 1000, 800),
    metric: "5,000+",
    metricLabel: "Homes serviced",
  },
  {
    year: "2016",
    category: "Commercial Division",
    title: "Facility Systems Launch",
    description: "Expanded into rooftop equipment, ventilation balancing, and planned facility maintenance.",
    image: px(17159024, 1000, 800),
    metric: "60+",
    metricLabel: "Managed facilities",
  },
  {
    year: "2021",
    category: "Clean Air",
    title: "Air Quality Laboratory",
    description: "Added measured filtration, humidity, and ventilation diagnostics to every comfort plan.",
    image: px(11538226, 1000, 800),
    metric: "99%",
    metricLabel: "Particle capture options",
  },
  {
    year: "2026",
    category: "BOSS Today",
    title: "Connected Comfort",
    description: "Local crews, digital service records, smart diagnostics, and 24/7 priority response.",
    image: stock.crew,
    metric: "24/7",
    metricLabel: "Always ready",
  },
];

export const faqs = [
  {
    question: "How often should my HVAC system be serviced?",
    answer:
      "We recommend a professional tune-up twice a year—once before cooling season and once before heating season. Regular service protects efficiency, extends equipment life, and catches small issues before they become costly breakdowns.",
  },
  {
    question: "Do you offer 24/7 emergency repairs?",
    answer:
      "Yes. BOSS technicians are on call around the clock for no-heat, no-cooling, refrigerant, and electrical emergencies. Priority Care members always move to the front of the schedule.",
  },
  {
    question: "Can a new system really lower my energy bills?",
    answer:
      "Absolutely. Modern high-efficiency heat pumps and variable-speed systems use substantially less energy than older equipment. We calculate expected savings from your home's load, ductwork, and usage before recommending a system.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Our local teams cover North County, the Metro Core, the Coastal District, West Valley, Riverside, and South Bay, with commercial coverage available across the greater region. Contact us and we'll confirm availability for your address.",
  },
];

export const missionWords = [
  "We",
  "engineer",
  "healthier",
  "indoor",
  "climates",
  "through",
  "precision",
  "HVAC",
  "systems,",
  "deliver",
  "comfort",
  "that",
  "lowers",
  "energy",
  "use,",
  "and",
  "keep",
  "every",
  "space",
  "breathing",
  "clean",
  "air",
  "year-round.",
];
