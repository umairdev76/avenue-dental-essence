import { createFileRoute } from "@tanstack/react-router";
import { AppointmentForm } from "@/components/site/AppointmentForm";
import { LocationSection } from "@/components/site/sections";
import { Breadcrumbs, pageHead } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/ui";
import { clinic } from "@/lib/clinic";
export const Route = createFileRoute("/contact")({
  head: () =>
    pageHead(
      "Contact & appointments",
      "Contact Dental Avenue in Fazalpura, Sambrial or request an appointment.",
      "/contact",
    ),
  component: Contact,
});
function Contact() {
  return (
    <>
      <Breadcrumbs current="Contact" />
      <section className="section pt-12">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <SectionHeading
              eyebrow="Appointments"
              title="Ready to take the next step?"
              intro="Complete the form with your preferred date and time, or call Dental Avenue directly."
            />
            <a
              href={clinic.phoneHref}
              className="mt-8 inline-block text-xl text-teal hover:text-navy"
            >
              {clinic.phoneDisplay}
            </a>
          </Reveal>
          <Reveal
            delay={100}
            className="rounded-sm border border-hairline bg-card p-6 sm:p-9 lg:col-span-8"
          >
            <AppointmentForm />
          </Reveal>
        </div>
      </section>
      <LocationSection />
    </>
  );
}
