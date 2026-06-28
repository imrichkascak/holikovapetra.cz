"use client";

import { useEffect, useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  variant?: "up" | "fade" | "iris";
  delay?: number;
  role?: string;
}

export function ScrollReveal({
  children,
  className,
  variant = "up",
  delay = 0,
  role,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("in-view");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const variantClass =
    variant === "up"
      ? "reveal-up"
      : variant === "iris"
        ? "iris-reveal"
        : "reveal-fade";

  return (
    <div ref={ref} className={cn(variantClass, className)} role={role}>
      {children}
    </div>
  );
}
