import { createFileRoute } from "@tanstack/react-router";
import { Faq } from "@/components/site/Faq";
import { AppointmentCTA } from "@/components/site/sections";
import { Breadcrumbs, pageHead } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/ui";
import { faqs } from "@/lib/clinic";
import { faqSchema } from "@/lib/schema";
export const Route = createFileRoute("/faqs")({
  head: () => ({
    ...pageHead(
      "Frequently asked questions",
      "Answers to common questions about Dental Avenue in Sambrial, Sialkot.",
      "/faqs",
    ),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema(faqs)) }],
  }),
  component: FAQs,
});
function FAQs() {
  return (
    <>
      <Breadcrumbs current="FAQs" />
      <section className="section pt-12">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQs"
              title="Questions patients ask"
              intro="For advice specific to your teeth or treatment needs, please contact the clinic for a consultation."
            />
          </Reveal>
          <Reveal delay={80} className="lg:col-span-8">
            <Faq items={faqs} />
          </Reveal>
        </div>
      </section>
      <AppointmentCTA />
    </>
  );
}
