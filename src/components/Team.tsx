import { useFadeUp } from "@/hooks/useFadeUp";
import catarinaTeam from "@/assets/catarina-team.png";
import patriciaTeam from "@/assets/patricia-team.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";
import { Sparkles, HeadsetIcon } from "lucide-react";

const Team = () => {
  const ref = useFadeUp();
  const { t } = useLanguage();

  return (
    <section ref={ref} id="equipa" className="bg-ivory section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="fade-up label-uppercase text-amber mb-4">{t("team.label")}</p>
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground mb-12">{t("team.title")}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1 — Catarina (destaque) */}
          <div className="fade-up bg-dark border border-amber p-8">
            <img src={catarinaTeam} alt="Catarina Veiga" className="w-16 h-16 rounded-full object-cover object-top mb-5" loading="lazy" />
            <h3 className="font-serif text-2xl text-ivory mb-1">Catarina Veiga</h3>
            <p className="label-uppercase text-amber text-xs mb-4">{t("team.catarina.role")}</p>
            <p className="text-ivory/80 text-sm leading-relaxed">{t("team.catarina.desc")}</p>
          </div>
          {/* Card 2 — Médica */}
          <div className="fade-up border border-bone p-8 bg-ivory">
            <img src={patriciaTeam} alt="Dra. Patrícia Salvador" className="w-16 h-16 rounded-full object-cover mb-5" loading="lazy" />
            <h3 className="font-serif text-2xl text-foreground mb-1">Dra. Patrícia Salvador</h3>
            <p className="label-uppercase text-amber text-xs mb-4">{t("team.patricia.role")}</p>
            <p className="text-muted-custom text-sm leading-relaxed">{t("team.patricia.desc")}</p>
          </div>
          {/* Card 3 — Maya (AI) */}
          <div className="fade-up border border-bone p-8 bg-ivory">
            <div className="w-16 h-16 rounded-full border border-amber/40 flex items-center justify-center mb-5">
              <Sparkles className="w-7 h-7 text-amber" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-2xl text-foreground mb-1">Maya</h3>
            <p className="label-uppercase text-amber text-xs mb-4">{t("team.maya.role")}</p>
            <p className="text-muted-custom text-sm leading-relaxed">{t("team.maya.desc")}</p>
            <p className="text-muted-custom text-xs italic mt-3">{t("team.maya.note")}</p>
          </div>
          {/* Card 4 — Equipa Administrativa */}
          <div className="fade-up border border-bone p-8 bg-ivory">
            <div className="w-16 h-16 rounded-full border border-amber/40 flex items-center justify-center mb-5">
              <HeadsetIcon className="w-7 h-7 text-amber" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-2xl text-foreground mb-1">{t("team.admin.title")}</h3>
            <p className="label-uppercase text-amber text-xs mb-4">{t("team.admin.role")}</p>
            <p className="text-muted-custom text-sm leading-relaxed">{t("team.admin.desc")}</p>
            <p className="text-muted-custom text-xs mt-3">{t("team.admin.whatsapp")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
