import { useState } from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    // Brevo integration placeholder
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="bg-dark-footer text-ivory/80 section-padding pb-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        {/* Col 1 - Logo */}
        <div>
          <p className="font-serif text-xl text-ivory mb-1">Catarina Veiga</p>
          <p className="label-uppercase text-muted-custom text-[10px] mb-4">
            Medicina Funcional · Integrativa
          </p>
          <p className="text-[14px] text-ivory/60 mb-4">
            Medicina Funcional Integrativa com foco na saúde da mulher. Acompanhamento exclusivamente
            online para Portugal e internacional.
          </p>
          <p className="text-[13px] text-ivory/50">Online · Português e Inglês</p>
        </div>

        {/* Col 2 - Nav */}
        <div>
          <p className="label-uppercase text-ivory text-xs mb-4">Navegação</p>
          <nav className="space-y-2">
            {["Abordagem", "Serviços", "Programa 3M", "Equipa", "Blog", "Contacto"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/ /g, "").replace("3m", "3m")}`}
                className="block text-[14px] text-ivory/60 hover:text-ivory transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>

        {/* Col 3 - Contact */}
        <div>
          <p className="label-uppercase text-ivory text-xs mb-4">Contacto</p>
          <div className="space-y-2 text-[14px] text-ivory/60">
            <p>info@catarinaveiga.com</p>
            <p>+351 917 823 906</p>
            <p>Online · Portugal e internacional</p>
            <p>Consultas em Português e Inglês</p>
          </div>
        </div>

        {/* Col 4 - Social + Newsletter */}
        <div>
          <p className="label-uppercase text-ivory text-xs mb-4">Redes Sociais</p>
          <div className="space-y-2 text-[14px] mb-6">
            <a
              href="https://instagram.com/catarina__veiga"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-ivory/60 hover:text-ivory transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-ivory/60 hover:text-ivory transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <p className="label-uppercase text-ivory text-xs mb-3">Newsletter</p>
          <form onSubmit={handleNewsletter} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="flex-1 bg-transparent border border-ivory/20 px-3 py-2 text-sm text-ivory placeholder:text-ivory/30 focus:outline-none focus:border-amber"
            />
            <Button variant="amber" size="sm" type="submit">
              Subscrever
            </Button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-ivory/10 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-ivory/40">
          <p>© 2025 Catarina Veiga · Todos os direitos reservados</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-ivory/60 transition-colors">Aviso Legal</a>
            <a href="#" className="hover:text-ivory/60 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-ivory/60 transition-colors">Termos de Serviço</a>
          </div>
        </div>
        <p className="text-center text-xs text-ivory/30 mt-4">
          Informação educativa. Não substitui avaliação médica profissional.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
