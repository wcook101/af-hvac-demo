import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { ServiceArea } from "@/components/ServiceArea";
import { Services } from "@/components/Services";
import { WhyChoose } from "@/components/WhyChoose";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Services />
      <About />
      <WhyChoose />
      <ServiceArea />
      <Contact />
    </main>
  );
}
