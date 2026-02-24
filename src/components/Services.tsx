import { useFadeUp } from "@/hooks/useFadeUp";
import { Button } from "@/components/ui/button";
import { Circle, Diamond, Hexagon } from "lucide-react";
import { openAcuity } from "@/hooks/useAcuityModal";

const Services = () => {
  const ref = useFadeUp();

  return (
    <section ref={ref} id="servicos" className="bg-dark section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="fade-up label-uppercase text-amber mb-4">Serviços</p>
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-ivory mb-4">
          Como posso trabalhar contigo
        </h2>
        <p className="fade-up text-muted-custom mb-12">
          Acompanhamento exclusivamente online · Portugal e internacional · Português e Inglês
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="fade-up border border-amber p-8 flex flex-col">
            <Circle size={32} className="text-amber mb-6" strokeWidth={1} />
            <p className="label-uppercase text-amber text-xs mb-2">90 Minutos</p>
            <h3 className="font-serif text-2xl text-ivory mb-4">Consulta Inicial</h3>
            <p className="text-muted-custom text-[15px] mb-4 flex-1">
              História clínica funcional completa, avaliação de sintomas e sistemas, definição do
              plano de investigação.
            </p>
            <p className="text-ivory font-serif text-xl mb-4">Investimento: 120€</p>
            <Button
              variant="amber"
              size="sm"
              onClick={openAcuity}
            >
              Agendar
            </Button>
            <p className="text-muted-custom text-xs mt-4 italic">
              Esta consulta é independente e não implica compromisso com programas posteriores.
            </p>
          </div>

          {/* Card 2 */}
          <div className="fade-up border border-amber p-8 flex flex-col">
            <Diamond size={32} className="text-amber mb-6" strokeWidth={1} />
            <p className="label-uppercase text-amber text-xs mb-2">Programa Signature</p>
            <h3 className="font-serif text-2xl text-ivory mb-4">Programa 3M</h3>
            <p className="text-muted-custom text-[15px] mb-4 flex-1">
              Acompanhamento intensivo de 3 meses com protocolo personalizado, consultas
              estruturadas e reavaliação final.
            </p>
            <p className="text-muted-custom text-sm mb-4">
              Programa personalizado após avaliação clínica inicial.
            </p>
            <Button variant="amber" size="sm" asChild>
              <a href="#programa3m">Saber mais</a>
            </Button>
          </div>

          {/* Card 3 */}
          <div className="fade-up border border-amber p-8 flex flex-col">
            <Hexagon size={32} className="text-amber mb-6" strokeWidth={1} />
            <p className="label-uppercase text-amber text-xs mb-2">Assessment Completo</p>
            <h3 className="font-serif text-2xl text-ivory mb-4">Avaliação de Saúde</h3>
            <p className="text-muted-custom text-[15px] mb-4 flex-1">
              Relatório funcional completo com análises avançadas e recomendações personalizadas.
            </p>
            <p className="text-muted-custom text-sm mb-4">Investimento sob consulta.</p>
            <Button variant="amber" size="sm" asChild>
              <a href="#contacto">Saber mais</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
