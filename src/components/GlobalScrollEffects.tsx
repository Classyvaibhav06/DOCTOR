"use client";

import { useEffect } from "react";

export function GlobalScrollEffects() {
  useEffect(() => {
    const root = document.documentElement;

    const updateScrollState = () => {
      const scrollTop = window.scrollY || root.scrollTop;
      const scrollHeight = root.scrollHeight - window.innerHeight;
      const progress =
        scrollHeight > 0 ? Math.min(scrollTop / scrollHeight, 1) : 0;

      root.style.setProperty("--scroll-progress", String(progress));

      const nav = document.querySelector("nav");
      if (scrollTop > 50) nav?.classList.add("scrolled");
      else nav?.classList.remove("scrolled");
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let observer: IntersectionObserver | null = null;

    if (!prefersReducedMotion) {
      const revealTargets = document.querySelectorAll(
        "section, article, .more-card, .pick-card, .rv-item, .service-card",
      );

      revealTargets.forEach((el, index) => {
        const element = el as HTMLElement;
        element.classList.add("scroll-reveal");
        const isSectionLike =
          element.tagName === "SECTION" || element.tagName === "ARTICLE";
        element.classList.add(
          isSectionLike ? "scroll-reveal-section" : "scroll-reveal-card",
        );
        element.style.setProperty(
          "--reveal-delay",
          `${Math.min((index % 6) * 55, 220)}ms`,
        );
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -10% 0px" },
      );

      revealTargets.forEach((el) => observer?.observe(el));
    }

    return () => {
      window.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      observer?.disconnect();
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
