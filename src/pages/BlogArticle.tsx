import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Link2, Facebook, Linkedin } from "lucide-react";
import Navbar from "@/components/Navbar";
import LegalBand from "@/components/LegalBand";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePost, usePosts } from "@/hooks/usePosts";
import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const renderBody = (text: string) => {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.trim() === "") { i++; continue; }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="font-serif text-2xl md:text-3xl text-foreground mt-12 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={i} className="border-l-2 border-amber pl-6 italic text-foreground/80 my-8 text-lg">
          {formatInline(line.slice(2))}
        </blockquote>
      );
    } else if (line.startsWith("- ")) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        listItems.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={`list-${i}`} className="list-disc pl-6 space-y-2 my-6">
          {listItems.map((item, j) => (
            <li key={j}>{formatInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    } else {
      elements.push(
        <p key={i} className="my-4 leading-relaxed">{formatInline(line)}</p>
      );
    }
    i++;
  }
  return elements;
};

const formatInline = (text: string): React.ReactNode[] => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};

const BlogArticle = () => {
  const { slug } = useParams();
  const { t, lang } = useLanguage();
  const { data: post, isLoading } = usePost(slug || "");
  const { data: allPosts } = usePosts();
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success(lang === "pt" ? "Link copiado!" : "Link copied!");
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribing(true);
    try {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .insert({ email: email.trim(), source: "blog-article" });
      if (error) throw error;
      toast.success(lang === "pt" ? "Subscrito com sucesso!" : "Subscribed successfully!");
      setEmail("");
    } catch {
      toast.error(lang === "pt" ? "Erro ao subscrever." : "Failed to subscribe.");
    } finally {
      setSubscribing(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-ivory">
        <Navbar />
        <main className="pt-32 pb-20 px-6">
          <div className="max-w-3xl mx-auto animate-pulse space-y-4">
            <div className="h-8 bg-bone rounded w-1/3" />
            <div className="h-12 bg-bone rounded w-2/3" />
            <div className="h-64 bg-bone rounded w-full mt-8" />
          </div>
        </main>
      </div>
    );
  }

  if (!post) {
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

  const title = lang === "pt" ? post.title_pt : post.title_en;
  const excerpt = lang === "pt" ? post.excerpt_pt : post.excerpt_en;
  const content = lang === "pt" ? post.content_pt : post.content_en;
  const date = new Date(post.created_at).toLocaleDateString(lang === "pt" ? "pt-PT" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const relatedPosts = allPosts?.filter((p) => p.slug !== post.slug).slice(0, 3) ?? [];

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />

      {/* Hero image */}
      {post.cover_image && (
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[560px]">
          <img
            src={post.cover_image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/50 to-transparent" />
        </div>
      )}

      <article className={`max-w-3xl mx-auto px-6 ${post.cover_image ? "-mt-32 relative z-10" : "pt-32"}`}>
        {/* Header */}
        <div className="mb-12">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-amber hover:text-amber-light transition-colors text-sm mb-8"
          >
            <ArrowLeft size={14} /> {t("blog.back")}
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <time className="text-muted-foreground text-sm font-sans">{date}</time>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl text-foreground mb-4 leading-tight">{title}</h1>
          <p className="text-muted-foreground text-lg font-light">{excerpt}</p>

          {/* Share bar */}
          <div className="flex items-center gap-3 mt-8 pt-6 border-t border-bone">
            <span className="text-xs text-muted-foreground font-sans uppercase tracking-wider mr-2">
              {lang === "pt" ? "Partilhar" : "Share"}
            </span>
            <button
              onClick={handleCopyLink}
              className="w-9 h-9 rounded-full border border-bone hover:border-amber hover:bg-bone transition-all flex items-center justify-center"
              aria-label="Copy link"
            >
              <Link2 className="w-3.5 h-3.5" />
            </button>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-bone hover:border-amber hover:bg-bone transition-all flex items-center justify-center"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full border border-bone hover:border-amber hover:bg-bone transition-all flex items-center justify-center"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Article body */}
        <div className="text-muted-foreground text-[16px] leading-relaxed mb-16">
          {content && renderBody(content)}
        </div>

        {/* Newsletter CTA */}
        <div className="mb-16 rounded-2xl bg-bone p-8 md:p-12 text-center">
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
            {lang === "pt" ? "Gostaste deste artigo?" : "Enjoyed this article?"}
          </h3>
          <p className="text-muted-foreground text-sm mb-6">
            {lang === "pt"
              ? "Subscreve para receber os próximos artigos diretamente no teu email."
              : "Subscribe to receive new articles directly in your inbox."}
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={lang === "pt" ? "O teu email" : "Your email"}
              required
              className="flex-1 px-5 py-3 rounded-full border border-bone bg-ivory font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-amber/40 transition-all"
            />
            <button
              type="submit"
              disabled={subscribing}
              className="px-8 py-3 rounded-full bg-foreground text-ivory font-sans text-sm font-medium hover:bg-foreground/90 transition-all disabled:opacity-50"
            >
              {lang === "pt" ? "Subscrever" : "Subscribe"}
            </button>
          </form>
        </div>
      </article>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="bg-bone py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl text-foreground mb-8">
              {lang === "pt" ? "Também te pode interessar" : "You might also like"}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  to={`/blog/${rp.slug}`}
                  className="group relative block rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                  style={{ boxShadow: "0 4px 20px -4px hsl(30 17% 9% / 0.08)" }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-ivory rounded-2xl">
                    {rp.cover_image ? (
                      <img
                        src={rp.cover_image}
                        alt={lang === "pt" ? rp.title_pt : rp.title_en}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-ivory" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="flex justify-end">
                        <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-sans text-white border border-white/30">
                          {new Date(rp.created_at).toLocaleDateString(lang === "pt" ? "pt-PT" : "en-GB", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="flex items-end justify-between gap-3">
                        <h3 className="text-white text-lg font-serif leading-snug flex-1">
                          {lang === "pt" ? rp.title_pt : rp.title_en}
                        </h3>
                        <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shrink-0 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <LegalBand />
      <Footer />
    </div>
  );
};

export default BlogArticle;
