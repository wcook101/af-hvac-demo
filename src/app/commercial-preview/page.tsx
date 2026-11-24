import type { Metadata } from "next";
import { About } from "@/components/About";
import { CommercialFeature } from "@/components/CommercialFeature";
import { Contact } from "@/components/Contact";
import { Dealers } from "@/components/Dealers";
import { FinancingPromo } from "@/components/FinancingPromo";
import { Hero } from "@/components/Hero";
import { InfinityFeature } from "@/components/InfinitySystem";
import { ServiceArea } from "@/components/ServiceArea";
import { Services } from "@/components/Services";
import { WhirlpoolShowcase } from "@/components/WhirlpoolShowcase";
import { WhyChoose } from "@/components/WhyChoose";

export const metadata: Metadata = {
  title: { absolute: "Commercial Preview | A&F HVAC" },
  description: "Private preview of the A&F HVAC homepage with the new commercial.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export default function CommercialPreviewPage() {
  return (
    <main id="main">
      <Hero />
      <CommercialFeature />
      <Dealers />
      <WhirlpoolShowcase />
      <InfinityFeature />
      <Services />
      <FinancingPromo />
      <About />
      <WhyChoose />
      <ServiceArea />
      <Contact />
    </main>
  );
}
