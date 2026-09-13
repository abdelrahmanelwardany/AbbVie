import ebersLogo from '../../imgs/Ebers.png';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-md text-white shadow-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <img
          src={ebersLogo}
          alt="Ebers"
          className="h-10 w-10 sm:h-12 sm:w-12 rounded-lg object-contain"
        />
        <p className="text-sm sm:text-base font-medium text-white/90 text-right">
          AbbVie 
        </p>
      </div>
    </header>
  );
}
