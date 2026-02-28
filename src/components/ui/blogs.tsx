import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { articles } from "@/data/articles";

export default function Blogs() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 bg-bone">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="label-uppercase text-amber text-xs mb-2">{t("blog.label")}</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            {t("blog.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <article
              key={a.slug}
              className="border border-bone bg-ivory p-8 hover:shadow-md transition-shadow"
            >
              <p className="label-uppercase text-amber text-xs mb-3">
                {t(a.catKey)}
              </p>
              <h3 className="font-serif text-xl text-foreground mb-4 leading-snug">
                {t(a.titleKey)}
              </h3>
              <p className="text-muted-custom text-[14px] mb-6 line-clamp-4">
                {t(a.introKey)}
              </p>
              <Link
                to={`/blog/${a.slug}`}
                className="inline-flex items-center gap-1 text-amber text-sm hover:text-amber-light transition-colors"
              >
                {t("blog.readmore")} <ArrowRight size={14} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
