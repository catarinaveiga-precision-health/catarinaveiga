import { useFadeUp } from "@/hooks/useFadeUp";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { usePosts } from "@/hooks/usePosts";

const Blog = () => {
  const ref = useFadeUp();
  const { t, lang } = useLanguage();
  const { data: posts, isLoading } = usePosts();

  const displayPosts = posts?.slice(0, 3) ?? [];

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString(lang === "pt" ? "pt-PT" : "en-GB", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <section ref={ref} id="blog" className="section-padding bg-bone">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="fade-up label-uppercase text-amber mb-4">{t("blog.label")}</p>
            <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground">{t("blog.title")}</h2>
          </div>
          <Link
            to="/blog"
            className="fade-up hidden md:inline-flex items-center gap-2 text-amber hover:text-amber-light transition-colors font-sans text-sm"
          >
            {t("blog.viewall")} <ArrowRight size={16} />
          </Link>
        </div>

        {isLoading ? (
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-ivory rounded-2xl animate-pulse aspect-[4/3]" />
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {displayPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="fade-up group relative block rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                style={{
                  boxShadow: "0 4px 20px -4px hsl(30 17% 9% / 0.08)",
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-bone rounded-2xl">
                  {post.cover_image ? (
                    <img
                      src={post.cover_image}
                      alt={lang === "pt" ? post.title_pt : post.title_en}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-bone" />
                  )}

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  {/* Content overlay */}
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                    {/* Top - date */}
                    <div className="flex justify-end">
                      <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-sans text-white border border-white/30">
                        {formatDate(post.created_at)}
                      </span>
                    </div>

                    {/* Bottom - title */}
                    <div className="flex items-end justify-between gap-4">
                      <h3 className="text-white text-lg md:text-xl font-serif leading-snug flex-1">
                        {lang === "pt" ? post.title_pt : post.title_en}
                      </h3>
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shrink-0 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
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
            className="inline-flex items-center gap-2 text-amber hover:text-amber-light transition-colors font-sans text-sm"
          >
            {t("blog.viewall")} <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
