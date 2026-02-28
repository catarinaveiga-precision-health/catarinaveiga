import Navbar from "@/components/Navbar";
import LegalBand from "@/components/LegalBand";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect } from "react";

const AvisoLegal = () => {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="label-uppercase text-amber mb-4">{t("legal_page.label")}</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-12">{t("legal_page.title")}</h1>
          <div className="prose prose-lg max-w-none text-muted-custom leading-relaxed space-y-6 text-[15px]">
            <p>{t("legal_page.p1")}</p>
            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">{t("legal_page.h2_1")}</h2>
            <p>{t("legal_page.p2")}</p>
            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">{t("legal_page.h2_2")}</h2>
            <p>{t("legal_page.p3")}</p>
            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">{t("legal_page.h2_3")}</h2>
            <p>{t("legal_page.p4")}</p>
            <h2 className="font-serif text-2xl text-foreground mt-10 mb-4">{t("legal_page.h2_4")}</h2>
            <p>{t("legal_page.p5")}</p>
          </div>
        </div>
      </main>
      <LegalBand />
      <Footer />
    </div>
  );
};

export default AvisoLegal;
