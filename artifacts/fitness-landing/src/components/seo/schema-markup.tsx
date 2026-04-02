import { useEffect } from "react";

export function SchemaMarkup() {
  useEffect(() => {
    const existingSchemas = document.querySelectorAll('script[data-schema]');
    existingSchemas.forEach(el => el.remove());
    const existingMeta = document.querySelectorAll('meta[data-dynamic]');
    existingMeta.forEach(el => el.remove());
    const existingCanonical = document.querySelector('link[data-dynamic]');
    existingCanonical?.remove();

    const dateModified = "2026-04-02";

    const organization = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "BH Labs",
      "url": "https://www.bh-labs.com",
      "logo": "https://www.bh-labs.com/logo-dark.png",
      "description": "Miami-based biohacking and wellness company installing turnkey Recovery Pods in fitness clubs and sports facilities.",
      "telephone": "+1-954-870-5814",
      "email": "info@thebiohacklab.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Miami",
        "addressRegion": "FL",
        "addressCountry": "US"
      },
      "areaServed": {
        "@type": "Place",
        "name": "South Florida"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-954-870-5814",
        "contactType": "sales",
        "email": "info@thebiohacklab.com"
      },
      "sameAs": [
        "https://www.bh-labs.com"
      ]
    };

    const product = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "BH Labs Recovery Pod for Fitness Clubs",
      "description": "Turnkey wellness pod for fitness clubs and sports facilities featuring HBOT, red light therapy, infrared sauna, lymphatic drainage, and PEMF devices. Drives 30% better member retention with zero additional staff.",
      "brand": { "@type": "Brand", "name": "BH Labs" },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "45000",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
        "description": "Complete turnkey Recovery Pod installation with 1-year warranty"
      },
      "dateModified": dateModified
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "dateModified": dateModified,
      "mainEntity": [
        { q: "How does a Recovery Pod help with member retention?", a: "Members who use recovery equipment stay 30% longer on average. A Recovery Pod gives members a reason to upgrade to a premium tier and keeps them coming back — reducing churn and increasing lifetime value." },
        { q: "What's the ROI for a fitness facility?", a: "A BH Labs Recovery Pod costs approximately $45,000. By launching a premium recovery membership tier ($50-100/month per member), most facilities see full payback within 3-6 months while generating recurring revenue." },
        { q: "Does our staff need special training?", a: "BH Labs provides comprehensive staff training and certification. Your existing team will be fully equipped to guide members through 30+ recovery protocols." },
        { q: "How much space does a Recovery Pod require?", a: "Our in-house architect designs the pod layout to fit your available space. Whether you have a spare room or an open area, we'll configure equipment to maximize efficiency." },
        { q: "What types of fitness facilities use Recovery Pods?", a: "Gyms, CrossFit boxes, padel clubs, boutique fitness studios, martial arts academies, and multi-sport facilities. Any facility looking to differentiate with premium recovery." },
        { q: "What equipment is included?", a: "Each Recovery Pod includes an HBOT chamber, red light therapy panels, infrared sauna, compression therapy suits, lymphatic drainage, and PEMF devices — seven clinical-grade modalities total." }
      ].map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    };

    const pageUrl = "https://www.bh-labs.com/fitness";

    const webPage = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "BH Labs Recovery Pods for Fitness & Sports Clubs",
      "url": pageUrl,
      "dateModified": dateModified,
      "publisher": {
        "@type": "Organization",
        "name": "BH Labs"
      }
    };

    [organization, product, faqSchema, webPage].forEach(schema => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema", "true");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    const canonical = document.createElement("link");
    canonical.rel = "canonical";
    canonical.href = pageUrl;
    canonical.setAttribute("data-dynamic", "true");
    document.head.appendChild(canonical);

    const setMeta = (attr: string, key: string, content: string) => {
      const meta = document.createElement("meta");
      meta.setAttribute(attr, key);
      meta.setAttribute("content", content);
      meta.setAttribute("data-dynamic", "true");
      document.head.appendChild(meta);
    };

    document.title = "Recovery Pods for Fitness & Sports Clubs | BH Labs — Premium Member Recovery";
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Install a turnkey BH Labs Recovery Pod in your fitness club. Launch a premium recovery tier that drives member retention by 30%, generates recurring revenue, and requires zero additional staff.");
    setMeta("property", "og:title", "Recovery Pods for Fitness & Sports Clubs | BH Labs");
    setMeta("property", "og:description", "Add a turnkey Recovery Pod to your facility. Launch a premium recovery tier that drives retention, attracts new members, and generates recurring revenue.");
    setMeta("property", "og:url", pageUrl);
    setMeta("property", "og:image", "https://www.bh-labs.com/opengraph.jpg");
    setMeta("property", "og:image:width", "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("name", "twitter:image", "https://www.bh-labs.com/opengraph.jpg");

    return () => {
      document.querySelectorAll('script[data-schema]').forEach(el => el.remove());
      document.querySelectorAll('meta[data-dynamic]').forEach(el => el.remove());
      document.querySelector('link[data-dynamic]')?.remove();
    };
  }, []);

  return null;
}
