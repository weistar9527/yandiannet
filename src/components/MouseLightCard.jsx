import { useRef } from 'react';

export default function MouseLightCard({ children, className = '' }) {
  const cardRef = useRef(null);

  const handleMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mx', `${x}px`);
    card.style.setProperty('--my', `${y}px`);

    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = (0.5 - y / rect.height) * 8;
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        const card = cardRef.current;
        if (!card) return;
        card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
      }}
      className={`mouse-light relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-10 shadow-glass transition-transform duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
