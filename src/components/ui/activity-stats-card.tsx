"use client";

import * as React from "react";
import { animate, motion } from "framer-motion";
import { cn } from "../../lib/utils"; // 🔹 adapte ce chemin à ton projet

interface StatsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  title: string;
  metric: number;
  metricUnit?: string;
  subtext: string;
  iconContainerClassName?: string;
}

const StatsCard = React.forwardRef<HTMLDivElement, StatsCardProps>(
  (
    {
      className,
      icon,
      title,
      metric,
      metricUnit,
      subtext,
      iconContainerClassName,
      ...props
    },
    ref
  ) => {
    const metricRef = React.useRef<HTMLHeadingElement>(null);

    // ✅ Animation du chiffre (plus rapide)
    React.useEffect(() => {
      const node = metricRef.current;
      if (!node) return;

      let hasAnimated = false;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimated) {
              hasAnimated = true;

              const controls = animate(0, metric, {
                duration: 1.5, // ⚡ rapide mais fluide
                ease: "easeOut",
                onUpdate(value) {
                  node.textContent = Math.floor(value).toString(); // ✅ sans décimales
                },
              });

              return () => controls.stop();
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(node);
      return () => observer.disconnect();
    }, [metric]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }} // 🔸 apparition fluide
        viewport={{ once: true }}
        className={cn(
          "flex w-full max-w-xs flex-col gap-4 rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
          className
        )}
        {...props}
      >
        {/* Header */}
        <div className="flex items-center gap-4">
          <div
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground",
              iconContainerClassName
            )}
          >
            {icon}
          </div>
          <p className="text-lg font-medium text-foreground">{title}</p>
        </div>

        {/* Chiffre animé */}
        <div className="flex items-baseline gap-1">
          <h2
            ref={metricRef}
            className="text-5xl font-bold tracking-tighter md:text-6xl"
            aria-live="polite"
            aria-atomic="true"
          >
            0
          </h2>
          {metricUnit && (
            <span className="text-4xl font-bold text-muted-foreground md:text-5xl">
              {metricUnit}
            </span>
          )}
        </div>

        {/* Sous-texte */}
        <p className="text-base text-muted-foreground">{subtext}</p>
      </motion.div>
    );
  }
);

StatsCard.displayName = "StatsCard";
export { StatsCard };
