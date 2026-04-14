import { NavLink, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import Lenis from 'lenis';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

const navItems = [
  { path: '/', label: '首页', product: 'Apple Black Studio' },
  { path: '/ipad', label: 'iPad', product: 'iPad Pro M4' },
  { path: '/mac', label: 'Mac', product: 'MacBook Pro' },
  { path: '/watch', label: 'Watch', product: 'Apple Watch Ultra' },
  { path: '/airpods', label: 'AirPods', product: 'AirPods Pro' },
  { path: '/vision', label: 'Vision', product: 'Apple Vision Pro' },
  { path: '/store', label: 'Store', product: 'Black Store' },
  { path: '/support', label: 'Support', product: 'AppleCare+' },
];

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans tracking-tightest">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-center gap-6 px-4 py-4 text-sm text-zinc-300">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `transition-colors duration-300 hover:text-white ${isActive ? 'text-white' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {navItems
          .filter((item) => item.path !== '/')
          .map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<ProductPage title={item.product} category={item.label} />}
            />
          ))}
      </Routes>
    </div>
  );
}
