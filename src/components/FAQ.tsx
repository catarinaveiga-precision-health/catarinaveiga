import { useFadeUp } from "@/hooks/useFadeUp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "As consultas são online?",
    a: "Sim. Todo o acompanhamento é realizado online via Zoom. Trabalho com clientes de Portugal e internacionalmente, sem limitações geográficas.",
  },
  {
    q: "Posso fazer a consulta em inglês?",
    a: "Sim. As consultas estão disponíveis em Português e Inglês. Toda a documentação pode ser fornecida no idioma da tua preferência.",
  },
  {
    q: "Porque é que o Programa 3M dura 3 meses?",
    a: "O corpo precisa de tempo para responder. O sistema hormonal demora 6 a 8 semanas a reagir a intervenções. A neuroplasticidade exige repetição consistente. Três meses é o mínimo para resultados mensuráveis e sustentáveis. Não é um número arbitrário. É fisiologia.",
  },
  {
    q: "A medicina funcional substitui o médico convencional?",
    a: "Não. É complementar. Quando necessário, pode ser recomendada consulta médica com a Dra. Patrícia Salvador para avaliação convencional, medicação ou referenciação.",
  },
  {
    q: "A Maya substitui um profissional de saúde?",
    a: "Não. A Maya é um sistema de apoio educativo entre consultas. Não substitui avaliação clínica, diagnóstico ou tratamento médico.",
  },
  {
    q: "Os meus dados de saúde estão protegidos?",
    a: "Sim. Toda a informação partilhada é tratada com total confidencialidade, em conformidade com o RGPD. Os dados não são partilhados com terceiros sem consentimento explícito.",
  },
  {
    q: "Como funciona o Programa de 3 meses e qual o investimento?",
    a: "O Programa 3M é proposto quando, após a consulta inicial, faz sentido clínico um acompanhamento mais prolongado. O investimento e estrutura são discutidos na consulta inicial, em função dos objectivos e complexidade do caso.",
  },
  {
    q: "O que devo trazer para a primeira consulta?",
    a: "Exames laboratoriais dos últimos 2 a 3 anos, lista de medicamentos e suplementos actuais. Será enviado um questionário estruturado antes da consulta.",
  },
];

const FAQ = () => {
  const ref = useFadeUp();

  return (
    <section ref={ref} id="faq" className="bg-ivory section-padding">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
        {/* Title - sticky on desktop */}
        <div className="fade-up md:col-span-2">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground md:sticky md:top-32">
            Perguntas frequentes
          </h2>
        </div>

        {/* Accordion */}
        <div className="fade-up md:col-span-3">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-bone">
                <AccordionTrigger className="text-left font-sans font-normal text-foreground py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-custom text-[15px] pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
