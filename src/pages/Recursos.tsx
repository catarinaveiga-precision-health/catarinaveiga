import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalBand from "@/components/LegalBand";
import MobileCTA from "@/components/MobileCTA";
import AcuityModal from "@/components/AcuityModal";
import { useAcuityModal } from "@/hooks/useAcuityModal";
import { useFadeUp } from "@/hooks/useFadeUp";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import editorialFeatured from "@/assets/editorial-featured.jpg";
import editorialThyroid from "@/assets/editorial-thyroid.jpg";
import editorialVitaminD from "@/assets/editorial-vitamind.jpg";
import editorialInsulin from "@/assets/editorial-insulin.jpg";
import editorialFatigue from "@/assets/editorial-fatigue.jpg";
import editorialFunctional from "@/assets/editorial-functional.jpg";

const featured = {
  title: "Ferritina Baixa: sintomas que os teus exames podem não mostrar",
  subtitle: "A diferença entre valores laboratoriais e funcionais — e porque podes ter sintomas mesmo com resultados 'normais'.",
  href: "/ferritina-baixa-sintomas",
  image: editorialFeatured,
};

const secondary = [
  {
    title: "TSH Normal Mas Com Sintomas",
    description: "O intervalo laboratorial aceita TSH até 4.5. A medicina funcional começa a investigar a partir de 2.0.",
    href: "/tsh-normal-mas-com-sintomas",
    image: editorialThyroid,
  },
  {
    title: "Vitamina D: o intervalo normal pode não ser suficiente",
    description: "Percebe porque o valor 'normal' pode ainda assim ser insuficiente para a tua saúde e energia.",
    href: "/vitamina-d-valores-funcionais",
    image: editorialVitaminD,
  },
  {
    title: "Insulina em Jejum: o marcador que aparece antes da diabetes",
    description: "Glicose normal com insulina elevada — o que significa e porque importa investigar cedo.",
    href: "/insulina-jejum-o-que-significa",
    image: editorialInsulin,
  },
];

const additional = [
  {
    title: "Fadiga Com Exames Normais",
    href: "/fadiga-exames-normais",
    image: editorialFatigue,
  },
  {
    title: "O Que É a Medicina Funcional Integrativa",
    href: "/medicina-funcional",
    image: editorialFunctional,
  },
];

const Recursos = () => {
  const { open, onClose } = useAcuityModal();
  const heroRef = useFadeUp();
  const featuredRef = useFadeUp();
  const secondaryRef = useFadeUp();
  const additionalRef = useFadeUp();

  return (
    <>
      <Helmet>
        <title>Recursos | Catarina Veiga — Medicina Funcional</title>
        <meta name="description" content="Artigos educativos sobre biomarcadores, análises laboratoriais e conceitos de medicina funcional. Uma biblioteca curada para compreenderes melhor a tua saúde." />
        <link rel="canonical" href="https://catarinaveiga.lovable.app/recursos" />
      </Helmet>
      <Navbar />
      <main>
        {/* ── Header ── */}
        <section ref={heroRef} className="fade-up pt-40 pb-20 px-6" style={{ backgroundColor: "#F7F4EF" }}>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-5xl md:text-7xl font-light tracking-tight" style={{ color: "#1A1A1A" }}>
              Recursos
            </h1>
            <p className="mt-6 font-sans text-[15px] md:text-[17px] leading-relaxed max-w-xl mx-auto" style={{ color: "#6B6560" }}>
              Artigos educativos sobre biomarcadores, sintomas e conceitos de medicina funcional.
            </p>
          </div>
        </section>

        {/* ── Featured Article ── */}
        <section ref={featuredRef} className="fade-up px-6 pb-24" style={{ backgroundColor: "#F7F4EF" }}>
          <div className="max-w-5xl mx-auto">
            <Link to={featured.href} className="group block">
              <div className="relative overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-[320px] md:h-[520px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
                  <p className="font-sans text-[11px] tracking-[0.15em] uppercase mb-3" style={{ color: "hsl(33, 39%, 64%)" }}>
                    Artigo em destaque
                  </p>
                  <h2 className="font-serif text-2xl md:text-4xl font-light leading-tight text-white max-w-2xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 font-sans text-[14px] text-white/75 max-w-lg leading-relaxed hidden md:block">
                    {featured.subtitle}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* ── Thin divider ── */}
        <div className="max-w-5xl mx-auto" style={{ backgroundColor: "#F7F4EF" }}>
          <div className="h-px" style={{ backgroundColor: "#E8E2D9" }} />
        </div>

        {/* ── Secondary Articles (3 columns) ── */}
        <section ref={secondaryRef} className="fade-up px-6 py-24" style={{ backgroundColor: "#F7F4EF" }}>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            {secondary.map((article) => (
              <Link
                key={article.href}
                to={article.href}
                className="group block"
              >
                <div className="overflow-hidden mb-5">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-[220px] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>
                <h2 className="font-serif text-xl md:text-[22px] font-light leading-snug mb-3 transition-colors" style={{ color: "#1A1A1A" }}>
                  <span className="bg-gradient-to-r from-current to-current bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-all duration-300 group-hover:bg-[length:100%_1px]">
                    {article.title}
                  </span>
                </h2>
                <p className="font-sans text-[13px] leading-[1.7]" style={{ color: "#6B6560" }}>
                  {article.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── Thin divider ── */}
        <div className="max-w-5xl mx-auto" style={{ backgroundColor: "#F7F4EF" }}>
          <div className="h-px" style={{ backgroundColor: "#E8E2D9" }} />
        </div>

        {/* ── Additional Articles (minimal, image + title) ── */}
        <section ref={additionalRef} className="fade-up px-6 py-24" style={{ backgroundColor: "#F7F4EF" }}>
          <div className="max-w-5xl mx-auto">
            <p className="font-sans text-[11px] tracking-[0.15em] uppercase mb-12" style={{ color: "#9B7B5A" }}>
              Mais recursos
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {additional.map((article) => (
                <Link
                  key={article.href}
                  to={article.href}
                  className="group block"
                >
                  <div className="overflow-hidden mb-4">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-[200px] md:h-[260px] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>
                  <h2 className="font-serif text-lg md:text-xl font-light leading-snug transition-colors" style={{ color: "#1A1A1A" }}>
                    <span className="bg-gradient-to-r from-current to-current bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-all duration-300 group-hover:bg-[length:100%_1px]">
                      {article.title}
                    </span>
                  </h2>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <LegalBand />
      <Footer />
      <MobileCTA />
      <AcuityModal open={open} onClose={onClose} />
    </>
  );
};

export default Recursos;
