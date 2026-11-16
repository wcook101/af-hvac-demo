export const site = {
  name: "A&F HVAC",
  tagline: "Heating, Air Conditioning & Refrigeration",
  phoneDisplay: "610-704-4419",
  phoneHref: "tel:6107044419",
  email: "hvac28@hotmail.com",
  emailHref: "mailto:hvac28@hotmail.com",
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

export const addressLine = `${site.street}, ${site.city}, ${site.region}`;

export const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/service-area", label: "Service Area" },
  { href: "/contact", label: "Contact" },
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
  "/refrigeration",
  "/water-heaters",
  "/about",
  "/service-area",
  "/contact",
] as const;
