import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalBand from "@/components/LegalBand";
import MobileCTA from "@/components/MobileCTA";
import AcuityModal from "@/components/AcuityModal";
import { useAcuityModal } from "@/hooks/useAcuityModal";
import { useFadeUp } from "@/hooks/useFadeUp";
import { Helmet } from "react-helmet-async";

const resources = [
  {
    title: "Ferritina Baixa: sintomas e o que os exames não mostram",
    description: "Descobre a diferença entre valores laboratoriais e funcionais de ferritina — e porque podes ter sintomas mesmo com resultados 'normais'.",
    href: "/ferritina-baixa-sintomas",
  },
  {
    title: "TSH Normal Mas Com Sintomas: o que pode estar a acontecer",
    description: "O intervalo laboratorial aceita TSH até 4.5. A medicina funcional começa a investigar a partir de 2.0.",
    href: "/tsh-normal-mas-com-sintomas",
  },
  {
    title: "Vitamina D: porque o intervalo normal pode não ser suficiente",
    description: "Percebe porque o valor 'normal' pode ainda assim ser insuficiente para a tua saúde e energia.",
    href: "/vitamina-d-valores-funcionais",
  },
  {
    title: "Insulina em Jejum: o marcador que aparece antes da diabetes",
    description: "Glicose normal com insulina elevada — o que significa e porque importa investigar cedo.",
    href: "/insulina-jejum-o-que-significa",
  },
  {
    title: "Fadiga Com Exames Normais: causas funcionais",
    description: "Os 6 padrões biomarcadores mais frequentes em mulheres com cansaço inexplicado.",
    href: "/fadiga-exames-normais",
  },
  {
    title: "O Que É a Medicina Funcional Integrativa",
    description: "Uma abordagem personalizada à saúde que investiga causas — não apenas sintomas.",
    href: "/medicina-funcional",
  },
];

const ResourceCard = ({ title, description, href }: { title: string; description: string; href: string }) => {
  const ref = useFadeUp();
  return (
    <div ref={ref} className="fade-up">
      <Link
        to={href}
        className="block border border-[#E8E2D9] rounded-[2px] p-10 bg-white hover:border-[#D6BD98]/60 transition-colors group"
      >
        <h3 className="font-serif text-[20px] font-medium text-foreground mb-3 group-hover:text-amber transition-colors leading-snug">
          {title}
        </h3>
        <p className="text-[#6B6560] font-sans text-[13px] leading-[1.6] mb-5">
          {description}
        </p>
        <span className="font-sans text-[11px] tracking-[0.1em] uppercase text-[#8C6E50]">
          Ler mais
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
        <section className="bg-[#F5F2ED] section-padding">
          <div className="max-w-4xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2">
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
