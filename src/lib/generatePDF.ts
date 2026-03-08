import jsPDF from "jspdf";
import "jspdf-autotable";

const IVORY = "#F8F5F0";
const AMBER = "#9B7B5A";
const AMBER_LIGHT = "#B89B7A";
const DARK = "#1F1A14";
const MUTED = "#8C8279";
const BONE = "#E8E2DA";
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

function addFooter(doc: jsPDF, pageNum: number, totalPages: number) {
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();

  // Subtle top border for footer area
  doc.setDrawColor(BONE);
  doc.setLineWidth(0.5);
  doc.line(50, pageH - 55, pageW - 50, pageH - 55);

  doc.setFontSize(8);
  doc.setTextColor(MUTED);
  doc.setFont("helvetica", "italic");
  const lines = doc.splitTextToSize(FOOTER_TEXT, pageW - 100);
  doc.text(lines, 50, pageH - 48);
  doc.setFont("helvetica", "normal");

  doc.setFontSize(8);
  doc.setTextColor(AMBER_LIGHT);
  doc.text(`${pageNum} / ${totalPages}`, pageW - 50, pageH - 15, { align: "right" });
}

function statusDot(status: string): string {
  return status === "optimal" ? "🟢" : status === "suboptimal" ? "🟡" : "🔴";
}

function statusLabel(status: string): string {
  return status === "optimal" ? "Óptimo" : status === "suboptimal" ? "Subóptimo" : "Atenção";
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
  const totalPages = 5;

  const logoData = await getLogoBase64();

  // ── PAGE 1: Cover ──
  addPageBg(doc);

  // Top decorative amber band
  doc.setFillColor(AMBER);
  doc.rect(0, 0, pageW, 4, "F");

  // Logo
  if (logoData) {
    try {
      doc.addImage(logoData, "PNG", (pageW - 180) / 2, 100, 180, 50);
    } catch { /* logo failed, continue without */ }
  }

  // Decorative amber line below logo
  addAmberLine(doc, (pageW - 60) / 2, 170, 60);

  // Title block — centered vertically
  doc.setFontSize(36);
  doc.setTextColor(DARK);
  doc.text("Leitura Funcional", pageW / 2, 290, { align: "center" });
  doc.text("de Análises", pageW / 2, 330, { align: "center" });

  doc.setFontSize(13);
  doc.setTextColor(MUTED);
  doc.text("Resumo dos padrões fisiológicos identificados", pageW / 2, 370, { align: "center" });

  // Name & date in a subtle card
  const cardW = 260;
  const cardH = 70;
  const cardX = (pageW - cardW) / 2;
  const cardY = 420;
  doc.setFillColor(BONE);
  doc.roundedRect(cardX, cardY, cardW, cardH, 4, 4, "F");

  doc.setFontSize(11);
  doc.setTextColor(DARK);
  doc.text(name, pageW / 2, cardY + 28, { align: "center" });
  doc.setFontSize(10);
  doc.setTextColor(MUTED);
  doc.text(today, pageW / 2, cardY + 48, { align: "center" });

  // Bottom decorative amber band
  doc.setFillColor(AMBER);
  doc.rect(0, pageH - 4, pageW, 4, "F");

  addFooter(doc, 1, totalPages);

  // ── PAGE 2: System summary ──
  doc.addPage();
  addPageBg(doc);
  doc.setFillColor(AMBER);
  doc.rect(0, 0, pageW, 4, "F");

  let y = addSectionTitle(doc, "Resumo por sistema", 55);

  doc.setFontSize(11);
  systems.forEach(([sysName, status]) => {
    // Row background alternating
    const rowBg = systems.indexOf([sysName, status] as any) % 2 === 0;
    if (rowBg) {
      doc.setFillColor(BONE);
      doc.rect(45, y - 14, pageW - 90, 26, "F");
    }
    doc.setTextColor(DARK);
    doc.text(`${statusDot(status)}  ${sysName}`, 60, y);
    doc.setFontSize(9);
    doc.setTextColor(MUTED);
    doc.text(statusLabel(status), pageW - 60, y, { align: "right" });
    doc.setFontSize(11);
    y += 30;
  });

  if (systems.length === 0) {
    doc.setTextColor(MUTED);
    doc.text("Nenhum valor laboratorial introduzido.", 60, y);
  }

  addFooter(doc, 2, totalPages);

  // ── PAGE 3: Biomarkers detail ──
  doc.addPage();
  addPageBg(doc);
  doc.setFillColor(AMBER);
  doc.rect(0, 0, pageW, 4, "F");

  y = addSectionTitle(doc, "Biomarcadores introduzidos", 55);

  results.forEach((r, idx) => {
    if (y > 700) {
      addFooter(doc, 3, totalPages);
      doc.addPage();
      addPageBg(doc);
      doc.setFillColor(AMBER);
      doc.rect(0, 0, pageW, 4, "F");
      y = 55;
    }

    // Card-like row
    const range = FUNCTIONAL_RANGES_DATA[r.marker];
    const cardHeight = range ? 58 : 42;

    if (idx % 2 === 0) {
      doc.setFillColor(BONE);
      doc.roundedRect(45, y - 12, pageW - 90, cardHeight, 3, 3, "F");
    }

    doc.setTextColor(DARK);
    doc.setFontSize(12);
    doc.text(`${statusDot(r.status)}  ${r.marker}`, 60, y + 4);

    doc.setFontSize(9);
    doc.setTextColor(MUTED);
    doc.text(`Valor introduzido: ${r.value}`, 80, y + 20);

    if (range) {
      doc.setTextColor(AMBER);
      doc.text(`Intervalo funcional: ${range.min} – ${range.max} ${range.unit}`, 80, y + 34);
    }

    y += cardHeight + 8;
  });

  addFooter(doc, 3, totalPages);

  // ── PAGE 4: Educational text ──
  doc.addPage();
  addPageBg(doc);
  doc.setFillColor(AMBER);
  doc.rect(0, 0, pageW, 4, "F");

  y = addSectionTitle(doc, "O que estes padrões podem indicar", 55);

  doc.setFontSize(12);
  doc.setTextColor(DARK);

  const eduText1 =
    "Padrões fora do intervalo funcional podem estar associados a sintomas como fadiga persistente, alterações hormonais, stress fisiológico ou dificuldades metabólicas.";
  const eduText2 =
    "Alguns padrões identificados merecem análise clínica mais aprofundada — a interpretação completa requer integração com sintomas, história clínica e outros factores fisiológicos.";

  const lines1 = doc.splitTextToSize(eduText1, pageW - 100);
  doc.text(lines1, 50, y);

  addAmberLine(doc, 50, y + lines1.length * 18 + 10, 40);

  const lines2 = doc.splitTextToSize(eduText2, pageW - 100);
  doc.text(lines2, 50, y + lines1.length * 18 + 30);

  addFooter(doc, 4, totalPages);

  // ── PAGE 5: CTA ──
  doc.addPage();
  addPageBg(doc);
  doc.setFillColor(AMBER);
  doc.rect(0, 0, pageW, 4, "F");

  // Logo on CTA page
  if (logoData) {
    try {
      doc.addImage(logoData, "PNG", (pageW - 140) / 2, 160, 140, 38);
    } catch { /* continue */ }
  }

  addAmberLine(doc, (pageW - 60) / 2, 215, 60);

  // Disclaimer block before CTA
  doc.setFontSize(10);
  doc.setTextColor(MUTED);
  doc.setFont("helvetica", "italic");
  const disclaimerLines = doc.splitTextToSize(FOOTER_TEXT, pageW - 120);
  const disclaimerStartY = 240;
  doc.text(disclaimerLines, pageW / 2, disclaimerStartY, { align: "center" });
  doc.setFont("helvetica", "normal");

  const disclaimerEndY = disclaimerStartY + disclaimerLines.length * 14 + 30;

  doc.setFontSize(26);
  doc.setTextColor(DARK);
  doc.text("Os teus exames podem estar normais.", pageW / 2, disclaimerEndY, { align: "center" });
  doc.setFontSize(26);
  doc.text("Mas não necessariamente funcionais.", pageW / 2, disclaimerEndY + 35, { align: "center" });

  // CTA button
  const btnW = 240;
  const btnH = 48;
  const btnX = (pageW - btnW) / 2;
  const btnY = disclaimerEndY + 70;
  doc.setFillColor(AMBER);
  doc.roundedRect(btnX, btnY, btnW, btnH, 8, 8, "F");

  doc.setFontSize(13);
  doc.setTextColor(WHITE);
  doc.textWithLink("Agendar consulta inicial", pageW / 2, btnY + 30, {
    align: "center",
    url: "https://catarinaveigaagendamento.as.me/",
  });

  // Contact info
  doc.setFontSize(9);
  doc.setTextColor(MUTED);
  doc.text("info@catarinaveiga.com  ·  catarinaveiga.com", pageW / 2, btnY + 80, { align: "center" });

  doc.setFillColor(AMBER);
  doc.rect(0, pageH - 4, pageW, 4, "F");

  addFooter(doc, 5, totalPages);

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
