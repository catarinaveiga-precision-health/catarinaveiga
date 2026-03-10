import { Link } from "react-router-dom";
import { useFadeUp } from "@/hooks/useFadeUp";

interface SEOHeroProps {
  label: string;
  title: string;
  intro: string;
  breadcrumb: { label: string; to?: string }[];
}

const SEOHero = ({ label, title, intro, breadcrumb }: SEOHeroProps) => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-almond/20 pt-28 pb-32 md:pb-40 px-6">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="max-w-3xl mx-auto mb-16 md:mb-20">
        <ol className="flex gap-2 text-xs font-sans text-foreground/40">
          {breadcrumb.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              {i > 0 && <span>/</span>}
              {item.to ? (
                <Link to={item.to} className="hover:text-foreground transition-colors">{item.label}</Link>
              ) : (
                <span className="text-foreground/60">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <div className="max-w-3xl mx-auto fade-up">
        {/* Label */}
        <p className="font-sans text-[11px] font-normal tracking-[0.25em] uppercase text-matcha mb-6">
          {label}
        </p>

        {/* H1 */}
        <h1 className="font-serif text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-light text-foreground leading-[1.1] mb-8">
          {title}
        </h1>

        {/* Intro line */}
        <p className="font-sans font-light text-lg md:text-xl text-foreground/60 leading-relaxed max-w-2xl">
          {intro}
        </p>
      </div>
    </section>
  );
};

export default SEOHero;
