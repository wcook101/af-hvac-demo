export const site = {
  name: "A&F HVAC",
  tagline: "Heating & Air Conditioning",
  phoneDisplay: "610-704-4419",
  phoneHref: "tel:+16107044419",
  email: "hvac28@hotmail.com",
  emailHref: "mailto:hvac28@hotmail.com",
  street: "347 East Zimmer Dr.",
  city: "Walnutport",
  region: "PA",
  postalCode: "18088",
  license: "PA LIC 037268",
  insurance: "Fully Insured",
  mapsHref:
    "https://maps.google.com/?q=347+East+Zimmer+Dr,+Walnutport,+PA+18088",
} as const;

export const addressLine = `${site.street}, ${site.city}, ${site.region} ${site.postalCode}`;

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Why A&F" },
  { href: "#contact", label: "Contact" },
] as const;

export const services = [
  {
    number: "01",
    title: "Air Conditioning",
    text: "Cooling service for homes and other properties in Walnutport.",
    image: "/images/service-ac.jpg",
    alt: "Technician servicing a large outdoor air conditioning unit.",
  },
  {
    number: "02",
    title: "Heating",
    text: "Heating service for colder weather, focused on indoor comfort.",
    image: "/images/service-heating.jpg",
    alt: "Technician working on an indoor heating boiler and piping.",
  },
  {
    number: "03",
    title: "HVAC Installation",
    text: "Installation of heating and cooling equipment.",
    image: "/images/service-install.jpg",
    alt: "Technician connecting service gauges to an indoor heating and cooling unit.",
  },
  {
    number: "04",
    title: "Repairs & Maintenance",
    text: "Repair and upkeep for existing heating and cooling systems.",
    image: "/images/service-repair.jpg",
    alt: "Technician using manifold gauges during air conditioner service.",
  },
] as const;

export const reasons = [
  {
    title: "Local Walnutport business",
    text: "Based at 347 East Zimmer Drive in Walnutport, Pennsylvania.",
    icon: "pin",
  },
  {
    title: "Heating and air conditioning",
    text: "The company focuses on heating and cooling, as stated on its business card.",
    icon: "comfort",
  },
  {
    title: "Fully insured",
    text: "Fully insured, as noted on the A&F HVAC business card.",
    icon: "shield",
  },
  {
    title: "Direct phone contact",
    text: "Call 610-704-4419 to reach A&F HVAC.",
    icon: "phone",
  },
] as const;
