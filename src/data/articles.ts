export interface Article {
  slug: string;
  catKey: string;
  titleKey: string;
  introKey: string;
  bodyKey: string;
  date: string;
}

export const articles: Article[] = [
  {
    slug: "exames-normais-nao-significam-saude",
    catKey: "blog.1.cat",
    titleKey: "blog.1.title",
    introKey: "blog.1.intro",
    bodyKey: "blog.1.body",
    date: "2026-01-05",
  },
  {
    slug: "tiroide-sub-optima",
    catKey: "blog.2.cat",
    titleKey: "blog.2.title",
    introKey: "blog.2.intro",
    bodyKey: "blog.2.body",
    date: "2025-12-15",
  },
  {
    slug: "perimenopausa-primeiros-sinais",
    catKey: "blog.3.cat",
    titleKey: "blog.3.title",
    introKey: "blog.3.intro",
    bodyKey: "blog.3.body",
    date: "2025-11-28",
  },
];
