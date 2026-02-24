import { Button } from "@/components/ui/button";
import { openAcuity } from "@/hooks/useAcuityModal";
import { useLanguage } from "@/contexts/LanguageContext";

const MobileCTA = () => {
  const { t } = useLanguage();
  return (
    <div className="sticky-cta-mobile">
      <Button variant="hero" className="w-full" onClick={openAcuity}>
        {t("mobilecta.text")}
      </Button>
    </div>
  );
};

export default MobileCTA;
