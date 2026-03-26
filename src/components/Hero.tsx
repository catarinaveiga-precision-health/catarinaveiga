import { Button } from "@/components/ui/button";
import heroImage from "@/assets/catarina-hero.jpg";
import { openAcuity } from "@/hooks/useAcuityModal";
import { useFadeUp } from "@/hooks/useFadeUp";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const ref = useFadeUp();
  const { t } = useLanguage();

  return (
    <section ref={ref} className="bg-background pt-28 pb-16 md:pt-40 md:pb-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Mobile: Title + Subtitle first, then image, then CTA */}
        {/* Desktop: Text column left, image column right */}
        <div className="fade-up text-center md:text-left order-1">
          <h1 className="font-serif font-light text-[36px] md:text-6xl lg:text-7xl leading-[1.2] text-foreground mb-4 md:mb-8">
            Os teus exames estão normais.<br />
            O teu corpo não.
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-10 font-sans">
            Descobre o que os teus exames não estão a dizer.
          </p>
          {/* Divider - desktop only */}
          <div className="hidden md:block w-[60px] h-[2px] bg-amber mb-10" />
          {/* CTA - desktop only (mobile CTA is after image) */}
          <div className="hidden md:flex flex-col items-start gap-3 mb-10">
            <p className="text-muted-foreground text-sm font-sans leading-relaxed max-w-md">
              A maioria das pessoas com fadiga tem exames "normais". Mas biomarcadores fora dos intervalos funcionais.
            </p>
            <Button variant="heroAccent" size="lg" className="rounded-[4px] max-w-[380px] w-full" asChild>
              <a href="#avaliacao-funcional">Descobre o que os teus exames não estão a mostrar</a>
            </Button>
            <p className="text-muted-foreground/60 text-xs font-sans tracking-wide">
              Gratuito · 2 minutos · sem consulta
            </p>
          </div>
          <div className="hidden md:flex items-center gap-0 text-muted-custom text-sm font-sans">
            <span className="font-serif text-2xl text-foreground">{t("hero.stat1num")}</span>
            <span className="label-uppercase text-[11px] ml-2">{t("hero.stat1label")}</span>
            <span className="text-amber mx-4">·</span>
            <span>{t("hero.stat2label")}</span>
            <span className="text-amber mx-4">·</span>
            <span>{t("hero.stat3num")}</span>
          </div>
        </div>

        {/* Image - between text and CTA on mobile */}
        <div className="fade-up relative order-2">
          <div className="relative overflow-hidden md:overflow-visible">
            <img
              src={heroImage}
              alt="Catarina Veiga - Medicina Funcional Integrativa"
              className="w-full h-[360px] md:h-auto object-cover object-top md:translate-y-4"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={800}
              height={960}
            />
          </div>
        </div>

        {/* Mobile CTA - after image */}
        <div className="fade-up flex flex-col items-center gap-3 order-3 md:hidden">
          <p className="text-muted-foreground text-sm font-sans leading-relaxed text-center max-w-xs">
            A maioria das pessoas com fadiga tem exames "normais". Mas biomarcadores fora dos intervalos funcionais.
          </p>
          <Button variant="heroAccent" size="lg" className="rounded-[4px] max-w-[380px] w-full" asChild>
            <a href="#avaliacao-funcional">Descobre o que os teus exames não estão a mostrar</a>
          </Button>
          <p className="text-muted-foreground/60 text-xs font-sans tracking-wide">
            Gratuito · 2 minutos · sem consulta
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
