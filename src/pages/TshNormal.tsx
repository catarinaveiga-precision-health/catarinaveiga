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
  "Fadiga persistente, especialmente de manhã",
  "Intolerância ao frio",
  "Aumento de peso sem alteração da dieta",
  "Dificuldade em perder peso",
  "Queda de cabelo difusa",
  "Pele seca, unhas frágeis",
  "Obstipação crónica",
  "Lentificação cognitiva, nevoeiro mental",
  "Ciclo menstrual irregular",
  "Depressão ou humor baixo sem causa aparente",
];

const patterns = [
  { title: "TSH elevado + ferritina baixa", desc: "Défice de ferro compromete conversão de T4 em T3" },
  { title: "TSH elevado + vitamina D baixa", desc: "Associação frequente em disfunção tiroideia autoimune" },
  { title: "TSH elevado + PCR elevada", desc: "Inflamação pode inibir função tiroideia" },
  { title: "TSH elevado + homocisteína alta", desc: "Padrão de stress metabólico e disfunção de metilação" },
];

const tshCalc = (values: string[]) => {
  const v = parseFloat(values[0]);
  if (isNaN(v) || v < 0) return null;

  let icon = "", text = "";
  if (v < 0.5) {
    icon = "⚠️"; text = "TSH suprimido (<0.5 mUI/L). Pode indicar hipertiroidismo — avaliação clínica necessária.";
  } else if (v <= 2.0) {
    icon = "🟢"; text = "TSH dentro do intervalo funcional (0.5–2.0 mUI/L). Função tiroideia adequada.";
  } else if (v <= 3.0) {
    icon = "🟡"; text = "TSH na zona cinzenta (2.0–3.0 mUI/L). Pode associar-se a lentificação metabólica em mulheres sintomáticas.";
  } else if (v <= 4.5) {
    icon = "🔴"; text = "TSH elevado-normal (3.0–4.5 mUI/L). Sugere esforço tiroideia — investigação funcional recomendada.";
  } else {
    icon = "⚠️"; text = "TSH acima do intervalo laboratorial (>4.5 mUI/L). Hipotiroidismo provável — avaliação clínica necessária.";
  }

  const t3v = parseFloat(values[1]);
  if (!isNaN(t3v) && t3v > 0) {
    if (t3v < 2.3) text += " T3 livre baixo — pode indicar conversão insuficiente de T4 em T3.";
    else if (t3v <= 3.2) text += " T3 livre dentro do intervalo funcional.";
  }

  return { icon, text };
};

const TshNormal = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "TSH Normal Mas Com Sintomas: Função Tiroideia Funcional",
    "description": "TSH dentro dos valores normais mas com fadiga, frio, queda de cabelo? Descobre o que os intervalos laboratoriais não mostram.",
    "url": "https://www.catarinaveiga.com/tsh-normal-mas-com-sintomas",
    "inLanguage": "pt",
    "medicalAudience": { "@type": "MedicalAudience", "audienceType": "Patient" },
    "publisher": { "@type": "Organization", "name": "Catarina Veiga — Medicina Funcional Integrativa", "url": "https://www.catarinaveiga.com" },
  };

  return (
    <SEOPageLayout
      title="TSH Normal Mas Com Sintomas: Função Tiroideia Funcional | Catarina Veiga"
      description="TSH dentro dos valores normais mas com fadiga, frio, queda de cabelo? Descobre o que os intervalos laboratoriais não mostram."
      canonical="https://www.catarinaveiga.com/tsh-normal-mas-com-sintomas"
      structuredData={structuredData}
    >
      <SEOHero
        label="Medicina Funcional · Tiróide"
        title="TSH normal mas com sintomas: o que a tiróide funcional explica"
        intro="O intervalo laboratorial aceita valores até 4.5 mUI/L como normais. Em medicina funcional, valores acima de 2.0 já podem associar-se a lentificação metabólica."
        breadcrumb={[
          { label: "Início", to: "/" },
          { label: "Recursos", to: "/recursos" },
          { label: "TSH e função tiroideia" },
        ]}
      />

      <SEOContentSection label="O essencial" title="O que é o TSH e o que regula">
        <p>
          O TSH é produzido pela hipófise e regula a produção de hormonas tiroideias T3 e T4. Quando a tiróide está lenta, a hipófise aumenta o TSH para a estimular. Valores elevados — mesmo dentro do intervalo laboratorial — podem indicar que a tiróide está a trabalhar com dificuldade.
        </p>
      </SEOContentSection>

      <SEOImpactQuote quote="O TSH é o termóstato da tiróide. Um valor alto significa que o sistema está a pedir mais calor — mesmo que a temperatura da casa ainda pareça normal." />

      <SEOSymptomGrid
        label="Reconheces isto?"
        title="Sintomas frequentes de hipotiroidismo subclínico"
        symptoms={symptoms}
      />

      <SEOComparison
        label="A diferença que importa"
        title="Valores laboratoriais vs valores funcionais"
        conventional={{
          range: "0.4–4.5 mUI/L",
          items: [
            "Intervalo muito amplo que inclui disfunção subclínica",
            "Baseado na distribuição estatística da população geral",
            "Não considera sintomas individuais",
          ],
        }}
        functional={{
          range: "0.5–2.0 mUI/L",
          items: [
            "Intervalo associado a função tiroideia óptima",
            "Valores acima de 2.0 merecem avaliação em contexto sintomático",
            "Zona cinzenta (2.0–4.5) frequentemente relevante em mulheres",
          ],
        }}
        source="Hoermann R et al. Endocr Rev. 2019. PMID: 29669113"
      />

      <SEOCalculator
        label="Ferramenta"
        title="Verifica o teu valor de TSH"
        intro="Introduz o valor do teu último exame e recebe uma leitura baseada em intervalos funcionais."
        fields={[
          { label: "TSH (mUI/L)", placeholder: "Ex: 2.8" },
          { label: "T3 livre (pg/mL)", placeholder: "Ex: 2.9", optional: true },
        ]}
        onCalculate={tshCalc}
        bg="almond"
      />

      <SEOPatternCards
        label="Contexto clínico"
        title="Padrões combinados relevantes"
        patterns={patterns}
      />

      <SEOContentSection label="Contexto hormonal" title="Porque a tiróide é tão sensível em mulheres" bg="almond">
        <p>
          A função tiroideia é influenciada por estrogénio, cortisol, ferro, vitamina D e estado inflamatório — todos factores que flutuam significativamente em mulheres ao longo do ciclo menstrual, gravidez, pós-parto e perimenopausa.
        </p>
      </SEOContentSection>

      <SEOCTA
        title="A tiróide é um dos sistemas mais sensíveis ao contexto fisiológico. E um dos mais subestimados."
        subtitle="A avaliação funcional analisa o TSH em conjunto com outros biomarcadores e mostra padrões que os valores isolados não revelam."
      />
    </SEOPageLayout>
  );
};

export default TshNormal;
