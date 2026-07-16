import dynamic from 'next/dynamic';

const AnimatedHero = dynamic(() => import('../components/animations/animated-hero').then(mod => mod.AnimatedHero), { ssr: false });

export default function HomePage() {
  return (
    <div className="w-full relative bg-[#0a0a0a] text-[#f0f0f0] selection:bg-[#1E90FF] selection:text-white">
      <AnimatedHero />
    </div>
  );
}
