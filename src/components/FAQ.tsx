import { useFadeUp } from "@/hooks/useFadeUp";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQ = () => {
  const ref = useFadeUp();
  const { t } = useLanguage();

  const faqs = [
    { q: t("faq.1.q"), a: t("faq.1.a") },
    { q: t("faq.2.q"), a: t("faq.2.a") },
    { q: t("faq.3.q"), a: t("faq.3.a") },
    { q: t("faq.4.q"), a: t("faq.4.a") },
    { q: t("faq.5.q"), a: t("faq.5.a") },
    { q: t("faq.6.q"), a: t("faq.6.a") },
    { q: t("faq.7.q"), a: t("faq.7.a") },
    { q: t("faq.8.q"), a: t("faq.8.a") },
  ];

  return (
    <section ref={ref} id="faq" className="bg-ivory section-padding">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12">
        <div className="fade-up md:col-span-2">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground md:sticky md:top-32">{t("faq.title")}</h2>
        </div>
        <div className="fade-up md:col-span-3">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-bone">
                <AccordionTrigger className="text-left font-sans font-normal text-foreground py-5 hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-muted-custom text-[15px] pb-5">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
