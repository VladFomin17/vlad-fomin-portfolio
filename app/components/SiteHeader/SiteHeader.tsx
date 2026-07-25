"use client";

import { type ReactNode, useEffect, useRef } from "react";
import styles from "./SiteHeader.module.css";

type SiteHeaderProps = {
  children: ReactNode;
};

export function SiteHeader({ children }: SiteHeaderProps) {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let previousY = window.scrollY;
    let frame = 0;

    const update = () => {
      const currentY = window.scrollY;
      const header = headerRef.current;

      if (header) {
        header.dataset.hidden = String(currentY > 96 && currentY > previousY);
      }

      previousY = currentY;
      frame = 0;
    };

    const handleScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className={styles.shell} ref={headerRef}>
      <div className="site-header">{children}</div>
    </header>
  );
}
