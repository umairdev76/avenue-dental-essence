import { createFileRoute } from "@tanstack/react-router";
import { ServicesGrid, AppointmentCTA } from "@/components/site/sections";
import { Breadcrumbs, pageHead } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/ui";

export const Route = createFileRoute("/services/")({
  head: () =>
    pageHead(
      "Services",
      "Explore dental treatment areas publicly associated with Dental Avenue in Sambrial, Sialkot.",
      "/services",
    ),
  component: Services,
});
function Services() {
  return (
    <>
      <Breadcrumbs current="Services" />
      <section className="section pt-12">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Treatment areas"
              title="Dental care designed around your needs"
              intro="These treatment areas are based on public profile information and should be confirmed with Dental Avenue for your individual case."
            />
          </Reveal>
        </div>
      </section>
      <ServicesGrid heading={false} />
      <AppointmentCTA />
    </>
  );
}
