import { useLayoutEffect, type RefObject } from "react";
import { gsap, ScrollTrigger } from "../lib/gsap";

export function usePageReveals(
  enabled: boolean,
  routeKey: string,
  scope: RefObject<HTMLElement | null>
) {
  useLayoutEffect(() => {
    if (!enabled || !scope.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      gsap.set(reveals, { opacity: 0, y: 36 });

      ScrollTrigger.batch(reveals, {
        start: "top 90%",
        once: true,
        interval: 0.08,
        batchMax: 5,
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.95,
            stagger: 0.1,
            ease: "power3.out",
            overwrite: true,
          }),
      });

      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((element) => {
        gsap.fromTo(
          element,
          { yPercent: -5, scale: 1.1 },
          {
            yPercent: 7,
            scale: 1.1,
            ease: "none",
            scrollTrigger: {
              trigger: element.parentElement ?? element,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((element) => {
        const target = Number(element.dataset.counter ?? 0);
        const suffix = element.dataset.suffix ?? "";
        const counter = { value: 0 };
        gsap.to(counter, {
          value: target,
          duration: 1.7,
          ease: "power2.out",
          snap: { value: 1 },
          scrollTrigger: { trigger: element, start: "top 90%", once: true },
          onUpdate: () => {
            element.textContent = `${Math.round(counter.value)}${suffix}`;
          },
        });
      });
    }, scope.current);

    const timer = window.setTimeout(() => ScrollTrigger.refresh(), 400);

    return () => {
      window.clearTimeout(timer);
      ctx.revert();
    };
  }, [enabled, routeKey, scope]);
}
