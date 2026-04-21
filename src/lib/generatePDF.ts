import jsPDF from "jspdf";
import "jspdf-autotable";

const IVORY = "#F8F5F0";
const AMBER = "#9B7B5A";
const AMBER_LIGHT = "#B89B7A";
const DARK = "#1F1A14";
const MUTED = "#8C8279";
const BONE = "#E8E2DA";
const WHITE = "#ffffff";

const PAGE_DISCLAIMER =
  "Leitura educativa baseada em intervalos funcionais. Não constitui diagnóstico médico.";

const COVER_DISCLAIMER =
  "Este relatório apresenta uma leitura educativa baseada em intervalos funcionais descritos na literatura científica. Não constitui diagnóstico médico nem substitui avaliação clínica individual.";

const FUNCTIONAL_RANGES_DATA: Record<string, { min: string; max: string; unit: string }> = {
  TSH: { min: "0.5", max: "2.0", unit: "mUI/L" },
  Ferritina: { min: "40", max: "100", unit: "ng/mL" },
  PCR: { min: "0", max: "1.0", unit: "mg/L" },
  "Vitamina D": { min: "50", max: "80", unit: "ng/mL" },
  "Vitamina B12": { min: "500", max: "900", unit: "pg/mL" },
  "Homocisteína": { min: "0", max: "7", unit: "µmol/L" },
  "Cortisol (manhã)": { min: "10", max: "18", unit: "µg/dL" },
  Insulina: { min: "2", max: "5", unit: "µUI/mL" },
  Glicose: { min: "70", max: "90", unit: "mg/dL" },
};

const SYSTEM_EXPLANATIONS_PDF: Record<string, string> = {
  "Tiróide": "A tiróide regula o metabolismo, energia e temperatura corporal. Valores sub-óptimos de TSH, T3 ou T4 podem explicar fadiga, ganho de peso e dificuldade de concentração — mesmo quando estão dentro do 'normal' laboratorial.",
  "Ferro e Energia": "O ferro é essencial para o transporte de oxigénio e produção de energia celular. Ferritina funcionalmente baixa (< 40 ng/mL) é uma das causas mais comuns de fadiga crónica, queda de cabelo e intolerância ao frio.",
  "Inflamação": "A inflamação crónica de baixo grau está na base de muitas patologias modernas. PCR elevada e homocisteína alta são sinais precoces que o corpo está sob stress — antes de qualquer diagnóstico convencional.",
  "Metabolismo": "Vitamina D e B12 são cofactores essenciais para centenas de reações metabólicas, desde a imunidade à saúde neurológica. Níveis 'normais' podem ser insuficientes para um funcionamento óptimo.",
  "Eixo HPA": "O eixo hipotálamo-hipófise-adrenal regula a resposta ao stress. Cortisol desregulado pode causar insónia, ansiedade, fadiga matinal e dificuldade de recuperação.",
};

const BIOMARKER_INTERPRETATIONS: Record<string, Record<string, string>> = {
  Ferritina: {
    low: "A ferritina reflecte as reservas de ferro no organismo. Valores baixos podem associar-se a fadiga persistente, queda de cabelo, dificuldade de concentração e intolerância ao exercício. Em medicina funcional, valores abaixo de 50 ng/mL podem indicar reservas insuficientes mesmo quando o hemograma permanece dentro dos intervalos convencionais.",
    optimal: "",
  },
  TSH: {
    high: "O TSH regula a actividade da tiróide. Valores elevados podem reflectir aumento do estímulo da hipófise para produzir hormonas tiroideias. Sintomas como fadiga, intolerância ao frio, dificuldade em perder peso ou queda de cabelo podem surgir antes de alterações evidentes nas hormonas tiroideias.",
    optimal: "",
  },
  "Vitamina D": {
    low: "A vitamina D actua como hormona em múltiplos sistemas. Valores baixos associam-se a fadiga, maior susceptibilidade a infecções, alterações do humor e disfunção imune. A maioria da população europeia apresenta défice funcional, especialmente nos meses de inverno.",
    optimal: "",
  },
  "Vitamina B12": {
    low: "A vitamina B12 é essencial para função neurológica, produção de glóbulos vermelhos e metabolismo energético. Valores baixo-normais podem associar-se a fadiga, nevoeiro mental, formigueiros e alterações do humor, mesmo sem anemia manifesta.",
    optimal: "",
  },
  PCR: {
    high: "A proteína C reactiva é um marcador de inflamação sistémica. Valores elevados, mesmo dentro do intervalo laboratorial, podem indicar inflamação crónica de baixo grau associada a risco cardiovascular, resistência à insulina e disfunção imune.",
    optimal: "",
  },
  "Homocisteína": {
    high: "A homocisteína é um aminoácido cujos níveis elevados se associam a risco cardiovascular, disfunção cognitiva e défice de vitaminas do complexo B. É sensível ao estado nutricional e ao metabolismo do folato e B12.",
    optimal: "",
  },
  Insulina: {
    high: "A insulina em jejum é um marcador precoce de resistência metabólica. Valores elevados, mesmo com glicose normal, podem indicar hiperinsulinemia compensatória — frequentemente associada a fadiga pós-prandial, dificuldade em perder peso e cravings de açúcar.",
    optimal: "",
  },
  Glicose: {
    high: "A glicose em jejum reflecte a capacidade de regulação do metabolismo dos hidratos de carbono. Valores no limite superior do normal podem indicar redução da sensibilidade à insulina antes de critérios formais de pré-diabetes.",
    optimal: "",
  },
  "Cortisol (manhã)": {
    high: "O cortisol matinal elevado pode reflectir activação crónica do eixo HPA, associada a stress prolongado, insónia, ansiedade e resistência à insulina. Valores persistentemente altos merecem avaliação do padrão circadiano completo.",
    low: "Cortisol matinal baixo pode indicar fadiga adrenal funcional, associada a exaustão, dificuldade em acordar, hipotensão e baixa tolerância ao stress. Este padrão surge frequentemente após períodos prolongados de stress crónico.",
    optimal: "",
  },
};

const OPTIMAL_TEXT = "Valor dentro do intervalo funcional. A interpretação clínica completa considera este resultado em conjunto com sintomas e outros biomarcadores.";

interface Finding {
  marker: string;
  value: string;
  unit?: string;
  status: "optimal" | "suboptimal" | "flag";
  note: string;
  implausible?: boolean;
}

// Convert logo to base64 for PDF embedding
let logoBase64Cache: string | null = null;

async function getLogoBase64(): Promise<string> {
  if (logoBase64Cache) return logoBase64Cache;
  try {
    const { default: logoUrl } = await import("@/assets/logo-full.png");
    const response = await fetch(logoUrl);
    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        logoBase64Cache = reader.result as string;
        resolve(logoBase64Cache);
      };
      reader.readAsDataURL(blob);
    });
  } catch {
    return "";
  }
}

function addPageBg(doc: jsPDF) {
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  doc.setFillColor(IVORY);
  doc.rect(0, 0, pageW, pageH, "F");
}

function addAmberLine(doc: jsPDF, x: number, y: number, width: number) {
  doc.setDrawColor(AMBER);
  doc.setLineWidth(1.5);
  doc.line(x, y, x + width, y);
}

function addSectionTitle(doc: jsPDF, title: string, y: number): number {
  const pageW = doc.internal.pageSize.getWidth();
  doc.setFontSize(22);
  doc.setTextColor(DARK);
  doc.text(title, 50, y);
  addAmberLine(doc, 50, y + 8, 60);
  doc.setDrawColor(BONE);
  doc.setLineWidth(0.5);
  doc.line(50, y + 14, pageW - 50, y + 14);
  return y + 36;
}

function addPageFooter(doc: jsPDF, pageNum: number, totalPages: number) {
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();

  doc.setDrawColor(BONE);
  doc.setLineWidth(0.5);
  doc.line(50, pageH - 35, pageW - 50, pageH - 35);

  doc.setFontSize(8);
  doc.setTextColor(MUTED);
  doc.setFont("helvetica", "italic");
  doc.text(PAGE_DISCLAIMER, 50, pageH - 24);
  doc.setFont("helvetica", "normal");

  doc.setFontSize(8);
  doc.setTextColor(AMBER_LIGHT);
  doc.text(`${pageNum} / ${totalPages}`, pageW - 50, pageH - 15, { align: "right" });
}

export function statusSymbol(status: string): string {
  return status === "optimal" ? "\u25CF" : status === "suboptimal" ? "\u26A0" : "\u2193";
}

function statusSymbolForDirection(status: string, marker: string): string {
  if (status === "optimal") return "\u25CF"; // ●
  // Determine direction based on marker interpretation availability
  const interp = BIOMARKER_INTERPRETATIONS[marker];
  if (interp) {
    if (interp.high && !interp.low) return "\u2191"; // ↑
    if (interp.low && !interp.high) return "\u2193"; // ↓
  }
  // For suboptimal that could be high or low, use ⚠
  if (status === "suboptimal") return "\u26A0"; // ⚠
  return "\u26A0"; // ⚠ default for flag
}

function getInterpretation(marker: string, status: string, value?: string): string {
  if (status === "optimal") return OPTIMAL_TEXT;
  const interp = BIOMARKER_INTERPRETATIONS[marker];
  if (!interp) return "Valor fora do intervalo funcional. A interpretação clínica completa requer avaliação individualizada.";
  
  // Determine direction from the value vs functional range
  const range = FUNCTIONAL_RANGES_DATA[marker];
  if (range && value) {
    const numVal = parseFloat(value.replace(",", "."));
    if (!isNaN(numVal)) {
      const max = parseFloat(range.max);
      const min = parseFloat(range.min);
      if (numVal > max && interp.high && interp.high.length > 0) return interp.high;
      if (numVal < min && interp.low && interp.low.length > 0) return interp.low;
    }
  }
  
  // Fallback: try high then low
  if (interp.high && interp.high.length > 0) return interp.high;
  if (interp.low && interp.low.length > 0) return interp.low;
  return "Valor fora do intervalo funcional. A interpretação clínica completa requer avaliação individualizada.";
}

function systemStatusLabel(status: string): string {
  if (status === "optimal") return "\u25CF Dentro do intervalo funcional";
  if (status === "suboptimal") return "\u26A0 Padrão a monitorizar";
  return "\u2193 Tendência para défice";
}

export async function generateFunctionalPDF(
  name: string,
  systems: [string, "optimal" | "suboptimal" | "flag"][],
  results: Finding[]
): Promise<jsPDF> {
  const doc = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const today = new Date().toLocaleDateString("pt-PT");
  const totalPages = 4;

  const logoData = await getLogoBase64();

  // ── PAGE 1: Header ──
  addPageBg(doc);
  doc.setFillColor(AMBER);
  doc.rect(0, 0, pageW, 4, "F");

  if (logoData) {
    try {
      doc.addImage(logoData, "PNG", (pageW - 180) / 2, 100, 180, 50);
    } catch { /* continue */ }
  }

  addAmberLine(doc, (pageW - 60) / 2, 170, 60);

  doc.setFontSize(32);
  doc.setTextColor(DARK);
  doc.text("Avaliação Funcional", pageW / 2, 260, { align: "center" });
  doc.text("de Biomarcadores", pageW / 2, 298, { align: "center" });

  doc.setFontSize(13);
  doc.setTextColor(MUTED);
  doc.text("Relatório educativo automatizado", pageW / 2, 340, { align: "center" });

  // Info card
  const cardW = 280;
  const cardH = 90;
  const cardX = (pageW - cardW) / 2;
  const cardY = 390;
  doc.setFillColor(BONE);
  doc.roundedRect(cardX, cardY, cardW, cardH, 4, 4, "F");

  doc.setFontSize(12);
  doc.setTextColor(DARK);
  doc.text(name, pageW / 2, cardY + 24, { align: "center" });
  doc.setFontSize(10);
  doc.setTextColor(MUTED);
  doc.text(today, pageW / 2, cardY + 42, { align: "center" });
  doc.text(`Biomarcadores analisados: ${results.length}`, pageW / 2, cardY + 60, { align: "center" });

  // Cover disclaimer
  doc.setFontSize(9);
  doc.setTextColor(MUTED);
  doc.setFont("helvetica", "italic");
  const disclaimerLines = doc.splitTextToSize(COVER_DISCLAIMER, pageW - 120);
  doc.text(disclaimerLines, pageW / 2, cardY + 120, { align: "center" });
  doc.setFont("helvetica", "normal");

  doc.setFillColor(AMBER);
  doc.rect(0, pageH - 4, pageW, 4, "F");
  addPageFooter(doc, 1, totalPages);

  // ── PAGE 2: Systems summary ──
  doc.addPage();
  addPageBg(doc);
  doc.setFillColor(AMBER);
  doc.rect(0, 0, pageW, 4, "F");

  let y = addSectionTitle(doc, "Resumo por sistemas", 55);

  doc.setFontSize(11);
  systems.forEach(([sysName, status]) => {
    // Estimate block height
    const explanation = SYSTEM_EXPLANATIONS_PDF[sysName] || "";
    const explLines = explanation ? doc.splitTextToSize(explanation, pageW - 140) : [];
    const blockHeight = 28 + (explLines.length > 0 ? explLines.length * 12 + 8 : 0);

    if (y + blockHeight > pageH - 60) {
      addPageFooter(doc, 2, totalPages);
      doc.addPage();
      addPageBg(doc);
      doc.setFillColor(AMBER);
      doc.rect(0, 0, pageW, 4, "F");
      y = 55;
    }

    // System status row with background
    doc.setFillColor(BONE);
    doc.roundedRect(45, y - 14, pageW - 90, blockHeight, 3, 3, "F");

    doc.setFontSize(11);
    doc.setTextColor(DARK);
    doc.text(systemStatusLabel(status), 60, y);
    doc.setFontSize(10);
    doc.setTextColor(MUTED);
    doc.text(sysName, pageW - 60, y, { align: "right" });

    // System interpretation text
    if (explLines.length > 0 && status !== "optimal") {
      doc.setFontSize(9);
      doc.setTextColor(MUTED);
      doc.setFont("helvetica", "italic");
      doc.text(explLines, 70, y + 16);
      doc.setFont("helvetica", "normal");
    }

    y += blockHeight + 8;
  });

  if (systems.length === 0) {
    doc.setTextColor(MUTED);
    doc.text("Nenhum valor laboratorial introduzido.", 60, y);
  }

  addPageFooter(doc, 2, totalPages);

  // ── PAGE 3: Biomarkers detail ──
  doc.addPage();
  addPageBg(doc);
  doc.setFillColor(AMBER);
  doc.rect(0, 0, pageW, 4, "F");

  y = addSectionTitle(doc, "Biomarcadores introduzidos", 55);

  results.forEach((r, idx) => {
    // Estimate space needed
    const interpretation = getInterpretation(r.marker, r.status, r.value);
    const interpLines = doc.splitTextToSize(interpretation, pageW - 120);
    const range = FUNCTIONAL_RANGES_DATA[r.marker];
    const blockHeight = 24 + 14 + (range ? 14 : 0) + 14 + interpLines.length * 12 + 16;

    if (y + blockHeight > pageH - 60) {
      addPageFooter(doc, 3, totalPages);
      doc.addPage();
      addPageBg(doc);
      doc.setFillColor(AMBER);
      doc.rect(0, 0, pageW, 4, "F");
      y = 55;
    }

    if (idx % 2 === 0) {
      doc.setFillColor(BONE);
      doc.roundedRect(45, y - 12, pageW - 90, blockHeight, 3, 3, "F");
    }

    const symbol = statusSymbolForDirection(r.status, r.marker);
    doc.setTextColor(DARK);
    doc.setFontSize(12);
    doc.text(`${symbol}  ${r.marker}`, 60, y + 4);

    doc.setFontSize(9);
    doc.setTextColor(MUTED);
    const valueDisplay = `Valor introduzido: ${r.value}${r.unit ? ` ${r.unit}` : ""}${r.implausible ? "  ⚠ unidade a confirmar" : ""}`;
    doc.text(valueDisplay, 80, y + 20);

    let lineY = y + 20;
    if (range) {
      lineY += 14;
      doc.setTextColor(AMBER);
      doc.text(`Intervalo funcional: ${range.min} - ${range.max} ${range.unit}`, 80, lineY);
    }

    lineY += 16;
    doc.setTextColor(DARK);
    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    doc.text("Interpretação teórica:", 80, lineY);
    doc.setFont("helvetica", "normal");
    lineY += 12;
    doc.setTextColor(MUTED);
    doc.text(interpLines, 80, lineY);

    y += blockHeight + 8;
  });

  addPageFooter(doc, 3, totalPages);

  // ── PAGE 4: Context + CTA ──
  doc.addPage();
  addPageBg(doc);
  doc.setFillColor(AMBER);
  doc.rect(0, 0, pageW, 4, "F");

  if (logoData) {
    try {
      doc.addImage(logoData, "PNG", (pageW - 140) / 2, 60, 140, 38);
    } catch { /* continue */ }
  }

  addAmberLine(doc, (pageW - 60) / 2, 115, 60);

  y = addSectionTitle(doc, "O que significa este relatório", 150);

  const contextText1 = "Este relatório identifica padrões possíveis, mas não permite determinar causas clínicas. Alterações laboratoriais podem resultar de estado nutricional, stress fisiológico, inflamação, alterações hormonais ou factores individuais.";
  const contextText2 = "Uma avaliação clínica completa considera história médica, sintomas, exames adicionais e contexto metabólico individual.";

  doc.setFontSize(11);
  doc.setTextColor(DARK);
  const ctxLines1 = doc.splitTextToSize(contextText1, pageW - 100);
  doc.text(ctxLines1, 50, y);
  y += ctxLines1.length * 16 + 12;

  const ctxLines2 = doc.splitTextToSize(contextText2, pageW - 100);
  doc.text(ctxLines2, 50, y);
  y += ctxLines2.length * 16 + 30;

  // Summary box
  const optimalCount = results.filter((r) => r.status === "optimal").length;
  const outsideCount = results.length - optimalCount;

  const boxW = pageW - 100;
  const boxH = 80;
  const boxX = 50;
  doc.setFillColor(BONE);
  doc.roundedRect(boxX, y, boxW, boxH, 4, 4, "F");

  doc.setFontSize(11);
  doc.setTextColor(DARK);
  doc.text(`Biomarcadores analisados: ${results.length}`, boxX + 20, y + 24);
  doc.text(`Fora do intervalo funcional: ${outsideCount}`, boxX + 20, y + 42);
  doc.text(`Dentro do intervalo funcional: ${optimalCount}`, boxX + 20, y + 60);

  y += boxH + 30;

  // CTA button
  const btnW = 240;
  const btnH = 48;
  const btnX = (pageW - btnW) / 2;
  doc.setFillColor(AMBER);
  doc.roundedRect(btnX, y, btnW, btnH, 8, 8, "F");

  doc.setFontSize(13);
  doc.setTextColor(WHITE);
  doc.textWithLink("Agendar consulta inicial", pageW / 2, y + 30, {
    align: "center",
    url: "https://catarinaveigaagendamento.as.me/",
  });

  doc.setFontSize(9);
  doc.setTextColor(MUTED);
  doc.text("info@catarinaveiga.com  ·  catarinaveiga.com", pageW / 2, y + 70, { align: "center" });

  doc.setFillColor(AMBER);
  doc.rect(0, pageH - 4, pageW, 4, "F");

  addPageFooter(doc, 4, totalPages);

  return doc;
}

export async function generatePDFBase64(
  name: string,
  systems: [string, "optimal" | "suboptimal" | "flag"][],
  results: Finding[]
): Promise<string> {
  const doc = await generateFunctionalPDF(name, systems, results);
  return doc.output("datauristring").split(",")[1];
}

export async function downloadPDF(
  name: string,
  systems: [string, "optimal" | "suboptimal" | "flag"][],
  results: Finding[]
) {
  const doc = await generateFunctionalPDF(name, systems, results);
  const date = new Date().toISOString().slice(0, 10);
  const safeName = name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  doc.save(`leitura-funcional-${safeName}-${date}.pdf`);
}
