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
  "Fadiga pós-prandial — cansaço a seguir às refeições",
  "Cravings intensos de açúcar ou hidratos de carbono",
  "Dificuldade em perder peso apesar de dieta controlada",
  "Peso concentrado na zona abdominal",
  "Nevoeiro mental após refeições",
  "Fome intensa poucas horas após comer",
  "Irritabilidade quando não come",
  "Alterações de humor relacionadas com refeições",
];

const patterns = [
  { title: "Insulina elevada + glicose normal", desc: "Hiperinsulinemia compensatória precoce" },
  { title: "Insulina elevada + triglicéridos altos", desc: "Síndrome metabólica clássica" },
  { title: "Insulina elevada + vitamina D baixa", desc: "Défice de vitamina D associado a resistência à insulina" },
  { title: "Insulina elevada + PCR elevada", desc: "Inflamação e resistência metabólica frequentemente coexistem" },
];

const insulinCalc = (values: string[]) => {
  const v = parseFloat(values[0]);
  if (isNaN(v) || v < 0) return null;

  let icon = "", text = "";
  if (v < 2) {
    icon = "⚠️"; text = "Insulina muito baixa (<2 µIU/mL). Requer contexto clínico — pode indicar hipoinsulinemia.";
  } else if (v <= 5) {
    icon = "🟢"; text = "Insulina dentro do intervalo funcional (2–5 µIU/mL). Boa sensibilidade celular à insulina.";
  } else if (v <= 10) {
    icon = "🟡"; text = "Insulina limítrofe (5–10 µIU/mL). O pâncreas pode já estar a compensar. Monitorização recomendada.";
  } else if (v <= 25) {
    icon = "🔴"; text = "Insulina elevada (>10 µIU/mL). Padrão de hiperinsulinemia — resistência metabólica e risco cardiovascular.";
  } else {
    icon = "⚠️"; text = "Insulina muito elevada (>25 µIU/mL). Avaliação clínica urgente — resistência à insulina significativa.";
  }

  return { icon, text };
};

const InsulinaJejum = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Insulina em Jejum Elevada: O Que Significa",
    "description": "Insulina em jejum elevada com glicose normal? Descobre o que a hiperinsulinemia significa antes de um diagnóstico de pré-diabetes.",
    "url": "https://www.catarinaveiga.com/insulina-jejum-o-que-significa",
    "inLanguage": "pt",
    "medicalAudience": { "@type": "MedicalAudience", "audienceType": "Patient" },
    "publisher": { "@type": "Organization", "name": "Catarina Veiga — Medicina Funcional Integrativa", "url": "https://www.catarinaveiga.com" },
  };

  return (
    <SEOPageLayout
      title="Insulina em Jejum Elevada: O Que Significa | Catarina Veiga"
      description="Insulina em jejum elevada com glicose normal? Descobre o que a hiperinsulinemia significa antes de um diagnóstico de pré-diabetes."
      canonical="https://www.catarinaveiga.com/insulina-jejum-o-que-significa"
      structuredData={structuredData}
    >
      <SEOHero
        label="Medicina Funcional · Metabolismo"
        title="Insulina em jejum elevada: o marcador que aparece anos antes do diagnóstico"
        intro="A glicose pode estar normal enquanto a insulina já está elevada há anos. Este padrão é um dos sinais mais precoces de resistência metabólica."
        breadcrumb={[
          { label: "Início", to: "/" },
          { label: "Recursos", to: "/recursos" },
          { label: "Insulina em jejum" },
        ]}
      />

      <SEOContentSection label="O essencial" title="O que é a insulina em jejum e o que mede">
        <p>
          A insulina é a hormona produzida pelo pâncreas para transportar glicose para as células. Em jejum, os seus níveis devem ser baixos. Quando a insulina em jejum está elevada com glicose normal, o pâncreas está a compensar — e isto pode preceder um diagnóstico de diabetes tipo 2 por uma década.
        </p>
      </SEOContentSection>

      <SEOImpactQuote quote="A hiperinsulinemia é frequentemente invisível nos exames convencionais — porque a glicose ainda está normal. Mas o pâncreas já está a trabalhar em excesso." />

      <SEOSymptomGrid
        label="Reconheces isto?"
        title="Sintomas frequentes de hiperinsulinemia"
        symptoms={symptoms}
      />

      <SEOComparison
        label="A diferença que importa"
        title="Valores laboratoriais vs valores funcionais"
        conventional={{
          range: "2–25 µIU/mL",
          items: [
            "Intervalo muito amplo que não detecta hiperinsulinemia precoce",
            "Focado em diabetes manifesta, não em resistência inicial",
            "A glicose pode mascarar o problema durante anos",
          ],
        }}
        functional={{
          range: "2–5 µIU/mL",
          items: [
            "Valores acima de 5–7 já podem indicar resistência metabólica",
            "Acima de 10: hiperinsulinemia franca com risco cardiovascular",
            "Monitorização precoce previne progressão para pré-diabetes",
          ],
        }}
        source="Hanley AJ et al. Diabetes Care. 2002. PMID: 12145237"
      />

      <SEOCalculator
        label="Ferramenta"
        title="Verifica o teu valor de insulina"
        intro="Introduz o valor de insulina em jejum do teu último exame e recebe uma leitura funcional."
        fields={[
          { label: "Insulina em jejum (µIU/mL)", placeholder: "Ex: 7" },
        ]}
        onCalculate={insulinCalc}
        bg="almond"
      />

      <SEOPatternCards
        label="Contexto clínico"
        title="Padrões combinados relevantes"
        patterns={patterns}
      />

      <SEOCTA
        title="A resistência à insulina começa anos antes do diagnóstico. Identificá-la cedo faz diferença."
        subtitle="A avaliação funcional analisa a insulina em conjunto com outros biomarcadores e mostra padrões que os valores isolados não revelam."
      />
    </SEOPageLayout>
  );
};

export default InsulinaJejum;
