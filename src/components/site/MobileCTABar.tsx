import { Link } from "@tanstack/react-router";
import { CalendarDays, MapPin, Phone } from "lucide-react";
import { clinic } from "@/lib/clinic";

/** Fixed mobile action bar: Call · Appointment · Directions. */
export function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-background/95 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-3">
        <a
          href={clinic.phoneHref}
          className="flex min-h-14 flex-col items-center justify-center gap-1 text-[0.6875rem] font-medium text-navy transition-colors active:bg-muted"
        >
          <Phone className="size-4" aria-hidden="true" />
          Call
        </a>
        <Link
          to="/contact"
          className="flex min-h-14 flex-col items-center justify-center gap-1 bg-teal text-[0.6875rem] font-medium text-accent-foreground"
        >
          <CalendarDays className="size-4" aria-hidden="true" />
          Appointment
        </Link>
        <a
          href={clinic.mapsUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="flex min-h-14 flex-col items-center justify-center gap-1 text-[0.6875rem] font-medium text-navy transition-colors active:bg-muted"
        >
          <MapPin className="size-4" aria-hidden="true" />
          Directions
        </a>
      </div>
    </div>
  );
}
