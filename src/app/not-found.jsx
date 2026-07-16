import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F2F2F2] flex flex-col items-center justify-center p-8 font-sans selection:bg-[#F2F2F2] selection:text-[#050505]">
      <h1 className="text-6xl md:text-9xl font-black uppercase font-heading mb-4 text-[#FF3333]">404</h1>
      <h2 className="text-2xl md:text-4xl font-bold uppercase mb-8 font-mono tracking-widest">// SIGNAL LOST</h2>
      <p className="text-[#A0A0A0] text-lg font-mono mb-12 max-w-xl text-center">
        The sector you are trying to access does not exist in the current architecture.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="px-8 py-4 bg-transparent border border-[#F2F2F2] hover:bg-[#F2F2F2] hover:text-[#050505] text-sm md:text-lg font-bold font-mono tracking-widest uppercase transition-colors"
        >
          [ HOME ]
        </Link>
        <Link
          href="/work"
          className="px-8 py-4 bg-transparent border border-[#F2F2F2] hover:bg-[#F2F2F2] hover:text-[#050505] text-sm md:text-lg font-bold font-mono tracking-widest uppercase transition-colors"
        >
          [ WORK ]
        </Link>
      </div>
    </div>
  );
}
