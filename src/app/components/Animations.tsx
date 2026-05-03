"use client";
import { useEffect } from "react";

export default function Animations() {
  useEffect(() => {
    const init = () => {
      /* ── 1. SCROLL REVEAL ── */
      const isHeavyPage = window.location.pathname.includes("channels-list");
      let observer: IntersectionObserver | null = null;

      if (!isHeavyPage) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("ma-visible");
                observer?.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );

        // Skip the hero section (first section) — opacity:0 breaks LCP detection
        const heroSection = document.querySelector("main > section:first-child");
        const revealEls = document.querySelectorAll(
          "section, h2, h3, p, .plan-card, [class*='rounded-']"
        );
        revealEls.forEach((el, i) => {
          // Never apply ma-init to the hero section or any of its children
          if (heroSection && (el === heroSection || heroSection.contains(el))) return;
          if (!el.classList.contains("ma-init")) {
            el.classList.add("ma-init");
            (el as HTMLElement).style.transitionDelay = `${(i % 8) * 0.07}s`;
            observer?.observe(el);
          }
        });
      }

      /* ── 2. COUNTER ANIMATION ── */
      const counterEls = document.querySelectorAll("[data-count]");
      const counterObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              const target = parseInt(el.dataset.count || "0");
              const duration = 1800;
              const start = performance.now();
              const animate = (now: number) => {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent =
                  Math.floor(eased * target).toLocaleString() +
                  (el.dataset.suffix || "");
                if (progress < 1) requestAnimationFrame(animate);
              };
              requestAnimationFrame(animate);
              counterObserver.unobserve(el);
            }
          });
        },
        { threshold: 0.5 }
      );
      counterEls.forEach((el) => counterObserver.observe(el));

      /* ── 3. MAGNETIC BUTTONS — desktop only ── */
      if (!("ontouchstart" in window)) {
        const buttons = document.querySelectorAll("a, button");
        buttons.forEach((btn) => {
          const el = btn as HTMLElement;
          el.addEventListener("mousemove", (e: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px) scale(1.04)`;
          });
          el.addEventListener("mouseleave", () => {
            el.style.transform = "";
            el.style.transition =
              "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
          });
        });
      }

      /* ── 4. RIPPLE ON CLICK ── */
      document.addEventListener("click", (e: MouseEvent) => {
        const target = (e.target as HTMLElement).closest("a, button");
        if (!target) return;
        const ripple = document.createElement("span");
        const rect = (target as HTMLElement).getBoundingClientRect();
        const size = Math.max(rect.width, rect.height) * 1.4;
        ripple.style.cssText = `
          position:absolute; border-radius:50%; pointer-events:none;
          width:${size}px; height:${size}px;
          left:${e.clientX - rect.left - size / 2}px;
          top:${e.clientY - rect.top - size / 2}px;
          background:rgba(255,255,255,0.25);
          transform:scale(0); animation:ripple 0.55s ease-out forwards;
          z-index:9999;
        `;
        const oldPos = (target as HTMLElement).style.position;
        (target as HTMLElement).style.position = "relative";
        (target as HTMLElement).style.overflow = "hidden";
        target.appendChild(ripple);
        setTimeout(() => {
          ripple.remove();
          if (!oldPos) (target as HTMLElement).style.position = "";
        }, 600);
      });

      /* ── 5. TILT CARDS — desktop only ── */
      if (!("ontouchstart" in window)) {
        const cards = document.querySelectorAll(
          "div[style*='borderRadius: 24'], div[style*='borderRadius: 20']"
        );
        cards.forEach((card) => {
          const el = card as HTMLElement;
          el.addEventListener("mousemove", (e: MouseEvent) => {
            const rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            el.style.transform = `perspective(600px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-6px) scale(1.02)`;
            el.style.transition = "transform 0.15s ease";
          });
          el.addEventListener("mouseleave", () => {
            el.style.transform = "";
            el.style.transition =
              "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
          });
        });
      }

      /* ── 6. CURSOR GLOW — desktop only ── */
      if (!("ontouchstart" in window)) {
        const glow = document.createElement("div");
        glow.id = "cursor-glow";
        glow.style.cssText = `
          position:fixed; width:320px; height:320px; border-radius:50%;
          background:radial-gradient(circle, rgba(249,110,91,0.06) 0%, transparent 70%);
          pointer-events:none; z-index:0; top:0; left:0;
          transform:translate(-50%,-50%);
          transition:opacity 0.3s ease;
        `;
        document.body.appendChild(glow);
        const moveGlow = (e: MouseEvent) => {
          glow.style.left = e.clientX + "px";
          glow.style.top = e.clientY + "px";
        };
        window.addEventListener("mousemove", moveGlow);
      }

      return observer;
    };

    // Defer until idle — does not block LCP or TBT
    let cleanup: (() => void) | null = null;
    if (typeof requestIdleCallback !== "undefined") {
      const id = requestIdleCallback(() => { init(); }, { timeout: 2500 });
      cleanup = () => cancelIdleCallback(id);
    } else {
      const t = setTimeout(init, 300);
      cleanup = () => clearTimeout(t);
    }

    return () => { cleanup?.(); };
  }, []);

  return null;
}
