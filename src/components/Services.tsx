import { useFadeUp } from "@/hooks/useFadeUp";
import { Button } from "@/components/ui/button";
import { openAcuity } from "@/hooks/useAcuityModal";

type Step = {
  step: string;
  title: string;
  what: string;
  price: string;
  priceNote?: string;
  cta: { label: string; href?: string; onClick?: () => void; external?: boolean };
  note?: string;
};

const steps: Step[] = [
  {
    step: "01 · Ponto de entrada",
    title: "Primeira Consulta",
    what: "90 minutos de anamnese aprofundada — história clínica, sintomas, exames anteriores — seguidos de relatório escrito com a leitura clínica e direcção sugerida.",
    price: "€120",
    priceNote: "Consulta única · não implica compromisso",
    cta: { label: "Marcar primeira consulta", onClick: openAcuity },
  },
  {
    step: "02 · Programa signature",
    title: "Aletheia",
    what: "Acompanhamento clínico personalizado de 3, 6 meses ou outra duração. Inclui Relatório BioFuncional ODX, plano alimentar, gestão de suplementos, app personalizada, sessões com profissionais parceiros e gestão total do caso por uma equipa clínica.",
    price: "A partir de €199/mês",
    priceNote: "Pagamento em prestações mensais · desconto em pagamento único",
    cta: { label: "Conhecer o Aletheia", href: "/aletheia" },
  },
  {
    step: "03 · Produto autónomo",
    title: "Relatório BioFuncional ODX",
    what: "Análise funcional de 66+ biomarcadores com intervalos funcionais (não apenas convencionais), cruzando marcadores que normalmente são avaliados isoladamente. Disponível como relatório stand-alone.",
    price: "Sob consulta",
    priceNote: "Já incluído no Programa Aletheia",
    cta: { label: "Pedir informação", href: "#contacto" },
  },
];

const Services = () => {
  const ref = useFadeUp();

  return (
    <section ref={ref} id="servicos" className="bg-muted section-padding">
      <div className="max-w-4xl mx-auto">
        <p className="fade-up label-uppercase text-amber mb-4">Trabalhar comigo</p>
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground mb-4">
          Três formas de começar
        </h2>
        <p className="fade-up text-muted-foreground mb-16 max-w-2xl">
          Uma escada clara: começa pela consulta, evolui para o programa de acompanhamento, ou pede apenas o relatório autónomo.
        </p>

        <div className="space-y-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="fade-up bg-background border border-border p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-start"
            >
              <div>
                <p className="label-uppercase text-amber text-xs mb-3">{s.step}</p>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed">{s.what}</p>
                {s.note && (
                  <p className="text-muted-foreground text-xs mt-3 italic">{s.note}</p>
                )}
              </div>

              <div className="md:text-right md:min-w-[220px] md:border-l md:border-border md:pl-10 flex flex-col md:items-end">
                <p className="font-serif text-2xl md:text-3xl text-foreground mb-1">{s.price}</p>
                {s.priceNote && (
                  <p className="text-muted-foreground text-xs mb-5 md:max-w-[220px]">{s.priceNote}</p>
                )}
                {s.cta.onClick ? (
                  <Button variant="hero" size="sm" onClick={s.cta.onClick}>
                    {s.cta.label}
                  </Button>
                ) : (
                  <Button variant="hero" size="sm" asChild>
                    <a
                      href={s.cta.href}
                      {...(s.cta.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {s.cta.label}
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
