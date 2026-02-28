import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import LegalBand from "@/components/LegalBand";
import Footer from "@/components/Footer";

import { useLanguage } from "@/contexts/LanguageContext";
import { articles } from "@/data/articles";
import { useEffect } from "react";

const BlogPage = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="label-uppercase text-amber mb-4">{t("blog.label")}</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-12">{t("blog.title")}</h1>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((a) => (
              <article key={a.slug} className="border border-bone bg-ivory p-8 hover:shadow-md transition-shadow">
                <p className="label-uppercase text-amber text-xs mb-3">{t(a.catKey)}</p>
                <h2 className="font-serif text-xl text-foreground mb-4 leading-snug">{t(a.titleKey)}</h2>
                <p className="text-muted-custom text-[14px] mb-6 line-clamp-4">{t(a.introKey)}</p>
                <Link to={`/blog/${a.slug}`} className="inline-flex items-center gap-1 text-amber text-sm hover:text-amber-light transition-colors">
                  {t("blog.readmore")} <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <LegalBand />
      <Footer />
    </div>
  );
};

export default BlogPage;
