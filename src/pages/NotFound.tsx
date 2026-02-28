import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import LegalBand from "@/components/LegalBand";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="label-uppercase text-amber mb-4">404</p>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mb-6">{t("notfound.title")}</h1>
          <p className="text-muted-custom text-lg mb-8">{t("notfound.desc")}</p>
          <Link to="/" className="inline-flex items-center gap-2 text-amber hover:text-amber-light transition-colors font-sans text-sm">
            {t("notfound.back")}
          </Link>
        </div>
      </main>
      <LegalBand />
      <Footer />
    </div>
  );
};

export default NotFound;
