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
    step: "01 · Consulta",
    title: "Consulta de Medicina Funcional",
    desc: "90 minutos de anamnese aprofundada. História clínica, sintomas e exames anteriores — seguidos de relatório escrito com leitura funcional e direcção terapêutica. Com possibilidade de acompanhamento.",
    cta: { label: "Marcar consulta", onClick: openAcuity },
  },
  {
    icon: Diamond,
    step: "02 · Checkup completo",
    title: "Checkup Funcional",
    desc: "Nós pedimos as análises. Tu fazes. Produzimos um relatório funcional completo — 66+ biomarcadores interpretados com valores de referência funcionais, cruzando padrões que os exames convencionais não relacionam.",
    cta: { label: "Saber mais", href: "#contacto" },
  },
  {
    icon: Hexagon,
    step: "03 · Revisão independente",
    title: "Revisão de Análises",
    desc: "Já tens análises feitas. Envias-nos. Interpretamos o teu caso com olhar funcional — biomarcadores cruzados, padrões identificados — e entregamos relatório escrito com orientação clínica.",
    cta: { label: "Enviar análises", href: "#contacto" },
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
