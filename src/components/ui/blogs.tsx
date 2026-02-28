import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Article {
  category: string;
  description: string;
  image: string;
  publishDate: string;
  readMoreLink: string;
  title: string;
}

const articlesData: Article[] = [
  {
    category: "BRANDING",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacinia mi.",
    image: "https://images.unsplash.com/photo-1558174685-430919a96c8d?w=800&h=600&fit=crop",
    publishDate: "Dec 22, 2025",
    readMoreLink: "#",
    title: "A Beginner's Guide to Webflow to Development",
  },
  {
    category: "ARTDIRECTION",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacinia mi.",
    image: "https://images.unsplash.com/photo-1466228432269-af42b400b934?w=800&h=600&fit=crop",
    publishDate: "Nov 11, 2025",
    readMoreLink: "#",
    title: "The Ultimate Checklist for SEO Performance",
  },
  {
    category: "DESIGNSYSTEM",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam et lacinia mi.",
    image: "https://images.unsplash.com/photo-1605907126120-f68611516ecc?w=800&h=600&fit=crop",
    publishDate: "Oct 9, 2025",
    readMoreLink: "#",
    title: "The Evolution of Design: From Past to Present",
  },
];

export default function Blogs() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="label-uppercase text-accent text-xs mb-2">CAPTION</p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground">
            Blog Articles
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articlesData.map((article, index) => (
            <div
              key={index}
              className="group border border-border bg-card overflow-hidden transition-shadow hover:shadow-md"
            >
              <div className="relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-52 object-cover"
                  loading="lazy"
                />
                <span className="absolute bottom-3 left-3 bg-background/90 text-foreground text-[11px] font-sans uppercase tracking-wider px-3 py-1">
                  #{article.category}
                </span>
              </div>

              <div className="p-6 flex flex-col gap-3">
                <h3 className="font-serif text-xl text-foreground leading-snug">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {article.description}
                </p>
                <div className="flex items-center justify-between mt-3">
                  <Link
                    to={article.readMoreLink}
                    className="inline-flex items-center gap-1 text-accent text-sm hover:text-accent/80 transition-colors"
                  >
                    <ArrowRight size={14} />
                    Read more
                  </Link>
                  <span className="text-muted-foreground text-xs">
                    {article.publishDate}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
