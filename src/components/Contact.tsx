import { useFadeUp } from "@/hooks/useFadeUp";
import { useState, useEffect, useRef } from "react";
import { Mail, Phone, Globe, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const ref = useFadeUp();
  const { t } = useLanguage();
  const iframeRef = useRef<HTMLDivElement>(null);
  const [loadTally, setLoadTally] = useState(false);

  useEffect(() => {
    const el = iframeRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setLoadTally(true); obs.disconnect(); } },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="contacto" className="bg-background section-padding">
      <div className="max-w-6xl mx-auto">
        <p className="fade-up label-uppercase text-amber mb-4">{t("contact.label")}</p>
        <h2 className="fade-up font-serif text-4xl md:text-5xl text-foreground mb-4">{t("contact.title")}</h2>
        <p className="fade-up text-muted-foreground mb-12 max-w-2xl">{t("contact.desc")}</p>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="fade-up" ref={iframeRef}>
            {loadTally ? (
              <iframe src="https://tally.so/r/ZjNMvy" width="100%" height="500" frameBorder={0} title="Contact form" className="border border-border" loading="lazy" />
            ) : (
              <div className="border border-border bg-muted flex items-center justify-center" style={{ height: 500 }}>
                <p className="text-muted-foreground text-sm">A carregar formulário...</p>
              </div>
            )}
          </div>
          <div className="fade-up space-y-6">
            <div className="flex items-start gap-4">
              <Mail size={20} className="text-amber mt-1 flex-shrink-0" />
              <p className="text-foreground">info@catarinaveiga.com</p>
            </div>
            <div className="flex items-start gap-4">
              <Phone size={20} className="text-amber mt-1 flex-shrink-0" />
              <p className="text-foreground">+351 917 823 906</p>
            </div>
            <div className="flex items-start gap-4">
              <Globe size={20} className="text-amber mt-1 flex-shrink-0" />
              <p className="text-foreground">{t("contact.online")}</p>
            </div>
            <div className="flex items-start gap-4">
              <MessageCircle size={20} className="text-amber mt-1 flex-shrink-0" />
              <p className="text-foreground">{t("contact.langs")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
