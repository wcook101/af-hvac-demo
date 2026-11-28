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
    "Family-owned A&F HVAC in Walnutport, PA provides heating, air conditioning, heat pumps, ductless mini-splits, side-discharge heating and cooling, refrigeration, and water heater installation in Lehigh, Northampton, and Carbon counties. A&F HVAC is a dealer for Carrier, Whirlpool, and Ducane and can discuss the Carrier Infinity System. Financing is available for qualifying major HVAC installation projects.",
  url: siteUrl,
  logo: `${siteUrl}/brand/af-hvac-logo.png`,
  image: `${siteUrl}/brand/af-hvac-logo.png`,
  telephone: "+1-610-704-4419",
  email: site.email,
  hasMap: site.mapsHref,
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
    name: "Heating, air conditioning, heat pumps, Carrier Infinity System consultation, ductless, side-discharge, refrigeration, water heater installation, and installation financing",
    itemListElement: [
      ...services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.text,
          url: `${siteUrl}${service.href}`,
        },
      })),
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Carrier Infinity System consultation",
          description:
            "A&F HVAC can discuss Carrier Infinity System heating and cooling equipment. Specifications, prices, and warranties are not published on this website.",
          url: `${siteUrl}/carrier-infinity-system`,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Financing for qualifying major HVAC installations",
          description:
            "Financing is available for qualifying major HVAC installation projects. Approval is not guaranteed. Rates, lenders, and terms are not published on this website.",
          url: `${siteUrl}/financing`,
        },
      },
    ],
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

export function breadcrumbJsonLd(path: string, currentName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: currentName,
        item: `${siteUrl}${path}`,
      },
    ],
  };
}
