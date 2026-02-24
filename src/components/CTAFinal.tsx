import { useFadeUp } from "@/hooks/useFadeUp";
import { Button } from "@/components/ui/button";
import { openAcuity } from "@/hooks/useAcuityModal";
import { useLanguage } from "@/contexts/LanguageContext";

const CTAFinal = () => {
  const ref = useFadeUp();
  const { t } = useLanguage();

  return (
    <section ref={ref} className="bg-dark section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <p className="fade-up label-uppercase text-amber mb-6">{t("ctafinal.label")}</p>
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-ivory mb-10 leading-tight">
          {t("ctafinal.title1")}<br />{t("ctafinal.title2")}
        </h2>
        <div className="fade-up">
          <Button variant="heroAccent" size="lg" className="text-base px-10 py-6" onClick={openAcuity}>{t("ctafinal.cta")}</Button>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;
