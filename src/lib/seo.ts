import type { Metadata } from "next";
import { serviceAreas, services, site, siteUrl } from "@/lib/site";

export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      locale: "en_US",
      type: "website",
      siteName: site.name,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.street,
  addressLocality: site.city,
  addressRegion: site.region,
  addressCountry: "US",
};

const businessId = `${siteUrl}/#business`;

const areasServed = [
  {
    "@type": "City",
    name: "Walnutport",
    containedInPlace: { "@type": "State", name: "Pennsylvania" },
  },
  ...serviceAreas.map((area) => ({
    "@type": "AdministrativeArea",
    name: `${area.name}, Pennsylvania`,
  })),
];

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": ["HVACBusiness", "LocalBusiness"],
  "@id": businessId,
  name: site.name,
  description:
    "Family-owned A&F HVAC in Walnutport, PA provides heating, air conditioning, refrigeration, and water heater installation in Lehigh, Northampton, and Carbon counties.",
  url: siteUrl,
  logo: `${siteUrl}/brand/af-hvac-logo.png`,
  image: `${siteUrl}/brand/af-hvac-logo.png`,
  telephone: "+1-610-704-4419",
  email: site.email,
  address: postalAddress,
  identifier: {
    "@type": "PropertyValue",
    name: "Pennsylvania contractor license",
    value: site.license,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-610-704-4419",
    email: site.email,
    contactType: "customer service",
    areaServed: ["Walnutport", "Lehigh County", "Northampton County", "Carbon County"],
    availableLanguage: "English",
  },
  areaServed: areasServed,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Heating, air conditioning, refrigeration, and water heater installation",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.text,
        url: `${siteUrl}${service.href}`,
      },
    })),
  },
};

export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteUrl}${path}`,
    provider: { "@id": businessId },
    areaServed: areasServed,
  };
}
