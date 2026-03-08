import { useFadeUp } from "@/hooks/useFadeUp";
import { Button } from "@/components/ui/button";

const AnalysisTool = () => {
  const ref = useFadeUp();

  return (
    <section ref={ref} className="bg-bone section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <p className="fade-up label-uppercase text-amber mb-4">FERRAMENTA GRATUITA</p>
        <h2 className="fade-up font-serif text-3xl md:text-4xl text-foreground mb-6">
          Leitura Funcional de Análises
        </h2>
        <p className="fade-up text-muted-foreground mb-8">
          Introduz os valores das tuas análises e recebe uma leitura funcional dos principais sistemas do corpo. Gratuito. Demora 2 minutos.
        </p>
        <div className="fade-up">
          <Button variant="heroAccent" size="lg" asChild>
            <a href="https://leiturafuncionaldeanalises.lovable.app" target="_blank" rel="noopener noreferrer">
              Experimentar a ferramenta →
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AnalysisTool;
