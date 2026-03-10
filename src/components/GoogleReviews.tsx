import { useFadeUp } from "@/hooks/useFadeUp";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const reviews = [
  {
    quote: "A Dra. Catarina tem sido uma bênção na minha vida. De um conhecimento incrível e um ser humano extraordinário.",
    name: "Vanessa L.",
  },
  {
    quote: "Experimentei melhorias significativas na minha saúde. Sinto-me verdadeiramente grata por ter encontrado alguém tão comprometida em ajudar a alcançar resultados reais e duradouros.",
    name: "Mariana N.",
  },
  {
    quote: "Recomendo vivamente. Abordagem completamente diferente e muito mais eficaz do que tudo o que tinha experimentado antes.",
    name: "Cliente verificado",
  },
];

const reviewsEN = [
  {
    quote: "Dr. Catarina has been a blessing in my life. Incredible knowledge and an extraordinary human being.",
    name: "Vanessa L.",
  },
  {
    quote: "I experienced significant improvements in my health. I feel truly grateful for having found someone so committed to helping achieve real and lasting results.",
    name: "Mariana N.",
  },
  {
    quote: "Highly recommend. A completely different approach and much more effective than anything I had tried before.",
    name: "Verified client",
  },
];

const GoogleReviews = () => {
  const ref = useFadeUp();
  const { lang } = useLanguage();
  const currentReviews = lang === "en" ? reviewsEN : reviews;
  const badgeText = lang === "en" ? "4.7 · 13 REVIEWS ON GOOGLE" : "4.7 · 13 AVALIAÇÕES NO GOOGLE";

  return (
    <section ref={ref} className="bg-muted section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <a
          href="https://www.google.com/search?ludocid=8339889103738038874"
          target="_blank"
          rel="noopener noreferrer"
          className="fade-up inline-flex flex-col items-center gap-3 group"
        >
          <svg width="32" height="32" viewBox="0 0 48 48" className="mb-1">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>

          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-amber text-amber" />
            ))}
          </div>

          <p className="label-uppercase text-muted-foreground text-[11px] group-hover:text-foreground transition-colors">
            {badgeText}
          </p>
        </a>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {currentReviews.map((r, i) => (
            <div key={i} className="fade-up">
              <blockquote className="font-serif italic text-xl text-foreground leading-relaxed mb-4">
                &ldquo;{r.quote}&rdquo;
              </blockquote>
              <p className="label-uppercase text-muted-foreground text-xs">
                &mdash; {r.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
