import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { openAcuity } from "@/hooks/useAcuityModal";
import logoIcon from "@/assets/logo-icon.png";

const navLinks = [
  { label: "Abordagem", href: "#abordagem" },
  { label: "Serviços", href: "#servicos" },
  { label: "Programa 3M", href: "#programa3m" },
  { label: "Equipa", href: "#equipa" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
              Medicina Funcional · Integrativa
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-sans text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button
            variant="hero"
            size="sm"
            onClick={openAcuity}
          >
            Agendar consulta inicial
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-ivory border-t border-bone px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
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
            Agendar consulta inicial
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
