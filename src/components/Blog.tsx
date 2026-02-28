import { useFadeUp } from "@/hooks/useFadeUp";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { articles } from "@/data/articles";

const Blog = () => {
  const ref = useFadeUp();
  const { t } = useLanguage();

  return (
    <section ref={ref} id="blog" className="bg-bone section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="fade-up label-uppercase text-amber mb-4">{t("blog.label")}</p>
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground mb-12">{t("blog.title")}</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {articles.map((a) => (
            <article key={a.slug} className="fade-up card-hover border border-bone bg-ivory p-8">
              <p className="label-uppercase text-amber text-xs mb-3">{t(a.catKey)}</p>
              <h3 className="font-serif text-xl text-foreground mb-4 leading-snug">{t(a.titleKey)}</h3>
              <p className="text-muted-custom text-[14px] mb-6 line-clamp-4">{t(a.introKey)}</p>
              <Link to={`/blog/${a.slug}`} className="inline-flex items-center gap-1 text-amber text-sm hover:text-amber-light transition-colors">
                {t("blog.readmore")} <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
        <div className="fade-up text-center">
          <Link to="/blog" className="inline-flex items-center gap-2 text-amber hover:text-amber-light transition-colors font-sans text-sm">
            {t("blog.viewall")} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
