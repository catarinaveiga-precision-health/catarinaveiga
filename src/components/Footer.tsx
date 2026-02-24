import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoFull from "@/assets/logo-full.png";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { t } = useLanguage();

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  const navItems = [
    { label: t("nav.abordagem"), href: "#abordagem" },
    { label: t("nav.servicos"), href: "#servicos" },
    { label: t("nav.programa3m"), href: "#programa3m" },
    { label: t("nav.equipa"), href: "#equipa" },
    { label: t("nav.blog"), href: "#blog" },
    { label: t("nav.contacto"), href: "#contacto" },
  ];

  return (
    <footer className="bg-dark-footer text-ivory/80 section-padding pb-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        <div>
          <img src={logoFull} alt="Catarina Veiga" className="h-12 mb-4 brightness-0 invert opacity-90" />
          <p className="text-[14px] text-ivory/60 mb-4">{t("footer.desc")}</p>
          <p className="text-[13px] text-ivory/50">{t("footer.online")}</p>
        </div>
        <div>
          <p className="label-uppercase text-ivory text-xs mb-4">{t("footer.nav")}</p>
          <nav className="space-y-2">
            {navItems.map((l) => (
              <a key={l.href} href={l.href} className="block text-[14px] text-ivory/60 hover:text-ivory transition-colors">{l.label}</a>
            ))}
          </nav>
        </div>
        <div>
          <p className="label-uppercase text-ivory text-xs mb-4">{t("footer.contact")}</p>
          <div className="space-y-2 text-[14px] text-ivory/60">
            <p>info@catarinaveiga.com</p>
            <p>+351 917 823 906</p>
            <p>{t("footer.international")}</p>
            <p>{t("footer.consultations")}</p>
          </div>
        </div>
        <div>
          <p className="label-uppercase text-ivory text-xs mb-4">{t("footer.social")}</p>
          <div className="space-y-2 text-[14px] mb-6">
            <a href="https://instagram.com/catarina__veiga" target="_blank" rel="noopener noreferrer" className="block text-ivory/60 hover:text-ivory transition-colors">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="block text-ivory/60 hover:text-ivory transition-colors">LinkedIn</a>
          </div>
          <p className="label-uppercase text-ivory text-xs mb-3">{t("footer.newsletter")}</p>
          <form onSubmit={handleNewsletter} className="flex gap-2">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="flex-1 bg-transparent border border-ivory/20 px-3 py-2 text-sm text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-amber" />
            <Button variant="amber" size="sm" type="submit">{t("footer.subscribe")}</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-ivory/10 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ivory/40">
          <p>{t("footer.copyright")}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-ivory/60 transition-colors">{t("footer.legal")}</a>
            <a href="#" className="hover:text-ivory/60 transition-colors">{t("footer.privacy")}</a>
            <a href="#" className="hover:text-ivory/60 transition-colors">{t("footer.terms")}</a>
          </div>
        </div>
        <p className="text-center text-xs text-ivory/30 mt-4">{t("footer.disclaimer")}</p>
      </div>
    </footer>
  );
};

export default Footer;
