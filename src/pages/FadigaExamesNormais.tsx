import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalBand from "@/components/LegalBand";
import MobileCTA from "@/components/MobileCTA";
import { Button } from "@/components/ui/button";
import { useFadeUp } from "@/hooks/useFadeUp";
import { Check } from "lucide-react";

const AmberDivider = ({ width = 60 }: { width?: number }) => (
  <div className="h-[2px] bg-amber mt-4 mb-6" style={{ width }} />
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <span className="label-uppercase text-amber text-xs">{children}</span>
);

/* ── BREADCRUMB ── */
const Breadcrumb = () => (
  <nav aria-label="Breadcrumb" className="bg-ivory pt-24 pb-4 px-6">
    <ol className="max-w-4xl mx-auto flex gap-2 text-xs font-sans text-muted-custom">
      <li><Link to="/" className="hover:text-foreground transition-colors">Início</Link></li>
      <li>/</li>
      <li><Link to="/recursos" className="hover:text-foreground transition-colors">Recursos</Link></li>
      <li>/</li>
      <li className="text-foreground">Fadiga com exames normais</li>
    </ol>
  </nav>
);

/* ── HERO ── */
const HeroSection = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-ivory section-padding pt-8">
      <div className="max-w-4xl mx-auto fade-up">
        <SectionLabel>Medicina Funcional · Investigação</SectionLabel>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground mt-4 leading-tight">
          Fadiga com exames normais: porque acontece e o que investigar
        </h1>
        <AmberDivider width={40} />
        <p className="text-muted-custom font-sans font-light text-lg leading-relaxed max-w-3xl mb-8">
          É uma das queixas mais frequentes em medicina — e uma das mais frustrantes. Os exames estão normais, mas o cansaço persiste. A medicina funcional investiga os padrões que os intervalos convencionais não captam.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button variant="heroAccent" size="lg" asChild>
            <Link to="/avaliacao">Avaliar os meus exames</Link>
          </Button>
          <Button variant="amber" size="lg" asChild>
            <a href="https://catarinaveigaagendamento.as.me/" target="_blank" rel="noopener noreferrer">
              Marcar consulta — €120
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

/* ── SECTION 1 ── */
const Section1 = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-ivory section-padding">
      <div className="max-w-4xl mx-auto fade-up">
        <SectionLabel>O essencial</SectionLabel>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mt-3 mb-6">
          Porque os exames podem estar normais e a fadiga persistir
        </h2>
        <div className="space-y-4 text-muted-custom font-sans font-light text-base leading-relaxed">
          <p>
            Os intervalos laboratoriais de referência são definidos pela distribuição estatística da população — não pelos valores associados a função energética óptima. Isto significa que um valor pode estar dentro do intervalo normal e ainda assim ser insuficiente para as necessidades fisiológicas individuais. Em medicina funcional, investigamos padrões — não apenas valores isolados.
          </p>
        </div>
        <blockquote className="border-l-[3px] border-amber bg-bone px-6 py-5 my-8 font-sans font-light text-foreground text-base leading-relaxed italic">
          "Muitas mulheres chegam à consulta depois de anos a ouvir que está tudo bem nos exames. O problema raramente é que não há nada — é que ninguém procurou no sítio certo."
        </blockquote>
      </div>
    </section>
  );
};

/* ── SECTION 2 ── */
const biomarkerPatterns = [
  {
    title: "Ferritina baixo-normal (20–50 ng/mL)",
    desc: "Reservas de ferro insuficientes para produção de energia mitocondrial, mesmo sem anemia manifesta.",
    link: "/ferritina-baixa-sintomas",
  },
  {
    title: "TSH elevado-normal (2.5–4.0 mUI/L)",
    desc: "Função tiroideia subclínica — o pâncreas já está a compensar mas as hormonas ainda estão dentro do normal.",
    link: "/tsh-normal-mas-com-sintomas",
  },
  {
    title: "Vitamina D insuficiente (20–40 ng/mL)",
    desc: "Défice funcional de vitamina D associado a fadiga muscular, alterações do humor e disfunção imune.",
    link: "/vitamina-d-valores-funcionais",
  },
  {
    title: "Vitamina B12 baixo-normal (200–400 pg/mL)",
    desc: "Valores no limite inferior associados a fadiga, nevoeiro mental e alterações neurológicas subtis.",
  },
  {
    title: "Insulina em jejum elevada (>7 µIU/mL)",
    desc: "Resistência metabólica precoce — o pâncreas trabalha em excesso para manter a glicose controlada.",
    link: "/insulina-jejum-o-que-significa",
  },
  {
    title: "PCR elevada (>1 mg/L)",
    desc: "Inflamação sistémica de baixo grau — consome energia e compromete recuperação.",
  },
];

const Section2 = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-bone section-padding">
      <div className="max-w-4xl mx-auto fade-up">
        <SectionLabel>Padrões frequentes</SectionLabel>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mt-3 mb-4">
          Os 6 padrões biomarcadores mais frequentes em fadiga inexplicada
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {biomarkerPatterns.map((p, i) => (
            <div key={i} className="bg-ivory border-t-[2px] border-amber px-5 py-5 rounded-b">
              <p className="font-sans font-medium text-foreground text-sm mb-2">{p.title}</p>
              <p className="font-sans font-light text-muted-custom text-sm leading-relaxed mb-3">{p.desc}</p>
              {p.link && (
                <Link to={p.link} className="text-amber font-sans text-xs hover:underline">
                  Saber mais →
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── SECTION 3 ── */
const checklistItems = [
  "Acordas cansada mesmo depois de dormir bem",
  "O teu cansaço piora a seguir às refeições",
  "Tens dificuldade de concentração e nevoeiro mental",
  "Sentes frio com facilidade, especialmente nas mãos e pés",
  "Tens queda de cabelo ou unhas frágeis",
  "Os teus exames estão sempre normais",
];

const Section3 = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-ivory section-padding">
      <div className="max-w-4xl mx-auto fade-up">
        <SectionLabel>Questionário rápido</SectionLabel>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mt-3 mb-4">
          Reconheces estes padrões?
        </h2>
        <div className="space-y-3 mt-8 max-w-xl">
          {checklistItems.map((item, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="mt-0.5 w-5 h-5 rounded border border-amber flex items-center justify-center shrink-0">
                <Check size={12} className="text-amber" />
              </div>
              <p className="font-sans font-light text-foreground text-[15px] leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
        <p className="text-muted-custom font-sans font-light text-base leading-relaxed mt-8 mb-6 max-w-xl">
          Se te identificas com 3 ou mais, vale a pena investigar os biomarcadores funcionais.
        </p>
        <div className="text-center max-w-xl">
          <Button variant="heroAccent" size="lg" asChild>
            <Link to="/avaliacao">Fazer avaliação funcional gratuita</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

/* ── SECTION 4 ── */
const systems = [
  "Tiróide (TSH, T3 livre, T4 livre)",
  "Ferro e energia (ferritina, hemoglobina, VGM, RDW)",
  "Metabolismo (glicose, insulina)",
  "Inflamação (PCR, homocisteína, vitamina D)",
  "Perfil lipídico (colesterol, HDL, LDL)",
  "Fígado (ALT, AST)",
];

const Section4 = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-bone section-padding">
      <div className="max-w-4xl mx-auto fade-up">
        <SectionLabel>A ferramenta</SectionLabel>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mt-3 mb-6">
          O que a avaliação funcional analisa
        </h2>
        <p className="text-muted-custom font-sans font-light text-base leading-relaxed mb-8 max-w-3xl">
          A ferramenta de avaliação funcional analisa 14 biomarcadores organizados em 6 sistemas fisiológicos — e mostra padrões que os intervalos convencionais frequentemente não identificam.
        </p>
        <div className="space-y-3 max-w-xl">
          {systems.map((s, i) => (
            <div key={i} className="bg-ivory border-l-[2px] border-amber px-5 py-4 rounded-r font-sans font-light text-foreground text-[15px] leading-relaxed">
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── CTA FINAL ── */
const CTASection = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-dark section-padding">
      <div className="max-w-3xl mx-auto text-center fade-up">
        <span className="label-uppercase text-amber text-xs">Próximo passo</span>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-primary-foreground mt-4 mb-4 leading-snug">
          Os teus exames estão normais.<br />
          O teu corpo não.
        </h2>
        <p className="text-primary-foreground/60 font-sans font-light text-base leading-relaxed mb-8 max-w-2xl mx-auto">
          Esta é a frase que define a medicina funcional. E é exactamente o que a ferramenta de avaliação foi desenhada para investigar.
        </p>
        <Button variant="heroAccent" size="lg" asChild>
          <Link to="/avaliacao">Começar avaliação funcional</Link>
        </Button>
        <p className="text-primary-foreground/40 font-sans text-xs mt-4">
          Gratuita · 14 biomarcadores · leitura imediata
        </p>
        <p className="text-primary-foreground/30 font-sans text-[11px] mt-8 max-w-xl mx-auto leading-relaxed">
          Esta página tem fins educativos e não constitui diagnóstico médico. Para avaliação individualizada, consulta um profissional de saúde qualificado.
        </p>
      </div>
    </section>
  );
};

/* ── PAGE ── */
const FadigaExamesNormais = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Fadiga com Exames Normais: Causas e Investigação Funcional",
    "description": "Cansaço persistente com exames normais? Descobre os padrões biomarcadores mais frequentes em mulheres com fadiga inexplicada.",
    "url": "https://catarinaveiga.com/fadiga-exames-normais",
    "inLanguage": "pt",
    "medicalAudience": { "@type": "MedicalAudience", "audienceType": "Patient" },
    "publisher": {
      "@type": "Organization",
      "name": "Catarina Veiga — Medicina Funcional Integrativa",
      "url": "https://catarinaveiga.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>Fadiga com Exames Normais: Causas e Investigação Funcional | Catarina Veiga</title>
        <meta name="description" content="Cansaço persistente com exames normais? Descobre os padrões biomarcadores mais frequentes em mulheres com fadiga inexplicada." />
        <link rel="canonical" href="https://catarinaveiga.com/fadiga-exames-normais" />
        <meta property="og:title" content="Fadiga com Exames Normais: Causas e Investigação Funcional | Catarina Veiga" />
        <meta property="og:description" content="Cansaço persistente com exames normais? Descobre os padrões biomarcadores mais frequentes em mulheres com fadiga inexplicada." />
        <meta property="og:url" content="https://catarinaveiga.com/fadiga-exames-normais" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <Navbar />
      <main>
        <Breadcrumb />
        <HeroSection />
        <div className="w-full h-px bg-bone" />
        <Section1 />
        <div className="w-full h-px bg-bone" />
        <Section2 />
        <div className="w-full h-px bg-bone" />
        <Section3 />
        <div className="w-full h-px bg-bone" />
        <Section4 />
        <CTASection />
      </main>
      <LegalBand />
      <Footer />
      <MobileCTA />
    </>
  );
};

export default FadigaExamesNormais;
