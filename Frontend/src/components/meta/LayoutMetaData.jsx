import React from "react";

const metadata = {
  viewport: "width=device-width, initial-scale=1.0",
  httpEquiv: "IE=edge",
  description:
    "Join our spiritual journey uniting India’s diverse communities—Hindu, Muslim, Sikh, Jain, and more—in shared devotion and cultural harmony. Celebrate divine love, peace, and spiritual growth in this sacred pilgrimage. 🌺🙏 Embrace India’s soul, fostering unity and enlightenment today!",
  author: "UjjwalS",
  keywords:
    "Bharat Bhakti Yatra, spirituality, Indian culture, interfaith, Hindu, Muslim, Sikh, Jain, pilgrimage, devotion, cultural harmony, spiritual journey, India, unity, peace",
  ogTitle: "Bharat Bhakti Yatra: Uniting India Through Spirituality",
  ogDescription:
    "Bharat Bhakti Yatra fosters unity among India’s diverse communities through devotion, cultural harmony, and spiritual growth, creating a sacred pilgrimage for all.",
  ogImage: "/BharatBhaktiYatraLogo.png",
  ogUrl: "http://localhost:5173/",
  ogType: "website",
  ogLocale: "en_IN",
  ogSiteName: "Bharat Bhakti Yatra",
  twitterCard: "summary_large_image",
  twitterTitle: "Bharat Bhakti Yatra: Uniting India Through Spirituality",
  twitterDescription:
    "Join a spiritual journey uniting Hindu, Muslim, Sikh, Jain, and more in shared devotion and cultural harmony for a peaceful, inclusive India.",
  twitterImage: "/BharatBhaktiYatraLogo.png",
  twitterSite: "@BharatBhaktiYatra",
  twitterCreator: "@UjjwalSaini0007",
  canonical: "http://localhost:5173/",
  robots: "index, follow",
  themeColor: "#FF9933, #138808",
  rating: "General",
  distribution: "Global",
  copyright: "Bharat Bhakti Yatra ©2025",
  applicationName: "Bharat Bhakti Yatra",
  appleMobileWebAppTitle: "Bharat Bhakti Yatra",
  appleMobileWebAppCapable: "yes",
};

function LayoutMetaData({ children }) {
  React.useEffect(() => {
    document.title = metadata.ogTitle;

    function upsertMeta(attrName, attrValue, content) {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    }

    // Basic Meta tags
    upsertMeta("name", "viewport", metadata.viewport);
    upsertMeta("http-equiv", "X-UA-Compatible", metadata.httpEquiv);
    upsertMeta("name", "description", metadata.description);
    upsertMeta("name encouraging", "author", metadata.author);
    upsertMeta("name", "keywords", metadata.keywords);
    upsertMeta("name", "robots", metadata.robots);
    upsertMeta("name", "theme-color", metadata.themeColor);
    upsertMeta("name", "rating", metadata.rating);
    upsertMeta("name", "distribution", metadata.distribution);
    upsertMeta("name", "copyright", metadata.copyright);
    upsertMeta("name", "application-name", metadata.applicationName);
    upsertMeta(
      "name",
      "apple-mobile-web-app-title",
      metadata.appleMobileWebAppTitle
    );
    upsertMeta(
      "name",
      "apple-mobile-web-app-capable",
      metadata.appleMobileWebAppCapable
    );

    // Open Graph
    upsertMeta("property", "og:title", metadata.ogTitle);
    upsertMeta("property", "og:description", metadata.ogDescription);
    upsertMeta("property", "og:image", metadata.ogImage);
    upsertMeta("property", "og:url", metadata.ogUrl);
    upsertMeta("property", "og:type", metadata.ogType);
    upsertMeta("property", "og:locale", metadata.ogLocale);
    upsertMeta("property", "og:site_name", metadata.ogSiteName);

    // Twitter Cards
    upsertMeta("name", "twitter:card", metadata.twitterCard);
    upsertMeta("name", "twitter:title", metadata.twitterTitle);
    upsertMeta("name", "twitter:description", metadata.twitterDescription);
    upsertMeta("name", "twitter:image", metadata.twitterImage);
    upsertMeta("name", "twitter:site", metadata.twitterSite);
    upsertMeta("name", "twitter:creator", metadata.twitterCreator);

    // Canonical link
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", metadata.canonical);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] bg-cover to-muted/80 p-2 py-10 flex flex-col justify-between">
      {children}
    </div>
  );
}

export default LayoutMetaData;