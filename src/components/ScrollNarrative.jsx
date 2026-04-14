import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollNarrative({ lines }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.narrative-line', {
        opacity: 0,
        y: 28,
        stagger: 0.22,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 75%',
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef} className="space-y-4 text-xl leading-relaxed text-zinc-200 md:text-2xl">
      {lines.map((line) => (
        <p className="narrative-line" key={line}>
          {line}
        </p>
      ))}
    </div>
  );
}
