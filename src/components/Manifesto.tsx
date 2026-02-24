import { useFadeUp } from "@/hooks/useFadeUp";

const Manifesto = () => {
  const ref = useFadeUp();

  return (
    <section ref={ref} id="abordagem" className="bg-bone section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <p className="fade-up label-uppercase text-amber mb-8">A nossa filosofia</p>

        <blockquote className="fade-up font-serif text-3xl md:text-5xl italic text-foreground leading-tight mb-10">
          "Os teus exames são normais."
          <br />
          Mas tu sabes que não te sentes normal.
        </blockquote>

        <div className="fade-up space-y-6 text-muted-custom max-w-2xl mx-auto text-left">
          <p>
            A medicina convencional usa intervalos de referência definidos para populações gerais.
            A medicina funcional usa critérios funcionais avançados — mais exigentes, mais próximos
            do que o teu corpo precisa para funcionar de forma óptima.
          </p>
          <p>
            A diferença entre "normal" e "óptimo" pode ser a explicação para anos de sintomas sem
            resposta. O nosso trabalho começa exactamente aí.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
