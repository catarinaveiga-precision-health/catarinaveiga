/**
 * Extracts FAQ question/answer pairs from Sanity Portable Text body.
 * Looks for H2/H3 headings containing "FAQ" or "Perguntas Frequentes",
 * then treats subsequent H3/H4 blocks as questions and normal blocks as answers.
 */

interface PortableTextBlock {
  _type: string;
  style?: string;
  children?: { text: string }[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

function extractText(block: PortableTextBlock): string {
  return (block.children || []).map((c) => c.text).join("").trim();
}

export function extractFaqFromBody(body: PortableTextBlock[]): FaqItem[] {
  if (!body || !Array.isArray(body)) return [];

  // Find the index where the FAQ section starts
  const faqStartIndex = body.findIndex((block) => {
    if (block._type !== "block") return false;
    const text = extractText(block).toLowerCase();
    const style = block.style || "";
    const isHeading = style.startsWith("h");
    return isHeading && (
      text.includes("faq") ||
      text.includes("perguntas frequentes") ||
      text.includes("frequently asked") ||
      text.includes("dúvidas frequentes")
    );
  });

  if (faqStartIndex === -1) return [];

  const faqBlocks = body.slice(faqStartIndex + 1);
  const items: FaqItem[] = [];
  let currentQuestion = "";
  let currentAnswer = "";

  for (const block of faqBlocks) {
    if (block._type !== "block") continue;
    const style = block.style || "normal";
    const text = extractText(block);
    if (!text) continue;

    // A new heading signals a new question (or end of FAQ section if it's a major heading unrelated)
    if (style === "h2") {
      // Another h2 means we left the FAQ section
      if (currentQuestion && currentAnswer) {
        items.push({ question: currentQuestion, answer: currentAnswer.trim() });
      }
      break;
    }

    if (style === "h3" || style === "h4") {
      // Save previous Q&A
      if (currentQuestion && currentAnswer) {
        items.push({ question: currentQuestion, answer: currentAnswer.trim() });
      }
      currentQuestion = text;
      currentAnswer = "";
    } else if (style === "normal" && currentQuestion) {
      currentAnswer += (currentAnswer ? " " : "") + text;
    }
  }

  // Push last item
  if (currentQuestion && currentAnswer) {
    items.push({ question: currentQuestion, answer: currentAnswer.trim() });
  }

  return items;
}

export function buildFaqJsonLd(items: FaqItem[]): object | null {
  if (items.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
