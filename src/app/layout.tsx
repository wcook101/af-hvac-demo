import type { Metadata, Viewport } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

const title = "A&F HVAC | Heating & Air Conditioning in Walnutport, PA";
const description =
  "A&F HVAC provides heating and air conditioning services in Walnutport, Pennsylvania. Call 610-704-4419 or request an estimate.";

const deploymentUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined;

export const metadata: Metadata = {
  ...(deploymentUrl ? { metadataBase: new URL(deploymentUrl), alternates: { canonical: "/" } } : {}),
  title: {
    default: title,
    template: "%s | A&F HVAC",
  },
  description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  openGraph: {
    title,
    description,
    locale: "en_US",
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  // Demo preview: stay out of search results until the owner approves a live site.
  robots: { index: false, follow: false },
  formatDetection: { telephone: true, email: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#1e1b3d",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: site.name,
  description,
  telephone: "+1-610-704-4419",
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    addressLocality: site.city,
    addressRegion: site.region,
    postalCode: site.postalCode,
    addressCountry: "US",
  },
  areaServed: {
    "@type": "City",
    name: "Walnutport",
  },
  ...(deploymentUrl ? { url: deploymentUrl } : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${sourceSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-navy text-cream">
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
