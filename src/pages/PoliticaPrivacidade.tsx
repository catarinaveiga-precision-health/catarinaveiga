import Navbar from "@/components/Navbar";
import LegalBand from "@/components/LegalBand";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

const PoliticaPrivacidade = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="label-uppercase text-amber mb-4">{t("privacy.label")}</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-12">{t("privacy.title")}</h1>
          <div className="prose prose-lg max-w-none text-muted-custom leading-relaxed space-y-6 text-[15px]">
            <p>{t("privacy.intro")}</p>
            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">{t("privacy.h2_1")}</h2>
            <p>{t("privacy.p1")}</p>
            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">{t("privacy.h2_2")}</h2>
            <p>{t("privacy.p2")}</p>
            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">{t("privacy.h2_3")}</h2>
            <p>{t("privacy.p3")}</p>
            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">{t("privacy.h2_4")}</h2>
            <p>{t("privacy.p4")}</p>
            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">{t("privacy.h2_5")}</h2>
            <p>{t("privacy.p5")}</p>
            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">{t("privacy.h2_6")}</h2>
            <p>{t("privacy.p6")}</p>
          </div>
        </div>
      </main>
      <LegalBand />
      <Footer />
    </div>
  );
};

export default PoliticaPrivacidade;
