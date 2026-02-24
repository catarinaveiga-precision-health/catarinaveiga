import { useFadeUp } from "@/hooks/useFadeUp";

const Team = () => {
  const ref = useFadeUp();

  return (
    <section ref={ref} id="equipa" className="bg-ivory section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="fade-up label-uppercase text-amber mb-4">Equipa</p>
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground mb-12">
          As pessoas por trás do acompanhamento
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Catarina - highlight */}
          <div className="fade-up bg-dark border border-amber p-8">
            <h3 className="font-serif text-2xl text-ivory mb-1">Catarina Veiga</h3>
            <p className="label-uppercase text-amber text-xs mb-4">
              Medicina Funcional Integrativa · Saúde da Mulher
            </p>
            <p className="text-ivory/80 text-[15px]">
              Avaliação integrativa, interpretação funcional avançada e coordenação de todo o
              acompanhamento. Mais de 20 anos de experiência clínica focada na saúde da mulher.
            </p>
          </div>

          {/* Dra. Patrícia */}
          <div className="fade-up border border-bone p-8 bg-ivory">
            <h3 className="font-serif text-2xl text-foreground mb-1">Dra. Patrícia Salvador</h3>
            <p className="label-uppercase text-amber text-xs mb-4">Médica de Clínica Geral</p>
            <p className="text-muted-custom text-[15px]">
              Consulta médica convencional quando indicada — medicação, exames ou referenciação para
              outras especialidades.
            </p>
          </div>

          {/* Maya */}
          <div className="fade-up border border-bone p-8 bg-ivory">
            <h3 className="font-serif text-2xl text-foreground mb-1">Maya</h3>
            <p className="label-uppercase text-amber text-xs mb-4">
              Agente AI de Nutrição Funcional
            </p>
            <p className="text-muted-custom text-[15px]">
              Apoio educativo e organizacional disponível entre consultas. Apoia na compreensão do
              plano e nas dúvidas do dia a dia.
            </p>
            <p className="text-muted-custom text-xs italic mt-3">
              A Maya não substitui avaliação clínica, diagnóstico ou tratamento.
            </p>
          </div>

          {/* VA */}
          <div className="fade-up border border-bone p-8 bg-ivory relative">
            <span className="absolute top-4 right-4 label-uppercase text-xs text-muted-custom border border-bone px-2 py-1">
              Em breve
            </span>
            <h3 className="font-serif text-2xl text-foreground mb-1">Assistente Virtual</h3>
            <p className="label-uppercase text-amber text-xs mb-4">Apoio Administrativo</p>
            <p className="text-muted-custom text-[15px]">
              Apoio ao cliente e comunicação para garantir que a tua experiência é fluida, do
              primeiro contacto ao acompanhamento contínuo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
