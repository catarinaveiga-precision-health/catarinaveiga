import { Button } from "@/components/ui/button";
import { openAcuity } from "@/hooks/useAcuityModal";
const MobileCTA = () => (
  <div className="sticky-cta-mobile">
    <Button
      variant="hero"
      className="w-full"
      onClick={openAcuity}
    >
      Agendar consulta inicial
    </Button>
  </div>
);

export default MobileCTA;
