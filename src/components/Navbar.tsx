import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { openAcuity } from "@/hooks/useAcuityModal";
import logoIcon from "@/assets/logo-icon.png";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex items-center gap-0 font-sans text-xs uppercase tracking-wider">
      <button
        onClick={() => setLang("pt")}
        className={`px-1 transition-colors ${lang === "pt" ? "text-amber font-medium" : "text-muted-custom hover:text-foreground"}`}
      >
        PT
      </button>
      <span className="text-muted-custom">|</span>
      <button
        onClick={() => setLang("en")}
        className={`px-1 transition-colors ${lang === "en" ? "text-amber font-medium" : "text-muted-custom hover:text-foreground"}`}
      >
        EN
      </button>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: "Início", href: "/", isButton: false },
    { label: "Método", href: "/metodo", isButton: false },
    { label: t("nav.programa3m"), href: "/programa-fundacao", isButton: false },
    { label: "Sobre", href: "/sobre", isButton: false },
    { label: "Leitura de Análises", href: "https://leiturafuncionaldeanalises.lovable.app", isButton: false, external: true },
    { label: t("nav.blog"), href: "/blog", isButton: false },
    { label: "Candidatura", href: "/candidatura", isButton: true },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-ivory ${
        scrolled ? "border-b border-bone shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src={logoIcon} alt="Catarina Veiga" className="h-9 w-9" />
          <div className="flex flex-col">
            <span className="font-serif text-xl text-foreground leading-tight">
              Catarina Veiga
            </span>
            <span className="label-uppercase text-muted-custom text-[10px]">
              {t("nav.subtitle")}
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            link.isButton ? (
              <a
                key={link.href}
                href={link.href}
                className="inline-block bg-amber text-ivory text-sm font-sans px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            )
          ))}
        </div>

        {/* Desktop CTA + Language Toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageToggle />
          <Button
            variant="hero"
            size="sm"
            onClick={openAcuity}
          >
            {t("nav.cta")}
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden flex items-center gap-3">
          <LanguageToggle />
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-ivory border-t border-bone px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="block text-sm font-sans text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="hero"
            size="sm"
            className="w-full mt-4"
            onClick={() => { openAcuity(); setMobileOpen(false); }}
          >
            {t("nav.cta")}
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
