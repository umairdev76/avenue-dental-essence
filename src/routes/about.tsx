import { createFileRoute } from "@tanstack/react-router";
import introImg from "@/assets/intro-detail.jpg";
import { DoctorSection, PatientJourney, WhySection } from "@/components/site/sections";
import { Breadcrumbs, ContactStrip, pageHead } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About",
      "Learn about Dental Avenue, a dental clinic in Fazalpura, Sambrial, Sialkot.",
      "/about",
    ),
  component: About,
});

function About() {
  return (
    <>
      <Breadcrumbs current="About" />
      <section className="section pt-12">
        <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionHeading
              eyebrow="About Dental Avenue"
              title="Dental care in Sambrial, close to Sialkot"
              intro="Dental Avenue is located on the Sialkot–Wazirabad Dual Carriageway in Fazalpura, Sambrial."
            />
            <p className="body-lg mt-6">
              The clinic is publicly associated with general dentistry, dental implants, cosmetic
              and aesthetic dentistry, braces, teeth cleaning and other treatment areas. A
              consultation is the right place to discuss what may be suitable for you.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <img
              src={introImg}
              alt="Dental instruments prepared for a clinical appointment"
              width={1200}
              height={1400}
              className="aspect-4/5 w-full rounded-sm object-cover"
            />
          </Reveal>
        </div>
      </section>
      <DoctorSection />
      <WhySection />
      <PatientJourney />
      <ContactStrip />
    </>
  );
}
