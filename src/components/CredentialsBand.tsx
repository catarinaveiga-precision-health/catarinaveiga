const items = [
  "Instituto Van Nghi Portugal",
  "Cédula ACSS · Lei n.º 71/2013",
  "Regenerus Labs (ex-Omnos.me)",
  "Departamento de Microbioma",
  "Longevity Med Summit 2024",
  "20 anos de prática clínica",
  "Saúde hormonal feminina",
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
    <section className="bg-muted py-5 overflow-hidden">
      <div className="flex animate-marquee">
        <MarqueeContent />
        <MarqueeContent />
      </div>
    </section>
  );
};

export default CredentialsBand;
