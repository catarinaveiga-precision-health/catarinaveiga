import { useFadeUp } from "@/hooks/useFadeUp";
import { Button } from "@/components/ui/button";
import { openAcuity } from "@/hooks/useAcuityModal";
import { useLanguage } from "@/contexts/LanguageContext";

const CTAFinal = () => {
  const ref = useFadeUp();
  const { t } = useLanguage();

  return (
    <section ref={ref} className="bg-dark section-padding" style={{ backgroundColor: "#1F1A14" }}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-ivory mb-10 leading-tight">
          {t("ctafinal.title1")}<br />{t("ctafinal.title2")}
        </h2>
        <div className="fade-up mb-6">
          <Button
            variant="outline"
            size="lg"
            className="border-ivory/30 text-ivory hover:bg-ivory hover:text-foreground transition-all duration-300 font-sans font-normal tracking-wide text-base px-10 py-6"
            asChild
          >
            <a href="/candidatura">{t("ctafinal.cta2")}</a>
          </Button>
        </div>
        <p className="fade-up text-ivory/50 text-sm font-sans">
          <a href="#" onClick={(e) => { e.preventDefault(); openAcuity(); }} className="hover:text-ivory/80 transition-colors underline underline-offset-4">
            {t("ctafinal.sublink")}
          </a>
        </p>
      </div>
    </section>
  );
};

export default CTAFinal;
