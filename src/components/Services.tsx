import { useFadeUp } from "@/hooks/useFadeUp";
import { Button } from "@/components/ui/button";
import { Circle, Diamond, Hexagon } from "lucide-react";
import { openAcuity } from "@/hooks/useAcuityModal";

type Card = {
  icon: typeof Circle;
  step: string;
  title: string;
  desc: string;
  cta: { label: string; href?: string; onClick?: () => void };
};

const cards: Card[] = [
  {
    icon: Circle,
    step: "01 · Ponto de entrada",
    title: "Primeira Consulta",
    desc: "90 minutos de anamnese aprofundada — história clínica, sintomas e exames — seguidos de relatório escrito com a leitura clínica e direcção sugerida.",
    cta: { label: "Marcar consulta", onClick: openAcuity },
  },
  {
    icon: Diamond,
    step: "02 · Programa signature",
    title: "Aletheia",
    desc: "Acompanhamento clínico personalizado, com duração definida conforme o teu caso. Inclui Relatório BioFuncional, plano alimentar, gestão de suplementos, app personalizada e gestão total do caso por uma equipa.",
    cta: { label: "Conhecer o Aletheia", href: "/aletheia" },
  },
  {
    icon: Hexagon,
    step: "03 · Produto autónomo",
    title: "Relatório BioFuncional ODX",
    desc: "Análise funcional de 66+ biomarcadores com intervalos funcionais (não apenas convencionais), cruzando marcadores que normalmente são avaliados isoladamente. Disponível como relatório stand-alone.",
    cta: { label: "Pedir informação", href: "#contacto" },
  },
];

const Services = () => {
  const ref = useFadeUp();

  return (
    <section ref={ref} id="servicos" className="bg-muted section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="fade-up label-uppercase text-amber mb-4">Trabalhar comigo</p>
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground mb-4">
          Três formas de começar
        </h2>
        <p className="fade-up text-muted-foreground mb-12 max-w-2xl">
          Uma escada clara: começa pela consulta, evolui para o programa de acompanhamento, ou pede apenas o relatório autónomo.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="fade-up bg-background border border-border p-8 flex flex-col">
                <Icon size={32} className="text-amber mb-6" strokeWidth={1} />
                <p className="label-uppercase text-amber text-xs mb-2">{c.step}</p>
                <h3 className="font-serif text-2xl text-foreground mb-4">{c.title}</h3>
                <p className="text-muted-foreground text-[15px] leading-relaxed mb-6 flex-1">
                  {c.desc}
                </p>
                {c.cta.onClick ? (
                  <Button variant="hero" size="sm" onClick={c.cta.onClick}>
                    {c.cta.label}
                  </Button>
                ) : (
                  <Button variant="hero" size="sm" asChild>
                    <a href={c.cta.href}>{c.cta.label}</a>
                  </Button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
