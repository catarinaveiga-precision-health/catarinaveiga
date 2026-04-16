import { Helmet } from "react-helmet-async";
import { useFadeUp } from "@/hooks/useFadeUp";
import { Button } from "@/components/ui/button";
import { Star, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalBand from "@/components/LegalBand";
import MobileCTA from "@/components/MobileCTA";
import catarinaPhoto from "@/assets/catarina-sobre-portrait.jpg";

const ACUITY_URL = "https://catarinaveigaagendamento.as.me/";

/* ── SECÇÃO 1 — HERO ── */
const HeroSection = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-ivory section-padding pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="max-w-3xl mx-auto text-center fade-up">
        <h1 className="font-serif text-[2.5rem] md:text-6xl lg:text-7xl text-foreground leading-tight mb-6">
          Exames normais. Sintomas reais.<br className="hidden md:block" /> Nenhuma resposta.
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl mb-4 max-w-2xl mx-auto">
          Descobre o que os teus exames não estão a dizer.
        </p>
        <p className="text-foreground text-[15px] md:text-base mb-10 max-w-2xl mx-auto">
          Um programa clínico personalizado, conduzido por uma equipa, baseado em dados reais. Não em suposições.
        </p>
        <Button variant="hero" size="lg" asChild>
          <a href={ACUITY_URL} target="_blank" rel="noopener noreferrer">
            Marcar avaliação inicial
          </a>
        </Button>
      </div>
    </section>
  );
};

/* ── SECÇÃO 2 — IDENTIFICAÇÃO ── */
const symptoms = [
  "Fadiga constante que não melhora com descanso",
  "Peso que não responde a dietas nem exercício",
  "Ciclo menstrual irregular, ausente ou com sintomas intensos",
  "Brain fog — dificuldade de concentração e memória",
  "Ansiedade ou humor instável sem causa aparente",
  "Queda de cabelo, pele sem vida, problemas digestivos",
  '"Os seus exames estão todos bons" — mas tu sabes que algo não está bem',
  "Sono interrompido ou não reparador",
  "Doenças autoimunes diagnosticadas ou por diagnosticar",
  "Cabelo sem brilho, queda aumentada",
  "Pele sem vida, seca, ou com alterações novas",
  "Dores articulares ou musculares sem causa identificada",
  "Ciclos menstruais irregulares ou com características diferentes do habitual",
];

const IdentificacaoSection = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-background section-padding">
      <div className="max-w-3xl mx-auto fade-up">
        <h2 className="font-serif text-3xl md:text-[2.75rem] text-foreground leading-tight mb-10">
          Se te reconheces nisto, este programa foi pensado para ti
        </h2>
        <ul className="space-y-4 mb-10">
          {symptoms.map((s, i) => (
            <li key={i} className="flex items-start gap-3 text-foreground text-[15px] leading-relaxed">
              <span className="text-amber mt-1.5 text-xs shrink-0">●</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground text-[15px] leading-relaxed border-l-[3px] border-amber pl-6">
          Estes sintomas não são imaginados. São sinais reais de desequilíbrios funcionais que os exames convencionais frequentemente não detectam. Quando os marcadores ficam dentro dos intervalos de referência — intervalos demasiado amplos — o problema é declarado inexistente. Mas o teu corpo sabe. E há formas de o ouvir.
        </p>
      </div>
    </section>
  );
};

/* ── SECÇÃO 3 — QUEM VAI ACOMPANHAR ── */
const QuemAcompanhaSection = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-ivory section-padding">
      <div className="max-w-5xl mx-auto fade-up">
        <h2 className="font-serif text-3xl md:text-[2.75rem] text-foreground leading-tight mb-10">
          Quem vai acompanhar o teu caso
        </h2>
        <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
          <img
            src={catarinaPhoto}
            alt="Dra. Catarina Veiga — Medicina Funcional Integrativa"
            className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full object-cover object-top mx-auto md:mx-0"
            loading="lazy"
            decoding="async"
            width={280}
            height={280}
          />
          <div className="text-muted-foreground text-[15px] leading-relaxed space-y-4">
            <p>
              Catarina Veiga tem mais de 20 anos de prática clínica em medicina funcional integrativa. Formação em psicologia, análises funcionais e neurobiologia. Pioneira em Portugal na construção de painéis de avaliação biofuncional e plataformas interactivas de interpretação de análises funcionais — numa época em que este campo ainda não tinha nome em português. Directora clínica com experiência em medicina tradicional chinesa, medicina funcional e integrativa. Speaker convidada no Longevity Med Summit 2024, em Lisboa, com a apresentação <em>Exploring the link between oestrogen-related conditions and gut microbiota</em> — ao lado dos directores médicos da Clinique La Prairie, Lanserhof e Cleveland Clinic Abu Dhabi.
            </p>
            <p>
              Não trabalha sozinha. A Aletheia é conduzida por uma equipa clínica que inclui médica de medicina familiar e geral, especialistas parceiros em nutrição, yoga terapêutico, libertação somática e coaching — todos seleccionados pela Catarina.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── SECÇÃO 4 — O QUE É O PROGRAMA ── */
const ProgramaSection = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-background section-padding">
      <div className="max-w-3xl mx-auto fade-up">
        <p className="label-uppercase text-amber mb-4">O Programa</p>
        <h2 className="font-serif text-3xl md:text-[2.75rem] text-foreground leading-tight mb-10">
          Aletheia — powered by BioFuncional
        </h2>
        <div className="text-muted-foreground text-[15px] leading-relaxed space-y-5">
          <p>
            <em className="font-serif text-foreground not-italic">Aletheia</em> significa "verdade" em grego — aquilo que está escondido e precisa de ser revelado. É exactamente isso que este programa faz.
          </p>
          <p>
            O Aletheia é um plano de acompanhamento totalmente personalizado, com duração definida caso a caso — a partir da leitura e interpretação dos teus dados, análises e estilo de vida. Começa sempre com o Relatório BioFuncional ODX: uma análise profunda dos teus exames com intervalos funcionais (não apenas convencionais), cruzando marcadores que normalmente são avaliados isoladamente.
          </p>
          <p>
            A partir daí, cada decisão — alimentação, suplementação, exames adicionais, sessões complementares — é tomada pela Catarina com base em ciência e neurobiologia, para resultados máximos com o esforço mínimo da tua parte. O programa é desenhado para que, apesar de tudo o que envolve, o esforço que recai sobre ti seja o menor possível.
          </p>
          <p className="text-foreground font-medium">
            Tu não coordenas nada. Não precisas de juntar peças de diferentes profissionais. Tens uma médica que assume a gestão total do teu caso.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ── SECÇÃO 5 — O QUE ESTÁ INCLUÍDO ── */
const inclusions = [
  "Relatório Avaliação BioFuncional ODX (66+ biomarcadores, interpretação funcional)",
  "Consultas de Medicina Funcional Integrativa (frequência adaptada ao plano)",
  "2 consultas de medicina familiar e geral (início e fim do plano)",
  "Plano alimentar adaptado e revisto ao longo do programa",
  "Orientação e análise de dados de wearables — monitor contínuo de glicose, Oura Ring e outros",
  "App totalmente personalizada com tracking de sintomas, métricas e evolução",
  "Sessões com profissionais parceiros — yoga terapêutico, libertação somática, coaching e outros conforme o caso",
  "Relatórios de progresso ao longo do programa",
  "Gestão activa de suplementos — prescrição, ajuste de dose, rotação",
  "Recomendação de testes especializados com desconto — microbioma, ácidos orgânicos, DUTCH, ADN e outros",
  "Gestão total do processo — a cliente não coordena nada",
];

const IncluidoSection = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-ivory section-padding">
      <div className="max-w-3xl mx-auto fade-up">
        <h2 className="font-serif text-3xl md:text-[2.75rem] text-foreground leading-tight mb-10">
          O que está incluído
        </h2>
        <ul className="space-y-4">
          {inclusions.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-foreground text-[15px] leading-relaxed">
              <Check size={18} className="text-amber mt-0.5 shrink-0" strokeWidth={2} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

/* ── SECÇÃO 6 — TRANSFORMAÇÃO ── */
const beforeItems = [
  "Vais a consultas diferentes sem ninguém ligar os pontos",
  "Recebes resultados \"normais\" mas continuas com sintomas",
  "Tentas dietas e suplementos por conta própria, sem orientação",
  "Sentes que ninguém leva os teus sintomas a sério",
  "Gastas tempo e dinheiro sem direcção clara",
];

const afterItems = [
  "Tens uma médica que gere o caso inteiro, do início ao fim",
  "Sabes exactamente o que os teus marcadores significam — nos intervalos certos",
  "Segues um plano alimentar e de suplementação feito para ti",
  "Tens acesso a profissionais complementares quando indicado",
  "Recuperas clareza sobre o que se passa no teu corpo — e controlo sobre o que fazer",
];

const TransformacaoSection = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-background section-padding">
      <div className="max-w-5xl mx-auto fade-up">
        <h2 className="font-serif text-3xl md:text-[2.75rem] text-foreground leading-tight mb-12 text-center">
          O que muda
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-border p-8 md:p-10">
            <p className="label-uppercase text-muted-foreground mb-6">Antes</p>
            <ul className="space-y-4">
              {beforeItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/70 text-[15px] leading-relaxed">
                  <span className="text-destructive mt-1 text-xs shrink-0">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="border border-amber/40 bg-ivory p-8 md:p-10">
            <p className="label-uppercase text-amber mb-6">Depois</p>
            <ul className="space-y-4">
              {afterItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground text-[15px] leading-relaxed">
                  <Check size={16} className="text-amber mt-0.5 shrink-0" strokeWidth={2} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="text-muted-foreground text-xs mt-8 text-center max-w-2xl mx-auto">
          Resultados variam de pessoa para pessoa. O programa não promete curas — oferece um processo clínico rigoroso, personalizado e baseado em evidência. O objectivo é clareza e direcção.
        </p>
      </div>
    </section>
  );
};

/* ── SECÇÃO 7 — TESTEMUNHOS ── */
const Stars5 = () => (
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} className="fill-amber text-amber" />
    ))}
  </div>
);

const testimonials = [
  {
    name: "Alexandra Fernandes",
    text: "Finalmente consegui que alguém me escutasse. A Dra. Catarina escutou, validou, avaliou e analisou todos os meus sintomas como mais nenhum médico foi capaz de fazer.",
  },
  {
    name: "Mariana Fernandes",
    text: "Os resultados que tenho obtido são incríveis, tanto nos níveis de energia, como na clareza mental, e acredite-se ou não, nos quilos que perco... sem fazer dieta absolutamente nenhuma.",
  },
  {
    name: "Vanessa Lima",
    text: "Em cerca de 4 consultas, tenho o meu vitiligo em remissão, algo que nunca aconteceu antes sem recurso a imunossupressores ou corticóides.",
  },
  {
    name: "Cliente",
    text: "Foi o primeiro profissional de saúde a realmente olhar o meu quadro clínico em detalhe. Recomendo principalmente se não encontram respostas nos sistemas convencionais.",
  },
];

const TestemunhosSection = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-ivory section-padding">
      <div className="max-w-6xl mx-auto fade-up">
        <h2 className="font-serif text-3xl md:text-[2.75rem] text-foreground leading-tight mb-4">
          O que dizem as clientes
        </h2>
        <p className="text-muted-foreground text-sm mb-12">
          4,8 ★ no Google (18 críticas)
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="border border-border p-8">
              <Stars5 />
              <blockquote className="font-serif italic text-lg text-foreground leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <p className="label-uppercase text-muted-foreground text-xs">
                &mdash; {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── SECÇÃO 8 — INVESTIMENTO ── */
const InvestimentoSection = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-background section-padding">
      <div className="max-w-2xl mx-auto text-center fade-up">
        <h2 className="font-serif text-3xl md:text-[2.75rem] text-foreground leading-tight mb-10">
          Investimento
        </h2>
        <div className="inline-block border border-amber rounded-[16px] px-12 py-8 mb-6">
          <p className="font-serif text-7xl md:text-8xl text-foreground">€199</p>
          <p className="text-muted-foreground text-sm mt-2">/mês</p>
        </div>
        <p className="text-foreground text-[15px] mb-6">
          Pagamento em prestações mensais equivalentes à duração do plano.
        </p>
        <p className="text-amber text-sm font-medium mb-10">
          Pagamento único com desconto disponível — contactar para valor.
        </p>
        <p className="text-muted-foreground text-[15px] leading-relaxed max-w-xl mx-auto mb-8">
          Este valor inclui tudo: consultas médicas, relatório BioFuncional, plano alimentar, gestão de suplementos, app personalizada, sessões complementares e coordenação total do processo. Não há surpresas nem custos escondidos. É o investimento num acompanhamento médico completo — o tipo de acompanhamento que deveria existir, mas raramente existe.
        </p>
        <p className="text-muted-foreground text-[15px] leading-relaxed max-w-xl mx-auto border-l-[3px] border-amber pl-6 text-left">
          O plano é personalizado — a duração é definida conforme o teu caso clínico, a leitura dos teus dados, análises e estilo de vida. O que não muda é a metodologia: ciência, neurobiologia, análise de dados real, ajuste contínuo e uma equipa a gerir tudo — para que o esforço que recai sobre ti seja o menor possível.
        </p>
      </div>
    </section>
  );
};

/* ── SECÇÃO 9 — CTA FINAL ── */
const CTAFinalSection = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-dark section-padding" style={{ backgroundColor: "#1F1A14" }}>
      <div className="max-w-3xl mx-auto text-center fade-up">
        <p className="font-serif text-xl md:text-2xl text-ivory/80 leading-relaxed mb-10 max-w-2xl mx-auto">
          O programa começa com uma avaliação inicial — uma conversa clínica em que a Catarina revê a tua história, sintomas e exames, e determina o plano indicado para ti.
        </p>
        <Button variant="heroAccent" size="lg" asChild>
          <a href={ACUITY_URL} target="_blank" rel="noopener noreferrer">
            Marcar avaliação inicial
          </a>
        </Button>
      </div>
    </section>
  );
};

/* ── PAGE ── */
const Aletheia = () => (
  <>
    <Helmet>
      <title>Aletheia — Programa de Medicina Funcional | Catarina Veiga</title>
      <meta name="description" content="Programa de acompanhamento personalizado em Medicina Funcional Integrativa. Relatório BioFuncional, plano alimentar, gestão total do caso. A partir de €199/mês." />
      <link rel="canonical" href="https://www.catarinaveiga.com/aletheia" />
      <meta property="og:title" content="Aletheia — Programa de Medicina Funcional | Catarina Veiga" />
      <meta property="og:description" content="Programa de acompanhamento personalizado em Medicina Funcional Integrativa. Relatório BioFuncional, plano alimentar, gestão total do caso. A partir de €199/mês." />
      <meta property="og:url" content="https://www.catarinaveiga.com/aletheia" />
      <meta property="og:type" content="website" />
    </Helmet>
    <Navbar />
    <main>
      <HeroSection />
      <IdentificacaoSection />
      <QuemAcompanhaSection />
      <ProgramaSection />
      <IncluidoSection />
      <TransformacaoSection />
      <TestemunhosSection />
      <InvestimentoSection />
      <CTAFinalSection />
    </main>
    <LegalBand />
    <Footer />
    <MobileCTA />
  </>
);

export default Aletheia;
