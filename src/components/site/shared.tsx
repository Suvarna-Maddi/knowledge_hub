import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SectionHeading({
  eyebrow,
  title,
  copy,
  center = false,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="section-label">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {copy && <p className="mt-4 text-base leading-7 text-muted-foreground">{copy}</p>}
    </div>
  );
}
export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <section className="bg-surface-subtle">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <p className="section-label">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">{copy}</p>
      </div>
    </section>
  );
}
export function ContactBand() {
  return (
    <section className="text-foreground shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-12 md:flex-row md:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-primary">
            Start your learning journey
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold">
            Talk to our course advisor today.
          </h2>
        </div>
        <Button asChild variant="accent" size="xl">
          <Link to="/contact">
            Contact us <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
export function ContactDetails({ compact = false }: { compact?: boolean }) {
  const items = [
    { icon: Phone, label: "Call us", value: "7997908465 / 8790116519", href: "tel:+917997908465" },
    {
      icon: Mail,
      label: "Email us",
      value: "knowledgehub.suncity@gmail.com",
      href: "mailto:knowledgehub.suncity@gmail.com",
    },
    {
      icon: MapPin,
      label: "Visit us",
      value: "7-14/C, Opp. AXIS Bank, Suncity Main Road, Hydershakote, Hyderabad – 500008",
    },
  ];
  return (
    <div className={compact ? "grid gap-4 md:grid-cols-3" : "grid gap-5"}>
      {items.map(({ icon: Icon, label, value, href }) => {
        const content = (
          <>
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
              <Icon className="size-5" />
            </span>
            <span>
              <strong className="block font-display text-sm text-foreground">{label}</strong>
              <span className="mt-1 block text-sm leading-6 text-muted-foreground">{value}</span>
            </span>
          </>
        );
        return href ? (
          <a key={label} href={href} className="info-row">
            {content}
          </a>
        ) : (
          <div key={label} className="info-row">
            {content}
          </div>
        );
      })}
    </div>
  );
}
export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-3 text-sm font-medium text-foreground">
          <CheckCircle2 className="size-5 shrink-0 text-primary" />
          {item}
        </li>
      ))}
    </ul>
  );
}
