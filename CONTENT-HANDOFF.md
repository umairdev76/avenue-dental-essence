# Dental Avenue content handoff

The site is designed so the clinic can replace or confirm content in `src/lib/clinic.ts` without editing page layouts.

## Needed before publishing

- A verified public website domain. Add it to canonical URLs, Open Graph URLs and `public/sitemap.xml`; none has been assumed or invented.
- Authentic, clinic-approved photography and Dr. Umar Iqbal's approved portrait.
- Confirmed service availability, opening hours, appointment delivery destination and Google Business review data.
- Approved, consented before-and-after cases only, including a treatment label and explicit patient consent.

## Sitemap

No production domain has been provided, so a valid absolute-URL sitemap cannot be responsibly generated. Once the final domain is known, create `public/sitemap.xml` with the canonical URLs for `/`, `/about`, `/services`, the five published treatment pages, `/doctor`, `/gallery`, `/faqs` and `/contact`.

## Appointment form

The form validates on the client but deliberately does not send data anywhere. Connect its submit handler to the clinic's confirmed booking destination before launch.
