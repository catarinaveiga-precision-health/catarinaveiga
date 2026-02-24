import { useFadeUp } from "@/hooks/useFadeUp";
import { Button } from "@/components/ui/button";
import { openAcuity } from "@/hooks/useAcuityModal";

const CTAFinal = () => {
  const ref = useFadeUp();

  return (
    <section ref={ref} className="bg-dark section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <p className="fade-up label-uppercase text-amber mb-6">Pronto/a para começar?</p>
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-ivory mb-10 leading-tight">
          A tua saúde
          <br />
          merece respostas.
        </h2>
        <div className="fade-up">
          <Button
            variant="heroAccent"
            size="lg"
            className="text-base px-10 py-6"
            onClick={openAcuity}
          >
            Agendar consulta inicial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;
