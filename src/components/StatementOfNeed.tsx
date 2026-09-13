import { Check } from 'lucide-react';
import SectionTitle from './SectionTitle';
import ImagePlaceholder from './ImagePlaceholder';
import Reveal from './Reveal';
import needImage from '../../imgs/need.png';

const points = [
  'HCP engagement today relies mainly on email outreach and standard event activities — formats that are increasingly competing for attention in a crowded information landscape.',
  'There is a clear opportunity to introduce more memorable, interactive engagement formats at congresses and HCP events, especially within the Hematology therapeutic area.',
  'Growing interest in experiential technologies — such as holograms, AR, and immersive 3D — signals readiness for bolder, more tactile engagement approaches.',
  'At this stage, engagement approaches that do not require sharing detailed product or clinical materials are preferred, keeping interactions high-level and brand-led.',
];

export default function StatementOfNeed() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-brand-dark text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 30% 100%, rgba(40,55,110,0.5) 0%, transparent 70%)',
        }}
      />
      <div className="relative max-w-4xl mx-auto">
        <Reveal>
          <SectionTitle eyebrow="The Challenge" variant="dark">
            Statement of Need
          </SectionTitle>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-8 text-base sm:text-lg leading-relaxed text-white/80">
            Today's healthcare professional engagement landscape is saturated with
            conventional touchpoints. To stand out and create lasting recall, AbbVie's
            Hematology team needs activation concepts that are experiential, memorable,
            and practical to deploy at congresses and HCP events — without relying on
            detailed clinical or product content at this stage.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-lg px-5 py-4 border border-white/10"
              >
                <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-white/15 flex items-center justify-center">
                  <Check className="w-3 h-3 text-white" strokeWidth={3} />
                </span>
                <span className="text-base sm:text-lg leading-relaxed text-white/85">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10">
            <ImagePlaceholder
              label="Client challenge / current state visual"
              src={needImage}
              variant="dark"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
