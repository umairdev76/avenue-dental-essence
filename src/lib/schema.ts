import { clinic, doctor, services } from "./clinic";

/**
 * Dentist / LocalBusiness structured data.
 * Only verified fields are emitted — no ratings, prices, hours or social
 * profiles are invented.
 */
export const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: clinic.name,
  description:
    "Dental clinic in Sambrial, Sialkot, Pakistan, offering a range of dental treatment areas.",
  telephone: clinic.phoneDisplay,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${clinic.address.line1}, ${clinic.address.line2}`,
    addressLocality: "Sambrial",
    addressRegion: "Punjab",
    postalCode: clinic.address.postalCode,
    addressCountry: "PK",
  },
  areaServed: ["Sambrial", "Sialkot"],
  hasMap: clinic.mapsUrl,
  employee: {
    "@type": "Person",
    name: doctor.name,
    jobTitle: "Dentist",
    hasCredential: "BDS",
  },
  availableService: services.map((s) => ({
    "@type": "MedicalProcedure",
    name: s.name,
  })),
};

export const faqSchema = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const breadcrumbSchema = (crumbs: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.name,
    item: c.url,
  })),
});
