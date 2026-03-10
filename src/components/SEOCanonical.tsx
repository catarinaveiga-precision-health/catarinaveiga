import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const CANONICAL_HOST = "www.catarinaveiga.com";
const CANONICAL_ORIGIN = `https://${CANONICAL_HOST}`;

/**
 * 1. Client-side redirect: non-www → www (for production)
 * 2. Canonical tag on every page pointing to www version
 */
const SEOCanonical = () => {
  const { pathname } = useLocation();

  // Redirect non-www to www in production
  useEffect(() => {
    const host = window.location.hostname;
    if (host === "catarinaveiga.com") {
      window.location.replace(
        `${CANONICAL_ORIGIN}${window.location.pathname}${window.location.search}${window.location.hash}`
      );
    }
  }, []);

  const canonicalUrl = `${CANONICAL_ORIGIN}${pathname === "/" ? "" : pathname}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default SEOCanonical;
