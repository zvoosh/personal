import { useEffect, useRef, useState, type RefObject } from "react";

export function useInView(
  threshold = 0.5
): [RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold }
    );

    const current = ref.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold]);

  return [ref, inView];
}
interface CountUpProps {
  target: number;
  duration: number; // ms
  suffix?: string;
}

export function CountUp({ target, duration, suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView(0.4);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = target / (duration / 16); // 60fps baseline

    const step = () => {
      start += increment;
      if (start < target) {
        setCount(Math.round(start));
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return (
    <div ref={ref} className="bolder">
      {count}
      {suffix}
    </div>
  );
}
