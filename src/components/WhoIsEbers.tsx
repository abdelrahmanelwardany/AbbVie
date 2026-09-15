import SectionTitle from './SectionTitle';
import ImagePlaceholder from './ImagePlaceholder';
import Reveal from './Reveal';
import whoImage from '../../imgs/who.jpeg';

export default function WhoIsEbers() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-brand-light">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <SectionTitle eyebrow="Introduction">Who is Ebers</SectionTitle>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-8 space-y-6 text-base sm:text-lg leading-relaxed text-gray-700">
            <p>
              Ebers is an immersive digital experience company specializing in VR, AR,
              3D, and interactive content. Founded in 2014, we partner with global
              healthcare and pharmaceutical brands to create memorable, technology-driven
              engagements that resonate with healthcare professionals and patients alike.
            </p>
            <p>
              Our work spans virtual congress experiences, augmented reality product
              demonstrations, 3D anatomical visualizations, and interactive event
              activations, all designed to make complex science accessible and
              memorable. We have delivered projects for AstraZeneca, Amgen, Merck,
              Sanofi, Roche, Organon, Janssen, and Abbott.
            </p>
            <div className="inline-flex items-center gap-3 bg-brand-dark/5 border border-brand-dark/15 rounded-lg px-5 py-3">
              <span className="w-2 h-2 rounded-full bg-green-600 shrink-0" />
              <p className="text-sm sm:text-base font-semibold text-brand-dark">
                Ebers is a registered vendor with AbbVie UAE
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10">
            <ImagePlaceholder label="Ebers capability / team visual" src={whoImage} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
