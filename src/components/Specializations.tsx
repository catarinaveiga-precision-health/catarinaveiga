import { useFadeUp } from "@/hooks/useFadeUp";
import { useLanguage } from "@/contexts/LanguageContext";

const Specializations = () => {
  const ref = useFadeUp();
  const { t } = useLanguage();

  const specs = [
    t("specs.0"), t("specs.1"), t("specs.2"), t("specs.3"), t("specs.4"), t("specs.5"),
  ];

  return (
    <section ref={ref} className="bg-muted section-padding">
      <div className="max-w-4xl mx-auto">
        <p className="fade-up label-uppercase text-amber mb-4">{t("specs.label")}</p>
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground mb-12">{t("specs.title")}</h2>
        <div className="fade-up space-y-4">
          {specs.map((s, i) => (
            <div key={i} className="border-l-[3px] border-amber pl-5 py-2">
              <p className="font-serif text-xl text-foreground">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specializations;
