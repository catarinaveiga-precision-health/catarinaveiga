import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import LegalBand from "@/components/LegalBand";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { articles } from "@/data/articles";
import { useEffect } from "react";

const BlogArticle = () => {
  const { slug } = useParams();
  const { t } = useLanguage();
  const article = articles.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-ivory">
        <Navbar />
        <main className="pt-32 pb-20 px-6 text-center">
          <h1 className="font-serif text-4xl text-foreground mb-4">{t("notfound.title")}</h1>
          <Link to="/blog" className="text-amber hover:text-amber-light transition-colors">
            ← {t("blog.back")}
          </Link>
        </main>
        <LegalBand />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-amber hover:text-amber-light transition-colors text-sm mb-8">
            <ArrowLeft size={14} /> {t("blog.back")}
          </Link>
          <p className="label-uppercase text-amber text-xs mb-4">{t(article.catKey)}</p>
          <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-8 leading-snug">{t(article.titleKey)}</h1>
          <div className="text-muted-custom text-[15px] leading-relaxed space-y-6 whitespace-pre-line">
            {t(article.bodyKey)}
          </div>
        </div>
      </main>
      <LegalBand />
      <Footer />
    </div>
  );
};

export default BlogArticle;
