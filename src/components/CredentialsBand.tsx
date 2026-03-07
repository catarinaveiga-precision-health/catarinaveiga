const items = [
  "Omnos London",
  "Regenerus Labs UK",
  "Medicina Funcional",
  "Nutrição Clínica",
  "Eixo HPA",
  "Microbioma",
  "Tiroide",
  "Perimenopausa",
];

const CredentialsBand = () => {
  const MarqueeContent = () => (
    <>
      {items.map((item, i) => (
        <span key={i} className="mx-6 label-uppercase text-muted-foreground text-[13px] whitespace-nowrap">
          {item} <span className="mx-4 text-amber">·</span>
        </span>
      ))}
    </>
  );

  return (
    <section className="bg-bone py-5 overflow-hidden">
      <div className="flex animate-marquee">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </section>
  );
};

export default CredentialsBand;
