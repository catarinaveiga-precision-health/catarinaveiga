import SEOPageLayout from "@/components/seo/SEOPageLayout";
import SEOHero from "@/components/seo/SEOHero";
import SEOContentSection from "@/components/seo/SEOContentSection";
import SEOImpactQuote from "@/components/seo/SEOImpactQuote";
import SEOSymptomGrid from "@/components/seo/SEOSymptomGrid";
import SEOPatternCards from "@/components/seo/SEOPatternCards";
import SEOCTA from "@/components/seo/SEOCTA";

const sinaisProteinaInsuficiente = [
  "Fome ou cravings antes do almoço, mesmo tendo comido",
  "Energia instável durante a manhã com quebras a meio",
  "Dificuldade de concentração nas primeiras horas do dia",
  "Vontade de doces ou hidratos refinados a meio da manhã",
  "Irritabilidade ou ansiedade sem razão aparente",
  "Recuperação lenta após treino matinal",
  "Nevoeiro mental persistente até ao almoço",
  "Acordar sem fome e saltar o pequeno-almoço com frequência",
];

const errosComuns = [
  { title: "Granola com iogurte magro", desc: "Parece saudável, mas muitas vezes tem mais açúcar do que proteína. A maioria das granolas comerciais tem 3-5g de proteína por dose." },
  { title: "Torrada com manteiga", desc: "Fornece energia rápida mas quase zero proteína. A fome volta em 60-90 minutos." },
  { title: "Fruta sozinha", desc: "Rica em micronutrientes mas sem proteína nem gordura. Causa pico de glicose seguido de quebra." },
  { title: "Cereais com leite", desc: "A maioria dos cereais tem menos de 4g de proteína por dose. O leite acrescenta pouco ao total." },
  { title: "Sumo natural ou smoothie de fruta", desc: "Sem fibra nem proteína, comporta-se como açúcar líquido no metabolismo." },
  { title: "Café com leite como refeição", desc: "Não é um pequeno-almoço. Suprime a fome temporariamente sem fornecer nutrientes." },
];

const opcoesPraticas = [
  { title: "Ovos mexidos com queijo e espinafres", desc: "2-3 ovos + 30g queijo = 25-30g proteína. Pronto em 5 minutos." },
  { title: "Iogurte grego com sementes e frutos secos", desc: "200g iogurte grego (não magro) + 1 colher de sementes = 20-25g proteína." },
  { title: "Panquecas de aveia com proteína", desc: "1 ovo + 40g aveia + 1 scoop proteína + banana. 28-32g proteína." },
  { title: "Tosta de pão de centeio com salmão fumado e ovo", desc: "1 fatia pão centeio + 50g salmão + 1 ovo = 22-26g proteína." },
  { title: "Bowl de cottage cheese com fruta e nozes", desc: "200g cottage cheese + fruta + nozes = 24-28g proteína." },
  { title: "Overnight oats com proteína", desc: "Aveia + leite + proteína em pó + sementes de chia. Prepara na véspera, come em 2 minutos." },
];

const PequenosAlmocosProteina = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "name": "Pequenos-Almoços Ricos em Proteína: Guia Prático Para Mulheres",
    "description": "Pequenos-almoços com 25-30g de proteína que cortam a fome, estabilizam a energia e não precisam de meal prep. Opções simples e rápidas.",
    "url": "https://www.catarinaveiga.com/pequenos-almocos-ricos-em-proteina",
    "inLanguage": "pt",
    "publisher": { "@type": "Organization", "name": "Catarina Veiga — Medicina Funcional Integrativa", "url": "https://www.catarinaveiga.com" },
  };

  return (
    <SEOPageLayout
      title="Pequenos-Almoços Ricos em Proteína: Guia Para Mulheres | Catarina Veiga"
      description="Pequenos-almoços com 25-30g de proteína que cortam a fome, estabilizam a energia e não precisam de meal prep. Opções simples e rápidas."
      canonical="https://www.catarinaveiga.com/pequenos-almocos-ricos-em-proteina"
      structuredData={structuredData}
    >
      <SEOHero
        label="Nutrição Funcional · Proteína"
        title="Pequenos-almoços ricos em proteína: o que muda quando começas o dia com 25-30g"
        intro="A maioria das mulheres come menos de 10g de proteína ao pequeno-almoço. Não é falta de disciplina — é falta de informação sobre o que realmente sustenta a energia até ao almoço."
        breadcrumb={[
          { label: "Início", to: "/" },
          { label: "Recursos", to: "/recursos" },
          { label: "Pequenos-Almoços Proteicos" },
        ]}
      />

      <SEOContentSection label="O essencial" title="Porque é que a proteína ao pequeno-almoço importa tanto">
        <p>
          A proteína ao pequeno-almoço não é uma tendência fitness. É uma necessidade fisiológica — especialmente para mulheres acima dos 35 anos, onde a massa muscular começa a diminuir e a sensibilidade à insulina se altera.
        </p>
        <p>
          Quando começas o dia com proteína suficiente (25-30g), activas a saciedade pela via da colecistoquinina e do peptídeo YY. São hormonas que dizem ao cérebro: estou nutrida, não preciso de mais comida nas próximas 4-5 horas.
        </p>
        <p>
          Sem proteína adequada, a glicose sobe rápido e desce rápido. O resultado: fome às 10h, cravings por doces, dificuldade de concentração e irritabilidade. Tudo isto pode ser resolvido com a primeira refeição do dia.
        </p>
      </SEOContentSection>

      <SEOImpactQuote quote="Não precisas de suplementos caros nem de receitas complexas. Precisas de proteína real na primeira refeição do dia — e de consistência." />

      <SEOSymptomGrid
        label="Reconheces isto?"
        title="Sinais de que o teu pequeno-almoço não tem proteína suficiente"
        symptoms={sinaisProteinaInsuficiente}
      />

      <SEOPatternCards
        label="O que não funciona"
        title="Pequenos-almoços populares que não sustentam a manhã"
        patterns={errosComuns}
      />

      <SEOImpactQuote quote="Um pequeno-almoço que te deixa com fome duas horas depois não é um pequeno-almoço — é um snack disfarçado." />

      <SEOContentSection label="A ciência" title="O que acontece quando comes 25-30g de proteína de manhã" bg="almond">
        <p>
          Estudos mostram que 25-30g de proteína por refeição é o limiar necessário para activar a síntese proteica muscular de forma eficiente. Abaixo deste valor, o estímulo é sub-óptimo.
        </p>
        <p>
          Para mulheres em perimenopausa, este limiar é ainda mais relevante: a diminuição de estrogénio reduz a eficiência da síntese proteica, tornando cada refeição uma oportunidade que não deve ser desperdiçada.
        </p>
        <p>
          Além da saciedade, a proteína ao pequeno-almoço estabiliza a resposta glicémica durante o resto do dia — um efeito conhecido como "second meal effect". A primeira refeição condiciona como o teu corpo responde a todas as seguintes.
        </p>
      </SEOContentSection>

      <SEOPatternCards
        label="Opções práticas"
        title="6 pequenos-almoços com 25-30g de proteína"
        patterns={opcoesPraticas}
        bg="almond"
      />

      <SEOContentSection label="Dicas práticas" title="Como aumentar a proteína sem complicar a rotina">
        <p>
          Não precisas de mudar tudo de uma vez. Começa por acrescentar uma fonte de proteína ao que já comes: um ovo ao pão, iogurte grego em vez do normal, cottage cheese em vez de manteiga.
        </p>
        <p>
          Se tens pouco tempo de manhã, prepara na véspera: overnight oats com proteína, ovos cozidos, ou porções de cottage cheese com fruta já cortada. O objectivo é que seja tão fácil que não precises de pensar.
        </p>
        <p>
          Evita cair na armadilha dos produtos "proteicos" ultra-processados. Barras, cereais e iogurtes com claim de proteína frequentemente têm mais açúcar do que proteína real. Lê os rótulos: procura pelo menos 15g de proteína por porção e menos de 8g de açúcar.
        </p>
      </SEOContentSection>

      <SEOCTA
        title="Queres saber se a tua alimentação está a dar ao teu corpo o que ele precisa?"
        subtitle="A avaliação funcional analisa não só o que comes, mas como o teu corpo responde — incluindo glicose, insulina, inflamação e marcadores de saciedade."
      />
    </SEOPageLayout>
  );
};

export default PequenosAlmocosProteina;
