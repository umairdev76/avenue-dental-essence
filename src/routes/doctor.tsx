import { createFileRoute } from "@tanstack/react-router";
import { DoctorSection, AppointmentCTA } from "@/components/site/sections";
import { Breadcrumbs, pageHead } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/ui";
import { doctor } from "@/lib/clinic";

export const Route = createFileRoute("/doctor")({
  head: () =>
    pageHead(
      "Dr. Umar Iqbal, BDS",
      "Meet Dr. Umar Iqbal, BDS, publicly associated with Dental Avenue Sambrial.",
      "/doctor",
    ),
  component: Doctor,
});
function Doctor() {
  return (
    <>
      <Breadcrumbs current="Doctor" />
      <section className="section pt-12">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Your dentist"
              title="A profile built on verified information"
              intro={`Dental Avenue Sambrial is publicly associated with ${doctor.name}, ${doctor.qualification}, with 8 years of experience.`}
            />
          </Reveal>
        </div>
      </section>
      <DoctorSection />
      <section className="section bg-card">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Areas of practice"
              title="Treatment areas listed on the public profile"
            />
          </Reveal>
          <ul className="mt-10 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 lg:grid-cols-3">
            {doctor.areas.map((area) => (
              <li className="bg-background p-7 font-display text-xl text-navy" key={area}>
                {area}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <AppointmentCTA />
    </>
  );
}
