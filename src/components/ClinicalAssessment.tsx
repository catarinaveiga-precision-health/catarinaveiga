import { useFadeUp } from "@/hooks/useFadeUp";
import { Button } from "@/components/ui/button";

const ClinicalAssessment = () => {
  const ref = useFadeUp();

  return (
    <section ref={ref} className="bg-ivory section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <p className="fade-up label-uppercase text-amber mb-6">Avaliação inicial</p>
        <h2 className="fade-up font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
          Comece por compreender
          <br />
          a sua situação clínica.
        </h2>
        <p className="fade-up text-muted-custom mb-8 max-w-lg mx-auto">
          Questionário estruturado que permite compreender a sua situação e orientar os próximos passos.
        </p>
        <div className="fade-up">
          <Button
            variant="outline"
            size="lg"
            className="border-border text-foreground hover:bg-bone hover:text-foreground font-sans font-normal tracking-wide"
            asChild
          >
            <a href="https://triagem-saude.lovable.app/" target="_blank" rel="noopener noreferrer">
              Avaliação clínica inicial gratuita
            </a>
          </Button>
          <p className="text-muted-custom text-sm mt-4">Sem compromisso.</p>
        </div>
      </div>
    </section>
  );
};

export default ClinicalAssessment;
