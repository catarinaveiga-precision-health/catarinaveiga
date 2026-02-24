import { useFadeUp } from "@/hooks/useFadeUp";
import heroImage from "@/assets/catarina-about.jpeg";

const tags = [
  "Medicina Funcional",
  "Saúde da Mulher",
  "Medicina Integrativa",
  "Online",
  "PT",
  "EN",
];

const About = () => {
  const ref = useFadeUp();

  return (
    <section ref={ref} id="sobre" className="bg-bone section-padding">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-start">
        {/* Photo */}
        <div className="fade-up md:col-span-3">
          <img
            src={heroImage}
            alt="Catarina Veiga"
            className="w-full h-auto object-cover max-h-[600px]"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div className="fade-up md:col-span-2">
          <p className="label-uppercase text-amber mb-4">Sobre</p>
          <h2 className="font-serif text-4xl text-foreground mb-2">Catarina Veiga</h2>
          <p className="text-muted-custom text-sm mb-6">
            Especialista em Medicina Funcional Integrativa · Saúde da Mulher
          </p>

          <div className="space-y-4 text-muted-custom text-[15px]">
            <p>
              Com mais de 20 anos de experiência clínica, construí a minha prática em torno de uma
              convicção simples: os sintomas são mensagens, não o problema.
            </p>
            <p>
              A minha formação inclui formação em Psicologia (Universidade de Lisboa), formação em
              Neurobiologia (Universidade de Chicago), formação em Modulação Intestinal com o Prof.
              Murilo Pereira, e Interpretação de Análises Clínicas e Nutrição Funcional com o Dr.
              Gabriel de Carvalho.
            </p>
            <p>
              Durante quatro anos integrei a equipa da Omnos em Londres — uma das plataformas
              pioneiras de medicina funcional na Europa — onde assumi os papéis de Chief Resident of
              Microbiome e Academy Manager. Nesse percurso participei na arquitectura clínica da
              plataforma, liderei a integração do protocolo de microbioma, publiquei na revista ICAN
              e colaborei com especialistas internacionais de saúde.
            </p>
            <p>
              Hoje trabalho exclusivamente online com mulheres e homens de Portugal e
              internacionalmente, em Português e Inglês, à procura das causas que ficaram por
              encontrar.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border border-amber text-amber label-uppercase text-[10px] px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
