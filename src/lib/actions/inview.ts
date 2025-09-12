export function inview(node: HTMLElement) {
  let observer: IntersectionObserver;

  const handleIntersect = (entries: IntersectionObserverEntry[]) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        node.dispatchEvent(new CustomEvent('inview'));
      } else {
        node.dispatchEvent(new CustomEvent('outview'));
      }
    });
  };

  observer = new IntersectionObserver(handleIntersect);
  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
    }
  };
}