import { Link } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";
import { clinic, disclaimer, nav } from "@/lib/clinic";
import { buttonStyles } from "./ui";

export function Footer() {
  return (
    <footer className="ink-panel">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <p className="font-display text-2xl text-ivory">Dental Avenue</p>
          <span className="gold-rule mt-4" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/65">
            {clinic.shortDescription} Treatment enquiries and appointment requests are
            confirmed directly by the clinic.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="eyebrow text-gold">Navigation</h2>
          <ul className="mt-5 space-y-2.5">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-ivory/70 transition-colors hover:text-ivory"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-gold">Contact</h2>
          <a
            href={clinic.phoneHref}
            className="mt-5 block text-lg text-ivory transition-colors hover:text-gold"
          >
            {clinic.phoneDisplay}
          </a>
          <h2 className="eyebrow mt-8 text-gold">Location</h2>
          <address className="mt-5 text-sm not-italic leading-relaxed text-ivory/70">
            {clinic.address.line1}
            <br />
            {clinic.address.line2}
            <br />
            {clinic.address.area}, {clinic.address.postalCode}
            <br />
            {clinic.address.country}
          </address>
        </div>

        <div>
          <h2 className="eyebrow text-gold">Appointments</h2>
          <p className="mt-5 text-sm leading-relaxed text-ivory/65">
            Request a visit online, or call the clinic during opening hours.
          </p>
          <Link to="/contact" className={`${buttonStyles.accent} mt-5 w-full`}>
            Book Appointment
          </Link>
          <a href={clinic.mapsUrl} target="_blank" rel="noreferrer noopener"
            className={`${buttonStyles.onDark} mt-3 w-full`}>
            Get Directions
          </a>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="shell flex flex-col gap-4 py-6 text-xs text-ivory/50 md:flex-row md:items-center md:justify-between">
          <p className="max-w-2xl leading-relaxed">{disclaimer}</p>
          <div className="flex items-center gap-6">
            <p>© {new Date().getFullYear()} Dental Avenue. All rights reserved.</p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-ivory"
            >
              <ArrowUp className="size-3.5" aria-hidden="true" /> Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
