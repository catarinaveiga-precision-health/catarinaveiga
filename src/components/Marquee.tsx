import { useLanguage } from "@/contexts/LanguageContext";

const marqueeKeys = ["marquee.0", "marquee.1", "marquee.2", "marquee.3", "marquee.4", "marquee.5", "marquee.6", "marquee.7"];

const Marquee = () => {
  const { t } = useLanguage();
  const items = marqueeKeys.map(k => t(k));

  const MarqueeContent = () => (
    <>
      {items.map((item, i) => (
        <span key={i} className="mx-8 text-amber font-serif text-2xl md:text-3xl whitespace-nowrap">
          {item} <span className="mx-4 text-amber/50">\u00b7</span>
        </span>
      ))}
    </>
  );

  return (
    <section className="bg-dark py-6 overflow-hidden">
      <div className="flex animate-marquee">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </section>
  );
};

export default Marquee;
