export interface Reference {
  authors: string;
  journal: string;
  year: string;
  pmid: string;
}

export const BIOMARKER_REFERENCES: Record<string, Reference[]> = {
  TSH: [
    { authors: "Hoermann R et al.", journal: "Endocr Rev", year: "2019", pmid: "29669113" },
    { authors: "Idrees T et al.", journal: "Front Endocrinol", year: "2023", pmid: "37696273" },
  ],
  "T3 Livre": [
    { authors: "Salas-Lucia F, Bianco AC.", journal: "Front Endocrinol", year: "2022", pmid: "36387853" },
    { authors: "Ataoglu HE et al.", journal: "Eur J Intern Med", year: "2018", pmid: "30053794" },
  ],
  "T4 Livre": [
    { authors: "Henze M et al.", journal: "J Clin Endocrinol Metab", year: "2017", pmid: "28938415" },
    { authors: "Olmedo Carrillo P et al.", journal: "Endocrinol Diabetes Nutr", year: "2017", pmid: "28895537" },
  ],
  Ferritina: [
    { authors: "Camaschella C.", journal: "N Engl J Med", year: "2015", pmid: "20021982" },
    { authors: "Soppi ET.", journal: "Clin Case Rep", year: "2018", pmid: "37820340" },
  ],
  "Vitamina B12": [
    { authors: "Green R et al.", journal: "Nat Rev Dis Primers", year: "2017", pmid: "33809274" },
    { authors: "Rizzo G et al.", journal: "Nutrients", year: "2016", pmid: "32257364" },
  ],
  "Glicose em jejum": [
    { authors: "Tabák AG et al.", journal: "Lancet", year: "2012", pmid: "36803020" },
    { authors: "Selvin E et al.", journal: "N Engl J Med", year: "2010", pmid: "32504113" },
  ],
  "Insulina em jejum": [
    { authors: "Hanley AJ et al.", journal: "Diabetes Care", year: "2002", pmid: "12145237" },
  ],
  PCR: [
    { authors: "Ridker PM.", journal: "N Engl J Med", year: "2002", pmid: "20167359" },
  ],
  "Homocisteína": [
    { authors: "Refsum H et al.", journal: "J Intern Med", year: "2004", pmid: "34670571" },
    { authors: "Ganguly P, Alam SF.", journal: "Nutr J", year: "2015", pmid: "36046184" },
  ],
  "Vitamina D": [
    { authors: "Holick MF.", journal: "N Engl J Med", year: "2007", pmid: "23107484" },
    { authors: "Pludowski P et al.", journal: "Nutrients", year: "2021", pmid: "34093974" },
  ],
  NLR: [
    { authors: "Forget P et al.", journal: "J Inflamm Res", year: "2017", pmid: "41527423" },
    { authors: "Zahorec R.", journal: "Bratisl Lek Listy", year: "2021", pmid: "34161115" },
  ],
  Hemoglobina: [
    { authors: "Penninx BW et al.", journal: "J Am Geriatr Soc", year: "2004", pmid: "12133021" },
    { authors: "Chaves PH et al.", journal: "J Am Geriatr Soc", year: "2004", pmid: "15507056" },
  ],
  "VGM/MCV": [
    { authors: "Oosterhuis WP et al.", journal: "Scand J Clin Lab Invest", year: "2000", pmid: "10757449" },
    { authors: "Karnchanasorn R et al.", journal: "Front Nutr", year: "2023", pmid: "37469107" },
  ],
  RDW: [
    { authors: "Salvagno GL et al.", journal: "Crit Rev Clin Lab Sci", year: "2015", pmid: "25375215" },
    { authors: "Pilling LC et al.", journal: "PLOS ONE", year: "2018", pmid: "30235240" },
  ],
  "Colesterol total": [
    { authors: "Ference BA et al.", journal: "Eur Heart J", year: "2017", pmid: "38467833" },
    { authors: "Grundy SM et al.", journal: "Circulation", year: "2019", pmid: "39873663" },
  ],
  HDL: [
    { authors: "Barter P et al.", journal: "N Engl J Med", year: "2007", pmid: "37415367" },
    { authors: "Tall AR et al.", journal: "N Engl J Med", year: "2022", pmid: "36008559" },
  ],
  LDL: [
    { authors: "Ference BA et al.", journal: "JAMA", year: "2019", pmid: "30239550" },
    { authors: "Ray KK et al.", journal: "Lancet", year: "2021", pmid: "35409326" },
  ],
  ALT: [
    { authors: "Prati D et al.", journal: "Ann Intern Med", year: "2002", pmid: "22331365" },
    { authors: "Kunde SS et al.", journal: "Hepatology", year: "2005", pmid: "23740153" },
  ],
  AST: [
    { authors: "Ndrepepa G et al.", journal: "Nutr Metab Cardiovasc Dis", year: "2021", pmid: "32861234" },
  ],
  "Leucócitos totais": [
    { authors: "Gurm HS et al.", journal: "Heart", year: "2003", pmid: "12975419" },
    { authors: "Kabat GC et al.", journal: "Am J Epidemiol", year: "2017", pmid: "28369251" },
  ],
  "Cortisol (manhã)": [],
};
