"use client";
import { useEffect, useState } from "react";

export default function Cart() {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const move = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-30"
      style={{
        transform: `translate(${pos.x - 120}px, ${pos.y - 120}px)`,
      }}
    >
      <div className="w-60 h-60 rounded-full bg-[#FCB13B]/30 blur-[100px]" />
    </div>
  );
}
