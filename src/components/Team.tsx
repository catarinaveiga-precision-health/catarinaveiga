import { useFadeUp } from "@/hooks/useFadeUp";
import catarinaTeam from "@/assets/catarina-team.png";
import patriciaTeam from "@/assets/patricia-team.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

const Team = () => {
  const ref = useFadeUp();
  const { t } = useLanguage();

  return (
    <section ref={ref} id="equipa" className="bg-ivory section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="fade-up label-uppercase text-amber mb-4">{t("team.label")}</p>
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground mb-12">{t("team.title")}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="fade-up bg-dark border border-amber p-8">
            <img src={catarinaTeam} alt="Catarina Veiga" className="w-24 h-24 rounded-full object-cover object-top mb-5" loading="lazy" />
            <h3 className="font-serif text-2xl text-ivory mb-1">Catarina Veiga</h3>
            <p className="label-uppercase text-amber text-xs mb-4">{t("team.catarina.role")}</p>
            <p className="text-ivory/80 text-[15px]">{t("team.catarina.desc")}</p>
          </div>
          <div className="fade-up border border-bone p-8 bg-ivory">
            <img src={patriciaTeam} alt="Dra. Patr\u00edcia Salvador" className="w-24 h-24 rounded-full object-cover mb-5" loading="lazy" />
            <h3 className="font-serif text-2xl text-foreground mb-1">Dra. Patr\u00edcia Salvador</h3>
            <p className="label-uppercase text-amber text-xs mb-4">{t("team.patricia.role")}</p>
            <p className="text-muted-custom text-[15px]">{t("team.patricia.desc")}</p>
          </div>
          <div className="fade-up border border-bone p-8 bg-ivory">
            <h3 className="font-serif text-2xl text-foreground mb-1">Maya</h3>
            <p className="label-uppercase text-amber text-xs mb-4">{t("team.maya.role")}</p>
            <p className="text-muted-custom text-[15px]">{t("team.maya.desc")}</p>
            <p className="text-muted-custom text-xs italic mt-3">{t("team.maya.note")}</p>
          </div>
          <div className="fade-up border border-bone p-8 bg-ivory relative">
            <span className="absolute top-4 right-4 label-uppercase text-xs text-muted-custom border border-bone px-2 py-1">{t("team.va.badge")}</span>
            <h3 className="font-serif text-2xl text-foreground mb-1">{t("team.va.title")}</h3>
            <p className="label-uppercase text-amber text-xs mb-4">{t("team.va.role")}</p>
            <p className="text-muted-custom text-[15px]">{t("team.va.desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
