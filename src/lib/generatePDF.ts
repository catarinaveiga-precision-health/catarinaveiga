import jsPDF from "jspdf";
import "jspdf-autotable";

const IVORY = "#F8F5F0";
const AMBER = "#9B7B5A";
const DARK = "#1F1A14";
const MUTED = "#8C8279";
const WHITE = "#ffffff";

const FOOTER_TEXT =
  "Esta ferramenta apresenta uma leitura educativa baseada em intervalos funcionais frequentemente utilizados em medicina funcional e literatura científica associada. Não constitui diagnóstico médico, nem substitui avaliação clínica individual. Os resultados baseiam-se exclusivamente nos valores introduzidos pelo utilizador. Erros de introdução ou ausência de contexto clínico podem alterar significativamente a interpretação.";

const FUNCTIONAL_RANGES_DATA: Record<string, { min: string; max: string; unit: string }> = {
  TSH: { min: "0.5", max: "2.0", unit: "mUI/L" },
  Ferritina: { min: "40", max: "100", unit: "ng/mL" },
  PCR: { min: "0", max: "1.0", unit: "mg/L" },
  "Vitamina D": { min: "50", max: "80", unit: "ng/mL" },
  "Vitamina B12": { min: "500", max: "900", unit: "pg/mL" },
  "Homocisteína": { min: "0", max: "7", unit: "µmol/L" },
  "Cortisol (manhã)": { min: "10", max: "18", unit: "µg/dL" },
};

interface Finding {
  marker: string;
  value: string;
  status: "optimal" | "suboptimal" | "flag";
  note: string;
}

function addFooter(doc: jsPDF, pageNum: number, totalPages: number) {
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  doc.setFontSize(7);
  doc.setTextColor(MUTED);
  const lines = doc.splitTextToSize(FOOTER_TEXT, pageW - 50);
  doc.text(lines, 25, pageH - 30);
  doc.text(`${pageNum} / ${totalPages}`, pageW - 25, pageH - 12, { align: "right" });
}

function statusDot(status: string): string {
  return status === "optimal" ? "🟢" : status === "suboptimal" ? "🟡" : "🔴";
}

export function generateFunctionalPDF(
  name: string,
  systems: [string, "optimal" | "suboptimal" | "flag"][],
  results: Finding[]
): jsPDF {
  const doc = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const today = new Date().toLocaleDateString("pt-PT");
  const totalPages = 5;

  // ── PAGE 1: Cover ──
  doc.setFillColor(IVORY);
  doc.rect(0, 0, pageW, doc.internal.pageSize.getHeight(), "F");

  doc.setFontSize(11);
  doc.setTextColor(AMBER);
  doc.text("CATARINA VEIGA · MEDICINA FUNCIONAL INTEGRATIVA", pageW / 2, 80, { align: "center" });

  doc.setFontSize(32);
  doc.setTextColor(DARK);
  doc.text("Leitura Funcional de Análises", pageW / 2, 260, { align: "center" });

  doc.setFontSize(14);
  doc.setTextColor(MUTED);
  doc.text("Resumo dos padrões fisiológicos identificados", pageW / 2, 295, { align: "center" });

  doc.setFontSize(12);
  doc.setTextColor(DARK);
  doc.text(`Nome: ${name}`, pageW / 2, 370, { align: "center" });
  doc.text(`Data: ${today}`, pageW / 2, 390, { align: "center" });

  addFooter(doc, 1, totalPages);

  // ── PAGE 2: System summary ──
  doc.addPage();
  doc.setFillColor(IVORY);
  doc.rect(0, 0, pageW, doc.internal.pageSize.getHeight(), "F");

  doc.setFontSize(22);
  doc.setTextColor(DARK);
  doc.text("Resumo por sistema", 40, 60);

  doc.setDrawColor("#E8E2DA");
  doc.setLineWidth(0.5);
  doc.line(40, 72, pageW - 40, 72);

  let y = 100;
  doc.setFontSize(12);
  systems.forEach(([sysName, status]) => {
    doc.setTextColor(DARK);
    doc.text(`${statusDot(status)}  ${sysName}`, 50, y);
    y += 28;
  });

  if (systems.length === 0) {
    doc.setTextColor(MUTED);
    doc.text("Nenhum valor laboratorial introduzido.", 50, y);
  }

  addFooter(doc, 2, totalPages);

  // ── PAGE 3: Biomarkers detail ──
  doc.addPage();
  doc.setFillColor(IVORY);
  doc.rect(0, 0, pageW, doc.internal.pageSize.getHeight(), "F");

  doc.setFontSize(22);
  doc.setTextColor(DARK);
  doc.text("Biomarcadores introduzidos", 40, 60);

  doc.setDrawColor("#E8E2DA");
  doc.line(40, 72, pageW - 40, 72);

  y = 100;
  doc.setFontSize(11);
  results.forEach((r) => {
    if (y > 720) {
      addFooter(doc, 3, totalPages);
      doc.addPage();
      doc.setFillColor(IVORY);
      doc.rect(0, 0, pageW, doc.internal.pageSize.getHeight(), "F");
      y = 60;
    }

    doc.setTextColor(DARK);
    doc.setFontSize(12);
    doc.text(`${statusDot(r.status)}  ${r.marker}`, 50, y);

    doc.setFontSize(10);
    doc.setTextColor(MUTED);
    doc.text(`Valor introduzido: ${r.value}`, 70, y + 16);

    const range = FUNCTIONAL_RANGES_DATA[r.marker];
    if (range) {
      doc.text(`Intervalo funcional: ${range.min} – ${range.max} ${range.unit}`, 70, y + 30);
    }

    y += range ? 50 : 38;
  });

  addFooter(doc, 3, totalPages);

  // ── PAGE 4: Educational text ──
  doc.addPage();
  doc.setFillColor(IVORY);
  doc.rect(0, 0, pageW, doc.internal.pageSize.getHeight(), "F");

  doc.setFontSize(22);
  doc.setTextColor(DARK);
  doc.text("O que estes padrões podem indicar", 40, 60);

  doc.setDrawColor("#E8E2DA");
  doc.line(40, 72, pageW - 40, 72);

  doc.setFontSize(12);
  doc.setTextColor(DARK);
  const eduText1 =
    "Padrões fora do intervalo funcional podem estar associados a sintomas como fadiga persistente, alterações hormonais, stress fisiológico ou dificuldades metabólicas.";
  const eduText2 =
    "Alguns padrões identificados merecem análise clínica mais aprofundada — a interpretação completa requer integração com sintomas, história clínica e outros factores fisiológicos.";

  const lines1 = doc.splitTextToSize(eduText1, pageW - 80);
  doc.text(lines1, 40, 100);

  const lines2 = doc.splitTextToSize(eduText2, pageW - 80);
  doc.text(lines2, 40, 100 + lines1.length * 18 + 20);

  addFooter(doc, 4, totalPages);

  // ── PAGE 5: CTA ──
  doc.addPage();
  doc.setFillColor(IVORY);
  doc.rect(0, 0, pageW, doc.internal.pageSize.getHeight(), "F");

  doc.setFontSize(24);
  doc.setTextColor(DARK);
  const ctaTitle = "Os teus exames podem estar normais.\nMas não necessariamente funcionais.";
  doc.text(ctaTitle, pageW / 2, 250, { align: "center" });

  // CTA button
  const btnW = 220;
  const btnH = 44;
  const btnX = (pageW - btnW) / 2;
  const btnY = 330;
  doc.setFillColor(AMBER);
  doc.roundedRect(btnX, btnY, btnW, btnH, 6, 6, "F");

  doc.setFontSize(13);
  doc.setTextColor(WHITE);
  doc.textWithLink("Agendar consulta inicial", pageW / 2, btnY + 28, {
    align: "center",
    url: "https://catarinaveigaagendamento.as.me/",
  });

  addFooter(doc, 5, totalPages);

  return doc;
}

export function generatePDFBase64(
  name: string,
  systems: [string, "optimal" | "suboptimal" | "flag"][],
  results: Finding[]
): string {
  const doc = generateFunctionalPDF(name, systems, results);
  // Returns base64 string without data URI prefix
  return doc.output("datauristring").split(",")[1];
}

export function downloadPDF(
  name: string,
  systems: [string, "optimal" | "suboptimal" | "flag"][],
  results: Finding[]
) {
  const doc = generateFunctionalPDF(name, systems, results);
  const date = new Date().toISOString().slice(0, 10);
  const safeName = name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  doc.save(`leitura-funcional-${safeName}-${date}.pdf`);
}
