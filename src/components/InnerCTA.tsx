import { Eyebrow, PillButton, WaveLines } from "./ui";

export function InnerCTA({
  eyebrow = "Ready When You Are",
  title,
  description,
  buttonLabel = "Schedule Service",
  onAction,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  buttonLabel?: string;
  onAction: () => void;
}) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container-shell">
        <div className="relative overflow-hidden rounded-[22px] bg-boss-olive px-6 py-16 text-center text-white sm:py-20">
          <WaveLines className="text-white/18" />
          <div className="relative z-10">
            <div data-reveal className="flex justify-center">
              <Eyebrow className="text-white/80">{eyebrow}</Eyebrow>
            </div>
            <h2 data-reveal className="section-title mx-auto mt-5 max-w-[900px] whitespace-pre-line text-[clamp(2.15rem,5.6vw,4.9rem)] font-normal">
              {title}
            </h2>
            <p data-reveal className="body-copy mx-auto mt-5 max-w-[540px] text-[13px] text-white/72">
              {description}
            </p>
            <div data-reveal className="mt-8 flex justify-center">
              <PillButton label={buttonLabel} onClick={onAction} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
