import { useFadeUp } from "@/hooks/useFadeUp";
import { Button } from "@/components/ui/button";

const features = [
  { title: "Consultas estruturadas", desc: "Sessões de revisão em momentos-chave do protocolo" },
  { title: "Análises com critérios funcionais avançados", desc: "Marcadores além do padrão convencional" },
  { title: "Protocolo personalizado", desc: "Nutrição, suplementação e estilo de vida à medida" },
  { title: "Suporte Maya", desc: "Agente AI de nutrição funcional para apoio educativo entre consultas" },
  { title: "Reavaliação final", desc: "Análise comparativa completa dos 3 meses" },
  { title: "Materiais educativos", desc: "Recursos e guias para autonomia em saúde" },
];

const Program3M = () => {
  const ref = useFadeUp();

  return (
    <section ref={ref} id="programa3m" className="bg-amber section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="fade-up text-center mb-12">
          <span className="inline-block border border-ivory/60 text-ivory label-uppercase text-xs px-4 py-2 mb-6">
            Programa Signature
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-ivory mb-6">Programa 3M</h2>
          <p className="text-ivory/90 max-w-2xl mx-auto">
            Três meses de acompanhamento real. Um protocolo construído à tua medida, com a
            profundidade que o teu corpo merece.
          </p>
          <p className="text-ivory/80 max-w-2xl mx-auto mt-4 text-[15px]">
            Se fizer sentido após a consulta inicial, proponho um plano estruturado para os teus
            sintomas específicos. A decisão é sempre tua, depois de saberes exactamente o que
            envolve.
          </p>
        </div>

        {/* Why 3 months */}
        <div className="fade-up bg-foreground/10 p-8 md:p-10 mb-12">
          <h3 className="label-uppercase text-ivory text-sm mb-4">Porque 3 meses?</h3>
          <p className="text-ivory/90 text-[15px]">
            O corpo não muda em 30 dias. O sistema hormonal precisa de pelo menos 6 a 8 semanas
            para responder a intervenções. A neuroplasticidade — a capacidade de criar novos padrões
            de comportamento e resposta — exige repetição consistente ao longo do tempo.
          </p>
          <p className="text-ivory/90 text-[15px] mt-4">
            Três meses é o mínimo para resultados mensuráveis, comparáveis e sustentáveis. Não é um
            número arbitrário. É fisiologia.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {features.map((f, i) => (
            <div
              key={i}
              className="fade-up border border-ivory/30 bg-foreground/5 p-6"
            >
              <h4 className="font-serif text-lg text-ivory mb-2">{f.title}</h4>
              <p className="text-ivory/70 text-[14px]">{f.desc}</p>
            </div>
          ))}
        </div>

        <div className="fade-up text-center">
          <Button variant="hero" size="lg" asChild>
            <a href="#contacto">Candidatar-me</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Program3M;
