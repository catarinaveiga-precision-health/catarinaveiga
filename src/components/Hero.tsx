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
        <div className="fade-up text-center md:text-left">
          <h1 className="font-serif font-light text-4xl md:text-6xl lg:text-7xl leading-[1.2] text-foreground mb-8">
            Os teus exames estão normais.<br />
            O teu corpo não.
          </h1>
          <div className="w-[60px] h-[2px] bg-amber mb-8 mx-auto md:mx-0" />
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start">
            <Button variant="heroAccent" size="lg" asChild>
              <a href="/avaliacao">Começar avaliação funcional</a>
            </Button>
            <Button variant="ghost" size="lg" className="text-muted-foreground hover:text-foreground font-sans font-light tracking-wide text-sm" asChild>
              <a href="https://catarinaveigaagendamento.as.me/" target="_blank" rel="noopener noreferrer">Ou marcar consulta — €120</a>
            </Button>
          </div>
          <div className="flex items-center gap-0 text-muted-custom text-sm font-sans">
            <span className="font-serif text-2xl text-foreground">{t("hero.stat1num")}</span>
            <span className="label-uppercase text-[11px] ml-2">{t("hero.stat1label")}</span>
            <span className="text-amber mx-4">·</span>
            <span>{t("hero.stat2label")}</span>
            <span className="text-amber mx-4">·</span>
            <span>{t("hero.stat3num")}</span>
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
