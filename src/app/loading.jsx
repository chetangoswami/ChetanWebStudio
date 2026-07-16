export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center pointer-events-none">
      <div className="w-16 h-16 border-t-2 border-r-2 border-[#F2F2F2] animate-spin rounded-full"></div>
    </div>
  );
}
