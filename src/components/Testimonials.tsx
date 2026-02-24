import { useFadeUp } from "@/hooks/useFadeUp";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Durante quatro anos fui assistida por médicos de diversas especialidades sem resposta. Com a Catarina, em alguns meses, recuperei níveis de energia que já me permitem um funcionamento normal no meu dia a dia.",
    name: "Catarina V.",
    city: "Sintra",
  },
  {
    quote:
      "Antes de iniciar o acompanhamento sofria com problemas digestivos recorrentes. Com as alterações terapêuticas notei uma melhoria significativa. Sinto-me leve e mais confortável após as refeições.",
    name: "Julien C.",
    city: "Penela",
  },
  {
    quote:
      "Experimentei melhorias significativas na minha saúde. Sinto-me verdadeiramente grata por ter encontrado alguém tão comprometida em ajudar a alcançar resultados reais e duradouros.",
    name: "Mariana N.",
    city: "Porto",
  },
];

const Stars = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} className="fill-amber text-amber" />
    ))}
  </div>
);

const Testimonials = () => {
  const ref = useFadeUp();

  return (
    <section ref={ref} className="bg-ivory section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="fade-up label-uppercase text-amber mb-4">O que dizem</p>
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground mb-12">
          Experiências reais
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="fade-up border border-bone p-8 bg-ivory"
            >
              <Stars />
              <blockquote className="font-serif italic text-lg md:text-xl text-foreground leading-relaxed mb-6">
                "{t.quote}"
              </blockquote>
              <p className="label-uppercase text-muted-custom text-xs">
                — {t.name}, {t.city}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
