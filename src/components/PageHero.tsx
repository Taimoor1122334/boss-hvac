import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow, PillButton } from "./ui";
import { Photo } from "./Photo";
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
  fallback = "images/boss-hero.jpg",
  crumb,
  meta = ["Licensed & insured", "24/7 response", "25+ years trusted"],
  ctaLabel,
  ctaHref,
  onCta,
  children,
}: PageHeroProps) {
  return (
    <section className="relative flex min-h-[570px] items-end overflow-hidden bg-boss-ink text-white sm:min-h-[640px]">
      <div className="absolute inset-0">
        <Photo
          src={image}
          fallback={fallback}
          alt=""
          loading="eager"
          data-parallax
          className="inner-hero-photo h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,15,12,0.58)_0%,rgba(10,15,12,0.2)_35%,rgba(10,15,12,0.72)_72%,rgba(10,15,12,0.96)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0e1310] to-transparent" />

      <div className="container-shell relative z-10 w-full pb-12 pt-36 sm:pb-16 sm:pt-44">
        {crumb && (
          <a href={pageHref("/")} className="mb-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.17em] text-white/60 transition hover:text-white">
            Home <ArrowUpRight size={12} className="rotate-45" /> {crumb}
          </a>
        )}
        <div data-reveal>
          <Eyebrow className="text-boss-ice">{eyebrow}</Eyebrow>
          <h1 className="mt-5 max-w-[1000px] whitespace-pre-line text-[clamp(2.7rem,7.5vw,6.5rem)] font-normal leading-[0.98] tracking-[-0.065em]">
            {title}
          </h1>
          <p className="body-copy mt-6 max-w-[620px] text-[14px] leading-[1.7] text-white/72">
            {description}
          </p>
          {children}
        </div>

        <div data-reveal className="mt-9 flex flex-col gap-6 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {meta.map((item) => (
              <span key={item} className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white/58">
                <span className="h-1.5 w-1.5 rounded-full bg-boss-ice" />
                {item}
              </span>
            ))}
          </div>
          {ctaLabel && (
            <PillButton
              label={ctaLabel}
              href={ctaHref}
              onClick={onCta}
              variant="light"
            />
          )}
        </div>
      </div>
    </section>
  );
}
