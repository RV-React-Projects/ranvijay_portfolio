'use client';

import { useEffect, useMemo, useState } from 'react';

type Bubble = {
  // %
  delay: number;
  // s
  duration: number;
  id: number; // %
  left: number;
  size: number;
  // px
  top: number; // s
};

export function GlassyBubbles({ count = 10 }: { count?: number }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const bubbles = useMemo<Bubble[]>(() => {
    const items: Bubble[] = [];
    const total = Math.max(10, count + 4);
    for (let i = 0; i < total; i++) {
      const size = Math.floor(80 + Math.random() * 140); // 80-220px
      items.push({
        id: i,
        size,
        top: Math.random() * 100,
        left: Math.random() * 100,
        delay: Math.random() * 6, // 0-6s
        duration: 10 + Math.random() * 8, // 10-18s
      });
    }
    return items;
  }, [count]);

  if (!mounted) return null;

  return (
    <div className="bubbles-container fixed inset-0 -z-10 overflow-hidden">
      {bubbles.map(b => {
        const tierClass = b.size > 150 ? 'bubble--slow' : 'bubble--fast';
        const rotateDuration = `${36 + Math.random() * 28}s`; // 36-64s
        const driftDuration = `${12 + Math.random() * 10}s`; // 12-22s
        return (
          <div
            key={b.id}
            className="bubble-rotator"
            style={{
              position: 'absolute',
              top: `${b.top}%`,
              left: `${b.left}%`,
              ['--rotate-duration' as any]: rotateDuration,
              ['--drift-duration' as any]: driftDuration,
            }}>
            <div
              className={`bubble ${tierClass}`}
              style={{
                width: `${b.size}px`,
                height: `${b.size}px`,
                animationDelay: `${b.delay}s`,
                animationDuration: `${b.duration}s`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default GlassyBubbles;
