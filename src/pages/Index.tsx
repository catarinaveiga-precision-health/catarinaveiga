import Navbar from "@/components/Navbar";
import RecognizeThis from "@/components/RecognizeThis";
import ClinicalPatterns from "@/components/ClinicalPatterns";
import Hero from "@/components/Hero";
import CredentialsBand from "@/components/CredentialsBand";
import ClinicalAssessment from "@/components/ClinicalAssessment";
import TrustBand from "@/components/TrustBand";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import Pillars from "@/components/Pillars";
import Symptoms from "@/components/Symptoms";
import Testimonials from "@/components/Testimonials";
import GoogleReviews from "@/components/GoogleReviews";
import Services from "@/components/Services";
import { useFadeUp } from "@/hooks/useFadeUp";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
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

const AnalysisToolSection = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-muted section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <p className="fade-up label-uppercase text-amber mb-4">FERRAMENTA GRATUITA</p>
        <h2 className="fade-up font-serif text-3xl md:text-4xl text-foreground mb-6">
          Os teus exames estão normais.<br />Mas podem não estar ideais.
        </h2>
        <p className="fade-up text-muted-foreground mb-8">
          Introduz os valores das tuas análises e recebe uma leitura funcional dos principais sistemas do corpo. Gratuito. Demora 2 minutos.
        </p>
        <div className="fade-up">
          <Button variant="heroAccent" size="lg" asChild>
            <Link to="/avaliacao">Fazer avaliação funcional →</Link>
          </Button>
        </div>
        <p className="fade-up mt-4">
          <Link to="/ferritina-baixa-sintomas" className="text-muted-custom font-sans text-sm hover:text-amber transition-colors underline underline-offset-4 decoration-bone hover:decoration-amber">
            Ferritina baixa com exames normais — o que significa?
          </Link>
        </p>
      </div>
    </section>
  );
};

const Index = () => {
  const { open, onClose } = useAcuityModal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CredentialsBand />
        <TrustBand />
        <Marquee />
        <Manifesto />
        <Pillars />
        <Symptoms />
        <Testimonials />
        <GoogleReviews />
        <Services />
        <AnalysisToolSection />
        <Program3M />
        <Specializations />
        <Process />
        <ClinicalAssessment />
        <Team />
        <About />
        <FAQ />
        <Blog />
        <Contact />
        <ClinicalPatterns />
        <RecognizeThis />
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
