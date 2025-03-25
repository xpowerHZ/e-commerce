"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";

// Configure NProgress
NProgress.configure({
  showSpinner: false,
  minimum: 0.1,
  easing: "ease",
  speed: 200,
});

// Custom styles for the progress bar
const nprogresStyles = `
  #nprogress {
    pointer-events: none;
  }
  
  #nprogress .bar {
    background: hsl(var(--primary));
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
  }
  
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px hsl(var(--primary)), 0 0 5px hsl(var(--primary));
    opacity: 1.0;
    transform: rotate(3deg) translate(0px, -4px);
  }
`;

export function NavigationProgress() {
  const pathname = usePathname();
  const lastPathRef = useRef(pathname);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressActiveRef = useRef(false);

  // Add NProgress styles once
  useEffect(() => {
    const styleEl = document.createElement("style");
    styleEl.textContent = nprogresStyles;
    document.head.appendChild(styleEl);
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  useEffect(() => {
    // Only trigger if the pathname has changed and no progress is active
    if (pathname === lastPathRef.current || progressActiveRef.current) return;

    // Mark the progress as active
    progressActiveRef.current = true;
    lastPathRef.current = pathname;

    // Start progress immediately on click
    NProgress.set(0.3);
    NProgress.start();

    // Finish progress after a short delay
    timerRef.current = setTimeout(() => {
      NProgress.done();
      progressActiveRef.current = false;
      timerRef.current = null;
    }, 300);

    // Cleanup any pending timer on effect cleanup
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        NProgress.done();
        progressActiveRef.current = false;
      }
    };
  }, [pathname]);

  return null;
}
