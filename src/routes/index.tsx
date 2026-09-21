import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import heroImg from "@/assets/hero-clinic.jpg";
import introImg from "@/assets/intro-detail.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Faq } from "@/components/site/Faq";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import {
  AppointmentCTA,
  BeforeAfterSection,
  DoctorSection,
  FeaturedServices,
  LocationSection,
  PatientJourney,
  ReviewsSection,
  ServicesGrid,
  TrustBar,
  WhySection,
} from "@/components/site/sections";
import { LinkButton, SectionHeading, buttonStyles } from "@/components/site/ui";
import { clinic, faqs, galleryImages } from "@/lib/clinic";
import { dentistSchema, faqSchema } from "@/lib/schema";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dental Avenue | Dentist & Dental Clinic in Sambrial, Sialkot" },
      {
        name: "description",
        content:
          "Dental Avenue in Sambrial, Sialkot, providing professional dental care and treatment options. Contact the clinic to learn more or request an appointment.",
      },
      { property: "og:title", content: "Dental Avenue | Dentist in Sambrial, Sialkot" },
      {
        property: "og:description",
        content:
          "Dental clinic on the Sialkot–Wazirabad Dual Carriageway, Fazalpura, Sambrial. Call +92 333 6119410 or request an appointment online.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(dentistSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(faqs.slice(0, 6))) },
    ],
  }),
  component: Home,
});

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <img
        src={heroImg}
        alt="Interior of a modern dental treatment room"
        width={1600}
        height={1200}
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 size-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/35" />

      <div className="shell relative grid min-h-[86svh] items-center pb-20 pt-32 md:min-h-[92svh] md:pb-28 md:pt-44">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-gold">Dental Avenue</p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="display-1 mt-6 text-ivory">
              Confident smiles begin
              <br className="hidden sm:block" /> with expert care
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-ivory/70">
              A dental clinic in Sambrial, Sialkot, offering general, cosmetic and restorative
              treatment areas under the care of Dr. Umar Iqbal, BDS.
            </p>
          </Reveal>
          <Reveal delay={340}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className={buttonStyles.accent}>
                Book an Appointment
              </Link>
              <a href={clinic.phoneHref} className={buttonStyles.onDark}>
                Call {clinic.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={440}>
            <p className="mt-9 inline-flex items-center gap-2 text-sm text-ivory/70">
              <MapPin className="size-4 text-gold" aria-hidden="true" />
              Sambrial, Sialkot
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section className="section" aria-labelledby="intro-heading">
      <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-6">
          <SectionHeading
            eyebrow="Introduction"
            title={<span id="intro-heading">Modern dental care, close to home</span>}
            intro="Dental Avenue is a dental clinic in Fazalpura, Sambrial, on the Sialkot–Wazirabad Dual Carriageway. Patients from Sambrial and the wider Sialkot area can reach the clinic easily by road."
          />
          <p className="body-lg mt-5">
            The clinic is publicly associated with a range of dental treatment areas — from routine
            examinations and cleaning through to implants, orthodontics and cosmetic work. What is
            right for you is decided together with the dentist at consultation.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <LinkButton to="/about" variant="secondary" withArrow>
              About the clinic
            </LinkButton>
            <LinkButton to="/services" variant="ghost" withArrow>
              Browse treatments
            </LinkButton>
          </div>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-6">
          <img
            src={introImg}
            alt="Sterilised dental instruments laid out before a treatment appointment"
            loading="lazy"
            decoding="async"
            width={1200}
            height={1400}
            className="aspect-4/5 w-full rounded-sm object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Introduction />
      <FeaturedServices />
      <ServicesGrid />
      <DoctorSection />
      <WhySection />
      <PatientJourney />
      <BeforeAfterSection />

      {galleryImages.length > 0 && (
        <section className="section" aria-labelledby="gallery-heading">
          <div className="shell">
            <Reveal>
              <SectionHeading
                align="center"
                eyebrow="Gallery"
                title={<span id="gallery-heading">Inside Dental Avenue</span>}
              />
            </Reveal>
            <Reveal delay={80} className="mt-12">
              <GalleryGrid />
            </Reveal>
          </div>
        </section>
      )}

      <ReviewsSection />

      <section className="section bg-card" aria-labelledby="faq-heading">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQs"
              title={<span id="faq-heading">Questions patients ask</span>}
            />
            <LinkButton to="/faqs" variant="ghost" withArrow className="mt-8">
              All questions
            </LinkButton>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-8">
            <Faq items={faqs.slice(0, 6)} />
          </Reveal>
        </div>
      </section>

      <LocationSection />
      <AppointmentCTA />
    </>
  );
}
