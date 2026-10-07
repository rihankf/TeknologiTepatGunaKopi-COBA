"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight scroll-reveal hook using IntersectionObserver.
 * Observes all elements with `.reveal` or `.reveal-scale` class
 * and adds `revealed` when they enter the viewport.
 * Uses MutationObserver to catch dynamically added elements
 * (e.g. when switching commodities).
 */
export function useScrollReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );
    observerRef.current = io;

    // Observe all current reveal elements
    const scan = () => {
      document
        .querySelectorAll(".reveal:not(.revealed), .reveal-scale:not(.revealed)")
        .forEach((el) => io.observe(el));
    };

    scan();

    // Watch for DOM changes (commodity switch, route change, etc.)
    const mo = new MutationObserver(() => {
      // Small delay to let React finish rendering
      requestAnimationFrame(scan);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
