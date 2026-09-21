import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { beforeAfterCases, clinic, doctor, reviews, services } from "@/lib/clinic";
import { Reveal } from "./Reveal";
import { AnchorButton, LinkButton, SectionHeading, buttonStyles } from "./ui";

import featureGeneral from "@/assets/feature-general.jpg";
import featureImplants from "@/assets/feature-implants.jpg";
import featureOrtho from "@/assets/feature-ortho.jpg";
import featureCosmetic from "@/assets/feature-cosmetic.jpg";

/* ---------------- Trust bar ---------------- */

export function TrustBar() {
  const items = [
    { k: doctor.name, v: "Your dentist" },
    { k: doctor.qualification, v: "Qualification" },
    { k: "8 years", v: "Experience" },
    { k: "Sambrial", v: "Clinic location" },
  ];
  return (
    <section aria-label="Clinic at a glance" className="border-y border-hairline bg-card">
      <div className="shell">
        <div className="mx-auto grid max-w-5xl grid-cols-2 divide-hairline md:grid-cols-4 md:divide-x">
          {items.map((item, i) => (
            <Reveal key={item.k} delay={i * 70} className="px-2 py-6 text-center md:py-8">
              <p className="font-display text-xl text-navy sm:text-2xl">{item.k}</p>
              <p className="eyebrow mt-2 text-muted-foreground">{item.v}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Featured services ---------------- */

const featured = [
  {
    slug: "dental-implants",
    name: "Dental Implants",
    img: featureImplants,
    copy: "A fixed option for replacing missing teeth, assessed case by case.",
  },
  {
    slug: "braces",
    name: "Orthodontics",
    img: featureOrtho,
    copy: "Metal and ceramic braces to gradually change tooth position.",
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    img: featureCosmetic,
    copy: "Whitening, veneers and laminates focused on appearance.",
  },
  {
    slug: "general-dentistry",
    name: "General Dentistry",
    img: featureGeneral,
    copy: "Examinations, fillings and everyday care for the whole family.",
  },
];

export function FeaturedServices() {
  return (
    <section className="section" aria-labelledby="featured-heading">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Treatment areas"
            title={<span id="featured-heading">Care across every stage of your smile</span>}
            intro="Four of the treatment areas publicly associated with Dental Avenue. Availability for your case is confirmed by the clinic at consultation."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {featured.map((f, i) => (
            <Reveal key={f.slug} delay={i * 80}>
              <Link
                to="/services/$slug"
                params={{ slug: f.slug }}
                className="group relative block overflow-hidden rounded-sm"
              >
                <img
                  src={f.img}
                  alt={`${f.name} at Dental Avenue, Sambrial`}
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={900}
                  className="aspect-4/3 w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <p className="eyebrow text-gold">Treatment</p>
                  <h3 className="mt-2 font-display text-2xl text-ivory sm:text-3xl">{f.name}</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-ivory/70">{f.copy}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm text-ivory">
                    Learn more
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services grid ---------------- */

export function ServicesGrid({ heading = true }: { heading?: boolean }) {
  return (
    <section
      className="section bg-card"
      aria-labelledby={heading ? "services-heading" : undefined}
      aria-label={heading ? undefined : "Services"}
    >
      <div className="shell">
        {heading && (
          <Reveal>
            <SectionHeading
              eyebrow="Services"
              title={<span id="services-heading">Dental care designed around your needs</span>}
              intro="Treatment areas listed on publicly available profiles for Dental Avenue Sambrial. The clinic confirms what is available for your case."
            />
          </Reveal>
        )}

        <ul className="mt-14 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const isFeatured = i < 3;
            const inner = (
              <>
                {isFeatured && <p className="eyebrow mb-3 text-teal">Popular treatment</p>}
                <h3 className="font-display text-xl text-navy">{s.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.short}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-wide text-teal">
                  {s.page ? "Explore treatment" : "Ask at consultation"}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </>
            );
            return (
              <Reveal
                as="li"
                key={s.slug}
                delay={(i % 3) * 70}
                className="group bg-background transition-colors duration-300 hover:bg-teal-soft/40"
              >
                <Link
                  to={s.page ? "/services/$slug" : "/contact"}
                  params={s.page ? { slug: s.slug } : undefined}
                  className="block h-full p-7 sm:p-8"
                  aria-label={
                    s.page ? `Explore ${s.name}` : `Ask about ${s.name} at a consultation`
                  }
                >
                  {inner}
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Doctor ---------------- */

export function DoctorSection() {
  return (
    <section className="section" aria-labelledby="doctor-heading">
      <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-3/4 w-full border border-hairline bg-muted">
            <div className="absolute inset-4 border border-dashed border-navy/20" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
              <p className="eyebrow text-teal">Photograph reserved</p>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                This space is reserved for an authentic photograph of {doctor.name}, supplied by the
                clinic. No generated likeness is used.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-7">
          <p className="eyebrow text-teal">Meet your dentist</p>
          <h2 id="doctor-heading" className="display-2 mt-4 text-navy">
            {doctor.name}
          </h2>
          <span className="gold-rule mt-6" />
          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="border-l border-hairline pl-5">
              <dt className="eyebrow text-muted-foreground">Qualification</dt>
              <dd className="mt-2 font-display text-2xl text-navy">{doctor.qualification}</dd>
            </div>
            <div className="border-l border-hairline pl-5">
              <dt className="eyebrow text-muted-foreground">Experience</dt>
              <dd className="mt-2 font-display text-2xl text-navy">8 years</dd>
            </div>
          </dl>

          <h3 className="eyebrow mt-10 text-muted-foreground">
            Areas listed on the public profile
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {doctor.areas.map((a) => (
              <li
                key={a}
                className="rounded-sm border border-hairline bg-card px-3.5 py-2 text-sm text-navy"
              >
                {a}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <LinkButton to="/services" variant="secondary" withArrow>
              View Treatments
            </LinkButton>
            <LinkButton to="/contact" variant="primary">
              Book Appointment
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Why Dental Avenue ---------------- */

export function WhySection() {
  const points = [
    {
      t: "Experienced dental care",
      d: `${doctor.name} is publicly listed with a BDS qualification and 8 years of experience.`,
    },
    {
      t: "Comprehensive treatment options",
      d: "The clinic is publicly associated with several areas of dental care, from general dentistry to implants and orthodontics.",
    },
    {
      t: "Convenient Sambrial location",
      d: "Located directly on the Sialkot–Wazirabad Dual Carriageway, opposite the PSO Petrol Pump.",
    },
    {
      t: "Straightforward access",
      d: "Clear contact and location details make it easier to reach the clinic and arrange a visit.",
    },
  ];

  return (
    <section className="section ink-panel" aria-labelledby="why-heading">
      <div className="shell grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading
            tone="dark"
            eyebrow="Why Dental Avenue"
            title={<span id="why-heading">A better approach to dental care</span>}
            intro="Only what can be verified about the clinic — no invented statistics, awards or claims."
          />
        </Reveal>
        <ul className="grid gap-px bg-ivory/10 lg:col-span-7 sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal as="li" key={p.t} delay={i * 70} className="bg-navy p-7 sm:p-8">
              <p className="font-display text-sm text-gold">0{i + 1}</p>
              <h3 className="mt-4 font-display text-xl text-ivory">{p.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ivory/70">{p.d}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Patient journey ---------------- */

export function PatientJourney() {
  const steps = [
    { n: "01", t: "Book", d: "Request an appointment by phone or through this website." },
    { n: "02", t: "Consult", d: "Discuss your dental concerns with the dentist." },
    { n: "03", t: "Plan", d: "Understand the recommended treatment approach." },
    { n: "04", t: "Care", d: "Begin the agreed treatment plan." },
  ];
  return (
    <section className="section" aria-labelledby="journey-heading">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Your visit"
            title={<span id="journey-heading">What to expect, step by step</span>}
          />
        </Reveal>
        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 80} className="hairline-top pt-6">
              <p className="font-display text-4xl text-gold">{s.n}</p>
              <h3 className="mt-4 font-display text-2xl text-navy">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Before & after ---------------- */

export function BeforeAfterSection() {
  if (beforeAfterCases.length === 0) return null;

  return (
    <section className="section bg-card" aria-labelledby="results-heading">
      <div className="shell">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Patient results"
            title={<span id="results-heading">Real patient results</span>}
          />
        </Reveal>
        <ul className="mt-12 grid gap-4 md:grid-cols-2">
          {beforeAfterCases.map((item) => (
            <li key={item.treatment} className="overflow-hidden rounded-sm border border-hairline">
              <div className="grid grid-cols-2">
                <img
                  src={item.before}
                  alt={`Before ${item.treatment}`}
                  className="aspect-4/3 w-full object-cover"
                />
                <img
                  src={item.after}
                  alt={`After ${item.treatment}`}
                  className="aspect-4/3 w-full object-cover"
                />
              </div>
              <p className="p-5 font-display text-xl text-navy">{item.treatment}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Reviews ---------------- */

export function ReviewsSection() {
  if (reviews.length === 0) return null;

  return (
    <section className="section" aria-labelledby="reviews-heading">
      <div className="shell">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Patient feedback"
            title={<span id="reviews-heading">What patients say</span>}
          />
        </Reveal>
        <Reveal delay={80} className="mt-12">
          <ul className="grid gap-4 md:grid-cols-3">
            {reviews.map((r) => (
              <li key={r.author} className="rounded-sm border border-hairline bg-card p-7">
                <p className="text-sm leading-relaxed text-muted-foreground">"{r.text}"</p>
                <p className="mt-5 font-display text-lg text-navy">{r.author}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Location ---------------- */

export function LocationSection() {
  return (
    <section className="section bg-card" aria-labelledby="location-heading">
      <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading
            eyebrow="Find us"
            title={<span id="location-heading">Visit Dental Avenue</span>}
          />
          <address className="mt-8 space-y-1 text-lg not-italic leading-relaxed text-navy">
            <span className="block">{clinic.address.line1}</span>
            <span className="block">{clinic.address.line2}</span>
            <span className="block">
              {clinic.address.area}, {clinic.address.postalCode}
            </span>
            <span className="block">{clinic.address.country}</span>
          </address>

          <dl className="mt-8 space-y-5">
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 size-4 text-teal" aria-hidden="true" />
              <div>
                <dt className="eyebrow text-muted-foreground">Phone</dt>
                <dd>
                  <a
                    href={clinic.phoneHref}
                    className="text-lg text-navy transition-colors hover:text-teal"
                  >
                    {clinic.phoneDisplay}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 text-teal" aria-hidden="true" />
              <div>
                <dt className="eyebrow text-muted-foreground">Opening hours</dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Opening hours have not yet been confirmed by the clinic. Please call before
                  visiting — this section is ready to display the hours once supplied.
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-9 flex flex-wrap gap-3">
            <AnchorButton
              href={clinic.mapsUrl}
              variant="primary"
              target="_blank"
              rel="noreferrer noopener"
              withArrow
            >
              Get Directions
            </AnchorButton>
            <AnchorButton href={clinic.phoneHref} variant="secondary">
              Call the Clinic
            </AnchorButton>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="h-full min-h-80 overflow-hidden rounded-sm border border-hairline">
            <iframe
              title="Map showing Dental Avenue, Fazalpura, Sambrial"
              src={clinic.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-80 w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Appointment CTA band ---------------- */

export function AppointmentCTA() {
  return (
    <section className="ink-panel" aria-labelledby="cta-heading">
      <div className="shell flex flex-col items-start gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <Reveal>
          <p className="eyebrow text-gold">Appointments</p>
          <h2 id="cta-heading" className="display-2 mt-4 max-w-xl text-ivory">
            Ready to take the next step?
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-ivory/70">
            Send an appointment request with your preferred date and time, or call Dental Avenue
            directly to speak with the clinic.
          </p>
        </Reveal>
        <Reveal delay={100} className="flex flex-wrap gap-3">
          <Link to="/contact" className={buttonStyles.accent}>
            Book an Appointment
          </Link>
          <a href={clinic.phoneHref} className={buttonStyles.onDark}>
            Call {clinic.phoneDisplay}
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Inner page hero ---------------- */

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="ink-panel pb-16 pt-32 md:pb-24 md:pt-44">
      <div className="shell">
        <SectionHeading as="h1" tone="dark" eyebrow={eyebrow} title={title} intro={intro} />
      </div>
    </section>
  );
}
