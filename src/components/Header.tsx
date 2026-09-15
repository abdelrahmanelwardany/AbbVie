import ebersLogo from '../../imgs/Ebers.png';
import abbvieLogo from '../../imgs/abbvie.jpeg';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-brand-dark/95 backdrop-blur-md text-white shadow-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <img
          src={ebersLogo}
          alt="Ebers"
          className="h-10 w-10 sm:h-16 sm:w-16 rounded-lg object-contain"
        />
        <img
          src={abbvieLogo}
          alt="AbbVie"
          className="h-10 w-10 sm:h-20 sm:w-20 rounded-lg object-contain"
        />
      </div>
    </header>
  );
}
