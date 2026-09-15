import SectionTitle from './SectionTitle';
import ImagePlaceholder from './ImagePlaceholder';
import Reveal from './Reveal';
import objectiveImage from '../../imgs/objective.png';

export default function Objective() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-brand-light">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <SectionTitle eyebrow="Purpose">Objective of This Proposal</SectionTitle>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-8 text-base sm:text-lg leading-relaxed text-gray-700">
            The objective of this proposal is to present simple, high-level, and practical engagement concepts that AbbVie’s Hematology team can use across congresses, HCP events, and digital touchpoints to create more engaging and memorable interactions with healthcare professionals. Each concept is designed to be adaptable, scalable, and practical to implement across different engagement formats, timelines, and environments.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10">
            <ImagePlaceholder label="Objective / outcome visual" src={objectiveImage} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
