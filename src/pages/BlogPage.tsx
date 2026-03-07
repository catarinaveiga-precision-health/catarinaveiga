import { Link } from "react-router-dom";
import { ArrowUpRight, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import LegalBand from "@/components/LegalBand";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSanityPosts, useSanityCategories } from "@/hooks/useSanityPosts";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const { t, lang } = useLanguage();
  const { data: posts, isLoading } = useSanityPosts();
  const { data: categories } = useSanityCategories();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString(lang === "pt" ? "pt-PT" : "en-GB", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const filtered = posts?.filter((post) => {
    if (activeCategory && post.category !== activeCategory) return false;
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    const title = (post.title || "").toLowerCase();
    const excerpt = (post.excerpt || "").toLowerCase();
    return title.includes(q) || excerpt.includes(q);
  });

  const featured = filtered?.[0];
  const rest = filtered?.slice(1) ?? [];

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <p className="label-uppercase text-amber mb-4">{t("blog.label")}</p>
              <h1 className="font-serif text-4xl md:text-6xl text-foreground">{t("blog.title")}</h1>
            </div>
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={lang === "pt" ? "Pesquisar artigos…" : "Search articles…"}
                className="w-full pl-11 pr-4 py-3 rounded-full border border-bone bg-ivory font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber/40 transition-all"
              />
            </div>
          </div>

          {/* Category filters */}
          {categories && categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-12">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-4 py-2 rounded-full font-sans text-xs uppercase tracking-wider transition-all border ${
                  !activeCategory
                    ? "bg-foreground text-ivory border-foreground"
                    : "bg-transparent text-muted-foreground border-bone hover:border-amber"
                }`}
              >
                {lang === "pt" ? "Todos" : "All"}
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                  className={`px-4 py-2 rounded-full font-sans text-xs uppercase tracking-wider transition-all border ${
                    activeCategory === cat
                      ? "bg-foreground text-ivory border-foreground"
                      : "bg-transparent text-muted-foreground border-bone hover:border-amber"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          {isLoading ? (
            <div className="space-y-6">
              <div className="bg-bone rounded-2xl animate-pulse aspect-[21/9]" />
              <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-bone rounded-2xl animate-pulse aspect-[4/3]" />
                ))}
              </div>
            </div>
          ) : filtered && filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-foreground mb-2">
                {lang === "pt" ? "Nenhum artigo encontrado" : "No articles found"}
              </p>
              <p className="text-muted-foreground text-sm">
                {lang === "pt" ? "Tenta outra pesquisa." : "Try a different search."}
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Featured article */}
              {featured && (
                <Link
                  to={`/blog/${featured.slug.current}`}
                  className="group relative block rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.01]"
                  style={{ boxShadow: "0 8px 30px -8px hsl(30 17% 9% / 0.12)" }}
                >
                  <div className="relative aspect-[21/9] overflow-hidden bg-bone rounded-2xl">
                    {featured.mainImage?.asset?.url ? (
                      <img
                        src={featured.mainImage.asset.url}
                        alt={featured.mainImage.alt || featured.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full bg-bone" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        {featured.category && (
                          <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-sans text-white border border-white/30">
                            {featured.category}
                          </span>
                        )}
                        <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-sans text-white border border-white/30">
                          {formatDate(featured.publishedAt)}
                        </span>
                      </div>
                      <div className="max-w-2xl">
                        <h2 className="text-white font-serif text-2xl md:text-4xl leading-tight mb-3">
                          {featured.title}
                        </h2>
                        {featured.excerpt && (
                          <p className="text-white/70 text-sm md:text-base line-clamp-2 font-sans font-light">
                            {featured.excerpt}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                </Link>
              )}

              {/* Grid */}
              {rest.length > 0 && (
                <div className="grid md:grid-cols-3 gap-6">
                  {rest.map((post) => (
                    <Link
                      key={post._id}
                      to={`/blog/${post.slug.current}`}
                      className="group relative block rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                      style={{ boxShadow: "0 4px 20px -4px hsl(30 17% 9% / 0.08)" }}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-bone rounded-2xl">
                        {post.mainImage?.asset?.url ? (
                          <img
                            src={post.mainImage.asset.url}
                            alt={post.mainImage.alt || post.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full h-full bg-bone" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                          <div className="flex items-center justify-between">
                            {post.category && (
                              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-sans text-white border border-white/30">
                                {post.category}
                              </span>
                            )}
                            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-sans text-white border border-white/30">
                              {formatDate(post.publishedAt)}
                            </span>
                          </div>
                          <div className="flex items-end justify-between gap-4">
                            <h3 className="text-white text-lg md:text-xl font-serif leading-snug flex-1">
                              {post.title}
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
