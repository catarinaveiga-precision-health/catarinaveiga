import { useFadeUp } from "@/hooks/useFadeUp";

const steps = [
  { num: "01", title: "Contacto inicial", desc: "Conversamos sobre as tuas necessidades" },
  { num: "02", title: "Consulta inicial", desc: "Avaliação clínica completa (90 min) via Zoom" },
  { num: "03", title: "Análises", desc: "Investigação laboratorial funcional personalizada" },
  { num: "04", title: "Protocolo", desc: "Plano personalizado baseado em dados e história clínica" },
  { num: "05", title: "Acompanhamento", desc: "Monitorização e ajustes contínuos ao longo do tempo" },
];

const Process = () => {
  const ref = useFadeUp();

  return (
    <section ref={ref} className="bg-dark section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="fade-up label-uppercase text-amber mb-4">Processo</p>
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-ivory mb-16">
          O teu percurso
        </h2>

        {/* Desktop horizontal */}
        <div className="fade-up hidden md:flex items-start justify-between relative">
          {/* Connecting line */}
          <div className="absolute top-5 left-0 right-0 h-[1px] bg-amber/30" />

          {steps.map((step) => (
            <div key={step.num} className="relative flex flex-col items-center text-center max-w-[180px]">
              <div className="w-10 h-10 rounded-full border border-amber flex items-center justify-center text-ivory font-sans text-sm mb-4 bg-dark relative z-10">
                {step.num}
              </div>
              <h3 className="font-serif text-lg text-ivory mb-2">{step.title}</h3>
              <p className="text-muted-custom text-[13px]">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden space-y-8">
          {steps.map((step) => (
            <div key={step.num} className="fade-up flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full border border-amber flex items-center justify-center text-ivory font-sans text-sm flex-shrink-0">
                {step.num}
              </div>
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
