import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MouseLightCard from '../components/MouseLightCard';
import ScrollNarrative from '../components/ScrollNarrative';

gsap.registerPlugin(ScrollTrigger);

export default function ProductPage({ title, category }) {
  const stageRef = useRef(null);
  const tabletRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        tabletRef.current,
        {
          rotateX: 72,
          y: 80,
          scale: 0.85,
        },
        {
          rotateX: 0,
          y: -10,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: stageRef.current,
            start: 'top top',
            end: 'bottom+=500 top',
            scrub: 1.4,
            pin: true,
          },
        },
      );
    }, stageRef);

    return () => ctx.revert();
  }, [title]);

  return (
    <main className="px-6 pb-36">
      <section ref={stageRef} className="mx-auto flex min-h-[140vh] max-w-7xl flex-col items-center pt-20">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">{category}</p>
        <h1 className="mt-4 text-center text-5xl font-semibold md:text-7xl">{title}</h1>

        <div className="mt-16 w-full max-w-4xl [perspective:1400px]">
          <MouseLightCard className="mx-auto h-[360px] w-full max-w-3xl bg-gradient-to-b from-white/15 to-white/5 md:h-[460px]">
            <div
              ref={tabletRef}
              className="relative mx-auto h-full w-full rounded-[2rem] border border-white/20 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black"
            >
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_var(--mx,50%)_var(--my,50%),rgba(255,255,255,0.35),transparent_38%)]" />
              <div className="absolute left-1/2 top-3 h-1.5 w-20 -translate-x-1/2 rounded-full bg-zinc-700" />
              <div className="absolute inset-10 rounded-2xl border border-white/10 bg-black/70" />
            </div>
          </MouseLightCard>
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-4xl">
        <ScrollNarrative
          lines={[
            `${title} 以极简体量呈现更强性能。`,
            '滚动时，产品从俯视缓慢翻转至平视，构建沉浸式出场。',
            '文案逐行淡入，配合轻微上移，形成 Apple 风格节奏。',
            '悬停时高光流转，强调玻璃态与金属切面的真实质感。',
          ]}
        />
      </section>
    </main>
  );
}
