export interface Article {
  slug: string;
  catKey: string;
  titleKey: string;
  introKey: string;
  bodyKey: string;
}

export const articles: Article[] = [
  {
    slug: "exames-normais-sintomas-reais",
    catKey: "blog.1.cat",
    titleKey: "blog.1.title",
    introKey: "blog.1.intro",
    bodyKey: "blog.1.body",
  },
  {
    slug: "tiroide-sub-optima",
    catKey: "blog.2.cat",
    titleKey: "blog.2.title",
    introKey: "blog.2.intro",
    bodyKey: "blog.2.body",
  },
  {
    slug: "perimenopausa-primeiros-sinais",
    catKey: "blog.3.cat",
    titleKey: "blog.3.title",
    introKey: "blog.3.intro",
    bodyKey: "blog.3.body",
  },
];
