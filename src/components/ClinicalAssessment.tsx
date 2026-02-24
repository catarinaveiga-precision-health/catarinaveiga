import { useFadeUp } from "@/hooks/useFadeUp";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const ClinicalAssessment = () => {
  const ref = useFadeUp();
  const { t } = useLanguage();

  return (
    <section ref={ref} className="bg-ivory section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <p className="fade-up label-uppercase text-amber mb-6">{t("assessment.label")}</p>
        <h2 className="fade-up font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
          {t("assessment.title1")}<br />{t("assessment.title2")}
        </h2>
        <p className="fade-up text-muted-custom mb-8 max-w-lg mx-auto">{t("assessment.desc")}</p>
        <div className="fade-up">
          <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-bone hover:text-foreground font-sans font-normal tracking-wide" asChild>
            <a href="https://triagem-saude.lovable.app/" target="_blank" rel="noopener noreferrer">{t("assessment.cta")}</a>
          </Button>
          <p className="text-muted-custom text-sm mt-4">{t("assessment.note")}</p>
        </div>
      </div>
    </section>
  );
};

export default ClinicalAssessment;
