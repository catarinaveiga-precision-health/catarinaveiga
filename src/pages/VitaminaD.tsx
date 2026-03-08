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
      <li className="text-foreground">Vitamina D</li>
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
          Vitamina D baixa: o que os valores laboratoriais não explicam
        </h1>
        <AmberDivider width={40} />
        <p className="text-muted-custom font-sans font-light text-lg leading-relaxed max-w-3xl mb-8">
          A maioria da população portuguesa tem vitamina D insuficiente — mas os valores considerados normais pelo laboratório podem ainda assim ser insuficientes para função fisiológica óptima.
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
          O que é a vitamina D e porque é uma hormona
        </h2>
        <div className="space-y-4 text-muted-custom font-sans font-light text-base leading-relaxed">
          <p>
            A vitamina D é tecnicamente uma hormona esteróide, não uma vitamina. É produzida pela pele mediante exposição solar e activa receptores em praticamente todos os tecidos do organismo — sistema imune, músculo, osso, cérebro e tiróide. A sua deficiência é uma das mais prevalentes e subestimadas em medicina moderna.
          </p>
        </div>
        <blockquote className="border-l-[3px] border-amber bg-bone px-6 py-5 my-8 font-sans font-light text-foreground text-base leading-relaxed italic">
          "Em Portugal, a exposição solar insuficiente nos meses de inverno — combinada com trabalho em interior e uso de protector solar — torna o défice de vitamina D extremamente comum, mesmo em clima mediterrânico."
        </blockquote>
      </div>
    </section>
  );
};

/* ── SECTION 2 ── */
const vitDSymptoms = [
  "Fadiga persistente sem causa aparente",
  "Infecções respiratórias frequentes",
  "Dores musculares ou ósseas difusas",
  "Alterações do humor, irritabilidade ou depressão sazonal",
  "Dificuldade de concentração e nevoeiro mental",
  "Queda de cabelo",
  "Cicatrização lenta",
  "Agravamento de condições autoimunes",
];

const Section2 = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-bone section-padding">
      <div className="max-w-4xl mx-auto fade-up">
        <SectionLabel>Reconheces isto?</SectionLabel>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mt-3 mb-4">
          Sintomas frequentes de vitamina D insuficiente
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {vitDSymptoms.map((s, i) => (
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
                <td className="py-3 px-4">&gt;20 ng/mL</td>
                <td className="py-3 px-4">Considerado suficiente</td>
              </tr>
              <tr className="border-b border-bone">
                <td className="py-3 px-4">Medicina funcional</td>
                <td className="py-3 px-4">50–80 ng/mL</td>
                <td className="py-3 px-4">Intervalo associado a função imune e hormonal óptima</td>
              </tr>
              <tr className="border-b border-bone">
                <td className="py-3 px-4">Défice severo</td>
                <td className="py-3 px-4">&lt;12 ng/mL</td>
                <td className="py-3 px-4">Associado a risco de osteoporose e disfunção imune grave</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-custom font-sans text-[11px] leading-relaxed">
          Holick MF. N Engl J Med. 2007. PMID: 23107484 · Pludowski P et al. Nutrients. 2021. PMID: 34093974
        </p>
      </div>
    </section>
  );
};

/* ── SECTION 4 — CALCULATOR ── */
const Section4 = () => {
  const ref = useFadeUp();
  const [vitD, setVitD] = useState("");
  const [result, setResult] = useState<null | { icon: string; text: string }>(null);

  const calculate = () => {
    const v = parseFloat(vitD);
    if (isNaN(v) || v < 0) return;

    let icon = "", text = "";
    if (v >= 50) {
      icon = "🟢"; text = "Vitamina D dentro do intervalo funcional (≥50 ng/mL). Os níveis parecem adequados para função imune e hormonal óptima.";
    } else if (v >= 30) {
      icon = "🟡"; text = "Vitamina D insuficiente (30–49 ng/mL). Embora dentro dos valores laboratoriais, este nível é comum mas corrigível — e pode associar-se a fadiga, susceptibilidade a infecções e alterações do humor.";
    } else if (v >= 12) {
      icon = "🔴"; text = "Défice de vitamina D (12–29 ng/mL). Este valor sugere insuficiência significativa e merece investigação clínica e suplementação orientada.";
    } else {
      icon = "⚠️"; text = "Défice severo de vitamina D (<12 ng/mL). Avaliação urgente recomendada — associado a risco de osteoporose, disfunção imune grave e compromisso metabólico.";
    }

    setResult({ icon, text });
  };

  return (
    <section ref={ref} className="bg-bone section-padding">
      <div className="max-w-4xl mx-auto fade-up">
        <SectionLabel>Ferramenta</SectionLabel>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mt-3 mb-4">
          Verifica o teu valor de vitamina D
        </h2>
        <p className="text-muted-custom font-sans font-light text-base leading-relaxed mb-8">
          Introduz o valor de vitamina D do teu último exame e recebe uma leitura baseada em intervalos funcionais.
        </p>

        <div className="bg-ivory border border-bone rounded-lg p-6 md:p-8 max-w-lg">
          <div className="mb-6">
            <label className="block text-sm font-sans font-medium text-foreground mb-1">Vitamina D (ng/mL)</label>
            <input
              type="number"
              value={vitD}
              onChange={(e) => setVitD(e.target.value)}
              placeholder="Ex: 32"
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
  { title: "Vitamina D baixa + TSH elevado", desc: "Associação frequente em disfunção tiroideia" },
  { title: "Vitamina D baixa + ferritina baixa", desc: "Padrão de deplecção múltipla em fadiga crónica" },
  { title: "Vitamina D baixa + PCR elevada", desc: "Défice pode amplificar inflamação sistémica" },
  { title: "Vitamina D baixa + insulina elevada", desc: "Resistência à insulina associada a défice de vitamina D" },
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

/* ── SECTION 6 ── */
const causes = [
  { title: "Exposição solar insuficiente", desc: "Trabalho em interior, horários urbanos" },
  { title: "Melanina e protector solar", desc: "Reduzem síntese cutânea de vitamina D" },
  { title: "Absorção intestinal reduzida", desc: "Permeabilidade intestinal compromete absorção" },
  { title: "Obesidade", desc: "A vitamina D é lipossolúvel e fica sequestrada no tecido adiposo" },
];

const Section6 = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-bone section-padding">
      <div className="max-w-4xl mx-auto fade-up">
        <SectionLabel>Causas</SectionLabel>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mt-3 mb-6">
          Porque o défice é tão prevalente em Portugal
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {causes.map((c, i) => (
            <div key={i} className="bg-ivory border-t-[2px] border-amber px-5 py-5 rounded-b">
              <p className="font-sans font-medium text-foreground text-sm mb-1">{c.title}</p>
              <p className="font-sans font-light text-muted-custom text-sm">{c.desc}</p>
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
          O défice de vitamina D é corrigível.<br />
          Mas precisa de ser identificado primeiro.
        </h2>
        <p className="text-primary-foreground/60 font-sans font-light text-base leading-relaxed mb-8 max-w-2xl mx-auto">
          A avaliação funcional analisa vitamina D em conjunto com outros biomarcadores e mostra padrões que os valores isolados não revelam.
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
const VitaminaD = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Vitamina D Baixa: Valores Funcionais e Sintomas",
    "description": "Vitamina D dentro dos valores normais mas com fadiga, infecções frequentes ou alterações do humor? Descobre a diferença entre valores laboratoriais e funcionais.",
    "url": "https://catarinaveiga.com/vitamina-d-valores-funcionais",
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
        <title>Vitamina D Baixa: Valores Funcionais e Sintomas | Catarina Veiga</title>
        <meta name="description" content="Vitamina D dentro dos valores normais mas com fadiga, infecções frequentes ou alterações do humor? Descobre a diferença entre valores laboratoriais e funcionais." />
        <link rel="canonical" href="https://catarinaveiga.com/vitamina-d-valores-funcionais" />
        <meta property="og:title" content="Vitamina D Baixa: Valores Funcionais e Sintomas | Catarina Veiga" />
        <meta property="og:description" content="Vitamina D dentro dos valores normais mas com fadiga, infecções frequentes ou alterações do humor? Descobre a diferença entre valores laboratoriais e funcionais." />
        <meta property="og:url" content="https://catarinaveiga.com/vitamina-d-valores-funcionais" />
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
        <div className="w-full h-px bg-bone" />
        <Section6 />
        <CTASection />
      </main>
      <LegalBand />
      <Footer />
      <MobileCTA />
    </>
  );
};

export default VitaminaD;
