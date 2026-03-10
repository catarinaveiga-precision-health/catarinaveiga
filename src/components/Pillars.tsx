import { useFadeUp } from "@/hooks/useFadeUp";
import { useLanguage } from "@/contexts/LanguageContext";

const Pillars = () => {
  const ref = useFadeUp();
  const { t } = useLanguage();

  const pillars = [
    { num: "01", title: t("pillars.1.title"), desc: t("pillars.1.desc") },
    { num: "02", title: t("pillars.2.title"), desc: t("pillars.2.desc") },
    { num: "03", title: t("pillars.3.title"), desc: t("pillars.3.desc") },
    { num: "04", title: t("pillars.4.title"), desc: t("pillars.4.desc") },
  ];

  return (
    <section ref={ref} className="bg-background section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="fade-up label-uppercase text-amber mb-4">{t("pillars.label")}</p>
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground mb-12">{t("pillars.title")}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div key={p.num} className="fade-up card-hover border border-border p-8">
              <span className="label-uppercase text-amber text-sm">{p.num}</span>
              <h3 className="font-serif text-2xl text-foreground mt-3 mb-3">{p.title}</h3>
              <p className="text-muted-foreground text-[15px]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
