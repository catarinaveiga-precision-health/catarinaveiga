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
  <div className={`h-[2px] bg-amber mt-4 mb-6`} style={{ width }} />
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
      <li className="text-muted-custom">Recursos</li>
      <li>/</li>
      <li className="text-foreground">Ferritina</li>
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
          Ferritina baixa: sintomas, causas e o que os exames podem não mostrar
        </h1>
        <AmberDivider width={40} />
        <p className="text-muted-custom font-sans font-light text-lg leading-relaxed max-w-3xl mb-8">
          Muitas mulheres têm ferritina dentro dos valores laboratoriais de referência — e ainda assim apresentam fadiga persistente, queda de cabelo e dificuldade de recuperação. A razão pode estar na diferença entre 'normal' e 'funcional'.
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
          O que é a ferritina e porque importa
        </h2>
        <div className="space-y-4 text-muted-custom font-sans font-light text-base leading-relaxed">
          <p>
            A ferritina é a principal proteína de armazenamento de ferro no organismo. Ao contrário da hemoglobina — que mede o ferro em circulação activo no transporte de oxigénio — a ferritina mede as reservas de ferro disponíveis para uso celular.
          </p>
          <p>
            O ferro é necessário para produção de energia mitocondrial, síntese de neurotransmissores, função tiroideia e manutenção do folículo piloso. Quando as reservas são insuficientes, estes processos são os primeiros a ser comprometidos — mesmo antes de a hemoglobina descer para valores anémicos.
          </p>
        </div>
        <blockquote className="border-l-[3px] border-amber bg-bone px-6 py-5 my-8 font-sans font-light text-foreground text-base leading-relaxed italic">
          "É possível ter hemoglobina normal e ferritina baixa. Neste cenário, os exames convencionais não identificam anemia — mas o corpo já está a funcionar com uma reserva insuficiente de ferro para as suas necessidades fisiológicas."
        </blockquote>
        <p className="text-muted-custom font-sans font-light text-base leading-relaxed">
          Este padrão é particularmente comum em mulheres em idade fértil, em períodos de stress prolongado, após gravidez, ou com dietas restritivas — e é frequentemente subestimado na medicina convencional.
        </p>
      </div>
    </section>
  );
};

/* ── SECTION 2 ── */
const symptoms = [
  "Fadiga persistente, mesmo após descanso adequado",
  "Queda de cabelo difusa ou aumento de queda sazonal",
  "Intolerância ao frio, especialmente nas extremidades",
  "Dificuldade de concentração e nevoeiro mental",
  "Recuperação lenta após exercício físico",
  "Palpitações ou falta de ar com esforço moderado",
  "Unhas frágeis, quebradiças ou com estrias longitudinais",
  "Sintomas de hipotiroidismo com TSH dentro do normal",
];

const Section2 = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-bone section-padding">
      <div className="max-w-4xl mx-auto fade-up">
        <SectionLabel>Reconheces isto?</SectionLabel>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mt-3 mb-4">
          Sintomas frequentes de ferritina baixa ou insuficiente
        </h2>
        <p className="text-muted-custom font-sans font-light text-base leading-relaxed mb-8">
          Estes são os padrões sintomáticos mais comuns em mulheres com ferritina abaixo dos valores funcionais — mesmo quando os exames são considerados normais:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {symptoms.map((s, i) => (
            <div key={i} className="bg-background border-l-[2px] border-amber px-5 py-4 rounded-r font-sans font-light text-foreground text-[15px] leading-relaxed">
              {s}
            </div>
          ))}
        </div>
        <p className="text-muted-custom font-sans font-light text-base leading-relaxed">
          A presença de dois ou mais destes sintomas em contexto de ferritina abaixo de 50 ng/mL merece investigação clínica, mesmo que o relatório laboratorial indique resultado normal.
        </p>
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
        <p className="text-muted-custom font-sans font-light text-base leading-relaxed mb-8">
          Os intervalos de referência laboratorial são calculados com base na distribuição estatística da população geral — não em valores associados a função fisiológica óptima.
        </p>
        <div className="overflow-x-auto mb-4">
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
                <td className="py-3 px-4">10–150 ng/mL (mulheres)</td>
                <td className="py-3 px-4">Qualquer valor acima de 10 é considerado normal</td>
              </tr>
              <tr className="border-b border-bone">
                <td className="py-3 px-4">Medicina funcional</td>
                <td className="py-3 px-4">50–100 ng/mL</td>
                <td className="py-3 px-4">Valores abaixo de 50 podem associar-se a défice funcional mesmo sem anemia</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-muted-custom font-sans text-[11px] leading-relaxed">
          Soppi ET. Iron deficiency without anemia. Clin Case Rep. 2018. PMID: 29468045 · Camaschella C. N Engl J Med. 2015. PMID: 25946282
        </p>
      </div>
    </section>
  );
};

/* ── SECTION 4 — CALCULATOR ── */
const Section4 = () => {
  const ref = useFadeUp();
  const [ferritin, setFerritin] = useState("");
  const [hemoglobin, setHemoglobin] = useState("");
  const [result, setResult] = useState<null | { icon: string; color: string; text: string; note?: string }>(null);

  const calculate = () => {
    const f = parseFloat(ferritin);
    if (isNaN(f) || f < 0) return;
    const h = parseFloat(hemoglobin);

    let icon = "", color = "", text = "";
    if (f > 150) {
      icon = "⚠️"; color = "text-amber"; text = "Ferritina elevada — o contexto clínico é importante. Valores elevados podem associar-se a inflamação, sobrecarga de ferro ou outras condições que merecem avaliação.";
    } else if (f >= 50) {
      icon = "🟢"; color = "text-green-700"; text = "Ferritina dentro do intervalo funcional (≥50 ng/mL). As reservas de ferro parecem adequadas para a maioria das funções fisiológicas.";
    } else if (f >= 30) {
      icon = "🟡"; color = "text-yellow-700"; text = "Ferritina limítrofe (30–49 ng/mL). Embora dentro dos valores laboratoriais, este nível pode associar-se a sintomas como fadiga, queda de cabelo ou dificuldade de concentração. Atenção recomendada.";
    } else {
      icon = "🔴"; color = "text-red-700"; text = "Ferritina baixa (<30 ng/mL). Este valor sugere reservas de ferro insuficientes e merece investigação clínica, independentemente do resultado da hemoglobina.";
    }

    let note: string | undefined;
    if (!isNaN(h) && h >= 12 && f < 50) {
      note = "Hemoglobina normal com ferritina abaixo do intervalo funcional — este padrão é compatível com défice de ferro sem anemia, uma condição frequentemente não identificada em análises convencionais.";
    }

    setResult({ icon, color, text, note });
  };

  return (
    <section ref={ref} className="bg-bone section-padding">
      <div className="max-w-4xl mx-auto fade-up">
        <SectionLabel>Ferramenta</SectionLabel>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mt-3 mb-4">
          Verifica o teu valor de ferritina
        </h2>
        <p className="text-muted-custom font-sans font-light text-base leading-relaxed mb-8">
          Introduz o valor de ferritina do teu último exame e recebe uma leitura baseada em intervalos funcionais.
        </p>

        <div className="bg-ivory border border-bone rounded-lg p-6 md:p-8 max-w-lg">
          <div className="space-y-4 mb-6">
            <div>
              <label className="block text-sm font-sans font-medium text-foreground mb-1">Ferritina (ng/mL)</label>
              <input
                type="number"
                value={ferritin}
                onChange={(e) => setFerritin(e.target.value)}
                placeholder="Ex: 28"
                className="w-full border border-bone rounded px-4 py-2.5 font-sans font-light text-sm bg-background text-foreground placeholder:text-muted-custom/50 focus:outline-none focus:border-amber"
              />
            </div>
            <div>
              <label className="block text-sm font-sans font-medium text-foreground mb-1">Hemoglobina (g/dL) — opcional</label>
              <input
                type="number"
                value={hemoglobin}
                onChange={(e) => setHemoglobin(e.target.value)}
                placeholder="Ex: 13.2"
                className="w-full border border-bone rounded px-4 py-2.5 font-sans font-light text-sm bg-background text-foreground placeholder:text-muted-custom/50 focus:outline-none focus:border-amber"
              />
            </div>
          </div>
          <Button variant="hero" className="w-full" onClick={calculate}>
            Ver leitura funcional
          </Button>

          {result && (
            <div className="mt-6 border-l-[3px] border-amber bg-bone rounded-r px-5 py-5 space-y-3">
              <p className={`font-sans text-base font-light leading-relaxed`}>
                <span className="text-xl mr-2">{result.icon}</span>
                {result.text}
              </p>
              {result.note && (
                <p className="font-sans text-sm font-light text-amber leading-relaxed">
                  {result.note}
                </p>
              )}
              <Link to="/avaliacao" className="inline-block text-amber font-sans text-sm hover:underline mt-2">
                Ver avaliação completa de biomarcadores →
              </Link>
            </div>
          )}
        </div>

        <p className="text-muted-custom font-sans text-[11px] leading-relaxed mt-4 max-w-lg">
          Esta ferramenta apresenta uma leitura educativa baseada em intervalos funcionais. Não constitui diagnóstico médico nem substitui avaliação clínica.
        </p>
      </div>
    </section>
  );
};

/* ── SECTION 5 ── */
const patterns = [
  { title: "Ferritina + TSH elevado", desc: "Padrão frequente em disfunção tiroideia subclínica" },
  { title: "Ferritina baixa + VGM aumentado", desc: "Pode indicar coexistência de défice de B12 ou folato" },
  { title: "Ferritina baixa + PCR elevada", desc: "A inflamação pode falsear a ferritina para cima, mascarando défice real" },
  { title: "Ferritina baixa + vitamina D baixa", desc: "Padrão de deplecção múltipla comum em fadiga crónica" },
];

const Section5 = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-ivory section-padding">
      <div className="max-w-4xl mx-auto fade-up">
        <SectionLabel>Contexto clínico</SectionLabel>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mt-3 mb-4">
          Quando vale a pena investigar mais
        </h2>
        <p className="text-muted-custom font-sans font-light text-base leading-relaxed mb-8">
          A ferritina raramente deve ser avaliada isoladamente. Em medicina funcional, o padrão mais informativo inclui a combinação com outros biomarcadores:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
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
  { title: "Perdas menstruais", desc: "Ciclos abundantes aumentam as necessidades de ferro" },
  { title: "Absorção reduzida", desc: "Permeabilidade intestinal, hipocloridria ou dieta pobre em ferro biodisponível" },
  { title: "Stress crónico", desc: "Cortisol elevado interfere com absorção e utilização de ferro" },
  { title: "Inflamação crónica", desc: "A hepcidina sequestra o ferro nos depósitos" },
  { title: "Gravidez e pós-parto", desc: "Necessidades aumentadas e recuperação lenta" },
  { title: "Dietas restritivas", desc: "Vegetariana, vegana ou baixo consumo de proteína animal" },
];

const Section6 = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-bone section-padding">
      <div className="max-w-4xl mx-auto fade-up">
        <SectionLabel>Causas</SectionLabel>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-foreground mt-3 mb-6">
          Porque a ferritina baixa é tão comum em mulheres
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
          Os teus exames podem estar normais.<br />
          Mas o teu corpo pode estar a pedir atenção.
        </h2>
        <p className="text-primary-foreground/60 font-sans font-light text-base leading-relaxed mb-8 max-w-2xl mx-auto">
          A avaliação funcional analisa ferritina em conjunto com outros 14 biomarcadores — e mostra padrões que os intervalos convencionais não identificam.
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
const FerritinaBaixa = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Ferritina Baixa: Sintomas, Causas e o Que os Exames Podem Não Mostrar",
    "description": "Ferritina dentro dos valores normais mas com fadiga, queda de cabelo ou cansaço persistente? Descobre a diferença entre valores laboratoriais e funcionais em medicina funcional.",
    "url": "https://catarinaveiga.com/ferritina-baixa-sintomas",
    "inLanguage": "pt-PT",
    "lastReviewed": "2026-03-08",
    "medicalAudience": {
      "@type": "MedicalAudience",
      "audienceType": "Patient"
    },
    "author": {
      "@type": "Person",
      "@id": "https://catarinaveiga.com/#person",
      "name": "Catarina Veiga"
    },
    "publisher": {
      "@type": "ProfessionalService",
      "@id": "https://catarinaveiga.com/#business"
    }
  };

  return (
    <>
      <Helmet>
        <title>Ferritina Baixa: Sintomas, Causas e o Que os Exames Podem Não Mostrar | Catarina Veiga</title>
        <meta name="description" content="Ferritina dentro dos valores normais mas com fadiga, queda de cabelo ou cansaço persistente? Descobre a diferença entre valores laboratoriais e funcionais em medicina funcional." />
        <link rel="canonical" href="https://catarinaveiga.com/ferritina-baixa-sintomas" />
        <meta property="og:title" content="Ferritina Baixa: Sintomas, Causas e o Que os Exames Podem Não Mostrar | Catarina Veiga" />
        <meta property="og:description" content="Ferritina dentro dos valores normais mas com fadiga, queda de cabelo ou cansaço persistente? Descobre a diferença entre valores laboratoriais e funcionais em medicina funcional." />
        <meta property="og:url" content="https://catarinaveiga.com/ferritina-baixa-sintomas" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <Navbar />
      <Breadcrumb />
      <HeroSection />
      <div className="w-full h-px bg-bone" />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <CTASection />
      <div className="bg-ivory py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/avaliacao" className="text-amber font-sans text-sm hover:underline">
            ← Voltar à avaliação completa
          </Link>
        </div>
      </div>
      <LegalBand />
      <Footer />
      <MobileCTA />
    </>
  );
};

export default FerritinaBaixa;
