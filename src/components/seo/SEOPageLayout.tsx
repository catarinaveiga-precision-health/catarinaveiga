import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalBand from "@/components/LegalBand";
import MobileCTA from "@/components/MobileCTA";

interface SEOPageLayoutProps {
  title: string;
  description: string;
  canonical: string;
  structuredData: Record<string, unknown>;
  children: React.ReactNode;
}

const SEOPageLayout = ({ title, description, canonical, structuredData, children }: SEOPageLayoutProps) => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="article" />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
    <Navbar />
    <main>{children}</main>
    <LegalBand />
    <Footer />
    <MobileCTA />
  </>
);

export default SEOPageLayout;
