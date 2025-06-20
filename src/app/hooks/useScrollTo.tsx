"use client";

import { useCallback } from "react";

// A simpler version that only handles window scrolling
export function useScrollAndVerify() {
  const scrollTo = useCallback((elementId: string) => {
    return new Promise<void>((resolve, reject) => {
      const element = document.getElementById(elementId);

      if (!element) {
        return reject(`[Scroll] Target element #${elementId} not found.`);
      }

      const checkVisibility = () => {
        const rect = element.getBoundingClientRect();
        // Check if the element is reasonably within the viewport
        return rect.top < window.innerHeight && rect.bottom >= 0;
      };

      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      // Polling mechanism to wait for the scroll to finish
      const startTime = Date.now();
      const timeout = 2500;

      function checkScrollLoop() {
        if (checkVisibility()) {
          resolve();
        } else if (Date.now() - startTime > timeout) {
          reject(`[Scroll] Timed out waiting for #${elementId}.`);
        } else {
          requestAnimationFrame(checkScrollLoop);
        }
      }
      requestAnimationFrame(checkScrollLoop);
    });
  }, []);

  return { scrollTo };
}
