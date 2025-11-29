import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  icon?: string;
}

export const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  icon,
}: SEOProps) => {
  const location = useLocation();
  const baseUrl = "https://fruitshadiyatsahra.com"; //"https://hadiyatsahra.com"; // window.location.origin
  const fullUrl = `${baseUrl}${location.pathname}`;
  const defaultImage = `${baseUrl}/logo.png`;

  useEffect(() => {
    // Update title
    document.title = `${title} | FRUITS HADIYAT SAHRA`;

    // icon

    // let favicon = document.querySelector('link[rel="icon"]');
    // if (!favicon) {
    //   favicon = document.createElement("link");
    //   favicon.setAttribute("rel", "icon");
    //   favicon.setAttribute("type", "image/png");
    //   document.head.appendChild(favicon);
    // }
    // favicon.setAttribute("href", `${baseUrl}/logo.png`);

    if (icon) {
      let favicon = document.querySelector('link[rel="icon"]');
      if (!favicon) {
        favicon = document.createElement("link");
        favicon.setAttribute("rel", "icon");
        favicon.setAttribute("type", "image/png");
        document.head.appendChild(favicon);
      }
      favicon.setAttribute("href", icon);
    }

    // Update meta tags
    const updateMetaTag = (
      name: string,
      content: string,
      isProperty = false
    ) => {
      const attr = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attr}="${name}"]`);

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    // Standard meta tags
    updateMetaTag("description", description);
    if (keywords) {
      updateMetaTag("keywords", keywords);
    }

    // Open Graph tags
    updateMetaTag("og:title", `${title} | FRUITS HADIYAT SAHRA`, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:url", fullUrl, true);
    updateMetaTag("og:image", ogImage || defaultImage, true);

    // Twitter tags
    updateMetaTag("twitter:title", `${title} | FRUITS HADIYAT SAHRA`);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage || defaultImage);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical || fullUrl);

    // JSON-LD structured data
    const existingScript = document.querySelector(
      'script[type="application/ld+json"]'
    );
    if (existingScript) {
      existingScript.remove();
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "FRUITS HADIYAT SAHRA",
      description: description,
      url: baseUrl,
      telephone: "+212602415793",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Arfoud",
        addressCountry: "MA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 31.9314,
        longitude: -4.4267,
      },
      priceRange: "$$",
      image: ogImage || defaultImage,
      sameAs: ["https://www.instagram.com/fruits_hadiyat_sahra"],
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, [
    title,
    description,
    keywords,
    canonical,
    ogImage,
    fullUrl,
    baseUrl,
    defaultImage,
  ]);

  return null;
};
