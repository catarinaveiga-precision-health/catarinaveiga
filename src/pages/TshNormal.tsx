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
      <li className="text-foreground">TSH e função tiroideia</li>
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
          TSH normal mas com sintomas: o que a tiróide funcional explica
        </h1>
        <AmberDivider width={40} />
        <p className="text-muted-custom font-sans font-light text-lg leading-relaxed max-w-3xl mb-8">
          O intervalo laboratorial de TSH aceita valores até 4.5 mUI/L como normais. Em medicina funcional, valores acima de 2.0 já podem associar-se a lentificação metabólica em mulheres sintomáticas.
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
          O que é o TSH e o que regula
        </h2>
        <div className="space-y-4 text-muted-custom font-sans font-light text-base leading-relaxed">
          <p>
            O TSH (hormona estimulante da tiróide) é produzido pela hipófise e regula a produção de hormonas tiroideias T3 e T4. Quando a tiróide está lenta, a hipófise aumenta o TSH para a estimular. Valores elevados de TSH — mesmo dentro do intervalo laboratorial — podem indicar que a tiróide está a trabalhar com dificuldade para manter os níveis hormonais adequados.
          </p>
        </div>
        <blockquote className="border-l-[3px] border-amber bg-bone px-6 py-5 my-8 font-sans font-light text-foreground text-base leading-relaxed italic">
          "O TSH é o termóstato da tiróide. Um valor alto significa que o sistema está a pedir mais calor — mesmo que a temperatura da casa ainda pareça normal."
        </blockquote>
      </div>
    </section>
  );
};

/* ── SECTION 2 ── */
const symptoms = [
  "Fadiga persistente, especialmente de manhã",
  "Intolerância ao frio",
  "Aumento de peso sem alteração da dieta",
  "Dificuldade em perder peso",
  "Queda de cabelo difusa",
  "Pele seca, unhas frágeis",
  "Obstipação",
  "Lentificação cognitiva, nevoeiro mental",
  "Ciclo menstrual irregular",
  "Depressão ou humor baixo sem causa aparente",
];

const Section2 = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-bone section-padding">
      <div className="max-w-4xl mx-auto fade-up">
        <SectionLabel>Reconheces isto?</SectionLabel>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mt-3 mb-4">
          Sintomas frequentes de hipotiroidismo subclínico
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
                <td className="py-3 px-4">0.4–4.5 mUI/L</td>
                <td className="py-3 px-4">Intervalo muito amplo</td>
              </tr>
              <tr className="border-b border-bone">
                <td className="py-3 px-4">Medicina funcional</td>
                <td className="py-3 px-4">0.5–2.0 mUI/L</td>
                <td className="py-3 px-4">Intervalo associado a função tiroideia óptima</td>
              </tr>
              <tr className="border-b border-bone">
                <td className="py-3 px-4">Zona cinzenta</td>
                <td className="py-3 px-4">2.0–4.5 mUI/L</td>
                <td className="py-3 px-4">Pode associar-se a sintomas em mulheres sensíveis</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-custom font-sans text-[11px] leading-relaxed">
          Hoermann R et al. Endocr Rev. 2019. PMID: 29669113
        </p>
      </div>
    </section>
  );
};

/* ── SECTION 4 — CALCULATOR ── */
const Section4 = () => {
  const ref = useFadeUp();
  const [tsh, setTsh] = useState("");
  const [t3, setT3] = useState("");
  const [result, setResult] = useState<null | { icon: string; text: string }>(null);

  const calculate = () => {
    const v = parseFloat(tsh);
    if (isNaN(v) || v < 0) return;

    let icon = "", text = "";
    if (v < 0.5) {
      icon = "⚠️"; text = "TSH suprimido (<0.5 mUI/L). Este valor pode indicar hipertiroidismo — avaliação clínica necessária.";
    } else if (v <= 2.0) {
      icon = "🟢"; text = "TSH dentro do intervalo funcional (0.5–2.0 mUI/L). Os níveis sugerem função tiroideia adequada.";
    } else if (v <= 3.0) {
      icon = "🟡"; text = "TSH na zona cinzenta (2.0–3.0 mUI/L). O contexto sintomático é importante — valores neste intervalo podem associar-se a lentificação metabólica em mulheres.";
    } else if (v <= 4.5) {
      icon = "🔴"; text = "TSH elevado-normal (3.0–4.5 mUI/L). Apesar de dentro do intervalo laboratorial, este valor sugere esforço tiroideia. Investigação funcional recomendada.";
    } else {
      icon = "⚠️"; text = "TSH acima do intervalo laboratorial (>4.5 mUI/L). Avaliação clínica necessária — hipotiroidismo provável.";
    }

    const t3v = parseFloat(t3);
    if (!isNaN(t3v) && t3v > 0) {
      if (t3v < 2.3) {
        text += " T3 livre baixo — pode indicar conversão insuficiente de T4 em T3.";
      } else if (t3v <= 3.2) {
        text += " T3 livre dentro do intervalo funcional.";
      }
    }

    setResult({ icon, text });
  };

  return (
    <section ref={ref} className="bg-bone section-padding">
      <div className="max-w-4xl mx-auto fade-up">
        <SectionLabel>Ferramenta</SectionLabel>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mt-3 mb-4">
          Verifica o teu valor de TSH
        </h2>
        <p className="text-muted-custom font-sans font-light text-base leading-relaxed mb-8">
          Introduz o valor de TSH do teu último exame e recebe uma leitura baseada em intervalos funcionais.
        </p>

        <div className="bg-ivory border border-bone rounded-lg p-6 md:p-8 max-w-lg">
          <div className="mb-4">
            <label className="block text-sm font-sans font-medium text-foreground mb-1">TSH (mUI/L)</label>
            <input
              type="number"
              value={tsh}
              onChange={(e) => setTsh(e.target.value)}
              placeholder="Ex: 2.8"
              className="w-full border border-bone rounded px-4 py-2.5 font-sans font-light text-sm bg-background text-foreground placeholder:text-muted-custom/50 focus:outline-none focus:border-amber"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-sans font-medium text-foreground mb-1">T3 livre (pg/mL) — opcional</label>
            <input
              type="number"
              value={t3}
              onChange={(e) => setT3(e.target.value)}
              placeholder="Ex: 2.9"
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
  { title: "TSH elevado + ferritina baixa", desc: "Défice de ferro compromete conversão de T4 em T3" },
  { title: "TSH elevado + vitamina D baixa", desc: "Associação frequente em disfunção tiroideia autoimune" },
  { title: "TSH elevado + PCR elevada", desc: "Inflamação pode inibir função tiroideia" },
  { title: "TSH elevado + homocisteína alta", desc: "Padrão de stress metabólico e disfunção de metilação" },
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
const Section6 = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-bone section-padding">
      <div className="max-w-4xl mx-auto fade-up">
        <SectionLabel>Contexto hormonal</SectionLabel>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mt-3 mb-6">
          Porque a tiróide é tão sensível em mulheres
        </h2>
        <p className="text-muted-custom font-sans font-light text-base leading-relaxed max-w-3xl">
          A função tiroideia é influenciada por estrogénio, cortisol, ferro, vitamina D e estado inflamatório — todos factores que flutuam significativamente em mulheres ao longo do ciclo menstrual, gravidez, pós-parto e perimenopausa. Isto explica porque muitas mulheres desenvolvem sintomas tiroideios em períodos de transição hormonal, mesmo sem doença tiroideia detectável.
        </p>
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
          A tiróide é um dos sistemas mais sensíveis ao contexto fisiológico.<br />
          E um dos mais subestimados.
        </h2>
        <p className="text-primary-foreground/60 font-sans font-light text-base leading-relaxed mb-8 max-w-2xl mx-auto">
          A avaliação funcional analisa o TSH em conjunto com outros biomarcadores e mostra padrões que os valores isolados não revelam.
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
const TshNormal = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "TSH Normal Mas Com Sintomas: Função Tiroideia Funcional",
    "description": "TSH dentro dos valores normais mas com fadiga, frio, queda de cabelo ou dificuldade em perder peso? Descobre o que os intervalos laboratoriais não mostram.",
    "url": "https://catarinaveiga.com/tsh-normal-mas-com-sintomas",
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
        <title>TSH Normal Mas Com Sintomas: Função Tiroideia Funcional | Catarina Veiga</title>
        <meta name="description" content="TSH dentro dos valores normais mas com fadiga, frio, queda de cabelo ou dificuldade em perder peso? Descobre o que os intervalos laboratoriais não mostram." />
        <link rel="canonical" href="https://catarinaveiga.com/tsh-normal-mas-com-sintomas" />
        <meta property="og:title" content="TSH Normal Mas Com Sintomas: Função Tiroideia Funcional | Catarina Veiga" />
        <meta property="og:description" content="TSH dentro dos valores normais mas com fadiga, frio, queda de cabelo ou dificuldade em perder peso? Descobre o que os intervalos laboratoriais não mostram." />
        <meta property="og:url" content="https://catarinaveiga.com/tsh-normal-mas-com-sintomas" />
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

export default TshNormal;
