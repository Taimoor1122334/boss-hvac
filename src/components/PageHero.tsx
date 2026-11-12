import type { ReactNode } from "react";
import { PillButton } from "./ui";
import { Photo } from "./Photo";
import { stock } from "../lib/assets";
import { pageHref } from "../lib/router";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  fallback?: string;
  crumb?: string;
  meta?: string[];
  ctaLabel?: string;
  ctaHref?: string;
  onCta?: () => void;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  fallback = stock.home,
  crumb,
  meta = ["Licensed and insured", "24/7 no-heat and no-cool", "Written price before work starts"],
  ctaLabel,
  ctaHref,
  onCta,
  children,
}: PageHeroProps) {
  return (
    <section className="border-b border-boss-ink/10 bg-boss-mist">
      <div className="container-shell grid items-center gap-8 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:py-14">
        <div>
          {crumb && (
            <a href={pageHref("/")} className="text-[14px] font-semibold text-boss-olive underline-offset-4 hover:underline">
              Home / {crumb}
            </a>
          )}
          <p className="mt-3 text-[13px] font-bold uppercase tracking-wide text-boss-olive">{eyebrow}</p>
          <h1 className="mt-2 max-w-[16ch] whitespace-pre-line text-[clamp(2.1rem,4vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-boss-ink">
            {title}
          </h1>
          <p className="mt-4 max-w-[540px] text-[18px] leading-snug text-boss-ink/75">{description}</p>
          {children}
          <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-[14px] text-boss-ink/70">
            {meta.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {ctaLabel && (
            <div className="mt-6">
              <PillButton label={ctaLabel} href={ctaHref} onClick={onCta} variant="olive" />
            </div>
          )}
        </div>
        <Photo
          src={image}
          fallback={fallback}
          alt=""
          loading="eager"
          className="h-[260px] w-full rounded-md object-cover sm:h-[340px]"
        />
      </div>
    </section>
  );
}
