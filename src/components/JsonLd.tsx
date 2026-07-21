import { siteConfig } from "@/lib/siteConfig";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: siteConfig.name,
  url: "https://argarage.uk",
  image: "https://argarage.uk/images/hero-engine.jpg",
  telephone: siteConfig.phone.e164,
  priceRange: "££",
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.locality,
    addressCountry: siteConfig.address.countryCode,
  },
  areaServed: siteConfig.address.locality,
  openingHoursSpecification: siteConfig.hours.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.schemaDays.length === 1 ? h.schemaDays[0] : h.schemaDays,
    opens: h.opens,
    closes: h.closes,
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: siteConfig.services.map((name) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name,
      },
    })),
  },
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
