import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "pt" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};

const translations: Record<string, Record<Language, string>> = {
  // Navbar
  "nav.abordagem": { pt: "Abordagem", en: "Approach" },
  "nav.servicos": { pt: "Servi\u00e7os", en: "Services" },
  "nav.programa3m": { pt: "Programa 3M", en: "3M Program" },
  "nav.equipa": { pt: "Equipa", en: "Team" },
  "nav.blog": { pt: "Blog", en: "Blog" },
  "nav.contacto": { pt: "Contacto", en: "Contact" },
  "nav.subtitle": { pt: "Medicina Funcional \u00b7 Integrativa", en: "Functional \u00b7 Integrative Medicine" },
  "nav.cta": { pt: "Agendar consulta inicial", en: "Book initial consultation" },

  // Hero
  "hero.label": { pt: "Online \u00b7 Consultas em Portugu\u00eas e Ingl\u00eas", en: "Online \u00b7 Consultations in Portuguese and English" },
  "hero.title1": { pt: "A sa\u00fade que", en: "The health" },
  "hero.title2": { pt: "te pertence,", en: "you deserve," },
  "hero.title3": { pt: "finalmente.", en: "finally." },
  "hero.desc": { pt: "Investigamos as causas profundas do que sentes \u2014 n\u00e3o apenas os sintomas. Abordagem funcional integrativa baseada em dados e na tua hist\u00f3ria individual.", en: "We investigate the root causes of what you feel \u2014 not just the symptoms. Integrative functional approach based on data and your individual history." },
  "hero.cta": { pt: "Agendar consulta inicial", en: "Book initial consultation" },
  "hero.cta2": { pt: "Avalia\u00e7\u00e3o cl\u00ednica inicial gratuita", en: "Free initial clinical assessment" },
  "hero.cta2desc": { pt: "Question\u00e1rio estruturado que permite compreender a sua situa\u00e7\u00e3o e orientar os pr\u00f3ximos passos.", en: "Structured questionnaire to understand your situation and guide next steps." },
  "hero.stat1num": { pt: "20+", en: "20+" },
  "hero.stat1label": { pt: "Anos de experi\u00eancia", en: "Years of experience" },
  "hero.stat2num": { pt: "PT \u00b7 EN", en: "PT \u00b7 EN" },
  "hero.stat2label": { pt: "Portugu\u00eas e Ingl\u00eas", en: "Portuguese and English" },
  "hero.stat3num": { pt: "Online", en: "Online" },
  "hero.stat3label": { pt: "Portugal e internacional", en: "Portugal and international" },

  // TrustBand
  "trustband.desc": { pt: "Forma\u00e7\u00e3o cont\u00ednua e colabora\u00e7\u00e3o em Portugal e Reino Unido em sa\u00fade funcional e integrativa", en: "Continuous training and collaboration in Portugal and the UK in functional and integrative health" },

  // Marquee
  "marquee.0": { pt: "Medicina Funcional", en: "Functional Medicine" },
  "marquee.1": { pt: "Sa\u00fade Hormonal", en: "Hormonal Health" },
  "marquee.2": { pt: "Tir\u00f3ide", en: "Thyroid" },
  "marquee.3": { pt: "Perimenopausa", en: "Perimenopause" },
  "marquee.4": { pt: "Fadiga Cr\u00f3nica", en: "Chronic Fatigue" },
  "marquee.5": { pt: "Sa\u00fade Intestinal", en: "Gut Health" },
  "marquee.6": { pt: "Autoimunidade", en: "Autoimmunity" },
  "marquee.7": { pt: "Endometriose", en: "Endometriosis" },

  // Manifesto
  "manifesto.label": { pt: "A nossa filosofia", en: "Our philosophy" },
  "manifesto.quote1": { pt: "\u201COs teus exames s\u00e3o normais.\u201D", en: "\u201CYour tests are normal.\u201D" },
  "manifesto.quote2": { pt: "Mas tu sabes que n\u00e3o te sentes normal.", en: "But you know you don\u2019t feel normal." },
  "manifesto.p1": { pt: "A medicina convencional usa intervalos de refer\u00eancia definidos para popula\u00e7\u00f5es gerais. A medicina funcional usa crit\u00e9rios funcionais avan\u00e7ados \u2014 mais exigentes, mais pr\u00f3ximos do que o teu corpo precisa para funcionar de forma \u00f3ptima.", en: "Conventional medicine uses reference ranges defined for general populations. Functional medicine uses advanced functional criteria \u2014 more demanding, closer to what your body needs to function optimally." },
  "manifesto.p2": { pt: "A diferen\u00e7a entre \u201Cnormal\u201D e \u201C\u00f3ptimo\u201D pode ser a explica\u00e7\u00e3o para anos de sintomas sem resposta. O nosso trabalho come\u00e7a exactamente a\u00ed.", en: "The difference between \u201Cnormal\u201D and \u201Coptimal\u201D can explain years of unanswered symptoms. Our work begins exactly there." },

  // Pillars
  "pillars.label": { pt: "Abordagem", en: "Approach" },
  "pillars.title": { pt: "Como trabalhamos", en: "How we work" },
  "pillars.1.title": { pt: "Investiga\u00e7\u00e3o Profunda", en: "Deep Investigation" },
  "pillars.1.desc": { pt: "An\u00e1lises com crit\u00e9rios funcionais avan\u00e7ados. Olhamos para o quadro completo, n\u00e3o apenas para valores isolados.", en: "Analysis with advanced functional criteria. We look at the full picture, not just isolated values." },
  "pillars.2.title": { pt: "Protocolo Personalizado", en: "Personalised Protocol" },
  "pillars.2.desc": { pt: "Nutri\u00e7\u00e3o, suplementa\u00e7\u00e3o e estilo de vida constru\u00eddos para a tua fisiologia espec\u00edfica.", en: "Nutrition, supplementation, and lifestyle built for your specific physiology." },
  "pillars.3.title": { pt: "Monitoriza\u00e7\u00e3o Cont\u00ednua", en: "Continuous Monitoring" },
  "pillars.3.desc": { pt: "Reavalia\u00e7\u00e3o constante guiada por dados. O protocolo ajusta-se \u00e0 medida que o teu corpo responde.", en: "Constant reassessment guided by data. The protocol adjusts as your body responds." },
  "pillars.4.title": { pt: "Autonomia Informada", en: "Informed Autonomy" },
  "pillars.4.desc": { pt: "Literacia em sa\u00fade como parte do acompanhamento. Entendes o que est\u00e1 a acontecer e porqu\u00ea.", en: "Health literacy as part of the follow-up. You understand what\u2019s happening and why." },

  // Symptoms
  "symptoms.label": { pt: "Para quem \u00e9", en: "Who is it for" },
  "symptoms.title": { pt: "Reconheces-te nisto?", en: "Do you recognise yourself?" },
  "symptoms.1": { pt: "Tens fadiga persistente mesmo dormindo \"o suficiente\"", en: "You have persistent fatigue even though you sleep \"enough\"" },
  "symptoms.2": { pt: "Os teus exames saem \"normais\" mas continuas sem respostas", en: "Your tests come back \"normal\" but you still have no answers" },
  "symptoms.3": { pt: "Tens sintomas que variam com o ciclo \u2014 PMS, ansiedade pr\u00e9-menstrual, energia baixa", en: "You have symptoms that vary with your cycle \u2014 PMS, premenstrual anxiety, low energy" },
  "symptoms.4": { pt: "Lutas com incha\u00e7o, refluxo ou digest\u00e3o irregular sem causa \u00f3bvia", en: "You struggle with bloating, reflux, or irregular digestion with no obvious cause" },
  "symptoms.5": { pt: "Sentes nevoeiro mental, irritabilidade ou dificuldade em lidar com stress", en: "You feel brain fog, irritability, or difficulty coping with stress" },
  "symptoms.6": { pt: "J\u00e1 experimentaste v\u00e1rias abordagens sem resultados duradouros", en: "You\u2019ve tried various approaches without lasting results" },
  "symptoms.7": { pt: "Queres entender a causa raiz em vez de s\u00f3 mascarar sintomas", en: "You want to understand the root cause instead of just masking symptoms" },
  "symptoms.quote": { pt: "\u201CSe te identificas com dois ou mais destes pontos, h\u00e1 provavelmente causas por investigar.\u201D", en: "\u201CIf you identify with two or more of these points, there are probably causes to investigate.\u201D" },
  "symptoms.link": { pt: "Descobre o que pode estar por tr\u00e1s dos teus sintomas", en: "Discover what may be behind your symptoms" },

  // Testimonials
  "testimonials.label": { pt: "O que dizem", en: "What they say" },
  "testimonials.title": { pt: "Experi\u00eancias reais", en: "Real experiences" },
  "testimonials.1.quote": { pt: "Durante quatro anos fui assistida por m\u00e9dicos de diversas especialidades sem resposta. Com a Catarina, em alguns meses, recuperei n\u00edveis de energia que j\u00e1 me permitem um funcionamento normal no meu dia a dia.", en: "For four years I was seen by doctors of various specialities without answers. With Catarina, in a few months, I recovered energy levels that allow me to function normally in my daily life." },
  "testimonials.2.quote": { pt: "Antes de iniciar o acompanhamento sofria com problemas digestivos recorrentes. Com as altera\u00e7\u00f5es terap\u00eauticas notei uma melhoria significativa. Sinto-me leve e mais confort\u00e1vel ap\u00f3s as refei\u00e7\u00f5es.", en: "Before starting the follow-up I suffered from recurring digestive problems. With the therapeutic changes I noticed a significant improvement. I feel lighter and more comfortable after meals." },
  "testimonials.3.quote": { pt: "Experimentei melhorias significativas na minha sa\u00fade. Sinto-me verdadeiramente grata por ter encontrado algu\u00e9m t\u00e3o comprometida em ajudar a alcan\u00e7ar resultados reais e duradouros.", en: "I experienced significant improvements in my health. I feel truly grateful for having found someone so committed to helping achieve real and lasting results." },

  // Services
  "services.label": { pt: "Servi\u00e7os", en: "Services" },
  "services.title": { pt: "Como posso trabalhar contigo", en: "How I can work with you" },
  "services.subtitle": { pt: "Acompanhamento exclusivamente online \u00b7 Portugal e internacional \u00b7 Portugu\u00eas e Ingl\u00eas", en: "Online-only follow-up \u00b7 Portugal and international \u00b7 Portuguese and English" },
  "services.card1.duration": { pt: "90 Minutos", en: "90 Minutes" },
  "services.card1.title": { pt: "Consulta Inicial", en: "Initial Consultation" },
  "services.card1.desc": { pt: "Hist\u00f3ria cl\u00ednica funcional completa, avalia\u00e7\u00e3o de sintomas e sistemas, defini\u00e7\u00e3o do plano de investiga\u00e7\u00e3o.", en: "Complete functional clinical history, symptom and system assessment, investigation plan definition." },
  "services.card1.price": { pt: "Investimento: 120\u20ac", en: "Investment: \u20ac120" },
  "services.card1.cta": { pt: "Agendar", en: "Book" },
  "services.card1.note": { pt: "Esta consulta \u00e9 independente e n\u00e3o implica compromisso com programas posteriores.", en: "This consultation is independent and does not imply commitment to subsequent programs." },
  "services.card2.label": { pt: "Programa Signature", en: "Signature Program" },
  "services.card2.title": { pt: "Programa 3M", en: "3M Program" },
  "services.card2.desc": { pt: "Acompanhamento intensivo de 3 meses com protocolo personalizado, consultas estruturadas e reavalia\u00e7\u00e3o final.", en: "3-month intensive follow-up with personalised protocol, structured consultations, and final reassessment." },
  "services.card2.note": { pt: "Programa personalizado ap\u00f3s avalia\u00e7\u00e3o cl\u00ednica inicial.", en: "Personalised program after initial clinical assessment." },
  "services.card2.cta": { pt: "Saber mais", en: "Learn more" },
  "services.card3.label": { pt: "Assessment Completo", en: "Complete Assessment" },
  "services.card3.title": { pt: "Avalia\u00e7\u00e3o de Sa\u00fade", en: "Health Assessment" },
  "services.card3.desc": { pt: "Relat\u00f3rio funcional completo com an\u00e1lises avan\u00e7adas e recomenda\u00e7\u00f5es personalizadas.", en: "Complete functional report with advanced analyses and personalised recommendations." },
  "services.card3.note": { pt: "Investimento sob consulta.", en: "Investment upon consultation." },
  "services.card3.cta": { pt: "Saber mais", en: "Learn more" },

  // Program3M
  "program3m.badge": { pt: "Programa Signature", en: "Signature Program" },
  "program3m.title": { pt: "Programa 3M", en: "3M Program" },
  "program3m.desc": { pt: "Tr\u00eas meses de acompanhamento real. Um protocolo constru\u00eddo \u00e0 tua medida, com a profundidade que o teu corpo merece.", en: "Three months of real follow-up. A protocol built to your measure, with the depth your body deserves." },
  "program3m.desc2": { pt: "Se fizer sentido ap\u00f3s a consulta inicial, proponho um plano estruturado para os teus sintomas espec\u00edficos. A decis\u00e3o \u00e9 sempre tua, depois de saberes exactamente o que envolve.", en: "If it makes sense after the initial consultation, I propose a structured plan for your specific symptoms. The decision is always yours, after knowing exactly what it involves." },
  "program3m.why": { pt: "Porque 3 meses?", en: "Why 3 months?" },
  "program3m.why.p1": { pt: "O corpo n\u00e3o muda em 30 dias. O sistema hormonal precisa de pelo menos 6 a 8 semanas para responder a interven\u00e7\u00f5es. A neuroplasticidade \u2014 a capacidade de criar novos padr\u00f5es de comportamento e resposta \u2014 exige repeti\u00e7\u00e3o consistente ao longo do tempo.", en: "The body doesn\u2019t change in 30 days. The hormonal system needs at least 6 to 8 weeks to respond to interventions. Neuroplasticity \u2014 the ability to create new patterns of behaviour and response \u2014 requires consistent repetition over time." },
  "program3m.why.p2": { pt: "Tr\u00eas meses \u00e9 o m\u00ednimo para resultados mensur\u00e1veis, compar\u00e1veis e sustent\u00e1veis. N\u00e3o \u00e9 um n\u00famero arbitr\u00e1rio. \u00c9 fisiologia.", en: "Three months is the minimum for measurable, comparable, and sustainable results. It\u2019s not an arbitrary number. It\u2019s physiology." },
  "program3m.f1.title": { pt: "Consultas estruturadas", en: "Structured consultations" },
  "program3m.f1.desc": { pt: "Sess\u00f5es de revis\u00e3o em momentos-chave do protocolo", en: "Review sessions at key protocol moments" },
  "program3m.f2.title": { pt: "An\u00e1lises com crit\u00e9rios funcionais avan\u00e7ados", en: "Advanced functional criteria analyses" },
  "program3m.f2.desc": { pt: "Marcadores al\u00e9m do padr\u00e3o convencional", en: "Markers beyond the conventional standard" },
  "program3m.f3.title": { pt: "Protocolo personalizado", en: "Personalised protocol" },
  "program3m.f3.desc": { pt: "Nutri\u00e7\u00e3o, suplementa\u00e7\u00e3o e estilo de vida \u00e0 medida", en: "Nutrition, supplementation, and lifestyle tailored to you" },
  "program3m.f4.title": { pt: "Suporte Maya", en: "Maya Support" },
  "program3m.f4.desc": { pt: "Agente AI de nutri\u00e7\u00e3o funcional para apoio educativo entre consultas", en: "AI functional nutrition agent for educational support between consultations" },
  "program3m.f5.title": { pt: "Reavalia\u00e7\u00e3o final", en: "Final reassessment" },
  "program3m.f5.desc": { pt: "An\u00e1lise comparativa completa dos 3 meses", en: "Complete comparative analysis of the 3 months" },
  "program3m.f6.title": { pt: "Materiais educativos", en: "Educational materials" },
  "program3m.f6.desc": { pt: "Recursos e guias para autonomia em sa\u00fade", en: "Resources and guides for health autonomy" },
  "program3m.cta": { pt: "Candidatar-me", en: "Apply" },

  // Specializations
  "specs.label": { pt: "Especialidades", en: "Specialisations" },
  "specs.title": { pt: "O que investigamos e tratamos", en: "What we investigate and treat" },
  "specs.0": { pt: "Sa\u00fade Hormonal", en: "Hormonal Health" },
  "specs.1": { pt: "Perimenopausa", en: "Perimenopause" },
  "specs.2": { pt: "Tir\u00f3ide", en: "Thyroid" },
  "specs.3": { pt: "Fadiga Cr\u00f3nica", en: "Chronic Fatigue" },
  "specs.4": { pt: "Autoimunidade", en: "Autoimmunity" },
  "specs.5": { pt: "Sa\u00fade Intestinal", en: "Gut Health" },

  // Process
  "process.label": { pt: "Processo", en: "Process" },
  "process.title": { pt: "O teu percurso", en: "Your journey" },
  "process.1.title": { pt: "Contacto inicial", en: "Initial contact" },
  "process.1.desc": { pt: "Conversamos sobre as tuas necessidades", en: "We discuss your needs" },
  "process.2.title": { pt: "Consulta inicial", en: "Initial consultation" },
  "process.2.desc": { pt: "Avalia\u00e7\u00e3o cl\u00ednica completa (90 min) via Zoom", en: "Complete clinical assessment (90 min) via Zoom" },
  "process.3.title": { pt: "An\u00e1lises", en: "Analyses" },
  "process.3.desc": { pt: "Investiga\u00e7\u00e3o laboratorial funcional personalizada", en: "Personalised functional laboratory investigation" },
  "process.4.title": { pt: "Protocolo", en: "Protocol" },
  "process.4.desc": { pt: "Plano personalizado baseado em dados e hist\u00f3ria cl\u00ednica", en: "Personalised plan based on data and clinical history" },
  "process.5.title": { pt: "Acompanhamento", en: "Follow-up" },
  "process.5.desc": { pt: "Monitoriza\u00e7\u00e3o e ajustes cont\u00ednuos ao longo do tempo", en: "Monitoring and continuous adjustments over time" },

  // ClinicalAssessment
  "assessment.label": { pt: "Avalia\u00e7\u00e3o inicial", en: "Initial assessment" },
  "assessment.title1": { pt: "Comece por compreender", en: "Start by understanding" },
  "assessment.title2": { pt: "a sua situa\u00e7\u00e3o cl\u00ednica.", en: "your clinical situation." },
  "assessment.desc": { pt: "Question\u00e1rio estruturado que permite compreender a sua situa\u00e7\u00e3o e orientar os pr\u00f3ximos passos.", en: "Structured questionnaire to understand your situation and guide next steps." },
  "assessment.cta": { pt: "Avalia\u00e7\u00e3o cl\u00ednica inicial gratuita", en: "Free initial clinical assessment" },
  "assessment.note": { pt: "Sem compromisso.", en: "No commitment." },

  // Team
  "team.label": { pt: "Equipa", en: "Team" },
  "team.title": { pt: "As pessoas por trás do acompanhamento", en: "The people behind the follow-up" },
  "team.catarina.role": { pt: "Medicina Funcional Integrativa · Saúde da Mulher", en: "Integrative Functional Medicine · Women's Health" },
  "team.catarina.desc": { pt: "Avaliação integrativa, interpretação funcional avançada e coordenação de todo o acompanhamento.\nMais de 20 anos de experiência clínica focada na saúde da mulher.", en: "Integrative assessment, advanced functional interpretation, and coordination of all follow-up.\nOver 20 years of clinical experience focused on women's health." },
  "team.patricia.role": { pt: "Médica de Clínica Geral · Abordagem Integrativa", en: "General Practitioner · Integrative Approach" },
  "team.patricia.desc": { pt: "Médica que integra a prática clínica convencional com uma visão global da pessoa — física, mental e emocional.\n\nValoriza a escuta ativa, a compreensão do contexto de vida e a construção de decisões partilhadas, não se focando apenas na doença ou nos sintomas isolados.\n\nAtua quando é necessária avaliação médica formal: prescrição de medicação, pedidos de exames, orientação diagnóstica ou referenciação para outras especialidades.\n\nO objetivo é complementar o acompanhamento integrativo com segurança clínica e visão preventiva ao longo do tempo.", en: "A doctor who integrates conventional clinical practice with a holistic view of the person — physical, mental, and emotional.\n\nValues active listening, understanding life context, and building shared decisions, not focusing solely on the disease or isolated symptoms.\n\nActs when formal medical assessment is needed: prescribing medication, ordering tests, diagnostic guidance, or referral to other specialities.\n\nThe goal is to complement integrative follow-up with clinical safety and a preventive vision over time." },
  "team.maya.role": { pt: "Agente AI de Nutrição Funcional", en: "AI Functional Nutrition Agent" },
  "team.maya.desc": { pt: "Sistema de apoio educativo e organizacional disponível entre consultas.\nAjuda na compreensão do plano, monitorização de hábitos e esclarecimento de dúvidas do dia a dia.", en: "Educational and organisational support system available between consultations.\nHelps with understanding the plan, habit monitoring, and clarifying daily questions." },
  "team.maya.note": { pt: "A Maya não substitui avaliação clínica, diagnóstico ou tratamento.", en: "Maya does not replace clinical assessment, diagnosis, or treatment." },
  "team.admin.title": { pt: "Coordenação & Apoio ao Cliente", en: "Coordination & Client Support" },
  "team.admin.role": { pt: "Equipa Administrativa", en: "Administrative Team" },
  "team.admin.desc": { pt: "Gestão de marcações, comunicação e acompanhamento administrativo para garantir uma experiência fluida ao longo de todo o processo.\n\nApoio no primeiro contacto, organização das consultas, envio de informação prática e facilitação da comunicação entre cliente e equipa clínica.\n\nO objetivo é que possas focar-te apenas no teu percurso de saúde, sem fricção logística.", en: "Booking management, communication, and administrative follow-up to ensure a smooth experience throughout the entire process.\n\nSupport from first contact, organising consultations, sending practical information, and facilitating communication between client and clinical team.\n\nThe goal is for you to focus solely on your health journey, without logistical friction." },

  // About
  "about.label": { pt: "Sobre", en: "About" },
  "about.role": { pt: "Especialista em Medicina Funcional Integrativa \u00b7 Sa\u00fade da Mulher", en: "Specialist in Integrative Functional Medicine \u00b7 Women\u2019s Health" },
  "about.p1": { pt: "Com mais de 20 anos de experi\u00eancia cl\u00ednica, constru\u00ed a minha pr\u00e1tica em torno de uma convic\u00e7\u00e3o simples: os sintomas s\u00e3o mensagens, n\u00e3o o problema.", en: "With over 20 years of clinical experience, I built my practice around a simple conviction: symptoms are messages, not the problem." },
  "about.p2": { pt: "A minha forma\u00e7\u00e3o inclui forma\u00e7\u00e3o em Psicologia (Universidade de Lisboa), forma\u00e7\u00e3o em Neurobiologia (Universidade de Chicago), forma\u00e7\u00e3o em Modula\u00e7\u00e3o Intestinal com o Prof. Murilo Pereira, e Interpreta\u00e7\u00e3o de An\u00e1lises Cl\u00ednicas e Nutri\u00e7\u00e3o Funcional com o Dr. Gabriel de Carvalho.", en: "My training includes Psychology (University of Lisbon), Neurobiology (University of Chicago), Intestinal Modulation with Prof. Murilo Pereira, and Clinical Analysis Interpretation and Functional Nutrition with Dr. Gabriel de Carvalho." },
  "about.p3": { pt: "Durante quatro anos integrei a equipa da Omnos em Londres \u2014 uma das plataformas pioneiras de medicina funcional na Europa \u2014 onde assumi os pap\u00e9is de Chief Resident of Microbiome e Academy Manager. Nesse percurso participei na arquitectura cl\u00ednica da plataforma, liderei a integra\u00e7\u00e3o do protocolo de microbioma, publiquei na revista ICAN e colaborei com especialistas internacionais de sa\u00fade.", en: "For four years I was part of the Omnos team in London \u2014 one of the pioneering functional medicine platforms in Europe \u2014 where I served as Chief Resident of Microbiome and Academy Manager. During this time, I participated in the platform\u2019s clinical architecture, led the microbiome protocol integration, published in ICAN journal, and collaborated with international health specialists." },
  "about.p4": { pt: "Hoje trabalho exclusivamente online com mulheres e homens de Portugal e internacionalmente, em Portugu\u00eas e Ingl\u00eas, \u00e0 procura das causas que ficaram por encontrar.", en: "Today I work exclusively online with women and men from Portugal and internationally, in Portuguese and English, searching for the causes that remain to be found." },

  // FAQ
  "faq.title": { pt: "Perguntas frequentes", en: "Frequently asked questions" },
  "faq.1.q": { pt: "As consultas s\u00e3o online?", en: "Are consultations online?" },
  "faq.1.a": { pt: "Sim. Todo o acompanhamento \u00e9 realizado online via Zoom. Trabalho com clientes de Portugal e internacionalmente, sem limita\u00e7\u00f5es geogr\u00e1ficas.", en: "Yes. All follow-up is done online via Zoom. I work with clients from Portugal and internationally, without geographic limitations." },
  "faq.2.q": { pt: "Posso fazer a consulta em ingl\u00eas?", en: "Can I have the consultation in English?" },
  "faq.2.a": { pt: "Sim. As consultas est\u00e3o dispon\u00edveis em Portugu\u00eas e Ingl\u00eas. Toda a documenta\u00e7\u00e3o pode ser fornecida no idioma da tua prefer\u00eancia.", en: "Yes. Consultations are available in Portuguese and English. All documentation can be provided in your preferred language." },
  "faq.3.q": { pt: "Porque \u00e9 que o Programa 3M dura 3 meses?", en: "Why does the 3M Program last 3 months?" },
  "faq.3.a": { pt: "O corpo precisa de tempo para responder. O sistema hormonal demora 6 a 8 semanas a reagir a interven\u00e7\u00f5es. A neuroplasticidade exige repeti\u00e7\u00e3o consistente. Tr\u00eas meses \u00e9 o m\u00ednimo para resultados mensur\u00e1veis e sustent\u00e1veis. N\u00e3o \u00e9 um n\u00famero arbitr\u00e1rio. \u00c9 fisiologia.", en: "The body needs time to respond. The hormonal system takes 6 to 8 weeks to react to interventions. Neuroplasticity requires consistent repetition. Three months is the minimum for measurable and sustainable results. It\u2019s not an arbitrary number. It\u2019s physiology." },
  "faq.4.q": { pt: "A medicina funcional substitui o m\u00e9dico convencional?", en: "Does functional medicine replace conventional doctors?" },
  "faq.4.a": { pt: "N\u00e3o. \u00c9 complementar. Quando necess\u00e1rio, pode ser recomendada consulta m\u00e9dica com a Dra. Patr\u00edcia Salvador para avalia\u00e7\u00e3o convencional, medica\u00e7\u00e3o ou referencia\u00e7\u00e3o.", en: "No. It\u2019s complementary. When necessary, a medical consultation with Dr. Patr\u00edcia Salvador may be recommended for conventional assessment, medication, or referral." },
  "faq.5.q": { pt: "A Maya substitui um profissional de sa\u00fade?", en: "Does Maya replace a health professional?" },
  "faq.5.a": { pt: "N\u00e3o. A Maya \u00e9 um sistema de apoio educativo entre consultas. N\u00e3o substitui avalia\u00e7\u00e3o cl\u00ednica, diagn\u00f3stico ou tratamento m\u00e9dico.", en: "No. Maya is an educational support system between consultations. It does not replace clinical assessment, diagnosis, or medical treatment." },
  "faq.6.q": { pt: "Os meus dados de sa\u00fade est\u00e3o protegidos?", en: "Is my health data protected?" },
  "faq.6.a": { pt: "Sim. Toda a informa\u00e7\u00e3o partilhada \u00e9 tratada com total confidencialidade, em conformidade com o RGPD. Os dados n\u00e3o s\u00e3o partilhados com terceiros sem consentimento expl\u00edcito.", en: "Yes. All shared information is treated with full confidentiality, in compliance with GDPR. Data is not shared with third parties without explicit consent." },
  "faq.7.q": { pt: "Como funciona o Programa de 3 meses e qual o investimento?", en: "How does the 3-month Program work and what\u2019s the investment?" },
  "faq.7.a": { pt: "O Programa 3M \u00e9 proposto quando, ap\u00f3s a consulta inicial, faz sentido cl\u00ednico um acompanhamento mais prolongado. O investimento e estrutura s\u00e3o discutidos na consulta inicial, em fun\u00e7\u00e3o dos objectivos e complexidade do caso.", en: "The 3M Program is proposed when, after the initial consultation, a longer follow-up makes clinical sense. The investment and structure are discussed in the initial consultation, based on objectives and case complexity." },
  "faq.8.q": { pt: "O que devo trazer para a primeira consulta?", en: "What should I bring to the first consultation?" },
  "faq.8.a": { pt: "Exames laboratoriais dos \u00faltimos 2 a 3 anos, lista de medicamentos e suplementos actuais. Ser\u00e1 enviado um question\u00e1rio estruturado antes da consulta.", en: "Lab tests from the last 2 to 3 years, list of current medications and supplements. A structured questionnaire will be sent before the consultation." },

  // Blog
  "blog.label": { pt: "Educa\u00e7\u00e3o em Sa\u00fade", en: "Health Education" },
  "blog.title": { pt: "Artigos", en: "Articles" },
  "blog.1.cat": { pt: "Medicina Funcional", en: "Functional Medicine" },
  "blog.1.title": { pt: "Porque \u00e9 que os teus exames est\u00e3o normais mas tu n\u00e3o te sentes normal", en: "Why your tests are normal but you don\u2019t feel normal" },
  "blog.1.intro": { pt: "Um dos padr\u00f5es mais comuns que vejo na pr\u00e1tica cl\u00ednica: mulheres com meses ou anos de sintomas persistentes, an\u00e1lises dentro dos valores de refer\u00eancia, e sem respostas. O problema n\u00e3o est\u00e1 nos teus exames \u2014 est\u00e1 nos crit\u00e9rios que usamos para os interpretar.", en: "One of the most common patterns I see in clinical practice: women with months or years of persistent symptoms, analyses within reference values, and no answers. The problem isn\u2019t your tests \u2014 it\u2019s the criteria we use to interpret them." },
  "blog.2.cat": { pt: "Tir\u00f3ide", en: "Thyroid" },
  "blog.2.title": { pt: "Tir\u00f3ide sub-\u00f3ptima: quando os valores 'normais' n\u00e3o chegam", en: "Sub-optimal thyroid: when 'normal' values aren\u2019t enough" },
  "blog.2.intro": { pt: "O intervalo de refer\u00eancia da TSH foi definido com base numa popula\u00e7\u00e3o geral que inclui pessoas j\u00e1 com disfun\u00e7\u00e3o tiroideia. Muitas mulheres com sintomas claros de hipotiroidismo t\u00eam valores dentro do 'normal' \u2014 e continuam sem tratamento.", en: "The TSH reference range was defined based on a general population that includes people already with thyroid dysfunction. Many women with clear hypothyroid symptoms have values within 'normal' \u2014 and remain untreated." },
  "blog.3.cat": { pt: "Perimenopausa", en: "Perimenopause" },
  "blog.3.title": { pt: "Perimenopausa: o que ningu\u00e9m te explica sobre os primeiros sinais", en: "Perimenopause: what nobody tells you about the first signs" },
  "blog.3.intro": { pt: "A perimenopausa pode come\u00e7ar anos antes da \u00faltima menstrua\u00e7\u00e3o. Ansiedade nova, sono fragmentado, ciclos irregulares, aumento de peso sem explica\u00e7\u00e3o \u2014 estes s\u00e3o frequentemente os primeiros sinais, n\u00e3o os afrontamentos.", en: "Perimenopause can start years before the last period. New anxiety, fragmented sleep, irregular cycles, unexplained weight gain \u2014 these are often the first signs, not hot flashes." },
  "blog.readmore": { pt: "Ler mais", en: "Read more" },
  "blog.viewall": { pt: "Ver todos os artigos", en: "View all articles" },

  // Contact
  "contact.label": { pt: "Contacto", en: "Contact" },
  "contact.title": { pt: "Vamos conversar", en: "Let\u2019s talk" },
  "contact.desc": { pt: "Entra em contacto para agendar a tua consulta ou para qualquer quest\u00e3o sobre o acompanhamento.", en: "Get in touch to book your consultation or for any questions about the follow-up." },
  "contact.online": { pt: "Online \u00b7 Portugal e internacional", en: "Online \u00b7 Portugal and international" },
  "contact.langs": { pt: "Consultas em Portugu\u00eas e Ingl\u00eas", en: "Consultations in Portuguese and English" },

  // CTAFinal
  "ctafinal.label": { pt: "Pronto/a para come\u00e7ar?", en: "Ready to start?" },
  "ctafinal.title1": { pt: "A tua sa\u00fade", en: "Your health" },
  "ctafinal.title2": { pt: "merece respostas.", en: "deserves answers." },
  "ctafinal.cta": { pt: "Agendar consulta inicial", en: "Book initial consultation" },

  // Footer
  "footer.desc": { pt: "Medicina Funcional Integrativa com foco na sa\u00fade da mulher. Acompanhamento exclusivamente online para Portugal e internacional.", en: "Integrative Functional Medicine focused on women\u2019s health. Online-only follow-up for Portugal and international clients." },
  "footer.online": { pt: "Online \u00b7 Portugu\u00eas e Ingl\u00eas", en: "Online \u00b7 Portuguese and English" },
  "footer.nav": { pt: "Navega\u00e7\u00e3o", en: "Navigation" },
  "footer.contact": { pt: "Contacto", en: "Contact" },
  "footer.social": { pt: "Redes Sociais", en: "Social Media" },
  "footer.newsletter": { pt: "Newsletter", en: "Newsletter" },
  "footer.subscribe": { pt: "Subscrever", en: "Subscribe" },
  "footer.copyright": { pt: "\u00a9 2025 Catarina Veiga \u00b7 Todos os direitos reservados", en: "\u00a9 2025 Catarina Veiga \u00b7 All rights reserved" },
  "footer.legal": { pt: "Aviso Legal", en: "Legal Notice" },
  "footer.privacy": { pt: "Pol\u00edtica de Privacidade", en: "Privacy Policy" },
  "footer.terms": { pt: "Termos de Servi\u00e7o", en: "Terms of Service" },
  "footer.disclaimer": { pt: "Informa\u00e7\u00e3o educativa. N\u00e3o substitui avalia\u00e7\u00e3o m\u00e9dica profissional.", en: "Educational information. Does not replace professional medical assessment." },
  "footer.consultations": { pt: "Consultas em Portugu\u00eas e Ingl\u00eas", en: "Consultations in Portuguese and English" },
  "footer.international": { pt: "Online \u00b7 Portugal e internacional", en: "Online \u00b7 Portugal and international" },

  // LegalBand
  "legal.text": { pt: "Informa\u00e7\u00e3o de car\u00e1cter educativo. N\u00e3o substitui avalia\u00e7\u00e3o m\u00e9dica, diagn\u00f3stico ou tratamento. Resultados variam conforme o caso e ades\u00e3o ao plano. A Maya \u00e9 um sistema de apoio educativo e n\u00e3o substitui acompanhamento cl\u00ednico profissional. Consulte sempre um profissional de sa\u00fade qualificado.", en: "Educational information. Does not replace medical assessment, diagnosis, or treatment. Results vary depending on the case and adherence to the plan. Maya is an educational support system and does not replace professional clinical follow-up. Always consult a qualified health professional." },
  "legal.complaints": { pt: "Livro de Reclama\u00e7\u00f5es", en: "Complaints Book" },

  // MobileCTA
  "mobilecta.text": { pt: "Agendar consulta inicial", en: "Book initial consultation" },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("pt");

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] || entry.pt;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
