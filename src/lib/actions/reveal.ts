interface RevealOptions {
  delay?: number;
}

export function reveal(node: HTMLElement, options: RevealOptions = {}) {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    node.classList.add('is-revealed');
    return {};
  }

  node.classList.add('will-reveal');
  if (options.delay) {
    node.style.setProperty('--reveal-delay', `${options.delay}ms`);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          node.classList.add('is-revealed');
          observer.disconnect();
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
  );
  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    },
  };
}
