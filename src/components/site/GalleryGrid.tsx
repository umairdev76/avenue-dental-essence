import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { galleryImages } from "@/lib/clinic";
import { PendingContent } from "./ui";

/**
 * Masonry gallery with lightbox. Renders only real clinic photography; while
 * `galleryImages` is empty it shows a reserved state instead of stock images.
 */
export function GalleryGrid({ category }: { category?: string }) {
  const [active, setActive] = useState<number | null>(null);
  const images = category
    ? galleryImages.filter((i) => i.category === category)
    : galleryImages;

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  if (images.length === 0) {
    return (
      <PendingContent title="Clinic photography coming soon">
        This gallery is built and ready. It will display real photographs of Dental Avenue —
        the clinic, treatment areas and team — as soon as they are supplied. No stock or
        generated imagery is used to represent the clinic.
      </PendingContent>
    );
  }

  return (
    <>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActive(i)}
            className="group block w-full overflow-hidden rounded-sm"
            aria-label={`Open image: ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              decoding="async"
              className="w-full transition-transform duration-700 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          className="fixed inset-0 z-60 flex items-center justify-center bg-navy/95 p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close image"
            className="absolute right-4 top-4 inline-flex size-11 items-center justify-center text-ivory"
          >
            <X className="size-6" aria-hidden="true" />
          </button>
          <img
            src={images[active].src}
            alt={images[active].alt}
            className="max-h-[85vh] max-w-full rounded-sm object-contain"
          />
        </div>
      )}
    </>
  );
}
