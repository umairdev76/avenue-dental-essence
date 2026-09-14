/**
 * Single source of truth for all Dental Avenue content.
 *
 * Everything the clinic may want to change later (phone, address, services,
 * doctor details, FAQs, reviews, gallery, hours) lives here so no business
 * fact is hard-coded across components.
 *
 * IMPORTANT AUTHENTICITY RULE:
 * Only verified information is filled in. Anything unverified is left empty
 * (`null` or `[]`) and the UI renders an "awaiting clinic input" state instead
 * of inventing content.
 */

export const clinic = {
  name: "Dental Avenue",
  category: "Dental Clinic",
  shortDescription: "Dental clinic in Sambrial, Sialkot.",
  phoneDisplay: "+92 333 6119410",
  phoneHref: "tel:+923336119410",
  address: {
    line1: "Sialkot–Wazirabad Dual Carriageway",
    line2: "Opposite PSO Petrol Pump",
    area: "Fazalpura, Sambrial",
    postalCode: "51070",
    region: "Punjab",
    country: "Pakistan",
  },
  /** Verified full address string, used for schema + maps search. */
  fullAddress:
    "Sialkot–Wazirabad Dual Carriageway, opposite PSO Petrol Pump, Fazalpura, Sambrial, 51070, Pakistan",
  /** Maps link resolves by exact business name + address — no invented coordinates. */
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "Dental Avenue, Sialkot–Wazirabad Dual Carriageway, opposite PSO Petrol Pump, Fazalpura, Sambrial 51070, Pakistan",
    ),
  mapsEmbedUrl:
    "https://www.google.com/maps?output=embed&q=" +
    encodeURIComponent(
      "Dental Avenue, Sialkot–Wazirabad Dual Carriageway, opposite PSO Petrol Pump, Fazalpura, Sambrial 51070, Pakistan",
    ),

  /** Not verified — intentionally empty. Do not invent. */
  email: null as string | null,
  whatsapp: null as string | null,
  socialProfiles: [] as { label: string; url: string }[],
  openingHours: [] as { days: string; hours: string }[],
  geo: null as { lat: number; lng: number } | null,
} as const;

export const doctor = {
  name: "Dr. Umar Iqbal",
  qualification: "BDS",
  experience: "8 years experience",
  /** Areas listed on a publicly available medical profile. */
  areas: [
    "General Dentistry",
    "Dental Implants",
    "Aesthetic Dentistry",
    "Cosmetic Dentistry",
    "Veneers & Laminates",
  ],
  /** No verified portrait supplied — the UI shows a reserved photo area. */
  photo: null as string | null,
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  /** Only services with `page: true` get a dedicated SEO page. */
  page?: boolean;
  intro?: string;
  what?: string;
  who?: string;
  process?: string[];
};

/**
 * Treatment areas publicly associated with Dental Avenue Sambrial / Dr. Umar
 * Iqbal. Presented as research-based and pending clinic confirmation.
 */
export const services: Service[] = [
  {
    slug: "general-dentistry",
    name: "General Dentistry",
    short: "Routine examinations, fillings and everyday dental care.",
    page: true,
    intro:
      "General dentistry covers the routine care that keeps teeth and gums healthy over time, from examinations to fillings.",
    what: "General dentistry includes examination of the teeth and gums, fillings, and advice on day-to-day oral care. A dentist may recommend further treatment depending on what the examination shows.",
    who: "People who would like a routine dental check-up, or who have noticed discomfort, sensitivity or a change in a tooth, may wish to arrange a consultation.",
    process: [
      "Discuss your dental history and any current concerns.",
      "Clinical examination of the teeth and gums.",
      "Discussion of findings and possible treatment options.",
      "Agree on next steps with the dentist.",
    ],
  },
  {
    slug: "dental-implants",
    name: "Dental Implants",
    short: "A fixed replacement option for one or more missing teeth.",
    page: true,
    intro:
      "Dental implants are one approach to replacing missing teeth. Suitability is assessed by the dentist for each individual case.",
    what: "A dental implant is a small fixture placed in the jawbone that can support a crown, bridge or denture. Treatment usually takes place over several appointments.",
    who: "Implants are considered for people missing one or more teeth. Not everyone is suitable — the dentist assesses bone, gum health and general health before recommending treatment.",
    process: [
      "Consultation and assessment of the area.",
      "Discussion of whether an implant is an appropriate option for you.",
      "Placement appointment, if you and the dentist decide to proceed.",
      "Healing period, then fitting of the final restoration.",
    ],
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    short: "Treatment focused on the appearance of your teeth and smile.",
    page: true,
    intro:
      "Cosmetic dentistry focuses on the appearance of the teeth. Options and outcomes differ from person to person.",
    what: "Cosmetic dental treatment can include whitening, veneers, laminates and tooth-coloured restorations. The dentist explains which options may apply to your situation.",
    who: "People who are unhappy with the colour, shape or alignment of their teeth can arrange a consultation to discuss the available options.",
    process: [
      "Consultation to understand what you would like to change.",
      "Examination to check the health of teeth and gums.",
      "Discussion of the treatment options that may apply.",
      "Agree on a treatment approach before anything begins.",
    ],
  },
  {
    slug: "aesthetic-dentistry",
    name: "Aesthetic Dentistry",
    short: "Restorative work carried out with appearance in mind.",
  },
  {
    slug: "veneers-and-laminates",
    name: "Veneers & Laminates",
    short: "Thin facings bonded to the front surface of a tooth.",
  },
  {
    slug: "braces",
    name: "Braces",
    short: "Metal and ceramic braces for straightening teeth.",
    page: true,
    intro:
      "Braces are used to move teeth into a different position over time. Treatment length varies for each person.",
    what: "Braces apply gentle, continuous pressure to move teeth gradually. Metal and ceramic braces are both associated with the clinic's listed treatment areas.",
    who: "Braces are considered for crowded, spaced or misaligned teeth. The dentist assesses each case before recommending an approach.",
    process: [
      "Consultation and assessment of tooth position.",
      "Discussion of the type of braces that may suit your case.",
      "Fitting appointment, if you decide to proceed.",
      "Regular review appointments during treatment.",
    ],
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    short: "Professional whitening carried out under dental supervision.",
    page: true,
    intro:
      "Teeth whitening lightens the shade of natural teeth. Results vary between individuals and are not permanent.",
    what: "Whitening is carried out after a dental examination confirms the teeth and gums are healthy. The dentist explains what change in shade may be realistic for you.",
    who: "People who would like to lighten the shade of their natural teeth. Whitening does not change the colour of crowns, veneers or fillings.",
    process: [
      "Examination to confirm teeth and gums are healthy.",
      "Discussion of realistic expectations and options.",
      "Whitening carried out or supplied as agreed.",
      "Follow-up advice on maintaining the result.",
    ],
  },
  {
    slug: "root-canal-treatment",
    name: "Root Canal Treatment",
    short: "Treatment for a tooth affected at its inner pulp.",
  },
  {
    slug: "teeth-cleaning",
    name: "Teeth Cleaning",
    short: "Professional cleaning and scaling appointments.",
  },
  {
    slug: "crowns-and-bridges",
    name: "Crowns & Bridges",
    short: "Restorations that rebuild or replace damaged teeth.",
  },
  {
    slug: "artificial-teeth",
    name: "Artificial Teeth",
    short: "Replacement options for missing natural teeth.",
  },
  {
    slug: "orthodontic-treatment",
    name: "Orthodontic Treatment",
    short: "Assessment and treatment of tooth and jaw alignment.",
  },
];

export const servicePages = services.filter((s) => s.page);

export const faqs = [
  {
    q: "Where is Dental Avenue located?",
    a: "Dental Avenue is on the Sialkot–Wazirabad Dual Carriageway, opposite the PSO Petrol Pump, Fazalpura, Sambrial, 51070, Pakistan.",
  },
  {
    q: "How can I contact Dental Avenue?",
    a: "You can call the clinic on +92 333 6119410. You can also send an appointment request through the form on this website.",
  },
  {
    q: "What dental services are available at Dental Avenue?",
    a: "Treatment areas publicly associated with the clinic include general dentistry, dental implants, cosmetic and aesthetic dentistry, veneers and laminates, braces, teeth whitening, root canal treatment, teeth cleaning, crowns and bridges, artificial teeth and orthodontic treatment. Please call the clinic to confirm availability for your case.",
  },
  {
    q: "Does Dental Avenue offer dental implants?",
    a: "Dental implants are listed among the treatment areas publicly associated with the clinic. Suitability for implants is assessed individually, so please call the clinic to discuss your case.",
  },
  {
    q: "Does Dental Avenue provide braces?",
    a: "Braces, including metal and ceramic braces, appear among the publicly listed treatment areas. Call the clinic to confirm current availability and to arrange an assessment.",
  },
  {
    q: "Does Dental Avenue offer cosmetic dentistry?",
    a: "Cosmetic and aesthetic dentistry, including veneers and laminates, are listed among the areas associated with Dr. Umar Iqbal's profile. Please contact the clinic to discuss what may be suitable for you.",
  },
  {
    q: "Who is the dentist at Dental Avenue?",
    a: "A publicly available medical profile associates Dental Avenue Sambrial with Dr. Umar Iqbal, BDS, with 8 years of experience.",
  },
  {
    q: "How can I request an appointment?",
    a: "Call +92 333 6119410, or complete the appointment request form on this website with your preferred date and time. The clinic confirms all appointment details directly.",
  },
];

/**
 * Real Google reviews only. Left empty until the clinic supplies verified
 * review data — the UI renders a placeholder state rather than fake reviews.
 */
export const reviews: { author: string; rating: number; text: string; date?: string }[] = [];

/** Real clinic photography only. Empty until Dental Avenue supplies images. */
export const galleryImages: { src: string; alt: string; category: string }[] = [];

export const galleryCategories = ["Clinic", "Treatments", "Team", "Smile", "Environment"];

/** Real, consented patient cases only. Empty by design. */
export const beforeAfterCases: { before: string; after: string; treatment: string }[] = [];

export const disclaimer =
  "Information on this website is for general informational purposes and does not replace professional dental consultation.";

export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Doctor", to: "/doctor" },
  { label: "Gallery", to: "/gallery" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
] as const;
