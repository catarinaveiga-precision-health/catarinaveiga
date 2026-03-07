import { useFadeUp } from "@/hooks/useFadeUp";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Program3M = () => {
  const ref = useFadeUp();
  const { t } = useLanguage();

  const features = [
    { title: t("program3m.f1.title"), desc: t("program3m.f1.desc") },
    { title: t("program3m.f2.title"), desc: t("program3m.f2.desc") },
    { title: t("program3m.f3.title"), desc: t("program3m.f3.desc") },
    { title: t("program3m.f4.title"), desc: t("program3m.f4.desc") },
    { title: t("program3m.f5.title"), desc: t("program3m.f5.desc") },
    { title: t("program3m.f6.title"), desc: t("program3m.f6.desc") },
  ];

  return (
    <section ref={ref} id="programa-fundacao" className="bg-amber section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="fade-up text-center mb-12">
          <span className="inline-block border border-ivory/60 text-ivory label-uppercase text-xs px-4 py-2 mb-6">{t("program3m.badge")}</span>
          <h2 className="font-serif text-5xl md:text-6xl text-ivory mb-6">{t("program3m.title")}</h2>
          <p className="text-ivory/90 max-w-2xl mx-auto">{t("program3m.desc")}</p>
          <p className="text-ivory/80 max-w-2xl mx-auto mt-4 text-[15px]">{t("program3m.desc2")}</p>
        </div>
        <div className="fade-up bg-foreground/10 p-8 md:p-10 mb-12">
          <h3 className="label-uppercase text-ivory text-sm mb-4">{t("program3m.why")}</h3>
          <p className="text-ivory/90 text-[15px]">{t("program3m.why.p1")}</p>
          <p className="text-ivory/90 text-[15px] mt-4">{t("program3m.why.p2")}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {features.map((f, i) => (
            <div key={i} className="fade-up border border-ivory/30 bg-foreground/5 p-6">
              <h4 className="font-serif text-lg text-ivory mb-2">{f.title}</h4>
              <p className="text-ivory/70 text-[14px]">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="fade-up text-center">
          <Button variant="hero" size="lg" asChild><a href="#contacto">{t("program3m.cta")}</a></Button>
        </div>
      </div>
    </section>
  );
};

export default Program3M;
