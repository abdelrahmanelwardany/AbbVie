type ImagePlaceholderProps = {
  label: string;
  src?: string;
  variant?: 'light' | 'dark';
};

export default function ImagePlaceholder({
  label,
  src,
  variant = 'light',
}: ImagePlaceholderProps) {
  const isDark = variant === 'dark';

  if (src) {
    return (
      <div className="w-full aspect-video rounded-xl overflow-hidden border border-brand-dark/10 shadow-sm">
        <img src={src} alt={label} className="w-full h-full object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`w-full aspect-video rounded-xl flex items-center justify-center px-6 border transition-all duration-300 ${
        isDark
          ? 'bg-gradient-to-br from-brand-dark to-[#1e2a5e] border-white/10 shadow-[0_0_30px_rgba(20,31,72,0.3)]'
          : 'bg-gradient-to-br from-gray-100 to-gray-200 border-brand-dark/10 shadow-sm'
      }`}
    >
      <span
        className={`text-sm sm:text-base font-medium text-center ${
          isDark ? 'text-white/40' : 'text-gray-400'
        }`}
      >
        Image placeholder, {label}
      </span>
    </div>
  );
}
