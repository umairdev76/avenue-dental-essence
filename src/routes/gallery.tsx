import { createFileRoute } from "@tanstack/react-router";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { Breadcrumbs, pageHead } from "@/components/site/PageIntro";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/ui";
export const Route = createFileRoute("/gallery")({
  head: () =>
    pageHead(
      "Gallery",
      "See authentic Dental Avenue clinic photography when it is supplied and approved.",
      "/gallery",
    ),
  component: Gallery,
});
function Gallery() {
  return (
    <>
      <Breadcrumbs current="Gallery" />
      <section className="section pt-12">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Gallery"
              title="A space for the real Dental Avenue"
              intro="Only authentic, clinic-approved photography belongs here. The gallery is ready for the clinic, team, treatment areas and approved patient imagery."
            />
          </Reveal>
          <Reveal delay={80} className="mt-12">
            <GalleryGrid />
          </Reveal>
        </div>
      </section>
    </>
  );
}
