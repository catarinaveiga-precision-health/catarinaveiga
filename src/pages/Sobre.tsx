import Navbar from "@/components/Navbar";
import catarinaPhoto from "@/assets/catarina-sobre.png";
import Footer from "@/components/Footer";
import LegalBand from "@/components/LegalBand";
import MobileCTA from "@/components/MobileCTA";
import AcuityModal from "@/components/AcuityModal";
import { useAcuityModal } from "@/hooks/useAcuityModal";
import { openAcuity } from "@/hooks/useAcuityModal";
import { useFadeUp } from "@/hooks/useFadeUp";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Stethoscope, CalendarCheck, GraduationCap } from "lucide-react";

/* ── tiny reusable divider ── */
const AmberDivider = () => (
  <div className="w-[60px] h-[2px] bg-amber mt-4 mb-6" />
);

/* ── 1  HERO ── */
const HeroSection = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-ivory section-padding">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="fade-up flex justify-center md:justify-start">
          <img
            src={catarinaPhoto}
            alt="Catarina Veiga — Especialista em Medicina Funcional Integrativa"
            className="w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-2xl object-cover object-top"
          />
        </div>
        <div className="fade-up">
          <h1 className="font-serif text-5xl md:text-6xl text-foreground leading-tight">
            Sou a Catarina Veiga.
          </h1>
          <AmberDivider />
          <p className="text-muted-custom text-lg leading-relaxed">
            Especialista em Medicina Funcional Integrativa.
            <br />
            22 anos de prática clínica.
          </p>
        </div>
      </div>
    </section>
  );
};

/* ── 2  PROBLEMA DA PACIENTE ── */
const ProblemaSection = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-bone section-padding">
      <div className="max-w-3xl mx-auto text-center fade-up">
        <p className="label-uppercase text-amber mb-4">Reconheces isto?</p>
        <AmberDivider />
        <p className="font-serif text-2xl md:text-3xl text-foreground leading-snug italic">
          Trabalho com mulheres que têm sintomas persistentes e análises
          normais — e que já ouviram demasiadas vezes que está tudo bem quando
          claramente não está.
        </p>
      </div>
    </section>
  );
};

/* ── 3  QUEM SOU ── */
const QuemSouSection = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-ivory section-padding">
      <div className="max-w-3xl mx-auto fade-up">
        <p className="label-uppercase text-amber mb-4">Quem sou</p>
        <AmberDivider />
        <p className="text-muted-custom text-[15px] leading-relaxed">
          Especialista em Medicina Funcional Integrativa com 22 anos de prática
          clínica. Trabalho com mulheres com sintomas persistentes e análises
          normais — fadiga, disfunção tiroideia, alterações hormonais, patologia
          digestiva, autoimunidade. O meu trabalho é investigar o que os
          intervalos de referência não detectam.
        </p>
      </div>
    </section>
  );
};

/* ── 4  PERCURSO PROFISSIONAL ── */
const timelineEntries = [
  {
    title: "Início de carreira",
    body: "Prática clínica em equipas multidisciplinares com psicólogos e psiquiatras — que me mostrou desde cedo que fisiologia e saúde mental são inseparáveis.",
  },
  {
    title: "Londres — Omnos",
    body: "Quatro anos como Resident Microbiome Expert e Academy Manager. Desenvolvimento da interface clínica do teste de microbioma 360° — premiado no Reino Unido. Colaboração com equipas de saúde de múltiplas especialidades.",
  },
];

const PercursoSection = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-bone section-padding">
      <div className="max-w-3xl mx-auto fade-up">
        <p className="label-uppercase text-amber mb-4">Percurso</p>
        <AmberDivider />
        <div className="relative pl-8 border-l-2 border-amber space-y-10 mt-8">
          {timelineEntries.map((e) => (
            <div key={e.title} className="relative">
              <span className="absolute -left-[13px] top-1.5 w-2 h-2 rounded-full bg-amber" />
              <h3 className="font-serif text-xl text-foreground mb-1">{e.title}</h3>
              <p className="text-muted-custom text-[15px] leading-relaxed">{e.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── 5  PONTO DE VIRAGEM ── */
const PontoViragemSection = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-ivory section-padding">
      <div className="max-w-3xl mx-auto text-center fade-up">
        <p className="font-serif text-2xl md:text-3xl italic text-foreground leading-snug mb-8">
          "Um pós-operatório complexo ao menisco. Os exames estavam normais. Os
          sintomas não."
        </p>
        <p className="text-muted-custom text-[15px] leading-relaxed max-w-2xl mx-auto">
          Fui investigar as causas — e encontrei défices funcionais que a
          medicina convencional tinha classificado como normais. Essa experiência
          mudou a forma como pratico clínica.
        </p>
      </div>
    </section>
  );
};

/* ── 6  CREDENCIAIS ── */
const formacao = [
  "Nutrição Funcional e Interpretação de Exames Laboratoriais — Dr. Gabriel de Carvalho, FSA",
  "Modulação Intestinal — Prof. Murilo Pereira",
  "Nutrição Funcional Pediátrica",
  "Psicologia — Universidade de Lisboa",
  "Neurobiologia — University of Chicago",
  "Pós-graduação em Língua Gestual — FMUL",
];

const publicacoes = [
  'Oradora no Longevity Med Summit 2024 — "Oestrogen-Related Conditions and Gut Microbiota"',
  "Artigos em publicações internacionais de medicina integrativa",
  "Webinários e formação para profissionais de saúde no Reino Unido e Portugal",
];

const CredenciaisSection = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-bone section-padding">
      <div className="max-w-5xl mx-auto fade-up">
        <p className="label-uppercase text-amber mb-4">Formação e Publicações</p>
        <AmberDivider />
        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <div>
            <h3 className="font-serif text-xl text-foreground mb-4">Formação</h3>
            <ul className="space-y-3">
              {formacao.map((f) => (
                <li key={f} className="text-muted-custom text-[15px] leading-relaxed flex gap-2">
                  <span className="text-amber mt-1 shrink-0">•</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-xl text-foreground mb-4">
              Publicações e palcos
            </h3>
            <ul className="space-y-3">
              {publicacoes.map((p) => (
                <li key={p} className="text-muted-custom text-[15px] leading-relaxed flex gap-2">
                  <span className="text-amber mt-1 shrink-0">•</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── 7  COMO TRABALHO HOJE ── */
const cards = [
  {
    icon: Stethoscope,
    title: "Consultas individuais",
    body: "Online. Portugal e internacional. Português e inglês.",
  },
  {
    icon: CalendarCheck,
    title: "Programa Fundação",
    body: "Acompanhamento clínico estruturado de 3 meses.",
  },
  {
    icon: GraduationCap,
    title: "Formação e consultoria",
    body: "Para profissionais de saúde e empresas.",
  },
];

const HojeSection = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-ivory section-padding">
      <div className="max-w-5xl mx-auto fade-up">
        <p className="label-uppercase text-amber mb-4">Hoje</p>
        <AmberDivider />
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {cards.map((c) => (
            <div
              key={c.title}
              className="bg-bone border border-bone p-8 text-center"
            >
              <c.icon className="w-8 h-8 text-amber mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-xl text-foreground mb-2">{c.title}</h3>
              <p className="text-muted-custom text-[15px]">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── 8  FRASE ASSINATURA ── */
const AssinaturaSection = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-dark section-padding">
      <div className="max-w-3xl mx-auto text-center fade-up">
        <p className="font-serif text-3xl md:text-4xl italic text-ivory leading-snug">
          "Os teus exames estão normais. O teu corpo não."
        </p>
      </div>
    </section>
  );
};

/* ── 9  CTA ── */
const CTASection = () => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-bone section-padding">
      <div className="max-w-3xl mx-auto text-center fade-up">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">
          Pronta para investigar as causas?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="hero" size="lg" onClick={openAcuity}>
            Agendar consulta inicial
          </Button>
          <Button variant="amber" size="lg" asChild>
            <Link to="/programa-fundacao">Conhecer o Programa Fundação</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

/* ── PAGE ── */
const Sobre = () => {
  const { open, onClose } = useAcuityModal();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemaSection />
        <QuemSouSection />
        <PercursoSection />
        <PontoViragemSection />
        <CredenciaisSection />
        <HojeSection />
        <AssinaturaSection />
        <CTASection />
      </main>
      <LegalBand />
      <Footer />
      <MobileCTA />
      <AcuityModal open={open} onClose={onClose} />
    </>
  );
};

export default Sobre;
