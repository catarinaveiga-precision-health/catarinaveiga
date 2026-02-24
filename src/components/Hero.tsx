import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/catarina-hero.png";
import { useFadeUp } from "@/hooks/useFadeUp";

const Hero = () => {
  const ref = useFadeUp();

  return (
    <section ref={ref} className="bg-ivory pt-32 pb-20 md:pt-40 md:pb-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Text */}
        <div className="fade-up">
          <p className="label-uppercase text-amber mb-6">
            Online · Consultas em Português e Inglês
          </p>

          <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-foreground mb-6">
            A saúde que
            <br />
            te pertence,
            <br />
            finalmente.
          </h1>

          <p className="text-muted-custom max-w-lg mb-8">
            Investigamos as causas profundas do que sentes — não apenas os sintomas.
            Abordagem funcional integrativa baseada em dados e na tua história individual.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              variant="hero"
              size="lg"
              onClick={() => window.open("https://calendly.com/catarinaveiga", "_blank")}
            >
              Agendar consulta inicial
            </Button>
            <a
              href="#abordagem"
              className="inline-flex items-center gap-2 text-amber hover:text-amber-light transition-colors font-sans text-sm"
            >
              Descobre o que pode estar por trás dos teus sintomas
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8">
            {[
              { num: "20+", label: "Anos de experiência" },
              { num: "PT · EN", label: "Português e Inglês" },
              { num: "Online", label: "Portugal e internacional" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl md:text-4xl text-foreground">{stat.num}</p>
                <p className="label-uppercase text-muted-custom text-[11px] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="fade-up relative">
          <div className="relative overflow-hidden">
            <img
              src={heroImage}
              alt="Catarina Veiga - Medicina Funcional Integrativa"
              className="w-full h-auto object-cover md:translate-y-4"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
