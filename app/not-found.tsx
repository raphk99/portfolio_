export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blueprint-cyan mb-4 font-mono">
          404
        </h1>
        <p className="text-white/70 font-mono mb-8">Page not found</p>
        <a
          href="/"
          className="inline-block px-6 py-3 border-2 border-blueprint-cyan text-blueprint-cyan hover:bg-blueprint-cyan hover:text-blueprint-bg transition-all duration-300 font-mono"
        >
          RETURN HOME →
        </a>
      </div>
    </div>
  );
}
