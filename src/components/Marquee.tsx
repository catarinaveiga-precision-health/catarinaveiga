const items = [
  "Medicina Funcional",
  "Saúde Hormonal",
  "Tiróide",
  "Perimenopausa",
  "Fadiga Crónica",
  "Saúde Intestinal",
  "Autoimunidade",
  "Endometriose",
];

const MarqueeContent = () => (
  <>
    {items.map((item, i) => (
      <span key={i} className="mx-8 text-amber font-serif text-2xl md:text-3xl whitespace-nowrap">
        {item} <span className="mx-4 text-amber/50">·</span>
      </span>
    ))}
  </>
);

const Marquee = () => (
  <section className="bg-dark py-6 overflow-hidden">
    <div className="flex animate-marquee">
      <MarqueeContent />
      <MarqueeContent />
    </div>
  </section>
);

export default Marquee;
