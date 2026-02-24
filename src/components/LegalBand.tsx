import { useLanguage } from "@/contexts/LanguageContext";

const LegalBand = () => {
  const { t } = useLanguage();
  return (
    <section className="bg-dark-legal py-6 px-6">
      <p className="text-center text-muted-foreground text-xs max-w-4xl mx-auto leading-relaxed mb-4">
        {t("legal.text")}
      </p>
      <div className="flex justify-center">
        <a
          href="https://www.livroreclamacoes.pt/Inicio/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-muted-foreground/60 hover:text-muted-foreground text-[11px] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>
          {t("legal.complaints")}
        </a>
      </div>
    </section>
  );
};

export default LegalBand;
