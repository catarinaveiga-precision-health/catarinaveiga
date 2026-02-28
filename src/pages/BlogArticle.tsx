import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import LegalBand from "@/components/LegalBand";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePost } from "@/hooks/usePosts";
import { useEffect } from "react";

const renderBody = (text: string) => {
  const lines = text.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.trim() === "") {
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="font-serif text-xl md:text-2xl text-foreground mt-10 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={i} className="border-l-2 border-amber pl-5 italic text-foreground/80 my-6">
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
        <ul key={`list-${i}`} className="list-disc pl-6 space-y-1 my-4">
          {listItems.map((item, j) => (
            <li key={j}>{formatInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    } else {
      elements.push(
        <p key={i} className="my-3">{formatInline(line)}</p>
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-ivory">
        <Navbar />
        <main className="pt-32 pb-20 px-6">
          <div className="max-w-3xl mx-auto animate-pulse space-y-4">
            <div className="h-8 bg-bone w-1/3" />
            <div className="h-12 bg-bone w-2/3" />
            <div className="h-4 bg-bone w-full" />
            <div className="h-64 bg-bone w-full mt-8" />
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

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-amber hover:text-amber-light transition-colors text-sm mb-8">
            <ArrowLeft size={14} /> {t("blog.back")}
          </Link>
          <time className="text-muted-custom text-xs mb-6 block">{date}</time>
          <h1 className="font-serif text-3xl md:text-5xl text-foreground mb-4 leading-snug">{title}</h1>
          <p className="text-muted-custom text-lg font-light">{excerpt}</p>
        </div>
        {post.cover_image && (
          <div className="max-w-4xl mx-auto mt-10">
            <img
              src={post.cover_image}
              alt={title}
              className="w-full aspect-[21/9] object-cover"
            />
          </div>
        )}
      </section>

      <main className="pb-20 px-6">
        <div className="max-w-3xl mx-auto text-muted-custom text-[15px] leading-relaxed">
          {content && renderBody(content)}
        </div>
      </main>

      <LegalBand />
      <Footer />
    </div>
  );
};

export default BlogArticle;
