import { Button } from "@/components/ui/button";
import heroImage from "@/assets/catarina-hero.png";
import { openAcuity } from "@/hooks/useAcuityModal";
import { useFadeUp } from "@/hooks/useFadeUp";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const ref = useFadeUp();
  const { t } = useLanguage();

  return (
    <section ref={ref} className="bg-background pt-32 pb-24 md:pt-40 md:pb-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="fade-up text-center md:text-left">
          <h1 className="font-serif font-light text-[36px] md:text-6xl lg:text-7xl leading-[1.2] text-foreground mb-4 md:mb-8">
            Os teus exames estão normais.<br />
            O teu corpo não.
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-8 md:mb-10 font-sans">
            Descobre o que os teus exames não estão a dizer.
          </p>
          <div className="w-[60px] h-[2px] bg-amber mb-8 md:mb-10 mx-auto md:mx-0" />
          <div className="flex flex-col items-center md:items-start gap-3 mb-10">
            <Button variant="heroAccent" size="lg" className="rounded-[4px] max-w-[280px] w-full" asChild>
              <a href="/avaliacao">Começar avaliação funcional</a>
            </Button>
            <a
              href="https://catarinaveigaagendamento.as.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground text-xs font-sans tracking-wide hover:text-foreground transition-colors"
            >
              Ou marcar consulta — €120
            </a>
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
