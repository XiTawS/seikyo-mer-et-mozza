export default function Footer() {
  return (
    <footer className="bg-[var(--color-bg-dark)] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-sm text-white/20">Mer & Mozza</span>
        <p className="text-white/20 text-xs">
          Créé par{" "}
          <a href="https://seikyo.fr" target="_blank" rel="noopener noreferrer"
            className="text-[var(--color-terra)]/30 hover:text-[var(--color-terra)] transition-colors">Seikyo</a>
        </p>
      </div>
    </footer>
  );
}