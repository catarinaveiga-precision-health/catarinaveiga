import { useState } from "react";
import SEOPageLayout from "@/components/seo/SEOPageLayout";
import SEOHero from "@/components/seo/SEOHero";
import SEOComparison from "@/components/seo/SEOComparison";
import SEOSymptomGrid from "@/components/seo/SEOSymptomGrid";
import SEOImpactQuote from "@/components/seo/SEOImpactQuote";
import SEOContentSection from "@/components/seo/SEOContentSection";
import SEOPatternCards from "@/components/seo/SEOPatternCards";
import SEOCalculator from "@/components/seo/SEOCalculator";
import SEOCTA from "@/components/seo/SEOCTA";

const symptoms = [
  "Fadiga persistente, mesmo após descanso adequado",
  "Queda de cabelo difusa ou aumento de queda sazonal",
  "Intolerância ao frio, especialmente nas extremidades",
  "Dificuldade de concentração e nevoeiro mental",
  "Recuperação lenta após exercício físico",
  "Palpitações ou falta de ar com esforço moderado",
  "Unhas frágeis, quebradiças ou com estrias",
  "Sintomas de hipotiroidismo com TSH normal",
];

const patterns = [
  { title: "Ferritina + TSH elevado", desc: "Padrão frequente em disfunção tiroideia subclínica" },
  { title: "Ferritina baixa + VGM aumentado", desc: "Pode indicar coexistência de défice de B12 ou folato" },
  { title: "Ferritina baixa + PCR elevada", desc: "A inflamação pode falsear a ferritina para cima" },
  { title: "Ferritina baixa + vitamina D baixa", desc: "Padrão de deplecção múltipla em fadiga crónica" },
];

const causes = [
  { title: "Perdas menstruais", desc: "Ciclos abundantes aumentam as necessidades de ferro" },
  { title: "Absorção reduzida", desc: "Permeabilidade intestinal, hipocloridria ou dieta pobre em ferro biodisponível" },
  { title: "Stress crónico", desc: "Cortisol elevado interfere com absorção e utilização de ferro" },
  { title: "Inflamação crónica", desc: "A hepcidina sequestra o ferro nos depósitos" },
  { title: "Gravidez e pós-parto", desc: "Necessidades aumentadas e recuperação lenta" },
  { title: "Dietas restritivas", desc: "Vegetariana, vegana ou baixo consumo de proteína animal" },
];

const ferritinCalc = (values: string[]) => {
  const f = parseFloat(values[0]);
  if (isNaN(f) || f < 0) return null;
  const h = parseFloat(values[1]);

  let icon = "", text = "";
  if (f > 150) {
    icon = "⚠️"; text = "Ferritina elevada — valores elevados podem associar-se a inflamação, sobrecarga de ferro ou outras condições que merecem avaliação.";
  } else if (f >= 50) {
    icon = "🟢"; text = "Ferritina dentro do intervalo funcional (≥50 ng/mL). As reservas de ferro parecem adequadas.";
  } else if (f >= 30) {
    icon = "🟡"; text = "Ferritina limítrofe (30–49 ng/mL). Pode associar-se a fadiga, queda de cabelo ou dificuldade de concentração.";
  } else {
    icon = "🔴"; text = "Ferritina baixa (<30 ng/mL). Reservas de ferro insuficientes — merece investigação clínica.";
  }

  let note: string | undefined;
  if (!isNaN(h) && h >= 12 && f < 50) {
    note = "Hemoglobina normal com ferritina abaixo do intervalo funcional — padrão compatível com défice de ferro sem anemia.";
  }

  return { icon, text, note };
};

const FerritinaBaixa = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Ferritina Baixa: Sintomas, Causas e Intervalos Funcionais",
    "description": "Ferritina dentro do normal mas com fadiga e queda de cabelo? Descobre a diferença entre valores laboratoriais e funcionais.",
    "url": "https://www.catarinaveiga.com/ferritina-baixa-sintomas",
    "inLanguage": "pt",
    "medicalAudience": { "@type": "MedicalAudience", "audienceType": "Patient" },
    "publisher": { "@type": "Organization", "name": "Catarina Veiga — Medicina Funcional Integrativa", "url": "https://www.catarinaveiga.com" },
  };

  return (
    <SEOPageLayout
      title="Ferritina Baixa: Sintomas, Causas e Intervalos Funcionais | Catarina Veiga"
      description="Ferritina dentro do normal mas com fadiga e queda de cabelo? Descobre a diferença entre valores laboratoriais e funcionais."
      canonical="https://www.catarinaveiga.com/ferritina-baixa-sintomas"
      structuredData={structuredData}
    >
      <SEOHero
        label="Medicina Funcional · Ferro"
        title="Ferritina baixa: sintomas, causas e o que os exames podem não mostrar"
        intro="Muitas mulheres têm ferritina dentro dos valores de referência — e ainda assim apresentam fadiga persistente, queda de cabelo e dificuldade de recuperação."
        breadcrumb={[
          { label: "Início", to: "/" },
          { label: "Recursos", to: "/recursos" },
          { label: "Ferritina" },
        ]}
      />

      <SEOContentSection label="O essencial" title="O que é a ferritina e porque importa">
        <p>
          A ferritina é a principal proteína de armazenamento de ferro no organismo. Ao contrário da hemoglobina — que mede o ferro em circulação — a ferritina mede as reservas disponíveis para uso celular.
        </p>
        <p>
          O ferro é necessário para produção de energia mitocondrial, síntese de neurotransmissores, função tiroideia e manutenção do folículo piloso. Quando as reservas são insuficientes, estes processos são os primeiros a ser comprometidos — mesmo antes de a hemoglobina descer.
        </p>
      </SEOContentSection>

      <SEOImpactQuote quote="É possível ter hemoglobina normal e ferritina baixa. Os exames convencionais não identificam anemia — mas o corpo já está a funcionar com reservas insuficientes." />

      <SEOSymptomGrid
        label="Reconheces isto?"
        title="Sintomas frequentes de ferritina baixa ou insuficiente"
        symptoms={symptoms}
      />

      <SEOComparison
        label="A diferença que importa"
        title="Valores laboratoriais vs valores funcionais"
        conventional={{
          range: "10–150 ng/mL",
          items: [
            "Qualquer valor acima de 10 é considerado normal",
            "Intervalo baseado na distribuição estatística da população",
            "Não distingue entre ausência de anemia e reservas óptimas",
          ],
        }}
        functional={{
          range: "50–100 ng/mL",
          items: [
            "Valores abaixo de 50 podem associar-se a défice funcional",
            "Intervalo associado a energia, cabelo e cognição óptimos",
            "Considera as necessidades fisiológicas individuais",
          ],
        }}
        source="Soppi ET. Iron deficiency without anemia. Clin Case Rep. 2018. PMID: 29468045"
      />

      <SEOCalculator
        label="Ferramenta"
        title="Verifica o teu valor de ferritina"
        intro="Introduz o valor do teu último exame e recebe uma leitura baseada em intervalos funcionais."
        fields={[
          { label: "Ferritina (ng/mL)", placeholder: "Ex: 28" },
          { label: "Hemoglobina (g/dL)", placeholder: "Ex: 13.2", optional: true },
        ]}
        onCalculate={ferritinCalc}
        bg="almond"
      />

      <SEOPatternCards
        label="Contexto clínico"
        title="Quando vale a pena investigar mais"
        patterns={patterns}
      />

      <SEOImpactQuote quote="A ferritina raramente deve ser avaliada isoladamente. O padrão mais informativo inclui a combinação com outros biomarcadores." />

      <SEOPatternCards
        label="Causas"
        title="Porque a ferritina baixa é tão comum em mulheres"
        patterns={causes}
        bg="almond"
      />

      <SEOCTA
        title="Os teus exames podem estar normais. Mas o teu corpo pode estar a pedir atenção."
        subtitle="A avaliação funcional analisa ferritina em conjunto com outros 14 biomarcadores — e mostra padrões que os intervalos convencionais não identificam."
      />
    </SEOPageLayout>
  );
};

export default FerritinaBaixa;
