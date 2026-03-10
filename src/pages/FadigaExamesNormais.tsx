import SEOPageLayout from "@/components/seo/SEOPageLayout";
import SEOHero from "@/components/seo/SEOHero";
import SEOComparison from "@/components/seo/SEOComparison";
import SEOSymptomGrid from "@/components/seo/SEOSymptomGrid";
import SEOImpactQuote from "@/components/seo/SEOImpactQuote";
import SEOContentSection from "@/components/seo/SEOContentSection";
import SEOPatternCards from "@/components/seo/SEOPatternCards";
import SEOCTA from "@/components/seo/SEOCTA";
import { Link } from "react-router-dom";

const biomarkerPatterns = [
  { title: "Ferritina baixo-normal (20–50 ng/mL)", desc: "Reservas de ferro insuficientes para produção de energia mitocondrial" },
  { title: "TSH elevado-normal (2.5–4.0 mUI/L)", desc: "Função tiroideia subclínica — o sistema já está a compensar" },
  { title: "Vitamina D insuficiente (20–40 ng/mL)", desc: "Défice funcional associado a fadiga muscular e disfunção imune" },
  { title: "Vitamina B12 baixo-normal (200–400 pg/mL)", desc: "Valores no limite associados a fadiga e nevoeiro mental" },
  { title: "Insulina em jejum elevada (>7 µIU/mL)", desc: "Resistência metabólica precoce — pâncreas em excesso" },
  { title: "PCR elevada (>1 mg/L)", desc: "Inflamação sistémica de baixo grau que consome energia" },
];

const checklistItems = [
  "Acordas cansada mesmo depois de dormir bem",
  "O cansaço piora a seguir às refeições",
  "Dificuldade de concentração e nevoeiro mental",
  "Sentes frio com facilidade, especialmente nas mãos e pés",
  "Queda de cabelo ou unhas frágeis",
  "Os teus exames estão sempre normais",
];

const FadigaExamesNormais = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Fadiga com Exames Normais: Causas e Investigação Funcional",
    "description": "Cansaço persistente com exames normais? Descobre os padrões biomarcadores mais frequentes em mulheres com fadiga inexplicada.",
    "url": "https://www.catarinaveiga.com/fadiga-exames-normais",
    "inLanguage": "pt",
    "medicalAudience": { "@type": "MedicalAudience", "audienceType": "Patient" },
    "publisher": { "@type": "Organization", "name": "Catarina Veiga — Medicina Funcional Integrativa", "url": "https://www.catarinaveiga.com" },
  };

  return (
    <SEOPageLayout
      title="Fadiga com Exames Normais: Causas e Investigação Funcional | Catarina Veiga"
      description="Cansaço persistente com exames normais? Descobre os padrões biomarcadores mais frequentes em mulheres com fadiga inexplicada."
      canonical="https://www.catarinaveiga.com/fadiga-exames-normais"
      structuredData={structuredData}
    >
      <SEOHero
        label="Medicina Funcional · Investigação"
        title="Fadiga com exames normais: porque acontece e o que investigar"
        intro="É uma das queixas mais frequentes em medicina — e uma das mais frustrantes. Os exames estão normais, mas o cansaço persiste."
        breadcrumb={[
          { label: "Início", to: "/" },
          { label: "Recursos", to: "/recursos" },
          { label: "Fadiga com exames normais" },
        ]}
      />

      <SEOContentSection label="O essencial" title="Porque os exames podem estar normais e a fadiga persistir">
        <p>
          Os intervalos laboratoriais de referência são definidos pela distribuição estatística da população — não pelos valores associados a função energética óptima. Um valor pode estar dentro do intervalo normal e ainda assim ser insuficiente para as necessidades fisiológicas individuais.
        </p>
      </SEOContentSection>

      <SEOImpactQuote quote="Muitas mulheres chegam à consulta depois de anos a ouvir que está tudo bem nos exames. O problema raramente é que não há nada — é que ninguém procurou no sítio certo." />

      <SEOPatternCards
        label="Padrões frequentes"
        title="Os 6 padrões biomarcadores mais frequentes em fadiga inexplicada"
        patterns={biomarkerPatterns}
        bg="almond"
      />

      <SEOSymptomGrid
        label="Questionário rápido"
        title="Reconheces estes padrões?"
        symptoms={checklistItems}
      />

      <SEOComparison
        label="Convencional vs Funcional"
        title="O que os exames dizem vs o que a medicina funcional vê"
        conventional={{
          range: "Intervalos populacionais",
          items: [
            "Baseados na distribuição estatística — não em função óptima",
            "Focam-se na ausência de doença, não na presença de saúde",
            "Valores isolados sem contexto integrado",
          ],
        }}
        functional={{
          range: "Intervalos funcionais",
          items: [
            "Baseados em valores associados a energia e vitalidade",
            "Investigam padrões — não apenas valores isolados",
            "Consideram a relação entre biomarcadores e sistemas",
          ],
        }}
      />

      <SEOCTA
        title="Os teus exames estão normais. O teu corpo não."
        subtitle="Esta é a frase que define a medicina funcional. E é exactamente o que a ferramenta de avaliação foi desenhada para investigar."
        buttonText="Começar avaliação funcional"
        note="Gratuita · 14 biomarcadores · leitura imediata"
      />
    </SEOPageLayout>
  );
};

export default FadigaExamesNormais;
