import { useFadeUp } from "@/hooks/useFadeUp";
import { Mail, Phone, Globe, MessageCircle } from "lucide-react";

const Contact = () => {
  const ref = useFadeUp();

  return (
    <section ref={ref} id="contacto" className="bg-ivory section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="fade-up label-uppercase text-amber mb-4">Contacto</p>
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground mb-4">
          Vamos conversar
        </h2>
        <p className="fade-up text-muted-custom mb-12 max-w-2xl">
          Entra em contacto para agendar a tua consulta ou para qualquer questão sobre o
          acompanhamento.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Tally Form embed */}
          <div className="fade-up">
            <iframe
              src="https://tally.so/r/ZjNMvy"
              width="100%"
              height="500"
              frameBorder={0}
              title="Formulário de contacto"
              className="border border-bone"
            />
          </div>

          {/* Info */}
          <div className="fade-up space-y-6">
            <div className="flex items-start gap-4">
              <Mail size={20} className="text-amber mt-1 flex-shrink-0" />
              <div>
                <p className="text-foreground">info@catarinaveiga.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={20} className="text-amber mt-1 flex-shrink-0" />
              <div>
                <p className="text-foreground">+351 917 823 906</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Globe size={20} className="text-amber mt-1 flex-shrink-0" />
              <div>
                <p className="text-foreground">Online · Portugal e internacional</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MessageCircle size={20} className="text-amber mt-1 flex-shrink-0" />
              <div>
                <p className="text-foreground">Consultas em Português e Inglês</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
