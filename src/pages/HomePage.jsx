import { motion } from 'framer-motion';
import MouseLightCard from '../components/MouseLightCard';
import ScrollNarrative from '../components/ScrollNarrative';

const lines = [
  '黑色，是对细节的放大镜。',
  '每一次滚动，都让光影更接近真实。',
  '每一次悬停，都让材质拥有情绪。',
  '这就是面向未来的电商体验。',
];

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto flex min-h-[88vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-5xl font-semibold tracking-tightest md:text-8xl"
        >
          Apple-style Black Commerce
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-zinc-300"
        >
          纯黑、玻璃态、工业级动效。为高端产品打造电影级叙事。
        </motion.p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-32 md:grid-cols-2">
        <MouseLightCard>
          <h3 className="text-3xl font-medium">液态高光</h3>
          <p className="mt-3 text-zinc-300">鼠标经过时，高光跟随并折射，模拟玻璃与金属边框的动态反馈。</p>
        </MouseLightCard>
        <MouseLightCard>
          <h3 className="text-3xl font-medium">惯性滚动</h3>
          <p className="mt-3 text-zinc-300">通过 Lenis 的平滑滚动与 GSAP 的 ScrollTrigger 形成统一时间轴。</p>
        </MouseLightCard>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-40">
        <ScrollNarrative lines={lines} />
      </section>
    </main>
  );
}
