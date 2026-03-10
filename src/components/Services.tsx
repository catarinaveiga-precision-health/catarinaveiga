import { useFadeUp } from "@/hooks/useFadeUp";
import { Button } from "@/components/ui/button";
import { Circle, Diamond, Hexagon } from "lucide-react";
import { openAcuity } from "@/hooks/useAcuityModal";
import { useLanguage } from "@/contexts/LanguageContext";

const Services = () => {
  const ref = useFadeUp();
  const { t } = useLanguage();

  return (
    <section ref={ref} id="servicos" className="bg-muted section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="fade-up label-uppercase text-amber mb-4">{t("services.label")}</p>
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground mb-4">{t("services.title")}</h2>
        <p className="fade-up text-muted-foreground mb-12">{t("services.subtitle")}</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="fade-up bg-background border border-border p-8 flex flex-col">
            <Circle size={32} className="text-amber mb-6" strokeWidth={1} />
            <p className="label-uppercase text-amber text-xs mb-2">{t("services.card1.duration")}</p>
            <h3 className="font-serif text-2xl text-foreground mb-4">{t("services.card1.title")}</h3>
            <p className="text-muted-foreground text-[15px] mb-4 flex-1">{t("services.card1.desc")}</p>
            <p className="text-foreground font-serif text-xl mb-4">{t("services.card1.price")}</p>
            <Button variant="hero" size="sm" onClick={openAcuity}>{t("services.card1.cta")}</Button>
            <p className="text-muted-foreground text-xs mt-4 italic">{t("services.card1.note")}</p>
          </div>
          <div className="fade-up bg-background border border-border p-8 flex flex-col">
            <Diamond size={32} className="text-amber mb-6" strokeWidth={1} />
            <p className="label-uppercase text-amber text-xs mb-2">{t("services.card2.label")}</p>
            <h3 className="font-serif text-2xl text-foreground mb-4">{t("services.card2.title")}</h3>
            <p className="text-muted-foreground text-[15px] mb-4 flex-1">{t("services.card2.desc")}</p>
            <p className="text-muted-foreground text-sm mb-4">{t("services.card2.note")}</p>
            <Button variant="hero" size="sm" asChild><a href="/programa-fundacao">{t("services.card2.cta")}</a></Button>
          </div>
          <div className="fade-up bg-background border border-border p-8 flex flex-col">
            <Hexagon size={32} className="text-amber mb-6" strokeWidth={1} />
            <p className="label-uppercase text-amber text-xs mb-2">{t("services.card3.label")}</p>
            <h3 className="font-serif text-2xl text-foreground mb-4">{t("services.card3.title")}</h3>
            <p className="text-muted-foreground text-[15px] mb-4 flex-1">{t("services.card3.desc")}</p>
            <p className="text-muted-foreground text-sm mb-4">{t("services.card3.note")}</p>
            <Button variant="hero" size="sm" asChild><a href="#contacto">{t("services.card3.cta")}</a></Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
