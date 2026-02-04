'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [show, setShow] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShow(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (topRef.current) observer.observe(topRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Top marker */}
      <div ref={topRef} className="absolute top-0 h-1 w-full" />

      {show && (
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }
          aria-label="Scroll to top"
          className="
            fixed right-6 bottom-6 z-50
            p-3 rounded-full
            bg-slate-200 text-slate-800
            shadow-lg backdrop-blur
            hover:bg-slate-300 hover:scale-110
            transition-all
          "
        >
          {/* ✅ WORKING JUMP ANIMATION */}
          <ArrowUp className="w-50 h-50 animate-bounce" />
        </button>
      )}
    </>
  );
}
