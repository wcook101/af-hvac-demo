import { About } from "@/components/About";
import { CommercialFeature } from "@/components/CommercialFeature";
import { Contact } from "@/components/Contact";
import { Dealers } from "@/components/Dealers";
import { InfinityFeature } from "@/components/InfinitySystem";
import { FinancingPromo } from "@/components/FinancingPromo";
import { Hero } from "@/components/Hero";
import { ServiceArea } from "@/components/ServiceArea";
import { Services } from "@/components/Services";
import { WhirlpoolShowcase } from "@/components/WhirlpoolShowcase";
import { WhyChoose } from "@/components/WhyChoose";

export default function Home() {
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
