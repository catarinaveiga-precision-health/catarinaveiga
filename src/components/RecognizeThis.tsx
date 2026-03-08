import { useFadeUp } from "@/hooks/useFadeUp";

const items = [
  "Acordas cansada mesmo dormindo",
  "Ciclo menstrual irregular ou imprevisível",
  "Ansiedade sem causa aparente",
  "Os teus exames estão \"normais\"",
];

const RecognizeThis = () => {
  const ref = useFadeUp();

  return (
    <section ref={ref} className="bg-bone section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground mb-10">
          Reconheces isto?
        </h2>
        <ul className="fade-up space-y-4 text-left max-w-md mx-auto mb-10">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 font-sans font-light text-foreground">
              <span className="text-amber mt-1.5 text-xs">●</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="fade-up font-serif italic text-amber text-lg md:text-xl">
          Se te identificas com 2 ou mais, vale a pena investigar.
        </p>
      </div>
    </section>
  );
};

export default RecognizeThis;
