import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalBand from "@/components/LegalBand";
import MobileCTA from "@/components/MobileCTA";
import { Button } from "@/components/ui/button";
import { useFadeUp } from "@/hooks/useFadeUp";

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
      <li className="text-foreground">Insulina em jejum</li>
    </ol>
  </nav>
);

/* ── HERO ── */
const HeroSection = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-ivory section-padding pt-8">
      <div className="max-w-4xl mx-auto fade-up">
        <SectionLabel>Medicina Funcional · Biomarcadores</SectionLabel>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-foreground mt-4 leading-tight">
          Insulina em jejum elevada: o marcador metabólico que aparece anos antes do diagnóstico
        </h1>
        <AmberDivider width={40} />
        <p className="text-muted-custom font-sans font-light text-lg leading-relaxed max-w-3xl mb-8">
          A glicose pode estar normal enquanto a insulina já está elevada há anos. Este padrão — chamado hiperinsulinemia — é um dos sinais mais precoces de resistência metabólica.
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
          O que é a insulina em jejum e o que mede
        </h2>
        <div className="space-y-4 text-muted-custom font-sans font-light text-base leading-relaxed">
          <p>
            A insulina é a hormona produzida pelo pâncreas para transportar glicose para as células. Em jejum, os seus níveis devem ser baixos — o que indica que o pâncreas não está a trabalhar em excesso para manter a glicose controlada. Quando a insulina em jejum está elevada com glicose normal, o pâncreas está a compensar uma redução da sensibilidade celular à insulina. Isto pode preceder um diagnóstico formal de pré-diabetes ou diabetes tipo 2 por uma década.
          </p>
        </div>
        <blockquote className="border-l-[3px] border-amber bg-bone px-6 py-5 my-8 font-sans font-light text-foreground text-base leading-relaxed italic">
          "A hiperinsulinemia é frequentemente invisível nos exames convencionais — porque a glicose ainda está normal. Mas o pâncreas já está a trabalhar em excesso."
        </blockquote>
      </div>
    </section>
  );
};

/* ── SECTION 2 ── */
const symptoms = [
  "Fadiga pós-prandial — cansaço a seguir às refeições",
  "Cravings intensos de açúcar ou hidratos de carbono",
  "Dificuldade em perder peso apesar de dieta controlada",
  "Peso concentrado na zona abdominal",
  "Nevoeiro mental após refeições",
  "Fome intensa poucas horas após comer",
  "Irritabilidade quando não come",
  "Alterações de humor relacionadas com refeições",
];

const Section2 = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-bone section-padding">
      <div className="max-w-4xl mx-auto fade-up">
        <SectionLabel>Reconheces isto?</SectionLabel>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mt-3 mb-4">
          Sintomas frequentes de hiperinsulinemia
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {symptoms.map((s, i) => (
            <div key={i} className="bg-background border-l-[2px] border-amber px-5 py-4 rounded-r font-sans font-light text-foreground text-[15px] leading-relaxed">
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── SECTION 3 ── */
const Section3 = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-ivory section-padding">
      <div className="max-w-4xl mx-auto fade-up">
        <SectionLabel>A diferença que importa</SectionLabel>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mt-3 mb-4">
          Valores laboratoriais vs valores funcionais
        </h2>
        <div className="overflow-x-auto mb-4 mt-8">
          <table className="w-full border-collapse text-sm font-sans">
            <thead>
              <tr className="border-b border-bone">
                <th className="text-left py-3 px-4 font-medium text-foreground">Contexto</th>
                <th className="text-left py-3 px-4 font-medium text-foreground">Intervalo</th>
                <th className="text-left py-3 px-4 font-medium text-foreground">Interpretação</th>
              </tr>
            </thead>
            <tbody className="text-muted-custom font-light">
              <tr className="border-b border-bone">
                <td className="py-3 px-4">Laboratório convencional</td>
                <td className="py-3 px-4">2–25 µIU/mL</td>
                <td className="py-3 px-4">Intervalo muito amplo — não detecta hiperinsulinemia precoce</td>
              </tr>
              <tr className="border-b border-bone">
                <td className="py-3 px-4">Medicina funcional</td>
                <td className="py-3 px-4">2–5 µIU/mL</td>
                <td className="py-3 px-4">Valores acima de 5–7 já podem indicar resistência metabólica inicial</td>
              </tr>
              <tr className="border-b border-bone">
                <td className="py-3 px-4">Hiperinsulinemia</td>
                <td className="py-3 px-4">&gt;10 µIU/mL</td>
                <td className="py-3 px-4">Associada a síndrome metabólica e risco cardiovascular elevado</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-custom font-sans text-[11px] leading-relaxed">
          Hanley AJ et al. Diabetes Care. 2002. PMID: 12145237
        </p>
      </div>
    </section>
  );
};

/* ── SECTION 4 — CALCULATOR ── */
const Section4 = () => {
  const ref = useFadeUp();
  const [insulin, setInsulin] = useState("");
  const [result, setResult] = useState<null | { icon: string; text: string }>(null);

  const calculate = () => {
    const v = parseFloat(insulin);
    if (isNaN(v) || v < 0) return;

    let icon = "", text = "";
    if (v < 2) {
      icon = "⚠️"; text = "Insulina muito baixa (<2 µIU/mL). Este valor requer contexto clínico — pode indicar hipoinsulinemia ou necessidade de reavaliação laboratorial.";
    } else if (v <= 5) {
      icon = "🟢"; text = "Insulina dentro do intervalo funcional (2–5 µIU/mL). Os níveis sugerem boa sensibilidade celular à insulina.";
    } else if (v <= 10) {
      icon = "🟡"; text = "Insulina limítrofe (5–10 µIU/mL). O pâncreas pode já estar a compensar uma redução da sensibilidade à insulina. Monitorização recomendada.";
    } else if (v <= 25) {
      icon = "🔴"; text = "Insulina elevada (>10 µIU/mL). Padrão de hiperinsulinemia — associado a resistência metabólica e risco cardiovascular. Avaliação funcional recomendada.";
    } else {
      icon = "⚠️"; text = "Insulina muito elevada (>25 µIU/mL). Avaliação clínica urgente recomendada — este valor sugere resistência à insulina significativa.";
    }

    setResult({ icon, text });
  };

  return (
    <section ref={ref} className="bg-bone section-padding">
      <div className="max-w-4xl mx-auto fade-up">
        <SectionLabel>Ferramenta</SectionLabel>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mt-3 mb-4">
          Verifica o teu valor de insulina
        </h2>
        <p className="text-muted-custom font-sans font-light text-base leading-relaxed mb-8">
          Introduz o valor de insulina em jejum do teu último exame e recebe uma leitura baseada em intervalos funcionais.
        </p>

        <div className="bg-ivory border border-bone rounded-lg p-6 md:p-8 max-w-lg">
          <div className="mb-6">
            <label className="block text-sm font-sans font-medium text-foreground mb-1">Insulina em jejum (µIU/mL)</label>
            <input
              type="number"
              value={insulin}
              onChange={(e) => setInsulin(e.target.value)}
              placeholder="Ex: 7"
              className="w-full border border-bone rounded px-4 py-2.5 font-sans font-light text-sm bg-background text-foreground placeholder:text-muted-custom/50 focus:outline-none focus:border-amber"
            />
          </div>
          <Button variant="hero" className="w-full" onClick={calculate}>
            Ver leitura funcional
          </Button>

          {result && (
            <div className="mt-6 border-l-[3px] border-amber bg-bone rounded-r px-5 py-5 space-y-3">
              <p className="font-sans text-base font-light leading-relaxed">
                <span className="text-xl mr-2">{result.icon}</span>
                {result.text}
              </p>
              <Link to="/avaliacao" className="inline-block text-amber font-sans text-sm hover:underline mt-2">
                Ver avaliação completa de biomarcadores →
              </Link>
            </div>
          )}
        </div>

        <p className="text-muted-custom font-sans text-[11px] leading-relaxed mt-4 max-w-lg">
          Leitura educativa. Não constitui diagnóstico médico.
        </p>
      </div>
    </section>
  );
};

/* ── SECTION 5 ── */
const patterns = [
  { title: "Insulina elevada + glicose normal", desc: "Hiperinsulinemia compensatória precoce" },
  { title: "Insulina elevada + triglicéridos altos", desc: "Síndrome metabólica clássica" },
  { title: "Insulina elevada + vitamina D baixa", desc: "Défice de vitamina D associado a resistência à insulina" },
  { title: "Insulina elevada + PCR elevada", desc: "Inflamação e resistência metabólica frequentemente coexistem" },
];

const Section5 = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-ivory section-padding">
      <div className="max-w-4xl mx-auto fade-up">
        <SectionLabel>Contexto clínico</SectionLabel>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mt-3 mb-4">
          Padrões combinados relevantes
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {patterns.map((p, i) => (
            <div key={i} className="border-l-[2px] border-amber bg-bone px-5 py-4 rounded-r">
              <p className="font-sans font-medium text-foreground text-sm mb-1">{p.title}</p>
              <p className="font-sans font-light text-muted-custom text-sm">{p.desc}</p>
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
          A resistência à insulina começa anos antes do diagnóstico.<br />
          Identificá-la cedo faz diferença.
        </h2>
        <p className="text-primary-foreground/60 font-sans font-light text-base leading-relaxed mb-8 max-w-2xl mx-auto">
          A avaliação funcional analisa a insulina em conjunto com outros biomarcadores e mostra padrões que os valores isolados não revelam.
        </p>
        <Button variant="heroAccent" size="lg" asChild>
          <Link to="/avaliacao">Fazer avaliação funcional completa</Link>
        </Button>
        <p className="text-primary-foreground/40 font-sans text-xs mt-4">
          Ferramenta gratuita · 14 biomarcadores · leitura imediata
        </p>
        <p className="text-primary-foreground/30 font-sans text-[11px] mt-8 max-w-xl mx-auto leading-relaxed">
          Esta página tem fins educativos e não constitui diagnóstico médico. Para avaliação individualizada, consulta um profissional de saúde qualificado.
        </p>
      </div>
    </section>
  );
};

/* ── PAGE ── */
const InsulinaJejum = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Insulina em Jejum Elevada: O Que Significa",
    "description": "Insulina em jejum elevada com glicose normal? Descobre o que a hiperinsulinemia significa antes de um diagnóstico de pré-diabetes.",
    "url": "https://catarinaveiga.com/insulina-jejum-o-que-significa",
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
        <title>Insulina em Jejum Elevada: O Que Significa | Catarina Veiga</title>
        <meta name="description" content="Insulina em jejum elevada com glicose normal? Descobre o que a hiperinsulinemia significa antes de um diagnóstico de pré-diabetes." />
        <link rel="canonical" href="https://catarinaveiga.com/insulina-jejum-o-que-significa" />
        <meta property="og:title" content="Insulina em Jejum Elevada: O Que Significa | Catarina Veiga" />
        <meta property="og:description" content="Insulina em jejum elevada com glicose normal? Descobre o que a hiperinsulinemia significa antes de um diagnóstico de pré-diabetes." />
        <meta property="og:url" content="https://catarinaveiga.com/insulina-jejum-o-que-significa" />
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
        <div className="w-full h-px bg-bone" />
        <Section5 />
        <CTASection />
      </main>
      <LegalBand />
      <Footer />
      <MobileCTA />
    </>
  );
};

export default InsulinaJejum;
