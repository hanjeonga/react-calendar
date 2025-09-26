import { useEffect, RefObject } from "react";

/**
 * Generic hook: ref can be RefObject<T | null>
 */
export const useOutsideClick = <
  T extends HTMLElement | null = HTMLElement | null
>(
  ref: RefObject<T>,
  callback: () => void
) => {
  useEffect(() => {
    function handler(e: MouseEvent | TouchEvent) {
      const target = e.target as Node | null;
      if (!ref || !ref.current) return;
      if (!target) return;
      if (ref.current.contains(target)) return;
      callback();
    }
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [ref, callback]);
};
