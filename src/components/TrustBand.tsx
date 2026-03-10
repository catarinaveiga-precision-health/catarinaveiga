import { useLanguage } from "@/contexts/LanguageContext";

const logos = [
  "OMNOS ACADEMY",
  "REGENERUS LABS",
  "IHCAN",
  "LONGEVITY MED SUMMIT",
  "OSTEOFORM",
  "LOWED",
  "PFTA",
  "ESCOLA DE SAÚDE AVANÇADA",
];

const TrustBand = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-muted py-8 px-6 overflow-hidden">
      <p className="label-uppercase text-muted-foreground text-[11px] text-center mb-6 max-w-3xl mx-auto">
        {t("trustband.desc")}
      </p>
      <div className="flex items-center justify-center gap-4 flex-wrap max-w-5xl mx-auto">
        {logos.map((logo, i) => (
          <span key={i} className="label-uppercase text-muted-foreground text-[11px] whitespace-nowrap">
            {logo}
            {i < logos.length - 1 && <span className="ml-4">·</span>}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TrustBand;
