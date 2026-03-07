import { useFadeUp } from "@/hooks/useFadeUp";
import { useLanguage } from "@/contexts/LanguageContext";

const Manifesto = () => {
  const ref = useFadeUp();
  const { t } = useLanguage();

  return (
    <section ref={ref} id="abordagem" className="bg-bone py-[160px] px-6">
      <div className="max-w-4xl mx-auto text-center">
        <blockquote className="fade-up font-serif text-3xl md:text-5xl italic text-foreground leading-tight mb-6">
          {t("manifesto.quote1")}
        </blockquote>
        <p className="fade-up font-serif text-2xl md:text-4xl text-foreground leading-tight">
          {t("manifesto.quote2")}
        </p>
      </div>
    </section>
  );
};

export default Manifesto;
