import { useState } from "react";
import { CheckCircle, AlertCircle, ArrowRight, ArrowLeft, Activity, Droplets, Flame, Shield, Heart, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";

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
  // Tiróide
  tsh?: string;
  t3_livre?: string;
  t4_livre?: string;
  // Ferro
  ferritina?: string;
  ferro_serico?: string;
  transferrina?: string;
  // Inflamação
  pcr?: string;
  homocisteina?: string;
  vsg?: string;
  // Metabolismo
  vitamina_d?: string;
  vitamina_b12?: string;
  acido_folico?: string;
  // Hormonal
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
  "Resultados",
];

const STEP_ICONS = [Activity, Heart, Shield, Droplets, Flame, Brain, Activity, CheckCircle];

const SYSTEM_LABELS: Record<string, string> = {
  TSH: "Tiróide",
  "T3 Livre": "Tiróide",
  "T4 Livre": "Tiróide",
  Ferritina: "Ferro",
  "Ferro Sérico": "Ferro",
  Transferrina: "Ferro",
  PCR: "Inflamação",
  "Homocisteína": "Inflamação",
  VS: "Inflamação",
  "Vitamina D": "Metabolismo",
  "Vitamina B12": "Metabolismo",
  "Ácido Fólico": "Metabolismo",
  "Cortisol (manhã)": "Eixo HPA",
  "DHEA-S": "Eixo HPA",
};

function evaluateResults(labValues: LabValues) {
  const findings: { marker: string; value: string; status: "optimal" | "suboptimal" | "flag"; note: string }[] = [];

  const v = (key: keyof LabValues) => {
    const raw = labValues[key];
    return raw ? parseFloat(raw.replace(",", ".")) : null;
  };

  // TSH
  const tsh = v("tsh");
  if (tsh !== null) {
    if (tsh >= 0.5 && tsh <= 2.0) findings.push({ marker: "TSH", value: `${tsh} mUI/L`, status: "optimal", note: "Dentro do intervalo funcional óptimo." });
    else if (tsh > 2.0 && tsh <= 4.5) findings.push({ marker: "TSH", value: `${tsh} mUI/L`, status: "suboptimal", note: "Dentro do intervalo convencional, mas acima do óptimo funcional (0.5–2.0)." });
    else findings.push({ marker: "TSH", value: `${tsh} mUI/L`, status: "flag", note: "Fora do intervalo de referência. Requer avaliação clínica." });
  }

  // Ferritina
  const ferritina = v("ferritina");
  if (ferritina !== null) {
    if (ferritina >= 40 && ferritina <= 100) findings.push({ marker: "Ferritina", value: `${ferritina} ng/mL`, status: "optimal", note: "Nível óptimo para energia e função tiroideia." });
    else if (ferritina >= 12 && ferritina < 40) findings.push({ marker: "Ferritina", value: `${ferritina} ng/mL`, status: "suboptimal", note: "Dentro do 'normal' laboratorial, mas funcionalmente baixa." });
    else if (ferritina < 12) findings.push({ marker: "Ferritina", value: `${ferritina} ng/mL`, status: "flag", note: "Depleção de ferro. Requer intervenção." });
    else findings.push({ marker: "Ferritina", value: `${ferritina} ng/mL`, status: "suboptimal", note: "Elevada — pode indicar inflamação." });
  }

  // PCR
  const pcr = v("pcr");
  if (pcr !== null) {
    if (pcr < 1) findings.push({ marker: "PCR", value: `${pcr} mg/L`, status: "optimal", note: "Sem inflamação sistémica detectável." });
    else if (pcr >= 1 && pcr <= 3) findings.push({ marker: "PCR", value: `${pcr} mg/L`, status: "suboptimal", note: "Inflamação de baixo grau. Investigar causa." });
    else findings.push({ marker: "PCR", value: `${pcr} mg/L`, status: "flag", note: "Inflamação elevada. Requer avaliação clínica." });
  }

  // Vitamina D
  const vitD = v("vitamina_d");
  if (vitD !== null) {
    if (vitD >= 50 && vitD <= 80) findings.push({ marker: "Vitamina D", value: `${vitD} ng/mL`, status: "optimal", note: "Nível óptimo funcional." });
    else if (vitD >= 30 && vitD < 50) findings.push({ marker: "Vitamina D", value: `${vitD} ng/mL`, status: "suboptimal", note: "Suficiente mas abaixo do óptimo funcional (50–80)." });
    else if (vitD < 30) findings.push({ marker: "Vitamina D", value: `${vitD} ng/mL`, status: "flag", note: "Insuficiência de vitamina D." });
    else findings.push({ marker: "Vitamina D", value: `${vitD} ng/mL`, status: "suboptimal", note: "Acima do intervalo óptimo." });
  }

  // Vitamina B12
  const b12 = v("vitamina_b12");
  if (b12 !== null) {
    if (b12 >= 500 && b12 <= 900) findings.push({ marker: "Vitamina B12", value: `${b12} pg/mL`, status: "optimal", note: "Nível óptimo funcional." });
    else if (b12 >= 200 && b12 < 500) findings.push({ marker: "Vitamina B12", value: `${b12} pg/mL`, status: "suboptimal", note: "Normal laboratorial mas funcionalmente insuficiente." });
    else if (b12 < 200) findings.push({ marker: "Vitamina B12", value: `${b12} pg/mL`, status: "flag", note: "Deficiência de B12. Requer suplementação." });
    else findings.push({ marker: "Vitamina B12", value: `${b12} pg/mL`, status: "optimal", note: "Nível adequado." });
  }

  // Homocisteína
  const hom = v("homocisteina");
  if (hom !== null) {
    if (hom < 7) findings.push({ marker: "Homocisteína", value: `${hom} µmol/L`, status: "optimal", note: "Nível óptimo." });
    else if (hom >= 7 && hom <= 10) findings.push({ marker: "Homocisteína", value: `${hom} µmol/L`, status: "suboptimal", note: "Ligeiramente elevada. Verificar B12, B6 e folato." });
    else findings.push({ marker: "Homocisteína", value: `${hom} µmol/L`, status: "flag", note: "Elevada — risco cardiovascular e neuroinflamatório." });
  }

  // Cortisol
  const cortisol = v("cortisol");
  if (cortisol !== null) {
    if (cortisol >= 10 && cortisol <= 18) findings.push({ marker: "Cortisol (manhã)", value: `${cortisol} µg/dL`, status: "optimal", note: "Dentro do intervalo funcional." });
    else findings.push({ marker: "Cortisol (manhã)", value: `${cortisol} µg/dL`, status: "suboptimal", note: "Fora do intervalo óptimo. Avaliar eixo HPA." });
  }

  return findings;
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
    return true; // lab steps are optional
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
      // Save to Supabase before showing results
      setSaving(true);
      const results = evaluateResults(form.labValues);
      const { error: dbError } = await supabase.from("leads_avaliacao").insert([{
        nome: form.nome.trim(),
        email: form.email.trim(),
        idade: form.idade ? parseInt(form.idade) : null,
        sexo: form.sexo || null,
        objetivos: form.objetivos,
        valores_laboratoriais: JSON.parse(JSON.stringify(form.labValues)),
        resultados: JSON.parse(JSON.stringify(results)),
      }]);
      setSaving(false);
      if (dbError) {
        setError("Erro ao guardar. Tenta novamente.");
        return;
      }
      setSaved(true);
    }

    setStep((s) => Math.min(s + 1, 7));
  };

  const goBack = () => {
    setError(null);
    setStep((s) => Math.max(s - 1, 0));
  };

  const results = evaluateResults(form.labValues);
  const hasAnyLabValue = Object.values(form.labValues).some((v) => v && v.trim() !== "");

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
        <p className="mt-2 text-amber font-sans text-sm tracking-wide">
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
            <div className="h-full bg-amber rounded-full transition-all duration-500" style={{ width: `${((step + 1) / 8) * 100}%` }} />
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

          {/* Step 6: Lead capture */}
          {step === 6 && (
            <div className="space-y-6">
              <h2 className="font-serif text-2xl text-foreground">Quase lá — os teus dados</h2>
              <p className="text-sm text-muted-custom font-sans">Para gerar o teu relatório personalizado, preciso do teu nome e email.</p>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-sans text-foreground mb-1 block">Nome *</label>
                  <Input
                    value={form.nome}
                    onChange={(e) => setForm((prev) => ({ ...prev, nome: e.target.value }))}
                    placeholder="Nome completo"
                    className="bg-bone border-bone focus:border-amber"
                  />
                </div>
                <div>
                  <label className="text-sm font-sans text-foreground mb-1 block">Email *</label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder="email@exemplo.com"
                    className="bg-bone border-bone focus:border-amber"
                  />
                </div>
              </div>
              <p className="text-xs text-muted-custom font-sans">
                Os teus dados são protegidos conforme a{" "}
                <a href="/politica-privacidade" className="text-amber underline" target="_blank">Política de Privacidade</a>.
              </p>
            </div>
          )}

          {/* Step 7: Results */}
          {step === 7 && (
            <div className="space-y-8">
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-amber/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-7 h-7 text-amber" />
                </div>
                <h2 className="font-serif text-3xl text-foreground">O teu relatório funcional</h2>
                <p className="text-muted-custom font-sans mt-2">Análise baseada em intervalos funcionais — não apenas de referência.</p>
              </div>

              {!hasAnyLabValue ? (
                <div className="bg-bone rounded-xl p-8 text-center">
                  <p className="text-muted-custom font-sans">Não foram introduzidos valores laboratoriais. Agenda uma consulta para uma avaliação completa.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {results.map((r, i) => (
                    <div key={i} className={`rounded-xl p-5 border ${
                      r.status === "optimal" ? "bg-green-50 border-green-200" :
                      r.status === "suboptimal" ? "bg-amber-50 border-amber-200" :
                      "bg-red-50 border-red-200"
                    }`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-sans font-medium text-foreground text-sm">{r.marker}</span>
                        <span className={`text-xs font-sans px-2 py-0.5 rounded-full ${
                          r.status === "optimal" ? "bg-green-100 text-green-800" :
                          r.status === "suboptimal" ? "bg-amber-100 text-amber-800" :
                          "bg-red-100 text-red-800"
                        }`}>
                          {r.status === "optimal" ? "Óptimo" : r.status === "suboptimal" ? "Sub-óptimo" : "Atenção"}
                        </span>
                      </div>
                      <p className="text-xs text-muted-custom font-sans">{r.value}</p>
                      <p className="text-sm text-foreground/80 font-sans mt-1">{r.note}</p>
                    </div>
                  ))}
                </div>
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

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                <Button
                  variant="hero"
                  size="lg"
                  asChild
                >
                  <a href="/candidatura">Quero investigar as causas</a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                >
                  <a href="/programa-fundacao">Conhecer o Programa Fundação</a>
                </Button>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          {step < 7 && (
            <div className="flex justify-between pt-8">
              {step > 0 ? (
                <Button variant="outline" onClick={goBack}>
                  <ArrowLeft className="w-4 h-4 mr-2" /> Anterior
                </Button>
              ) : <div />}
              <Button variant="hero" onClick={goNext} disabled={saving}>
                {saving ? "A guardar..." : step === 6 ? "Ver relatório completo →" : "Continuar"}{" "}
                {!saving && step !== 6 && <ArrowRight className="w-4 h-4 ml-2" />}
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
