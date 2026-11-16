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
  postalCode: "18088",
  license: "PA LIC 037268",
  insurance: "Fully Insured",
  experience: "Family-owned for over 25 years",
  mapsHref:
    "https://maps.google.com/?q=147+East+Zimmer+Drive,+Walnutport,+PA+18088",
} as const;

export const addressLine = `${site.street}, ${site.city}, ${site.region} ${site.postalCode}`;

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Why A&F" },
  { href: "#contact", label: "Contact" },
] as const;

export const serviceAreas = [
  "Lehigh County, PA",
  "Carbon County, PA",
  "Northampton County, PA",
] as const;

export const services = [
  {
    number: "01",
    title: "Heating Services",
    text: "Repairs, service, maintenance, and installation of heating systems for all major brands.",
    image: "/images/service-heating.jpg",
    alt: "Technician working on an indoor heating boiler and piping.",
  },
  {
    number: "02",
    title: "Air Conditioning",
    text: "AC repairs, service, maintenance, and installation for all major brands.",
    image: "/images/service-ac.jpg",
    alt: "Technician servicing a large outdoor air conditioning unit.",
  },
  {
    number: "03",
    title: "Refrigeration",
    text: "Refrigeration repairs, service, and installation for all major brands.",
    image: "/images/service-repair.jpg",
    alt: "Technician using manifold gauges during refrigeration service.",
  },
  {
    number: "04",
    title: "Water Heater Installation",
    text: "Professional water heater installation from an experienced local company.",
    image: "/images/service-install.jpg",
    alt: "Technician connecting equipment during a professional installation.",
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
