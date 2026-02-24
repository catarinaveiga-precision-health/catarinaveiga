import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBand from "@/components/TrustBand";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import Pillars from "@/components/Pillars";
import Symptoms from "@/components/Symptoms";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Program3M from "@/components/Program3M";
import Specializations from "@/components/Specializations";
import Process from "@/components/Process";
import Team from "@/components/Team";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import CTAFinal from "@/components/CTAFinal";
import LegalBand from "@/components/LegalBand";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import AcuityModal from "@/components/AcuityModal";
import { useAcuityModal } from "@/hooks/useAcuityModal";

const Index = () => {
  const { open, onClose } = useAcuityModal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBand />
        <Marquee />
        <Manifesto />
        <Pillars />
        <Symptoms />
        <Testimonials />
        <Services />
        <Program3M />
        <Specializations />
        <Process />
        <Team />
        <About />
        <FAQ />
        <Blog />
        <Contact />
        <CTAFinal />
      </main>
      <LegalBand />
      <Footer />
      <MobileCTA />
      <AcuityModal open={open} onClose={onClose} />
    </>
  );
};

export default Index;
