export default function Template({ children }) {
  // The template naturally remounts its children on route changes.
  // This is the critical mechanism that triggers GSAP garbage collection automatically.
  return <main className="w-full relative min-h-screen">{children}</main>;
}
