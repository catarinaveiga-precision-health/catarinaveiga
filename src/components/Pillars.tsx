import { useFadeUp } from "@/hooks/useFadeUp";

const pillars = [
  {
    num: "01",
    title: "Investigação Profunda",
    desc: "Análises com critérios funcionais avançados. Olhamos para o quadro completo, não apenas para valores isolados.",
  },
  {
    num: "02",
    title: "Protocolo Personalizado",
    desc: "Nutrição, suplementação e estilo de vida construídos para a tua fisiologia específica.",
  },
  {
    num: "03",
    title: "Monitorização Contínua",
    desc: "Reavaliação constante guiada por dados. O protocolo ajusta-se à medida que o teu corpo responde.",
  },
  {
    num: "04",
    title: "Autonomia Informada",
    desc: "Literacia em saúde como parte do acompanhamento. Entendes o que está a acontecer e porquê.",
  },
];

const Pillars = () => {
  const ref = useFadeUp();

  return (
    <section ref={ref} className="bg-ivory section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="fade-up label-uppercase text-amber mb-4">Abordagem</p>
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground mb-12">
          Como trabalhamos
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="fade-up card-hover border border-bone p-8 bg-ivory"
            >
              <span className="label-uppercase text-amber text-sm">{p.num}</span>
              <h3 className="font-serif text-2xl text-foreground mt-3 mb-3">{p.title}</h3>
              <p className="text-muted-custom text-[15px]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
