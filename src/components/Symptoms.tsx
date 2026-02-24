import { useFadeUp } from "@/hooks/useFadeUp";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Symptoms = () => {
  const ref = useFadeUp();
  const { t } = useLanguage();

  const items = [
    t("symptoms.1"), t("symptoms.2"), t("symptoms.3"), t("symptoms.4"),
    t("symptoms.5"), t("symptoms.6"), t("symptoms.7"),
  ];

  return (
    <section ref={ref} className="bg-bone section-padding">
      <div className="max-w-4xl mx-auto">
        <p className="fade-up label-uppercase text-amber mb-4">{t("symptoms.label")}</p>
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground mb-12">{t("symptoms.title")}</h2>
        <div className="fade-up space-y-5 mb-10">
          {items.map((item, i) => (
            <div key={i} className="border-l-[3px] border-amber pl-5 py-1">
              <p className="text-foreground">{"\u2713"} {item}</p>
            </div>
          ))}
        </div>
        <p className="fade-up font-serif italic text-xl md:text-2xl text-foreground text-center mb-8">
          {t("symptoms.quote")}
        </p>
        <div className="fade-up text-center">
          <a href="#servicos" className="inline-flex items-center gap-2 text-amber hover:text-amber-light transition-colors font-sans text-sm">
            {t("symptoms.link")} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Symptoms;
