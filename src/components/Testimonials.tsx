import { useFadeUp } from "@/hooks/useFadeUp";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Stars = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} className="fill-amber text-amber" />
    ))}
  </div>
);

const Testimonials = () => {
  const ref = useFadeUp();
  const { t } = useLanguage();

  const testimonials = [
    { quote: t("testimonials.1.quote"), name: "Catarina V.", city: "Sintra" },
    { quote: t("testimonials.2.quote"), name: "Julien C.", city: "Penela" },
    { quote: t("testimonials.3.quote"), name: "Mariana N.", city: "Porto" },
  ];

  return (
    <section ref={ref} className="bg-background section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="fade-up label-uppercase text-amber mb-4">{t("testimonials.label")}</p>
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground mb-12">{t("testimonials.title")}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((te, i) => (
            <div key={i} className="fade-up border border-border p-8">
              <Stars />
              <blockquote className="font-serif italic text-lg md:text-xl text-foreground leading-relaxed mb-6">
                &ldquo;{te.quote}&rdquo;
              </blockquote>
              <p className="label-uppercase text-muted-foreground text-xs">
                &mdash; {te.name}, {te.city}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
