import { useFadeUp } from "@/hooks/useFadeUp";

interface SEOImpactQuoteProps {
  quote: string;
}

const SEOImpactQuote = ({ quote }: SEOImpactQuoteProps) => {
  const ref = useFadeUp();
  return (
    <section ref={ref} className="bg-almond/20 py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center fade-up">
        <p className="font-serif text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] font-light text-foreground leading-snug italic">
          "{quote}"
        </p>
      </div>
    </section>
  );
};

export default SEOImpactQuote;
