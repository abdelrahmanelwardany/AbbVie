import ebersLogo from '../../imgs/Ebers.png';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img
            src={ebersLogo}
            alt="Ebers"
            className="h-8 w-8 rounded-lg object-contain"
          />
          <p className="text-sm text-white/50">
            This proposal was developed by Ebers — Immersive Digital Experiences
          </p>
        </div>
        <p className="text-xs text-white/30 uppercase tracking-wider">
          September 2026
        </p>
      </div>
    </footer>
  );
}
