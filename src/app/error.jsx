'use client';

export default function Error({ error, reset }) {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F2F2F2] flex flex-col items-center justify-center p-8 font-sans">
      <h1 className="text-4xl md:text-6xl font-black uppercase font-heading mb-4 text-[#FF3333]">System Failure</h1>
      <p className="text-[#A0A0A0] text-xl font-mono mb-12 max-w-xl text-center">
        An unexpected anomaly was detected in the architecture.
      </p>
      <button
        onClick={() => reset()}
        className="px-8 py-4 bg-transparent border border-[#F2F2F2] hover:bg-[#F2F2F2] hover:text-[#050505] text-lg font-bold font-mono tracking-widest uppercase transition-colors"
      >
        [ RELOAD CORE ]
      </button>
    </div>
  );
}
