import { useFadeUp } from "@/hooks/useFadeUp";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { usePosts } from "@/hooks/usePosts";

const Blog = () => {
  const ref = useFadeUp();
  const { t, lang } = useLanguage();
  const { data: posts, isLoading } = usePosts();

  const displayPosts = posts?.slice(0, 3) ?? [];

  return (
    <section ref={ref} id="blog" className="bg-bone section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="fade-up label-uppercase text-amber mb-4">{t("blog.label")}</p>
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground mb-12">{t("blog.title")}</h2>
        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-ivory border border-bone animate-pulse h-96" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {displayPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="fade-up group block bg-ivory border border-bone overflow-hidden hover:shadow-lg transition-shadow duration-300"
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
                  <h3 className="font-serif text-xl text-foreground mb-4 leading-snug group-hover:text-amber transition-colors">
                    {lang === "pt" ? post.title_pt : post.title_en}
                  </h3>
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
