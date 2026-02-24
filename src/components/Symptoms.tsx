import { useFadeUp } from "@/hooks/useFadeUp";
import { ArrowRight } from "lucide-react";

const items = [
  "Tens fadiga persistente mesmo dormindo \"o suficiente\"",
  "Os teus exames saem \"normais\" mas continuas sem respostas",
  "Tens sintomas que variam com o ciclo — PMS, ansiedade pré-menstrual, energia baixa",
  "Lutas com inchaço, refluxo ou digestão irregular sem causa óbvia",
  "Sentes nevoeiro mental, irritabilidade ou dificuldade em lidar com stress",
  "Já experimentaste várias abordagens sem resultados duradouros",
  "Queres entender a causa raiz em vez de só mascarar sintomas",
];

const Symptoms = () => {
  const ref = useFadeUp();

  return (
    <section ref={ref} className="bg-bone section-padding">
      <div className="max-w-4xl mx-auto">
        <p className="fade-up label-uppercase text-amber mb-4">Para quem é</p>
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground mb-12">
          Reconheces-te nisto?
        </h2>

        <div className="fade-up space-y-5 mb-10">
          {items.map((item, i) => (
            <div key={i} className="border-l-[3px] border-amber pl-5 py-1">
              <p className="text-foreground">✓ {item}</p>
            </div>
          ))}
        </div>

        <p className="fade-up font-serif italic text-xl md:text-2xl text-foreground text-center mb-8">
          "Se te identificas com dois ou mais destes pontos, há provavelmente causas por investigar."
        </p>

        <div className="fade-up text-center">
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 text-amber hover:text-amber-light transition-colors font-sans text-sm"
          >
            Descobre o que pode estar por trás dos teus sintomas
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Symptoms;
