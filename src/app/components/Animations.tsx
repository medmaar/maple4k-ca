"use client";
import { useEffect } from "react";

export default function Animations() {
  useEffect(() => {
    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.style.transitionDelay || "0ms";
            setTimeout(() => el.classList.add("ma-visible"), parseInt(delay) || 0);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const targets = document.querySelectorAll(".ma-init, .ma-left, .ma-right");
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
