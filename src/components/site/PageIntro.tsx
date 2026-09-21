import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { clinic } from "@/lib/clinic";
import { breadcrumbSchema } from "@/lib/schema";

/** Shared page metadata helpers. A production domain can be added in clinic.ts when verified. */
export function pageHead(title: string, description: string, path: string) {
  return {
    meta: [
      { title: `${title} | Dental Avenue` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | Dental Avenue` },
      { property: "og:description", content: description },
      { property: "og:url", content: path },
    ],
    links: [{ rel: "canonical", href: path }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: title, url: path },
          ]),
        ),
      },
    ],
  };
}

export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="shell pt-28 md:pt-36">
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
        <li>
          <Link to="/" className="transition-colors hover:text-teal">
            Home
          </Link>
        </li>
        <ChevronRight className="size-3" aria-hidden="true" />
        <li aria-current="page" className="text-navy">
          {current}
        </li>
      </ol>
    </nav>
  );
}

export function ContactStrip() {
  return (
    <aside className="border-y border-hairline bg-card">
      <div className="shell flex flex-col gap-3 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted-foreground">
          Questions before your visit? Contact Dental Avenue directly.
        </p>
        <a href={clinic.phoneHref} className="font-medium text-navy hover:text-teal">
          {clinic.phoneDisplay}
        </a>
      </div>
    </aside>
  );
}
