"use client";

import { useEffect, useRef } from "react";

export default function SpiderTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const spiderRef = useRef<HTMLDivElement | null>(null);
  const trailRef = useRef<{ x: number; y: number }[]>([]);
  const lastScrollYRef = useRef<number>(0);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const canvas = canvasRef.current;
    const spider = spiderRef.current;
    if (!canvas || !spider) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const spiderSize = 250;
    const spiderCenterOffset = spiderSize / 2; // 125

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
    };

    updateCanvasSize();

    const animate = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const maxScroll = scrollHeight - viewportHeight;

      // Calculate spider vertical position matching scrollbar thumb
      const spiderTop = maxScroll === 0 ? 0 : (scrollY / maxScroll) * viewportHeight;

      const newX = 100; // fixed horizontal position
      const newY = spiderTop;

      // Position spider div exactly
      spider.style.left = `${newX}px`;
      spider.style.top = `${newY}px`;

      const lastScrollY = lastScrollYRef.current;

      if (scrollY > lastScrollY) {
        // Scroll down → add to trail
        const newPoint = { x: newX + spiderCenterOffset, y: newY + spiderCenterOffset };
        trailRef.current.push(newPoint);
        if (trailRef.current.length > 1000) trailRef.current.shift();
      } else if (scrollY < lastScrollY) {
        // Scroll up → remove from trail
        trailRef.current.pop();
      }

      lastScrollYRef.current = scrollY;

      // Draw trail on canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const trail = trailRef.current;
      if (trail.length > 1) {
        ctx.beginPath();
        ctx.moveTo(trail[0].x, trail[0].y);
        for (let i = 1; i < trail.length; i++) {
          ctx.lineTo(trail[i].x, trail[i].y);
        }
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", updateCanvasSize);
    return () => {
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 z-10 pointer-events-none hidden lg:block"
      />

      <div
        ref={spiderRef}
        className="fixed z-50 lg:w-[250px] lg:h-[250px] hidden lg:block"
        style={{ left: "100px", top: "0px" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="250"
          height="250"
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="20" fill="black" />
          <circle cx="44" cy="45" r="3" fill="white" />
          <circle cx="56" cy="45" r="3" fill="white" />
          <path d="M44 55 Q50 60, 56 55" stroke="white" strokeWidth="2" fill="none" />
          <path d="M40 40 C20 30, 20 10, 30 0" stroke="black" strokeWidth="3" fill="none" />
          <path d="M38 50 C15 50, 15 30, 25 20" stroke="black" strokeWidth="3" fill="none" />
          <path d="M40 60 C20 70, 20 90, 30 100" stroke="black" strokeWidth="3" fill="none" />
          <path d="M60 40 C80 30, 80 10, 70 0" stroke="black" strokeWidth="3" fill="none" />
          <path d="M62 50 C85 50, 85 30, 75 20" stroke="black" strokeWidth="3" fill="none" />
          <path d="M60 60 C80 70, 80 90, 70 100" stroke="black" strokeWidth="3" fill="none" />
        </svg>
      </div>
    </>
  );
}
