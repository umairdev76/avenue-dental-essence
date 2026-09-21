import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { clinic, nav } from "@/lib/clinic";
import { cn } from "@/lib/utils";
import { buttonStyles } from "./ui";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-hairline bg-background/92 backdrop-blur-md"
          : "border-b border-transparent bg-background/70 backdrop-blur-sm",
      )}
    >
      <div
        className={cn(
          "shell flex items-center justify-between transition-all duration-500",
          scrolled ? "h-16" : "h-20 md:h-24",
        )}
      >
        <Link
          to="/"
          className="flex flex-col leading-none"
          aria-label="Dental Avenue — home"
        >
          <span
            className={cn(
              "font-display tracking-tight text-navy transition-all duration-500",
              scrolled ? "text-xl" : "text-2xl md:text-[1.7rem]",
            )}
          >
            Dental Avenue
          </span>
          <span className="mt-1 text-xs text-muted-foreground">
            Sambrial · Sialkot
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="relative py-1 text-sm text-foreground transition-colors hover:text-teal data-[status=active]:text-navy"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-teal transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={clinic.phoneHref}
            className="inline-flex items-center gap-2 text-sm text-navy transition-colors hover:text-teal"
          >
            <Phone aria-hidden="true" className="size-4" />
            {clinic.phoneDisplay}
          </a>
          <Link to="/contact" className={cn(buttonStyles.accent, "h-10 min-h-10")}>
            Book Appointment
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex size-11 items-center justify-center text-navy lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <Menu className="size-6" aria-hidden="true" />
        </button>
      </div>

      {/* Mobile full-screen menu */}
      <div
        className={cn(
          "fixed inset-0 z-60 flex min-h-[100dvh] flex-col overflow-y-auto overscroll-contain ink-panel transition-all duration-400 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="shell flex min-h-20 items-center justify-between">
          <span className="font-display text-2xl text-ivory">Dental Avenue</span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex size-11 items-center justify-center text-ivory"
            aria-label="Close menu"
          >
            <X className="size-6" aria-hidden="true" />
          </button>
        </div>
        <nav
          id="mobile-navigation"
          aria-label="Mobile"
          className="shell flex flex-1 flex-col justify-start gap-1 py-5 sm:justify-center sm:py-8"
        >
          {nav.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              tabIndex={open ? 0 : -1}
              className="border-b border-ivory/10 py-2.5 font-display text-2xl text-ivory transition-colors hover:text-gold sm:py-3 sm:text-3xl"
              style={{ transitionDelay: `${i * 20}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="shell flex shrink-0 flex-col gap-3 pb-6 pt-3 sm:pb-10">
          <a href={clinic.phoneHref} className={buttonStyles.onDark} tabIndex={open ? 0 : -1}>
            Call {clinic.phoneDisplay}
          </a>
          <Link
            to="/contact"
            tabIndex={open ? 0 : -1}
            className={cn(buttonStyles.accent, "w-full")}
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </header>
  );
}
