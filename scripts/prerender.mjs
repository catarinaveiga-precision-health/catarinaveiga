/**
 * Post-build pre-rendering script.
 *
 * For each known route it creates a dedicated HTML file inside dist/
 * with the correct <title>, <meta description>, OG tags, and a minimal
 * content skeleton inside <div id="root">.
 *
 * React's createRoot().render() replaces the children of #root on
 * hydration, so the static content is visible to crawlers while the
 * SPA takes over normally for real users.
 *
 * Usage:  node scripts/prerender.mjs   (runs automatically after vite build)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");
const TEMPLATE = readFileSync(join(DIST, "index.html"), "utf-8");

// ── SEO data for every pre-renderable route ────────────────────────
const pages = [
  // Homepage
  {
    path: "/",
    title: "Catarina Veiga | Medicina Funcional Integrativa",
    description:
      "Quando os exames dizem que está tudo bem mas o corpo continua a dar sinais. Medicina funcional que investiga as causas profundas.",
    h1: "Os teus exames estão normais. O teu corpo não.",
    intro:
      "Descobre o que os teus exames não estão a dizer. Medicina Funcional Integrativa — consultas online para Portugal e Brasil.",
  },
  // SEO article pages
  {
    path: "/ferritina-baixa-sintomas",
    title:
      "Ferritina Baixa: Sintomas, Causas e Intervalos Funcionais | Catarina Veiga",
    description:
      "Ferritina dentro do normal mas com fadiga e queda de cabelo? Descobre a diferença entre valores laboratoriais e funcionais.",
    h1: "Ferritina baixa: sintomas, causas e o que os exames podem não mostrar",
    intro:
      "Muitas mulheres têm ferritina dentro dos valores de referência — e ainda assim apresentam fadiga persistente, queda de cabelo e dificuldade de recuperação.",
  },
  {
    path: "/vitamina-d-valores-funcionais",
    title:
      "Vitamina D Baixa: Valores Funcionais e Sintomas | Catarina Veiga",
    description:
      "Vitamina D dentro dos valores normais mas com fadiga e infecções frequentes? Descobre a diferença entre valores laboratoriais e funcionais.",
    h1: "Vitamina D baixa: o que os valores laboratoriais não explicam",
    intro:
      "A maioria da população portuguesa tem vitamina D insuficiente — mas os valores considerados normais podem ainda assim ser insuficientes para função fisiológica óptima.",
  },
  {
    path: "/insulina-jejum-o-que-significa",
    title:
      "Insulina em Jejum Elevada: O Que Significa | Catarina Veiga",
    description:
      "Insulina em jejum elevada com glicose normal? Descobre o que a hiperinsulinemia significa antes de um diagnóstico de pré-diabetes.",
    h1: "Insulina em jejum elevada: o marcador que aparece anos antes do diagnóstico",
    intro:
      "A glicose pode estar normal enquanto a insulina já está elevada há anos. Este padrão é um dos sinais mais precoces de resistência metabólica.",
  },
  {
    path: "/tsh-normal-mas-com-sintomas",
    title:
      "TSH Normal Mas Com Sintomas: Função Tiroideia Funcional | Catarina Veiga",
    description:
      "TSH dentro dos valores normais mas com fadiga, frio, queda de cabelo? Descobre o que os intervalos laboratoriais não mostram.",
    h1: "TSH normal mas com sintomas: o que a tiróide funcional explica",
    intro:
      "O intervalo laboratorial aceita valores até 4.5 mUI/L como normais. Em medicina funcional, valores acima de 2.0 já podem associar-se a lentificação metabólica.",
  },
  {
    path: "/fadiga-exames-normais",
    title:
      "Fadiga com Exames Normais: Causas e Investigação Funcional | Catarina Veiga",
    description:
      "Cansaço persistente com exames normais? Descobre os padrões biomarcadores mais frequentes em mulheres com fadiga inexplicada.",
    h1: "Fadiga com exames normais: porque acontece e o que investigar",
    intro:
      "É uma das queixas mais frequentes em medicina — e uma das mais frustrantes. Os exames estão normais, mas o cansaço persiste.",
  },
  {
    path: "/medicina-funcional",
    title: "Medicina Funcional: Quando os Exames Dão Tudo Normal",
    description:
      "Os teus exames estão normais mas os sintomas continuam. A medicina funcional investiga as causas que os valores de referência standard não mostram.",
    h1: "Medicina Funcional: o que é e quando pode ajudar",
    intro:
      "A medicina funcional é uma abordagem clínica que investiga as causas raiz de sintomas persistentes — especialmente quando os exames parecem normais.",
  },
  {
    path: "/pequenos-almocos-ricos-em-proteina",
    title:
      "Pequenos-Almoços Ricos em Proteína: Porquê, Quanto e O Que Comer | Catarina Veiga",
    description:
      "Descubra porque um pequeno-almoço com 25–30 g de proteína estabiliza energia, reduz cravings e apoia a saúde hormonal — especialmente na perimenopausa.",
    h1: "Pequenos-almoços ricos em proteína: porquê, quanto e o que comer",
    intro:
      "Um pequeno-almoço com 25 a 30 g de proteína estabiliza a glicemia, reduz cravings e apoia a produção hormonal — com impacto directo na energia, no peso e na clareza mental ao longo do dia.",
  },
  {
    path: "/pequenos-almocos-com-proteina-energia-equilibrio-hormonal-e-simplicidade-para-mulheres-em-peri-e-menopausa",
    title:
      "Pequenos-Almoços com Proteína para Mulheres na Peri e Menopausa | Catarina Veiga",
    description:
      "Proteína ao pequeno-almoço estabiliza energia, reduz cravings e apoia o equilíbrio hormonal na perimenopausa. 6 opções simples, rápidas e sem meal prep.",
    h1: "Pequenos-almoços com proteína, energia, equilíbrio hormonal e simplicidade para mulheres em peri e menopausa",
    intro:
      "Se está na perimenopausa ou menopausa, o que come ao pequeno-almoço tem um impacto directo na energia, no peso, no humor e no equilíbrio hormonal.",
  },
  // Main site pages
  {
    path: "/sobre",
    title: "Sobre Catarina Veiga | Medicina Funcional Integrativa",
    description:
      "Mais de 20 anos de experiência em medicina funcional integrativa. Especializada em saúde hormonal feminina, perimenopausa e fadiga crónica.",
    h1: "Catarina Veiga — Medicina Funcional Integrativa",
    intro:
      "Mais de 20 anos dedicados a investigar as causas profundas de desequilíbrios hormonais e metabólicos em mulheres.",
  },
  {
    path: "/metodo",
    title: "O Método | Catarina Veiga — Medicina Funcional",
    description:
      "Abordagem clínica integrativa que investiga as causas raiz dos teus sintomas. Não tratar sintomas — corrigir o que os causa.",
    h1: "O Método",
    intro:
      "Uma abordagem clínica integrativa que investiga as causas raiz dos teus sintomas.",
  },
  {
    path: "/blog",
    title: "Blog | Catarina Veiga — Saúde Hormonal Feminina",
    description:
      "Artigos sobre saúde hormonal feminina, perimenopausa, ferritina, vitamina D, tiróide e medicina funcional. Informação baseada em evidência.",
    h1: "Blog — Saúde Hormonal Feminina",
    intro:
      "Artigos sobre saúde hormonal, perimenopausa e medicina funcional integrativa.",
  },
  {
    path: "/recursos",
    title: "Recursos | Catarina Veiga — Medicina Funcional",
    description:
      "Ferramentas e recursos gratuitos de saúde hormonal feminina. Avaliação funcional de exames, guias e artigos especializados.",
    h1: "Recursos de Saúde Hormonal Feminina",
    intro:
      "Ferramentas e recursos gratuitos para compreenderes melhor a tua saúde hormonal.",
  },
  {
    path: "/avaliacao",
    title: "Avaliação Funcional de Exames | Catarina Veiga",
    description:
      "Introduz os valores dos teus exames e recebe uma interpretação funcional imediata de mais de 15 biomarcadores.",
    h1: "Avaliação Funcional de Exames",
    intro:
      "Os teus exames estão normais. Mas podem não estar ideais. Verifica os teus biomarcadores com critérios funcionais.",
  },
  {
    path: "/candidatura",
    title: "Candidatura a Consulta | Catarina Veiga",
    description:
      "Candidata-te a uma consulta de medicina funcional integrativa com a Catarina Veiga. Consultas online para Portugal e Brasil.",
    h1: "Candidatura a Consulta",
    intro:
      "Preenche o formulário para seres avaliada para uma consulta de medicina funcional integrativa.",
  },
  {
    path: "/programa-fundacao",
    title: "Programa Fundação 3M | Catarina Veiga",
    description:
      "Programa de acompanhamento em Medicina Funcional Integrativa com duração de 3 meses. Investigação profunda das causas dos teus sintomas.",
    h1: "Programa Fundação 3M",
    intro:
      "Um programa estruturado de 3 meses focado na identificação das causas raiz dos teus desequilíbrios hormonais e metabólicos.",
  },
];

// ── Helper: generate the HTML for one route ────────────────────────
function generatePage({ path, title, description, h1, intro }) {
  const canonical = `https://www.catarinaveiga.com${path === "/" ? "" : path}`;
  const ogImage =
    "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/9855dba8-f6e3-4815-8dc5-a5c3c55085dc/id-preview-d882e72b--1b66c010-57ae-47c6-80d8-0bf8d63e429e.lovable.app-1772398965070.png";

  // Minimal static content inside #root for crawlers
  const staticContent = `<div style="max-width:720px;margin:80px auto;padding:0 24px;font-family:system-ui,sans-serif"><h1 style="font-size:2rem;line-height:1.2;margin-bottom:16px">${h1}</h1><p style="color:#666;font-size:1.1rem;line-height:1.6">${intro}</p><p style="margin-top:24px"><a href="/" style="color:#8b7355">catarinaveiga.com</a></p></div>`;

  let html = TEMPLATE;

  // Replace title
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${title}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*">/,
    `<meta name="description" content="${description}">`
  );

  // Replace OG tags (handle both > and /> endings)
  html = html.replace(
    /<meta property="og:title" content="[^"]*"[^>]*>/,
    `<meta property="og:title" content="${title}">`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"[^>]*>/,
    `<meta property="og:description" content="${description}">`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"[^>]*>/,
    `<meta property="og:url" content="${canonical}">`
  );

  // Replace Twitter tags
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*">/,
    `<meta name="twitter:title" content="${title}">`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*">/,
    `<meta name="twitter:description" content="${description}">`
  );

  // Replace canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*">/,
    `<link rel="canonical" href="${canonical}">`
  );

  // Inject static content into #root
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${staticContent}</div>`
  );

  return html;
}

// ── Main ───────────────────────────────────────────────────────────
let count = 0;

for (const page of pages) {
  const html = generatePage(page);

  if (page.path === "/") {
    // Overwrite the main index.html
    writeFileSync(join(DIST, "index.html"), html, "utf-8");
  } else {
    // Create dist/route/index.html
    const dir = join(DIST, page.path);
    if (!existsSync(dir)) {
      mkdirSync(dir, { recursive: true });
    }
    writeFileSync(join(dir, "index.html"), html, "utf-8");
  }

  count++;
}

console.log(`✓ Pre-rendered ${count} pages with SEO meta + static content`);
