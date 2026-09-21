import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { AppointmentCTA } from "@/components/site/sections";
import { Breadcrumbs, pageHead } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { LinkButton, SectionHeading } from "@/components/site/ui";
import { clinic, servicePages } from "@/lib/clinic";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = servicePages.find((item) => item.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) =>
    pageHead(
      `${loaderData?.service.name ?? "Treatment"} in Sambrial`,
      loaderData?.service.intro ?? "Dental treatment information from Dental Avenue.",
      `/services/${loaderData?.service.slug ?? ""}`,
    ),
  component: ServicePage,
});
function ServicePage() {
  const { service } = Route.useLoaderData();
  return (
    <>
      <Breadcrumbs current={service.name} />
      <section className="section pt-12">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <SectionHeading
              eyebrow="Treatment information"
              title={`${service.name} in Sambrial`}
              intro={service.intro}
            />
            <p className="body-lg mt-8">{service.what}</p>
            <div className="mt-10 flex flex-wrap gap-3">
              <LinkButton to="/contact" variant="primary">
                Request an appointment
              </LinkButton>
              <a
                href={clinic.phoneHref}
                className="inline-flex min-h-11 items-center text-sm font-medium text-teal hover:text-navy"
              >
                Call {clinic.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={100} className="border-l border-hairline pl-7 lg:col-span-5">
            <p className="eyebrow text-teal">Could this be for you?</p>
            <h2 className="display-3 mt-4 text-navy">A consultation comes first</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.who}</p>
            <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
              Treatment suitability and recommendations are decided by the dentist after an
              individual consultation.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="section bg-card">
        <div className="shell grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionHeading eyebrow="Your consultation" title="A clear next step" />
          </Reveal>
          <Reveal delay={100} className="lg:col-span-8">
            <ol className="grid gap-4 sm:grid-cols-2">
              {service.process?.map((step, index) => (
                <li key={step} className="border-t border-hairline py-5">
                  <span className="font-display text-gold">0{index + 1}</span>
                  <p className="mt-3 text-sm leading-relaxed text-navy">{step}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Related treatment areas"
              title="Explore Dental Avenue services"
            />
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-3">
            {servicePages
              .filter((item) => item.slug !== service.slug)
              .map((item) => (
                <Link
                  key={item.slug}
                  to="/services/$slug"
                  params={{ slug: item.slug }}
                  className="inline-flex min-h-11 items-center border border-hairline px-4 text-sm text-navy transition-colors hover:border-teal hover:text-teal"
                >
                  {item.name}
                </Link>
              ))}
          </div>
        </div>
      </section>
      <AppointmentCTA />
    </>
  );
}
