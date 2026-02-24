import { useFadeUp } from "@/hooks/useFadeUp";
import { useLanguage } from "@/contexts/LanguageContext";

const Process = () => {
  const ref = useFadeUp();
  const { t } = useLanguage();

  const steps = [
    { num: "01", title: t("process.1.title"), desc: t("process.1.desc") },
    { num: "02", title: t("process.2.title"), desc: t("process.2.desc") },
    { num: "03", title: t("process.3.title"), desc: t("process.3.desc") },
    { num: "04", title: t("process.4.title"), desc: t("process.4.desc") },
    { num: "05", title: t("process.5.title"), desc: t("process.5.desc") },
  ];

  return (
    <section ref={ref} className="bg-dark section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="fade-up label-uppercase text-amber mb-4">{t("process.label")}</p>
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-ivory mb-16">{t("process.title")}</h2>
        <div className="fade-up hidden md:flex items-start justify-between relative">
          <div className="absolute top-5 left-0 right-0 h-[1px] bg-amber/30" />
          {steps.map((step) => (
            <div key={step.num} className="relative flex flex-col items-center text-center max-w-[180px]">
              <div className="w-10 h-10 rounded-full border border-amber flex items-center justify-center text-ivory font-sans text-sm mb-4 bg-dark relative z-10">{step.num}</div>
              <h3 className="font-serif text-lg text-ivory mb-2">{step.title}</h3>
              <p className="text-muted-custom text-[13px]">{step.desc}</p>
            </div>
          ))}
        </div>
        <div className="md:hidden space-y-8">
          {steps.map((step) => (
            <div key={step.num} className="fade-up flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full border border-amber flex items-center justify-center text-ivory font-sans text-sm flex-shrink-0">{step.num}</div>
              <div>
                <h3 className="font-serif text-lg text-ivory mb-1">{step.title}</h3>
                <p className="text-muted-custom text-[13px]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
