export default function CallToAction() {
  return (
    <section className="bg-brand-dark text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            'radial-gradient(ellipse 50% 80% at 50% 50%, rgba(40,55,110,0.6) 0%, transparent 70%)',
        }}
      />
      <div className="relative max-w-4xl mx-auto px-6 py-20 sm:py-28 text-center">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
          Next Steps
        </p>
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
          Let's bring this to life
        </h2>
        <p className="mt-6 text-lg sm:text-xl leading-relaxed text-white/80 max-w-2xl mx-auto">
          We'd love to walk you through these concepts and tailor them to your team's
          needs — let's find 30 minutes to discuss next steps.
        </p>
        <a
          href="mailto:hello@ebers.com"
          className="mt-10 inline-flex items-center justify-center bg-white text-brand-dark font-semibold text-base sm:text-lg px-8 py-3.5 rounded-lg shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_50px_rgba(255,255,255,0.25)] hover:scale-[1.03] transition-all duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
