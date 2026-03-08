import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalBand from "@/components/LegalBand";
import MobileCTA from "@/components/MobileCTA";
import AcuityModal from "@/components/AcuityModal";
import { useAcuityModal } from "@/hooks/useAcuityModal";
import { useFadeUp } from "@/hooks/useFadeUp";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";

const resources = [
  {
    title: "Ferritina baixa: sintomas e interpretação funcional",
    description: "Descobre a diferença entre valores laboratoriais e funcionais de ferritina.",
    href: "/ferritina-baixa-sintomas",
  },
  {
    title: "Vitamina D: valores funcionais e sintomas",
    description: "Percebe porque o valor 'normal' pode ainda assim ser insuficiente.",
    href: "/vitamina-d-valores-funcionais",
  },
  {
    title: "Insulina em jejum: o marcador que aparece antes do diagnóstico",
    description: "Glicose normal com insulina elevada — o que significa e porque importa.",
    href: "/insulina-jejum-o-que-significa",
  },
  {
    title: "Fadiga com exames normais — o que investigar",
    description: "Os 6 padrões biomarcadores mais frequentes em mulheres com cansaço inexplicado.",
    href: "/fadiga-exames-normais",
  },
  {
    title: "TSH normal mas com sintomas — o que investigar",
    description: "O intervalo laboratorial aceita TSH até 4.5. A medicina funcional começa a investigar a partir de 2.0.",
    href: "/tsh-normal-mas-com-sintomas",
  },
];

const ResourceCard = ({ title, description, href }: { title: string; description: string; href: string }) => {
  const ref = useFadeUp();
  return (
    <div ref={ref} className="fade-up">
      <Link
        to={href}
        className="block border border-bone rounded-lg p-8 bg-ivory hover:border-amber/40 transition-colors group"
      >
        <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-amber transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground font-sans text-sm leading-relaxed mb-4">
          {description}
        </p>
        <span className="inline-flex items-center gap-1 text-amber font-sans text-sm">
          Ler mais <ArrowRight size={14} />
        </span>
      </Link>
    </div>
  );
};

const Recursos = () => {
  const { open, onClose } = useAcuityModal();
  const heroRef = useFadeUp();

  return (
    <>
      <Helmet>
        <title>Recursos e Ferramentas | Catarina Veiga</title>
        <meta name="description" content="Ferramentas gratuitas e guias de saúde funcional. Interpreta os teus exames e compreende os teus sintomas." />
      </Helmet>
      <Navbar />
      <main>
        {/* Hero */}
        <section ref={heroRef} className="bg-ivory section-padding pt-32">
          <div className="max-w-3xl mx-auto text-center">
            <p className="fade-up label-uppercase text-amber mb-4">RECURSOS</p>
            <h1 className="fade-up font-serif text-4xl md:text-5xl text-foreground mb-6">
              Recursos e Ferramentas
            </h1>
            <p className="fade-up text-muted-foreground max-w-xl mx-auto">
              Guias práticos e ferramentas gratuitas para compreenderes melhor a tua saúde — com base em medicina funcional.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-bone" />

        {/* Cards */}
        <section className="bg-bone section-padding">
          <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
            {resources.map((r) => (
              <ResourceCard key={r.href} {...r} />
            ))}
          </div>
        </section>
      </main>
      <LegalBand />
      <Footer />
      <MobileCTA />
      <AcuityModal open={open} onClose={onClose} />
    </>
  );
};

export default Recursos;
