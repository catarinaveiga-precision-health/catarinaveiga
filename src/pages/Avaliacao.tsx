import { useState } from "react";
import { CheckCircle, AlertCircle, ArrowRight, ArrowLeft, Activity, Droplets, Flame, Shield, Heart, Brain, ChevronDown, Download, BookOpen } from "lucide-react";
import { BIOMARKER_REFERENCES } from "@/data/biomarkerReferences";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { downloadPDF, generatePDFBase64 } from "@/lib/generatePDF";

const OBJECTIVES = [
  "Fadiga persistente",
  "Disfunção tiroideia",
  "Alterações hormonais",
  "Patologia digestiva",
  "Autoimunidade",
  "Perda de peso",
  "Saúde mental",
  "Optimização geral",
];

interface LabValues {
  tsh?: string;
  t3_livre?: string;
  t4_livre?: string;
  ferritina?: string;
  ferro_serico?: string;
  transferrina?: string;
  pcr?: string;
  homocisteina?: string;
  vsg?: string;
  vitamina_d?: string;
  vitamina_b12?: string;
  acido_folico?: string;
  cortisol?: string;
  dhea?: string;
  estradiol?: string;
}

interface FormState {
  objetivos: string[];
  sexo: string;
  idade: string;
  labValues: LabValues;
  nome: string;
  email: string;
}

const initialForm: FormState = {
  objetivos: [],
  sexo: "",
  idade: "",
  labValues: {},
  nome: "",
  email: "",
};

const STEP_TITLES = [
  "Objetivos",
  "Perfil",
  "Tiróide",
  "Ferro",
  "Inflamação",
  "Metabolismo",
  "Pré-resultado",
  "Relatório",
  "Próximos passos",
];

const STEP_ICONS = [Activity, Heart, Shield, Droplets, Flame, Brain, Activity, CheckCircle, ArrowRight];

const SYSTEM_LABELS: Record<string, string> = {
  TSH: "Tiróide",
  "T3 Livre": "Tiróide",
  "T4 Livre": "Tiróide",
  Ferritina: "Ferro e Energia",
  "Ferro Sérico": "Ferro e Energia",
  Transferrina: "Ferro e Energia",
  PCR: "Inflamação",
  "Homocisteína": "Inflamação",
  VS: "Inflamação",
  "Vitamina D": "Metabolismo",
  "Vitamina B12": "Metabolismo",
  "Ácido Fólico": "Metabolismo",
  "Cortisol (manhã)": "Eixo HPA",
  "DHEA-S": "Eixo HPA",
};

const FUNCTIONAL_RANGES: Record<string, string> = {
  TSH: "Intervalo funcional: 0.5–2.0 mUI/L",
  Ferritina: "Intervalo funcional: 40–100 ng/mL",
  PCR: "Intervalo funcional: < 1.0 mg/L",
  "Vitamina D": "Intervalo funcional: 50–80 ng/mL",
  "Vitamina B12": "Intervalo funcional: 500–900 pg/mL",
  "Homocisteína": "Intervalo funcional: < 7 µmol/L",
  "Cortisol (manhã)": "Intervalo funcional: 10–18 µg/dL",
};

const SYSTEM_EXPLANATIONS: Record<string, string> = {
  "Tiróide": "A tiróide regula o metabolismo, energia e temperatura corporal. Valores sub-óptimos de TSH, T3 ou T4 podem explicar fadiga, ganho de peso e dificuldade de concentração — mesmo quando estão dentro do 'normal' laboratorial.",
  "Ferro e Energia": "O ferro é essencial para o transporte de oxigénio e produção de energia celular. Ferritina funcionalmente baixa (< 40 ng/mL) é uma das causas mais comuns de fadiga crónica, queda de cabelo e intolerância ao frio.",
  "Inflamação": "A inflamação crónica de baixo grau está na base de muitas patologias modernas. PCR elevada e homocisteína alta são sinais precoces que o corpo está sob stress — antes de qualquer diagnóstico convencional.",
  "Metabolismo": "Vitamina D e B12 são cofactores essenciais para centenas de reações metabólicas, desde a imunidade à saúde neurológica. Níveis 'normais' podem ser insuficientes para um funcionamento óptimo.",
  "Eixo HPA": "O eixo hipotálamo-hipófise-adrenal regula a resposta ao stress. Cortisol desregulado pode causar insónia, ansiedade, fadiga matinal e dificuldade de recuperação.",
};

function evaluateResults(labValues: LabValues) {
  const findings: { marker: string; value: string; status: "optimal" | "suboptimal" | "flag"; note: string }[] = [];

  const v = (key: keyof LabValues) => {
    const raw = labValues[key];
    return raw ? parseFloat(raw.replace(",", ".")) : null;
  };

  const tsh = v("tsh");
  if (tsh !== null) {
    if (tsh >= 0.5 && tsh <= 2.0) findings.push({ marker: "TSH", value: `${tsh} mUI/L`, status: "optimal", note: "Dentro do intervalo funcional óptimo." });
    else if (tsh > 2.0 && tsh <= 4.5) findings.push({ marker: "TSH", value: `${tsh} mUI/L`, status: "suboptimal", note: "Dentro do intervalo convencional, mas acima do óptimo funcional (0.5–2.0)." });
    else findings.push({ marker: "TSH", value: `${tsh} mUI/L`, status: "flag", note: "Fora do intervalo de referência. Requer avaliação clínica." });
  }

  const ferritina = v("ferritina");
  if (ferritina !== null) {
    if (ferritina >= 40 && ferritina <= 100) findings.push({ marker: "Ferritina", value: `${ferritina} ng/mL`, status: "optimal", note: "Nível óptimo para energia e função tiroideia." });
    else if (ferritina >= 12 && ferritina < 40) findings.push({ marker: "Ferritina", value: `${ferritina} ng/mL`, status: "suboptimal", note: "Dentro do 'normal' laboratorial, mas funcionalmente baixa." });
    else if (ferritina < 12) findings.push({ marker: "Ferritina", value: `${ferritina} ng/mL`, status: "flag", note: "Depleção de ferro. Requer intervenção." });
    else findings.push({ marker: "Ferritina", value: `${ferritina} ng/mL`, status: "suboptimal", note: "Elevada — pode indicar inflamação." });
  }

  const pcr = v("pcr");
  if (pcr !== null) {
    if (pcr < 1) findings.push({ marker: "PCR", value: `${pcr} mg/L`, status: "optimal", note: "Sem inflamação sistémica detectável." });
    else if (pcr >= 1 && pcr <= 3) findings.push({ marker: "PCR", value: `${pcr} mg/L`, status: "suboptimal", note: "Inflamação de baixo grau. Investigar causa." });
    else findings.push({ marker: "PCR", value: `${pcr} mg/L`, status: "flag", note: "Inflamação elevada. Requer avaliação clínica." });
  }

  const vitD = v("vitamina_d");
  if (vitD !== null) {
    if (vitD >= 50 && vitD <= 80) findings.push({ marker: "Vitamina D", value: `${vitD} ng/mL`, status: "optimal", note: "Nível óptimo funcional." });
    else if (vitD >= 30 && vitD < 50) findings.push({ marker: "Vitamina D", value: `${vitD} ng/mL`, status: "suboptimal", note: "Suficiente mas abaixo do óptimo funcional (50–80)." });
    else if (vitD < 30) findings.push({ marker: "Vitamina D", value: `${vitD} ng/mL`, status: "flag", note: "Insuficiência de vitamina D." });
    else findings.push({ marker: "Vitamina D", value: `${vitD} ng/mL`, status: "suboptimal", note: "Acima do intervalo óptimo." });
  }

  const b12 = v("vitamina_b12");
  if (b12 !== null) {
    if (b12 >= 500 && b12 <= 900) findings.push({ marker: "Vitamina B12", value: `${b12} pg/mL`, status: "optimal", note: "Nível óptimo funcional." });
    else if (b12 >= 200 && b12 < 500) findings.push({ marker: "Vitamina B12", value: `${b12} pg/mL`, status: "suboptimal", note: "Normal laboratorial mas funcionalmente insuficiente." });
    else if (b12 < 200) findings.push({ marker: "Vitamina B12", value: `${b12} pg/mL`, status: "flag", note: "Deficiência de B12. Requer suplementação." });
    else findings.push({ marker: "Vitamina B12", value: `${b12} pg/mL`, status: "optimal", note: "Nível adequado." });
  }

  const hom = v("homocisteina");
  if (hom !== null) {
    if (hom < 7) findings.push({ marker: "Homocisteína", value: `${hom} µmol/L`, status: "optimal", note: "Nível óptimo." });
    else if (hom >= 7 && hom <= 10) findings.push({ marker: "Homocisteína", value: `${hom} µmol/L`, status: "suboptimal", note: "Ligeiramente elevada. Verificar B12, B6 e folato." });
    else findings.push({ marker: "Homocisteína", value: `${hom} µmol/L`, status: "flag", note: "Elevada — risco cardiovascular e neuroinflamatório." });
  }

  const cortisol = v("cortisol");
  if (cortisol !== null) {
    if (cortisol >= 10 && cortisol <= 18) findings.push({ marker: "Cortisol (manhã)", value: `${cortisol} µg/dL`, status: "optimal", note: "Dentro do intervalo funcional." });
    else findings.push({ marker: "Cortisol (manhã)", value: `${cortisol} µg/dL`, status: "suboptimal", note: "Fora do intervalo óptimo. Avaliar eixo HPA." });
  }

  return findings;
}

function getSystemSummary(results: ReturnType<typeof evaluateResults>) {
  const systemMap = new Map<string, "optimal" | "suboptimal" | "flag">();
  results.forEach((r) => {
    const sys = SYSTEM_LABELS[r.marker] || r.marker;
    const current = systemMap.get(sys);
    if (!current || r.status === "flag" || (r.status === "suboptimal" && current === "optimal")) {
      systemMap.set(sys, r.status);
    }
  });
  return Array.from(systemMap.entries());
}

const LabInput = ({ label, unit, value, onChange, placeholder }: {
  label: string; unit: string; value: string; onChange: (v: string) => void; placeholder?: string;
}) => (
  <div className="space-y-1">
    <label className="text-sm font-sans text-foreground">{label}</label>
    <div className="flex items-center gap-2">
      <Input
        type="text"
        inputMode="decimal"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || "—"}
        className="bg-bone border-bone focus:border-amber"
      />
      <span className="text-xs text-muted-custom font-sans whitespace-nowrap">{unit}</span>
    </div>
  </div>
);

const Accordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-bone rounded-lg overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 text-sm font-sans text-foreground hover:bg-bone/50 transition-colors"
      >
        <span>{title}</span>
        <ChevronDown className={`w-4 h-4 text-muted-custom transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-4 pb-4 text-sm font-sans text-muted-custom leading-relaxed">{children}</div>}
    </div>
  );
};

const BiomarkerRefs = ({ refs }: { refs: { authors: string; journal: string; year: string; pmid: string }[] }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-2">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-[11px] text-muted-custom hover:text-foreground/60 transition-colors font-sans"
      >
        <BookOpen className="w-3 h-3" />
        <span>Ver estudos</span>
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="mt-1.5 space-y-1 pl-4">
          {refs.map((ref) => (
            <li key={ref.pmid} className="text-[10px] text-muted-custom font-sans leading-relaxed">
              {ref.authors} <span className="italic">{ref.journal}</span>. {ref.year}.{" "}
              <a
                href={`https://pubmed.ncbi.nlm.nih.gov/${ref.pmid}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground/60"
              >
                PMID: {ref.pmid}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Avaliacao = () => {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialForm);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const updateLab = (key: keyof LabValues, value: string) => {
    setForm((prev) => ({ ...prev, labValues: { ...prev.labValues, [key]: value } }));
  };

  const toggleObjective = (obj: string) => {
    setForm((prev) => ({
      ...prev,
      objetivos: prev.objetivos.includes(obj)
        ? prev.objetivos.filter((o) => o !== obj)
        : [...prev.objetivos, obj],
    }));
  };

  const canProceed = () => {
    if (step === 0) return form.objetivos.length > 0;
    if (step === 1) return form.sexo !== "";
    if (step === 6) return form.nome.trim() !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    return true;
  };

  const goNext = async () => {
    setError(null);
    if (!canProceed()) {
      if (step === 0) setError("Seleciona pelo menos um objetivo.");
      if (step === 1) setError("Seleciona o sexo biológico.");
      if (step === 6) setError("Nome e email válido são obrigatórios.");
      return;
    }

    if (step === 6) {
      setSaving(true);
      const evalResults = evaluateResults(form.labValues);
      const { error: dbError } = await supabase.from("leads_avaliacao").insert([{
        nome: form.nome.trim(),
        email: form.email.trim(),
        idade: form.idade ? parseInt(form.idade) : null,
        sexo: form.sexo || null,
        objetivos: form.objetivos,
        valores_laboratoriais: JSON.parse(JSON.stringify(form.labValues)),
        resultados: JSON.parse(JSON.stringify(evalResults)),
      }]);
      setSaving(false);
      if (dbError) {
        setError("Erro ao guardar. Tenta novamente.");
        return;
      }
      setSaved(true);

      // Generate PDF base64 for email attachment
      const systemSummary = getSystemSummary(evalResults);
      let pdfBase64: string | undefined;
      try {
        pdfBase64 = await generatePDFBase64(form.nome.trim(), systemSummary, evalResults);
      } catch (e) {
        console.error('PDF generation error:', e);
      }

      const dateSafe = new Date().toISOString().slice(0, 10);
      const safeName = form.nome.trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");

      // Fire-and-forget: send transactional emails with PDF attachment
      supabase.functions.invoke('send-emails', {
        body: {
          table: 'leads_avaliacao',
          record: {
            nome: form.nome.trim(),
            email: form.email.trim(),
            idade: form.idade ? parseInt(form.idade) : null,
            sexo: form.sexo || null,
            objetivos: form.objetivos,
            resultados: evalResults,
            created_at: new Date().toISOString(),
          },
          pdf_attachment: pdfBase64 ? {
            content: pdfBase64,
            filename: `leitura-funcional-${safeName}-${dateSafe}.pdf`,
          } : undefined,
        },
      }).catch((err) => console.error('Email send error:', err));
    }

    setStep((s) => Math.min(s + 1, 8));
  };

  const goBack = () => {
    setError(null);
    setStep((s) => Math.max(s - 1, 0));
  };

  const results = evaluateResults(form.labValues);
  const systems = getSystemSummary(results);
  const hasAnyLabValue = Object.values(form.labValues).some((v) => v && v.trim() !== "");
  const optimalCount = systems.filter(([, s]) => s === "optimal").length;
  const flagCount = systems.filter(([, s]) => s !== "optimal").length;

  const handleExportPDF = async () => {
    await downloadPDF(form.nome || "utilizador", systems, results);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 px-6 text-center bg-background">
        <p className="label-uppercase text-amber mb-4 tracking-widest text-xs">Avaliação Funcional</p>
        <h1 className="font-serif text-4xl md:text-5xl text-foreground leading-tight max-w-3xl mx-auto">
          Os teus exames estão normais.<br />O teu corpo não.
        </h1>
        <p className="mt-6 text-muted-custom max-w-xl mx-auto text-base font-sans leading-relaxed">
          Insere os teus valores laboratoriais e descobre o que os intervalos de referência convencionais não te dizem.
        </p>
        <p className="mt-2 text-muted-custom font-sans text-sm">
          Mais de 15 biomarcadores analisados em menos de 2 minutos.
        </p>
      </section>

      {/* Progress */}
      <section className="px-6 pb-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-2">
            {STEP_TITLES.map((title, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    i <= step ? "bg-amber text-primary-foreground" : "bg-bone text-muted-custom"
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-sans text-muted-custom hidden md:block">{title}</span>
                </div>
              );
            })}
          </div>
          <div className="h-1 bg-bone rounded-full overflow-hidden">
            <div className="h-full bg-amber rounded-full transition-all duration-500" style={{ width: `${((step + 1) / 9) * 100}%` }} />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 pb-20">
        <div className="max-w-[640px] mx-auto">
          {error && (
            <div className="flex items-center gap-2 bg-destructive/10 text-destructive rounded-lg px-4 py-3 mb-6 text-sm font-sans">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {error}
            </div>
          )}

          {/* Step 0: Objectives */}
          {step === 0 && (
            <div className="space-y-6">
              <h2 className="font-serif text-2xl text-foreground">Quais são os teus principais objetivos?</h2>
              <div className="flex flex-wrap gap-2">
                {OBJECTIVES.map((obj) => (
                  <button
                    key={obj}
                    type="button"
                    onClick={() => toggleObjective(obj)}
                    className={`px-4 py-2 rounded-full text-sm font-sans transition-all duration-200 border ${
                      form.objetivos.includes(obj)
                        ? "bg-amber text-primary-foreground border-amber"
                        : "bg-background text-foreground border-bone hover:border-amber/50"
                    }`}
                  >
                    {obj}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1: Profile */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="font-serif text-2xl text-foreground">Perfil básico</h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-sans text-foreground mb-2 block">Sexo biológico</label>
                  <div className="flex gap-3">
                    {["Feminino", "Masculino"].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, sexo: s }))}
                        className={`px-6 py-2 rounded-full text-sm font-sans transition-all border ${
                          form.sexo === s
                            ? "bg-amber text-primary-foreground border-amber"
                            : "bg-background text-foreground border-bone hover:border-amber/50"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-sans text-foreground mb-1 block">Idade (opcional)</label>
                  <Input
                    type="number"
                    min={18}
                    max={80}
                    value={form.idade}
                    onChange={(e) => setForm((prev) => ({ ...prev, idade: e.target.value }))}
                    placeholder="Ex: 38"
                    className="bg-bone border-bone focus:border-amber max-w-[120px]"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Thyroid */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="font-serif text-2xl text-foreground">Painel Tiroideu</h2>
              <p className="text-sm text-muted-custom font-sans">Preenche apenas os valores que tens disponíveis.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <LabInput label="TSH" unit="mUI/L" value={form.labValues.tsh || ""} onChange={(v) => updateLab("tsh", v)} placeholder="Ex: 2.5" />
                <LabInput label="T3 Livre" unit="pg/mL" value={form.labValues.t3_livre || ""} onChange={(v) => updateLab("t3_livre", v)} placeholder="Ex: 3.1" />
                <LabInput label="T4 Livre" unit="ng/dL" value={form.labValues.t4_livre || ""} onChange={(v) => updateLab("t4_livre", v)} placeholder="Ex: 1.2" />
              </div>
            </div>
          )}

          {/* Step 3: Iron */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="font-serif text-2xl text-foreground">Painel de Ferro</h2>
              <p className="text-sm text-muted-custom font-sans">Preenche apenas os valores que tens disponíveis.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <LabInput label="Ferritina" unit="ng/mL" value={form.labValues.ferritina || ""} onChange={(v) => updateLab("ferritina", v)} placeholder="Ex: 45" />
                <LabInput label="Ferro Sérico" unit="µg/dL" value={form.labValues.ferro_serico || ""} onChange={(v) => updateLab("ferro_serico", v)} placeholder="Ex: 80" />
                <LabInput label="Transferrina" unit="mg/dL" value={form.labValues.transferrina || ""} onChange={(v) => updateLab("transferrina", v)} placeholder="Ex: 250" />
              </div>
            </div>
          )}

          {/* Step 4: Inflammation */}
          {step === 4 && (
            <div className="space-y-6">
              <h2 className="font-serif text-2xl text-foreground">Marcadores Inflamatórios</h2>
              <p className="text-sm text-muted-custom font-sans">Preenche apenas os valores que tens disponíveis.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <LabInput label="PCR (Proteína C-Reactiva)" unit="mg/L" value={form.labValues.pcr || ""} onChange={(v) => updateLab("pcr", v)} placeholder="Ex: 0.5" />
                <LabInput label="Homocisteína" unit="µmol/L" value={form.labValues.homocisteina || ""} onChange={(v) => updateLab("homocisteina", v)} placeholder="Ex: 8" />
                <LabInput label="VS (Velocidade de Sedimentação)" unit="mm/h" value={form.labValues.vsg || ""} onChange={(v) => updateLab("vsg", v)} placeholder="Ex: 10" />
              </div>
            </div>
          )}

          {/* Step 5: Metabolism */}
          {step === 5 && (
            <div className="space-y-6">
              <h2 className="font-serif text-2xl text-foreground">Metabolismo e Hormonas</h2>
              <p className="text-sm text-muted-custom font-sans">Preenche apenas os valores que tens disponíveis.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <LabInput label="Vitamina D" unit="ng/mL" value={form.labValues.vitamina_d || ""} onChange={(v) => updateLab("vitamina_d", v)} placeholder="Ex: 35" />
                <LabInput label="Vitamina B12" unit="pg/mL" value={form.labValues.vitamina_b12 || ""} onChange={(v) => updateLab("vitamina_b12", v)} placeholder="Ex: 400" />
                <LabInput label="Ácido Fólico" unit="ng/mL" value={form.labValues.acido_folico || ""} onChange={(v) => updateLab("acido_folico", v)} placeholder="Ex: 8" />
                <LabInput label="Cortisol (manhã)" unit="µg/dL" value={form.labValues.cortisol || ""} onChange={(v) => updateLab("cortisol", v)} placeholder="Ex: 15" />
                <LabInput label="DHEA-S" unit="µg/dL" value={form.labValues.dhea || ""} onChange={(v) => updateLab("dhea", v)} placeholder="Ex: 200" />
              </div>
            </div>
          )}

          {/* Step 6: PRÉ-RESULTADO + Lead capture */}
          {step === 6 && (
            <div className="space-y-8">
              {/* Summary card */}
              <div className="bg-ivory rounded-2xl p-8 border border-bone space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center">
                  A tua leitura funcional
                </h2>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-bone/50 rounded-xl py-4 px-2">
                    <p className="font-serif text-3xl text-foreground">{systems.length}</p>
                    <p className="text-xs text-muted-custom font-sans mt-1">Sistemas avaliados</p>
                  </div>
                  <div className="bg-bone/50 rounded-xl py-4 px-2">
                    <p className="font-serif text-3xl text-foreground">{optimalCount}</p>
                    <p className="text-xs text-muted-custom font-sans mt-1">No intervalo funcional</p>
                  </div>
                  <div className="bg-bone/50 rounded-xl py-4 px-2">
                    <p className="font-serif text-3xl text-foreground">{flagCount}</p>
                    <p className="text-xs text-muted-custom font-sans mt-1">Padrões a investigar</p>
                  </div>
                </div>

                {/* System list with status dots only */}
                <div className="space-y-2">
                  {systems.map(([name, status]) => (
                    <div key={name} className="flex items-center gap-3 py-2.5 px-4 rounded-lg bg-background/60">
                      <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                        status === "optimal" ? "bg-green-500" :
                        status === "suboptimal" ? "bg-amber" :
                        "bg-red-500"
                      }`} />
                      <span className="text-sm font-sans text-foreground">{name}</span>
                    </div>
                  ))}
                  {systems.length === 0 && (
                    <p className="text-sm text-muted-custom font-sans text-center py-4">
                      Nenhum valor laboratorial foi introduzido.
                    </p>
                  )}
                </div>
              </div>

              {/* Information gap message */}
              <p className="text-sm font-sans text-muted-custom italic text-center leading-relaxed max-w-[480px] mx-auto">
                "Identificámos alguns padrões nos teus biomarcadores. Para ver a interpretação completa de cada marcador, os rácios calculados e os próximos passos possíveis, introduz o teu email."
              </p>

              {/* Lead capture form */}
              <div className="space-y-4 max-w-sm mx-auto">
                <div>
                  <label className="text-sm font-sans text-foreground mb-1 block">Nome</label>
                  <Input
                    value={form.nome}
                    onChange={(e) => setForm((prev) => ({ ...prev, nome: e.target.value }))}
                    placeholder="Nome completo"
                    className="bg-bone border-bone focus:border-amber"
                  />
                </div>
                <div>
                  <label className="text-sm font-sans text-foreground mb-1 block">Email</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="email@exemplo.com"
                    className="bg-bone border-bone focus:border-amber"
                  />
                </div>
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  onClick={goNext}
                  disabled={saving}
                >
                  {saving ? "A guardar..." : "Ver relatório completo →"}
                </Button>
                <p className="text-xs text-muted-custom font-sans text-center">
                  Sem spam. Apenas a tua leitura.
                </p>
              </div>
            </div>
          )}

          {/* Step 7: RESULTADO COMPLETO */}
          {step === 7 && (
            <div className="space-y-8">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-amber/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7 text-amber" />
                </div>
                <h2 className="font-serif text-3xl text-foreground">O teu relatório funcional completo</h2>
                <p className="text-muted-custom font-sans mt-2">Análise baseada em intervalos funcionais — não apenas de referência.</p>
              </div>

              {!hasAnyLabValue ? (
                <div className="bg-bone rounded-xl p-8 text-center">
                  <p className="text-muted-custom font-sans">Não foram introduzidos valores laboratoriais. Agenda uma consulta para uma avaliação completa.</p>
                </div>
              ) : (
                <>
                  {/* Detailed biomarker results */}
                  <div className="space-y-3">
                    {results.map((r, i) => {
                      const refs = BIOMARKER_REFERENCES[r.marker] || [];
                      return (
                      <div key={i} className={`rounded-xl p-5 border ${
                        r.status === "optimal" ? "bg-green-50 border-green-200" :
                        r.status === "suboptimal" ? "bg-amber-50 border-amber-200" :
                        "bg-red-50 border-red-200"
                      }`}>
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${
                              r.status === "optimal" ? "bg-green-500" :
                              r.status === "suboptimal" ? "bg-amber" :
                              "bg-red-500"
                            }`} />
                            <span className="font-sans font-medium text-foreground text-sm">{r.marker}</span>
                          </div>
                          <span className={`text-xs font-sans px-2 py-0.5 rounded-full ${
                            r.status === "optimal" ? "bg-green-100 text-green-800" :
                            r.status === "suboptimal" ? "bg-amber-100 text-amber-800" :
                            "bg-red-100 text-red-800"
                          }`}>
                            {r.status === "optimal" ? "Óptimo" : r.status === "suboptimal" ? "Sub-óptimo" : "Atenção"}
                          </span>
                        </div>
                        <p className="text-xs text-muted-custom font-sans">{r.value}</p>
                        {FUNCTIONAL_RANGES[r.marker] && (
                          <p className="text-xs text-muted-custom font-sans mt-0.5 italic">{FUNCTIONAL_RANGES[r.marker]}</p>
                        )}
                        <p className="text-sm text-foreground/80 font-sans mt-1">{r.note}</p>
                        {refs.length > 0 && <BiomarkerRefs refs={refs} />}
                      </div>
                      );
                    })}
                  </div>

                  {/* System explanations as accordions */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl text-foreground mb-3">Saber mais sobre cada sistema</h3>
                    {systems.map(([name]) => (
                      SYSTEM_EXPLANATIONS[name] && (
                        <Accordion key={name} title={name}>
                          {SYSTEM_EXPLANATIONS[name]}
                        </Accordion>
                      )
                    ))}
                  </div>

                  {/* PDF Export */}
                  <div className="flex justify-center pt-2">
                    <Button variant="outline" size="lg" onClick={handleExportPDF} className="gap-2">
                      <Download className="w-4 h-4" />
                      Exportar relatório (PDF)
                    </Button>
                  </div>
                </>
              )}

              {/* Disclaimer */}
              <div className="bg-bone rounded-xl p-6 text-center space-y-4">
                <p className="text-sm font-sans text-foreground italic">
                  "Os intervalos de referência dizem-te que estás 'normal'. Os intervalos funcionais dizem-te se estás bem."
                </p>
                <p className="text-xs text-muted-custom font-sans">
                  Esta avaliação é informativa e não substitui aconselhamento médico. Para uma análise completa, consulta um profissional.
                </p>
              </div>

              {/* Next step button */}
              <div className="flex justify-center pt-4">
                <Button variant="hero" size="lg" onClick={() => setStep(8)}>
                  Ver próximos passos →
                </Button>
              </div>
            </div>
          )}

          {/* Step 8: CONFIRMAÇÃO — Dark CTA */}
          {step === 8 && (
            <div className="bg-[#1F1A14] rounded-2xl p-10 md:p-14 text-center space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl text-ivory italic leading-tight">
                Os teus exames contam uma história.<br />Queres ouvi-la?
              </h2>
              <p className="text-ivory/70 font-sans text-sm max-w-md mx-auto leading-relaxed">
                Se identificaste padrões nos teus biomarcadores, o próximo passo é uma avaliação funcional personalizada com a nossa equipa clínica.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <Button variant="hero" size="lg" asChild>
                  <a href="/candidatura">Quero investigar as causas</a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-ivory/30 text-ivory hover:bg-ivory/10"
                >
                  <a href="/programa-fundacao">Conhecer o Programa Fundação</a>
                </Button>
              </div>
            </div>
          )}

          {/* Navigation buttons (steps 0–5 only, step 6 has its own button) */}
          {step < 6 && (
            <div className="flex justify-between pt-8">
              {step > 0 ? (
                <Button variant="outline" onClick={goBack}>
                  <ArrowLeft className="w-4 h-4 mr-2" /> Anterior
                </Button>
              ) : <div />}
              <Button variant="hero" onClick={goNext}>
                Continuar <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Avaliacao;
