import { useFadeUp } from "@/hooks/useFadeUp";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    cat: "Medicina Funcional",
    title: "Porque é que os teus exames estão normais mas tu não te sentes normal",
    intro:
      "Um dos padrões mais comuns que vejo na prática clínica: mulheres com meses ou anos de sintomas persistentes, análises dentro dos valores de referência, e sem respostas. O problema não está nos teus exames — está nos critérios que usamos para os interpretar.",
  },
  {
    cat: "Tiróide",
    title: "Tiróide sub-óptima: quando os valores 'normais' não chegam",
    intro:
      "O intervalo de referência da TSH foi definido com base numa população geral que inclui pessoas já com disfunção tiroideia. Muitas mulheres com sintomas claros de hipotiroidismo têm valores dentro do 'normal' — e continuam sem tratamento.",
  },
  {
    cat: "Perimenopausa",
    title: "Perimenopausa: o que ninguém te explica sobre os primeiros sinais",
    intro:
      "A perimenopausa pode começar anos antes da última menstruação. Ansiedade nova, sono fragmentado, ciclos irregulares, aumento de peso sem explicação — estes são frequentemente os primeiros sinais, não os afrontamentos.",
  },
];

const Blog = () => {
  const ref = useFadeUp();

  return (
    <section ref={ref} id="blog" className="bg-bone section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="fade-up label-uppercase text-amber mb-4">Educação em Saúde</p>
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground mb-12">Artigos</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {articles.map((a, i) => (
            <article key={i} className="fade-up card-hover border border-bone bg-ivory p-8">
              <p className="label-uppercase text-amber text-xs mb-3">{a.cat}</p>
              <h3 className="font-serif text-xl text-foreground mb-4 leading-snug">{a.title}</h3>
              <p className="text-muted-custom text-[14px] mb-6 line-clamp-4">{a.intro}</p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-amber text-sm hover:text-amber-light transition-colors"
              >
                Ler mais <ArrowRight size={14} />
              </a>
            </article>
          ))}
        </div>

        <div className="fade-up text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-amber hover:text-amber-light transition-colors font-sans text-sm"
          >
            Ver todos os artigos <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
