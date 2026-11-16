import type { Metadata, Viewport } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { businessJsonLd } from "@/lib/seo";
import { site, siteUrl } from "@/lib/site";
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

const title = "A&F HVAC | Heating, Cooling & Refrigeration | Walnutport, PA";
const description =
  "Family-owned for 25+ years, A&F HVAC provides heating, air conditioning, refrigeration repairs, service, installation, and water heater installation throughout Lehigh, Northampton, and Carbon counties, PA.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
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
  robots: { index: true, follow: true },
  formatDetection: { telephone: true, email: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#1e1b3d",
  width: "device-width",
  initialScale: 1,
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
      </body>
    </html>
  );
}
