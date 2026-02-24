import { useFadeUp } from "@/hooks/useFadeUp";
import { useLanguage } from "@/contexts/LanguageContext";

const Manifesto = () => {
  const ref = useFadeUp();
  const { t } = useLanguage();

  return (
    <section ref={ref} id="abordagem" className="bg-bone section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <p className="fade-up label-uppercase text-amber mb-8">{t("manifesto.label")}</p>
        <blockquote className="fade-up font-serif text-3xl md:text-5xl italic text-foreground leading-tight mb-10">
          {t("manifesto.quote1")}<br />{t("manifesto.quote2")}
        </blockquote>
        <div className="fade-up space-y-6 text-muted-custom max-w-2xl mx-auto text-left">
          <p>{t("manifesto.p1")}</p>
          <p>{t("manifesto.p2")}</p>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
