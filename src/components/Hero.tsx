import { Button } from "@/components/ui/button";
import heroImage from "@/assets/catarina-hero.png";
import { openAcuity } from "@/hooks/useAcuityModal";
import { useFadeUp } from "@/hooks/useFadeUp";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const ref = useFadeUp();
  const { t } = useLanguage();

  return (
    <section ref={ref} className="bg-ivory pt-32 pb-20 md:pt-40 md:pb-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="fade-up">
          <p className="label-uppercase text-amber mb-6">{t("hero.label")}</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-foreground mb-6">
            {t("hero.title1")}<br />{t("hero.title2")}<br />{t("hero.title3")}
          </h1>
          <p className="text-muted-custom max-w-lg mb-8">{t("hero.desc")}</p>
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <Button variant="hero" size="lg" onClick={openAcuity}>{t("hero.cta")}</Button>
            <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-bone hover:text-foreground font-sans font-normal tracking-wide" asChild>
              <a href="https://triagem-saude.lovable.app/" target="_blank" rel="noopener noreferrer">{t("hero.cta2")}</a>
            </Button>
          </div>
          <p className="text-muted-custom text-sm mb-12 max-w-md">{t("hero.cta2desc")}</p>
          <div className="grid grid-cols-3 gap-8">
            {[
              { num: t("hero.stat1num"), label: t("hero.stat1label") },
              { num: t("hero.stat2num"), label: t("hero.stat2label") },
              { num: t("hero.stat3num"), label: t("hero.stat3label") },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl md:text-4xl text-foreground">{stat.num}</p>
                <p className="label-uppercase text-muted-custom text-[11px] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="fade-up relative">
          <div className="relative overflow-hidden">
            <img src={heroImage} alt="Catarina Veiga - Medicina Funcional Integrativa" className="w-full h-auto object-cover md:translate-y-4" loading="eager" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
