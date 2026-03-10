import { useFadeUp } from "@/hooks/useFadeUp";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { useSanityPosts } from "@/hooks/useSanityPosts";

const Blog = () => {
  const ref = useFadeUp();
  const { t, lang } = useLanguage();
  const { data: posts, isLoading } = useSanityPosts();

  const displayPosts = posts?.slice(0, 3) ?? [];

  const formatDate = (dateStr: string | null) => {
    if (!dateStr) return "";
    return new Date(dateStr).toLocaleDateString(lang === "pt" ? "pt-PT" : "en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section ref={ref} id="blog" className="section-padding bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="fade-up label-uppercase text-amber mb-4">{t("blog.label")}</p>
            <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground">{t("blog.title")}</h2>
          </div>
          <Link
            to="/blog"
            className="fade-up hidden md:inline-flex items-center gap-2 text-foreground hover:text-amber transition-colors font-sans text-sm"
          >
            {t("blog.viewall")} <ArrowRight size={16} />
          </Link>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-background animate-pulse aspect-[4/3]" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {displayPosts.map((post) => (
              <Link
                key={post._id}
                to={`/blog/${post.slug.current}`}
                className="fade-up group relative block overflow-hidden border border-border transition-all duration-300 hover:border-foreground/20"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  {post.mainImage?.asset?.url ? (
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt || post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted" />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                    <div className="flex justify-end">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-xs font-sans text-white border border-white/30">
                        {formatDate(post.publishedAt)}
                      </span>
                    </div>

                    <div className="flex items-end justify-between gap-4">
                      <h3 className="text-white text-lg md:text-xl font-serif leading-snug flex-1">
                        {post.title}
                      </h3>
                      <div className="w-10 h-10 border border-white/30 flex items-center justify-center text-white shrink-0 group-hover:bg-white/10 transition-all duration-300">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="fade-up text-center mt-10 md:hidden">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-foreground hover:text-amber transition-colors font-sans text-sm"
          >
            {t("blog.viewall")} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
