import { Button } from "@/components/ui/button";

const MobileCTA = () => (
  <div className="sticky-cta-mobile">
    <Button
      variant="hero"
      className="w-full"
      onClick={() => window.open("https://calendly.com/catarinaveiga", "_blank")}
    >
      Agendar consulta inicial
    </Button>
  </div>
);

export default MobileCTA;
