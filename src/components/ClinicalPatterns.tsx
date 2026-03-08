import { useFadeUp } from "@/hooks/useFadeUp";

const cases = [
  {
    sintomas: "Fadiga persistente · queda de cabelo · exames normais",
    padrao: "Ferritina 18 · TSH 3.1 · Vitamina D 22",
    resultado: "Energia estabilizada · ferritina 65",
  },
  {
    sintomas: "Insónia · peso estagnado · irritabilidade",
    padrao: "Insulina 14 · PCR 3.2 · Homocisteína 12",
    resultado: "Padrão metabólico normalizado",
  },
  {
    sintomas: "Cansaço pós-prandial · nevoeiro mental · irregularidades de ciclo",
    padrao: "Glicose 98 · TSH 3.8 · B12 baixo-normal",
    resultado: "Sintomas resolvidos com protocolo dirigido",
  },
];

const ClinicalPatterns = () => {
  const ref = useFadeUp();

  return (
    <section ref={ref} className="bg-ivory section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="fade-up label-uppercase text-amber mb-4">Análise funcional</p>
          <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground">
            Padrões que analisamos
          </h2>
        </div>

        <div className="fade-up grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <div
              key={i}
              className="bg-background rounded-lg p-6 border border-bone"
            >
              <p className="label-uppercase text-amber text-[11px] mb-5">Caso clínico</p>

              <div className="mb-4">
                <p className="text-muted-foreground text-xs font-sans uppercase tracking-wider mb-1">Sintomas</p>
                <p className="font-sans font-light text-foreground text-[15px] leading-relaxed">{c.sintomas}</p>
              </div>

              <div className="mb-4">
                <p className="text-muted-foreground text-xs font-sans uppercase tracking-wider mb-1">Padrão</p>
                <p className="font-sans font-light text-foreground text-[15px] leading-relaxed">{c.padrao}</p>
              </div>

              <div className="w-full h-px bg-bone my-4" />

              <div>
                <p className="text-muted-foreground text-xs font-sans uppercase tracking-wider mb-1">Resultado</p>
                <p className="font-serif italic text-amber text-[15px]">{c.resultado}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="fade-up text-center text-muted-foreground text-[11px] font-sans font-light mt-8">
          Dados ilustrativos baseados em padrões clínicos reais. Não constituem casos identificáveis.
        </p>
      </div>
    </section>
  );
};

export default ClinicalPatterns;
