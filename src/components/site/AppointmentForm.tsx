import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import { clinic, services } from "@/lib/clinic";
import { buttonStyles } from "./ui";

type Errors = Partial<Record<"name" | "phone" | "date" | "service", string>>;

const field =
  "mt-2 w-full min-h-11 rounded-sm border border-hairline bg-card px-4 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-teal focus:outline-none";

/**
 * Appointment request form.
 * No backend is connected yet, so nothing is sent anywhere and the UI says so
 * plainly. `submitRequest` is the single integration point for a real backend.
 */
export function AppointmentForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Errors = {};
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const date = String(data.get("date") ?? "");
    const service = String(data.get("service") ?? "");

    if (name.length < 2) next.name = "Please enter your full name.";
    if (!/^[+0-9 ()-]{7,20}$/.test(phone))
      next.phone = "Please enter a phone number the clinic can call you on.";
    if (!date) next.date = "Please choose a preferred date.";
    if (!service) next.service = "Please choose a treatment or service.";

    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-sm border border-teal/30 bg-teal-soft/50 p-8 text-center sm:p-12">
        <CheckCircle2 className="mx-auto size-8 text-teal" aria-hidden="true" />
        <h3 className="display-3 mt-4 text-navy">Your request is ready to send</h3>
        <p className="body-lg mx-auto mt-3 max-w-lg text-sm">
          This demo site is not yet connected to the clinic's booking inbox, so nothing has
          been sent. To confirm an appointment now, call the clinic on{" "}
          <a href={clinic.phoneHref} className="font-medium text-teal underline">
            {clinic.phoneDisplay}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setDone(false)}
          className={`${buttonStyles.secondary} mt-6`}
        >
          Edit request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-navy">
          Full name
        </label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          className={field}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          placeholder="Your name"
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-xs text-destructive">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium text-navy">
          Phone number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={field}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
          placeholder="03xx xxxxxxx"
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1.5 text-xs text-destructive">
            {errors.phone}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="date" className="text-sm font-medium text-navy">
          Preferred date
        </label>
        <input
          id="date"
          name="date"
          type="date"
          className={field}
          aria-invalid={Boolean(errors.date)}
          aria-describedby={errors.date ? "date-error" : undefined}
        />
        {errors.date && (
          <p id="date-error" className="mt-1.5 text-xs text-destructive">
            {errors.date}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="time" className="text-sm font-medium text-navy">
          Preferred time
        </label>
        <input id="time" name="time" type="time" className={field} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="service" className="text-sm font-medium text-navy">
          Treatment or service
        </label>
        <select
          id="service"
          name="service"
          defaultValue=""
          className={field}
          aria-invalid={Boolean(errors.service)}
          aria-describedby={errors.service ? "service-error" : undefined}
        >
          <option value="" disabled>
            Select a treatment area
          </option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="Not sure / general consultation">
            Not sure — general consultation
          </option>
        </select>
        {errors.service && (
          <p id="service-error" className="mt-1.5 text-xs text-destructive">
            {errors.service}
          </p>
        )}
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="text-sm font-medium text-navy">
          Message <span className="text-muted-foreground">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className={field}
          placeholder="Anything you would like the clinic to know before your visit."
        />
      </div>

      <div className="sm:col-span-2">
        <button type="submit" className={`${buttonStyles.primary} w-full sm:w-auto`}>
          Request Appointment
        </button>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          This form is not yet connected to a booking inbox. Until the clinic confirms where
          requests should be delivered, please call{" "}
          <a href={clinic.phoneHref} className="underline">
            {clinic.phoneDisplay}
          </a>{" "}
          to book.
        </p>
      </div>
    </form>
  );
}
