export const site = {
  name: "A&F HVAC",
  tagline: "Heating, Air Conditioning & Refrigeration",
  phoneDisplay: "610-704-4419",
  phoneHref: "tel:6107044419",
  email: "service@afhvacservice.com",
  emailHref: "mailto:service@afhvacservice.com",
  ownerName: "James M. Fox",
  ownerEmail: "JamesMfox@afhvacservice.com",
  ownerEmailHref: "mailto:JamesMfox@afhvacservice.com",
  street: "147 East Zimmer Drive",
  city: "Walnutport",
  region: "PA",
  locality: "Walnutport, Pennsylvania",
  license: "PA LIC 037268",
  insurance: "Fully Insured",
  experience: "Family-owned for over 25 years",
  mapsHref: "https://maps.google.com/?q=147+East+Zimmer+Drive,+Walnutport,+PA",
} as const;

export const siteUrl = "https://www.afhvacservice.com";

export const carrierInfinityUrl = "https://www.carrier.com/us/en/residential/infinity-system/";

export const infinityServiceName = "Carrier Infinity System";

export const infinityConsultHref = "/contact?interest=carrier-infinity-system#estimate";

export const addressLine = `${site.street}, ${site.city}, ${site.region}`;

export const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/financing", label: "Financing" },
  { href: "/service-area", label: "Service Area" },
  { href: "/contact", label: "Contact" },
] as const;

export const dealers = [
  {
    name: "Carrier",
    text: "Heating and cooling equipment",
    logo: "/brand/carrier-logo.png",
    logoWidth: 2000,
    logoHeight: 622,
  },
  {
    name: "Whirlpool",
    text: "Heating and cooling equipment",
    logo: "/brand/whirlpool-logo.png",
    logoWidth: 1260,
    logoHeight: 400,
  },
  {
    name: "Ducane",
    text: "Heating and cooling equipment",
    logo: "/brand/ducane-logo.png",
    logoWidth: 183,
    logoHeight: 77,
  },
] as const;

export const serviceAreas = [
  {
    slug: "lehigh-county",
    name: "Lehigh County",
    label: "Lehigh County, PA",
  },
  {
    slug: "northampton-county",
    name: "Northampton County",
    label: "Northampton County, PA",
  },
  {
    slug: "carbon-county",
    name: "Carbon County",
    label: "Carbon County, PA",
  },
] as const;

export const services = [
  {
    number: "01",
    title: "Heating Services",
    navLabel: "Heating",
    href: "/heating",
    text: "Repairs, maintenance, service, and installation for heating systems of all major brands.",
    image: "/images/service-heating.jpg",
    alt: "Technician working on indoor heating equipment and piping.",
  },
  {
    number: "02",
    title: "Air Conditioning",
    navLabel: "Air Conditioning",
    href: "/air-conditioning",
    text: "Repairs, maintenance, service, and installation that keep air conditioning equipment performing.",
    image: "/images/service-ac.jpg",
    alt: "Technician servicing a large outdoor air conditioning unit.",
  },
  {
    number: "03",
    title: "Refrigeration",
    navLabel: "Refrigeration",
    href: "/refrigeration",
    text: "Repairs, service, and installation for refrigeration equipment of all major brands.",
    image: "/images/service-repair.jpg",
    alt: "Technician using manifold gauges during equipment service.",
  },
  {
    number: "04",
    title: "Water Heater Installation",
    navLabel: "Water Heaters",
    href: "/water-heaters",
    text: "Professional water heater installation from a family-owned company based in Walnutport.",
    image: "/images/service-install.jpg",
    alt: "Technician connecting service lines during an equipment installation.",
  },
  {
    number: "05",
    title: "Ductless Mini-Split Systems",
    navLabel: "Ductless Mini-Splits",
    href: "/ductless-mini-splits",
    text: "Ductless heating and cooling for individual rooms, additions, and spaces without traditional ductwork.",
    image: "/images/service-mini-split.jpg",
    alt: "Wall-mounted ductless mini-split indoor unit near a ceiling.",
  },
  {
    number: "06",
    title: "Side-Discharge Heating and Cooling",
    navLabel: "Side-Discharge Systems",
    href: "/side-discharge-heating-and-cooling",
    text: "Compact outdoor heating and cooling equipment that sends air out the side of the cabinet.",
    image: "/images/service-side-discharge.jpg",
    alt: "Compact outdoor heating and cooling unit with a side-facing fan on an exterior wall.",
  },
  {
    number: "07",
    title: "Heat Pumps",
    navLabel: "Heat Pumps",
    href: "/heat-pumps",
    text: "Repairs, service, and installation for heat pumps that both heat and cool a property.",
    image: "/images/carrier-infinity-outdoor.jpg",
    alt: "Carrier Infinity outdoor unit, one type of heat pump and air conditioning equipment.",
  },
] as const;

export const reasons = [
  {
    title: "Family-Owned for 25+ Years",
    text: "An established family-owned company with more than 25 years in business.",
    icon: "family",
  },
  {
    title: "All Major Brands",
    text: "Repairs, service, and installation for all major equipment brands.",
    icon: "brands",
  },
  {
    title: "Complete HVAC & Refrigeration",
    text: "Heating, air conditioning, refrigeration, and water heater installation.",
    icon: "comfort",
  },
  {
    title: "Locally Owned & Fully Insured",
    text: "Based in Walnutport and serving three Pennsylvania counties.",
    icon: "shield",
  },
] as const;

export const sitemapPaths = [
  "/",
  "/heating",
  "/air-conditioning",
  "/heat-pumps",
  "/carrier-infinity-system",
  "/ductless-mini-splits",
  "/side-discharge-heating-and-cooling",
  "/refrigeration",
  "/water-heaters",
  "/financing",
  "/about",
  "/service-area",
  "/contact",
] as const;
