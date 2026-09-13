export default function Hero() {
  return (
    <section className="relative bg-brand-dark text-white overflow-hidden">
      {/* soft radial glow */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(40,55,110,0.6) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 80% 100%, rgba(30,42,94,0.8) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-white/50">
          Ebers — Digital &amp; Immersive Experiences
        </p>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
          Proposal for AbbVie
          <br />
          <span className="text-white/80">Hematology Engagement</span>
        </h1>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/50">
          <span>Prepared by Ebers</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>Scope: Congress &amp; HCP Event Activations</span>
          <span className="hidden sm:inline text-white/20">|</span>
          <span>September 2026</span>
        </div>
      </div>
    </section>
  );
}
