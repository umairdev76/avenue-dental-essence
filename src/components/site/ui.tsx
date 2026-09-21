import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ---------------- Buttons ---------------- */

const base =
  "group inline-flex items-center justify-center gap-2 rounded-sm text-sm font-medium tracking-wide transition-all duration-300 min-h-11 px-6 disabled:opacity-60 disabled:pointer-events-none";

export const buttonStyles = {
  primary: cn(base, "bg-teal text-accent-foreground hover:brightness-110 hover:shadow-lift"),
  accent: cn(base, "bg-teal text-accent-foreground hover:brightness-110 hover:shadow-lift"),
  secondary: cn(
    base,
    "border border-navy/25 bg-transparent text-navy hover:border-navy hover:bg-navy hover:text-primary-foreground",
  ),
  onDark: cn(
    base,
    "border border-ivory/35 bg-transparent text-ivory hover:border-ivory hover:bg-ivory hover:text-navy",
  ),
  ghost: cn(base, "px-0 text-navy hover:text-teal"),
};

export type ButtonVariant = keyof typeof buttonStyles;

export function Arrow({ className }: { className?: string }) {
  return (
    <ArrowRight
      aria-hidden="true"
      className={cn(
        "size-4 transition-transform duration-300 group-hover:translate-x-1",
        className,
      )}
    />
  );
}

export function LinkButton({
  to,
  variant = "primary",
  children,
  withArrow,
  className,
  ...rest
}: {
  to: string;
  variant?: ButtonVariant;
  children: ReactNode;
  withArrow?: boolean;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "to" | "children" | "className">) {
  return (
    <Link to={to} className={cn(buttonStyles[variant], className)} {...rest}>
      {children}
      {withArrow && <Arrow />}
    </Link>
  );
}

export function AnchorButton({
  href,
  variant = "secondary",
  children,
  withArrow,
  className,
  ...rest
}: {
  href: string;
  variant?: ButtonVariant;
  children: ReactNode;
  withArrow?: boolean;
  className?: string;
} & ComponentProps<"a">) {
  return (
    <a href={href} className={cn(buttonStyles[variant], className)} {...rest}>
      {children}
      {withArrow && <Arrow />}
    </a>
  );
}

/* ---------------- Section heading ---------------- */

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "light",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  as?: "h1" | "h2";
}) {
  const Heading = Tag as "h2";
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && (
        <p
          className={cn(
            "eyebrow mb-4",
            tone === "dark" ? "text-gold" : "text-teal",
            align === "center" && "flex justify-center",
          )}
        >
          {eyebrow}
        </p>
      )}
      <Heading
        className={cn(
          Tag === "h1" ? "display-1" : "display-2",
          tone === "dark" ? "text-ivory" : "text-navy",
        )}
      >
        {title}
      </Heading>
      <span className={cn("gold-rule mt-6", align === "center" && "mx-auto")} />
      {intro && <p className={cn("body-lg mt-6", tone === "dark" && "text-ivory/70")}>{intro}</p>}
    </div>
  );
}

/* ---------------- Pending-content notice ---------------- */

export function PendingContent({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="rounded-sm border border-dashed border-navy/20 bg-card/60 p-6 text-center sm:p-8">
      <p className="eyebrow text-teal">Clinic content coming soon</p>
      <h3 className="display-3 mt-3 text-navy">{title}</h3>
      <p className="body-lg mx-auto mt-3 max-w-xl">{children}</p>
    </div>
  );
}
