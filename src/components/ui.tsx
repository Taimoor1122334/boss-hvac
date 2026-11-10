import type { MouseEvent, ReactNode } from "react";
import { ArrowUpRight, Flame, Snowflake, Wind, Wrench } from "lucide-react";
import { cn } from "../utils/cn";

export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <div className="flex items-center gap-2.5" aria-label="BOSS Climate Control">
      <span
        className={cn(
          "grid h-8 w-8 place-items-center rounded-full",
          footer ? "bg-boss-olive text-white" : "bg-white text-boss-olive"
        )}
      >
        <Snowflake size={17} strokeWidth={2.4} />
      </span>
      <span className="text-[19px] font-extrabold tracking-[-0.055em] text-white">
        BOSS<sup className="ml-0.5 text-[8px] font-semibold tracking-normal">®</sup>
      </span>
    </div>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={cn("eyebrow", className)}>{children}</span>;
}

type PillButtonProps = {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "light" | "olive";
  className?: string;
  ariaLabel?: string;
};

export function PillButton({
  label,
  href,
  onClick,
  variant = "light",
  className,
  ariaLabel,
}: PillButtonProps) {
  const content = (
    <>
      <span className="btn-text-mask">
        <span>{label}</span>
        <span aria-hidden="true">{label}</span>
      </span>
      <span className="btn-arrow">
        <ArrowUpRight size={15} strokeWidth={2.2} />
      </span>
    </>
  );

  const classes = cn("btn-pill", variant === "light" ? "btn-light" : "btn-olive", className);

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel ?? label}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} aria-label={ariaLabel ?? label}>
      {content}
    </button>
  );
}

export function ArrowLink({
  label,
  href = "#/contact",
  className,
  onClick,
}: {
  label: string;
  href?: string;
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <a href={href} onClick={onClick} className={cn("arrow-link", className)}>
      {label}
      <ArrowUpRight size={13} strokeWidth={2.3} />
    </a>
  );
}

export function WaveLines({ className }: { className?: string }) {
  return (
    <svg
      className={cn("wave-lines", className)}
      viewBox="0 0 1200 320"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {Array.from({ length: 14 }).map((_, i) => {
        const y = 8 + i * 24;
        const d = `M -80 ${y + 25} C 130 ${y - 42}, 300 ${y + 76}, 560 ${y + 20} S 920 ${y - 48}, 1280 ${y + 22}`;
        return (
          <path
            key={i}
            d={d}
            stroke="currentColor"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            opacity={i % 3 === 0 ? 0.55 : 0.32}
          />
        );
      })}
    </svg>
  );
}

export const serviceIcons = {
  snowflake: Snowflake,
  flame: Flame,
  wind: Wind,
  wrench: Wrench,
};
