import type { ReactNode } from 'react';

type SectionTitleProps = {
  children: ReactNode;
  eyebrow?: string;
  variant?: 'light' | 'dark';
};

export default function SectionTitle({ children, eyebrow, variant = 'light' }: SectionTitleProps) {
  const isDark = variant === 'dark';

  return (
    <div>
      {eyebrow && (
        <p
          className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4 ${
            isDark ? 'text-white/50' : 'text-brand-dark/50'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
          isDark ? 'text-white' : 'text-brand-dark'
        }`}
      >
        {children}
      </h2>
    </div>
  );
}
