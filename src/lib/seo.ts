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

const areasServed = serviceAreas.map((area) => ({
  "@type": "AdministrativeArea",
  name: `${area.name}, Pennsylvania`,
}));

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: site.name,
  description:
    "Family-owned for 25+ years, A&F HVAC provides heating, air conditioning, refrigeration repairs, service, installation, and water heater installation throughout Lehigh, Northampton, and Carbon counties, PA.",
  url: siteUrl,
  logo: `${siteUrl}/brand/af-hvac-logo.png`,
  image: `${siteUrl}/brand/af-hvac-logo.png`,
  telephone: "+1-610-704-4419",
  email: site.email,
  address: postalAddress,
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
    provider: {
      "@type": "HVACBusiness",
      name: site.name,
      telephone: "+1-610-704-4419",
      address: postalAddress,
    },
    areaServed: areasServed,
  };
}
