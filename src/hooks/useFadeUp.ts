import { useEffect, useRef } from "react";

export function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const observe = () => {
      const elements = container.querySelectorAll(".fade-up:not(.visible)");
      elements.forEach((el) => observer.observe(el));
    };

    observe();

    // Re-observe when new children are added (e.g. async data)
    const mutation = new MutationObserver(observe);
    mutation.observe(container, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);

  return ref;
}
