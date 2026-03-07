import { useFadeUp } from "@/hooks/useFadeUp";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalBand from "@/components/LegalBand";

const Hero = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-background section-padding pt-32">
      <div className="max-w-3xl mx-auto text-center">
        <span className="fade-up inline-block label-uppercase text-amber text-xs mb-6">
          Programa Fundação
        </span>
        <h1 className="fade-up font-serif text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight">
          Investigação clínica. Protocolo personalizado. Três meses.
        </h1>
        <div className="fade-up flex justify-center mb-10">
          <div className="w-[60px] h-[2px] bg-amber" />
        </div>
        <p className="fade-up text-muted-foreground max-w-2xl mx-auto mb-10 text-lg">
          A abordagem estruturada para mulheres com sintomas persistentes e causas ainda por identificar.
        </p>
        <div className="fade-up flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" asChild>
            <a href="/candidatura">Candidatar-me ao Programa</a>
          </Button>
          <a
            href="#como-funciona"
            className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
          >
            Como funciona em detalhe ↓
          </a>
        </div>
      </div>
    </section>
  );
};

const QualifyingBlock = () => {
  const ref = useFadeUp();
  const cards = [
    "Fadiga persistente sem causa identificada",
    "Insónia, ansiedade ou peso sem resposta ao tratamento convencional",
    "Resultados laboratoriais normais mas sintomas reais",
  ];
  return (
    <section ref={ref} className="bg-bone section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground mb-10">
          Tens sintomas. Tens exames normais. Não tens resposta.
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {cards.map((text, i) => (
            <div
              key={i}
              className="fade-up bg-background rounded-[24px] p-8 border border-border text-center"
            >
              <p className="text-foreground text-[15px]">{text}</p>
            </div>
          ))}
        </div>
        <p className="fade-up text-muted-foreground text-lg">
          Se reconheces este padrão, este programa foi desenhado para ti.
        </p>
      </div>
    </section>
  );
};

const phases = [
  {
    num: "01",
    weeks: "Semanas 1–4",
    title: "Investigação",
    desc: "Análises laboratoriais funcionais · identificação de padrões disfuncionais · revisão de histórico completo",
  },
  {
    num: "02",
    weeks: "Semanas 5–8",
    title: "Protocolo",
    desc: "Nutrição terapêutica · suplementação baseada em análises · regulação circadiana",
  },
  {
    num: "03",
    weeks: "Semanas 9–12",
    title: "Reavaliação",
    desc: "Comparação de biomarcadores · ajuste do protocolo · plano de manutenção",
  },
];

const ThreePhases = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} id="como-funciona" className="bg-background section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground text-center mb-16">
          Três fases. Critérios clínicos. Sequência definida.
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-16">
            {phases.map((phase, i) => (
              <div key={i} className="fade-up relative pl-16 md:pl-20">
                {/* Amber dot */}
                <div className="absolute left-[18px] md:left-[26px] top-2 w-3 h-3 rounded-full bg-amber" />
                <span className="font-serif text-[80px] leading-none text-bone absolute -top-4 right-0 select-none hidden md:block">
                  {phase.num}
                </span>
                <span className="label-uppercase text-amber text-xs">{phase.weeks}</span>
                <h3 className="font-serif text-3xl text-foreground mt-1 mb-2">{phase.title}</h3>
                <p className="text-muted-foreground text-[15px]">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const inclusions = [
  { icon: CalendarCheck, title: "4 Consultas de Acompanhamento", desc: "60 min cada, espaçadas por fase" },
  { icon: FileText, title: "Protocolo Escrito Detalhado", desc: "Nutrição + suplementação + ritmo circadiano" },
  { icon: FlaskConical, title: "Análises com Interpretação Funcional", desc: "Intervalos ODX, não laboratoriais" },
  { icon: MessageCircle, title: "Suporte Entre Consultas", desc: "Resposta por mensagem em 48h úteis" },
  { icon: BarChart3, title: "Reavaliação Analítica", desc: "Comparação de biomarcadores semanas 6–8" },
  { icon: ClipboardList, title: "Plano de Manutenção", desc: "Documentado no final das 12 semanas" },
];

const WhatsIncluded = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-bone section-padding">
      <div className="max-w-5xl mx-auto">
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground text-center mb-14">
          O que inclui
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {inclusions.map((item, i) => (
            <div key={i} className="fade-up bg-background rounded-[24px] p-8 border border-border">
              <item.icon className="text-amber mb-4" size={28} strokeWidth={1.5} />
              <h4 className="font-serif text-xl text-foreground mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-[14px]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Investment = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-background section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground mb-8">Investimento</h2>
        <p className="fade-up font-serif text-7xl md:text-8xl text-foreground mb-2">€800</p>
        <p className="fade-up text-muted-foreground text-lg mb-6">12 semanas · Programa completo</p>
        <p className="fade-up text-foreground text-[15px] mb-4">
          Equivale a €200 por consulta vs €300+ por especialista convencional
        </p>
        <p className="fade-up text-muted-foreground text-sm mb-10">
          Não inclui análises laboratoriais — custo variável orientado por mim
        </p>
        <div className="fade-up">
          <Button variant="hero" size="lg" asChild>
            <a href="/candidatura">Candidatar-me</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const faqItems = [
  {
    q: "Qual o investimento total?",
    a: "€800 pelos 3 meses completos, incluindo 4 consultas de acompanhamento, protocolo escrito detalhado, e suporte por mensagem entre consultas.",
  },
  {
    q: "Posso entrar sem fazer a consulta inicial?",
    a: "Não. A consulta inicial (€120) é o critério de admissão.",
  },
  {
    q: "As consultas são presenciais?",
    a: "Todas online, em plataforma segura.",
  },
  {
    q: "O que acontece depois dos 3 meses?",
    a: "Tens um protocolo de manutenção escrito, biomarcadores de referência estabelecidos, e clareza sobre o que monitorizar.",
  },
];

const FAQSection = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-background section-padding">
      <div className="max-w-2xl mx-auto">
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground text-center mb-12">
          Perguntas frequentes
        </h2>
        <Accordion type="single" collapsible className="fade-up">
          {faqItems.map((item, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border-border">
              <AccordionTrigger className="font-serif text-lg text-foreground hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-[15px]">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

const FinalCTA = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-dark section-padding" style={{ backgroundColor: "#1F1A14" }}>
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-ivory mb-6">
          Primeiro, vou perceber se te posso ajudar.
        </h2>
        <p className="fade-up text-ivory/60 mb-10">
          A triagem é gratuita. Resposta pessoal em 48h.
        </p>
        <div className="fade-up">
          <Button
            variant="outline"
            size="lg"
            className="border-ivory/30 text-ivory hover:bg-ivory hover:text-foreground transition-all duration-300 font-sans font-normal tracking-wide"
            asChild
          >
            <a href="/candidatura">Preencher Triagem</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

const ProgramaFundacao = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <QualifyingBlock />
      <ThreePhases />
      <WhatsIncluded />
      <Investment />
      <FAQSection />
      <FinalCTA />
      <Footer />
      <LegalBand />
    </div>
  );
};

export default ProgramaFundacao;
