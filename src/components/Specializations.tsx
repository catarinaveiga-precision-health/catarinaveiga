import { useFadeUp } from "@/hooks/useFadeUp";

const specs = [
  "Saúde Hormonal",
  "Perimenopausa",
  "Tiróide",
  "Fadiga Crónica",
  "Autoimunidade",
  "Saúde Intestinal",
];

const Specializations = () => {
  const ref = useFadeUp();

  return (
    <section ref={ref} className="bg-bone section-padding">
      <div className="max-w-4xl mx-auto">
        <p className="fade-up label-uppercase text-amber mb-4">Especialidades</p>
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground mb-12">
          O que investigamos e tratamos
        </h2>

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
