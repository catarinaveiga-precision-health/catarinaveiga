import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import LegalBand from "@/components/LegalBand";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePosts } from "@/hooks/usePosts";
import { useEffect } from "react";

const BlogPage = () => {
  const { t, lang } = useLanguage();
  const { data: posts, isLoading } = usePosts();

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
          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-bone animate-pulse h-96" />
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {posts?.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group block bg-ivory border border-bone overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {post.cover_image && (
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.cover_image}
                        alt={lang === "pt" ? post.title_pt : post.title_en}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="p-8">
                    <h2 className="font-serif text-xl text-foreground mb-4 leading-snug group-hover:text-amber transition-colors">
                      {lang === "pt" ? post.title_pt : post.title_en}
                    </h2>
                    <p className="text-muted-custom text-[14px] mb-6 line-clamp-3">
                      {lang === "pt" ? post.excerpt_pt : post.excerpt_en}
                    </p>
                    <span className="inline-flex items-center gap-1 text-amber text-sm group-hover:gap-2 transition-all">
                      {t("blog.readmore")} <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <LegalBand />
      <Footer />
    </div>
  );
};

export default BlogPage;
