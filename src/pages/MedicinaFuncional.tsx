import SEOPageLayout from "@/components/seo/SEOPageLayout";
import SEOHero from "@/components/seo/SEOHero";

const MedicinaFuncional = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "Medicina Funcional",
    "description": "Medicina funcional integrativa: uma abordagem personalizada à saúde.",
    "url": "https://www.catarinaveiga.com/medicina-funcional",
    "inLanguage": "pt",
    "publisher": {
      "@type": "Organization",
      "name": "Catarina Veiga — Medicina Funcional Integrativa",
      "url": "https://www.catarinaveiga.com",
    },
  };

  return (
    <SEOPageLayout
      title="Medicina Funcional | Catarina Veiga"
      description="Medicina funcional integrativa: uma abordagem personalizada à saúde."
      canonical="https://www.catarinaveiga.com/medicina-funcional"
      structuredData={structuredData}
    >
      <SEOHero
        label="Medicina Funcional"
        title="Medicina Funcional"
        intro=""
        breadcrumb={[
          { label: "Início", to: "/" },
          { label: "Medicina Funcional" },
        ]}
      />
    </SEOPageLayout>
  );
};

export default MedicinaFuncional;
