import { useState, useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import SectionTitle from './SectionTitle';
import ImagePlaceholder from './ImagePlaceholder';
import Reveal from './Reveal';
import { activationIdeas, type ActivationIdea } from '@/data/activationIdeas';
import firstImage from '../../imgs/first.jpeg';
import secondImage from '../../imgs/second.png';
import thirdImage from '../../imgs/third.jpeg';
import fourthImage from '../../imgs/foruth.png';
import fifthImage from '../../imgs/fifth.jpeg';
import sixthImage from '../../imgs/sixth.jpeg';
import seventhImage from '../../imgs/seventh.jpeg';
import eighthImage from '../../imgs/eight.jpeg';
import ninthImage from '../../imgs/ninth.jpeg';
import tenthImage from '../../imgs/tenth.jpeg';
import eleventhImage from '../../imgs/eleventh.jpeg';
import twelfthImage from '../../imgs/twelfth.jpeg';

const ideaImages: Record<number, string> = {
  1: firstImage,
  2: secondImage,
  3: thirdImage,
  4: fourthImage,
  5: fifthImage,
  6: sixthImage,
  7: seventhImage,
  8: eighthImage,
  9: ninthImage,
  10: tenthImage,
  11: eleventhImage,
  12: twelfthImage,
};

function IdeaCard({ idea, index }: { idea: ActivationIdea; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!contentRef.current) return;
    setHeight(open ? contentRef.current.scrollHeight : 0);
  }, [open]);

  return (
    <Reveal delay={index * 50}>
      <div className="rounded-xl border border-brand-dark/10 bg-white/80 backdrop-blur-md shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center gap-4 px-5 sm:px-6 py-4 text-left hover:bg-brand-dark/[0.03] transition-colors duration-200"
          aria-expanded={open}
        >
          <ChevronRight
            className={`shrink-0 w-5 h-5 text-brand-dark transition-transform duration-300 ease-out ${
              open ? 'rotate-90' : ''
            }`}
          />
          <span className="font-bold text-base sm:text-lg text-brand-dark">
            {idea.name}
          </span>
        </button>

        <div
          style={{ height: `${height}px` }}
          className="transition-all duration-300 ease-in-out overflow-hidden"
        >
          <div ref={contentRef} className="px-5 sm:px-6 pb-6">
            <div className="pt-2 border-t border-brand-dark/10" />

            <div className="pt-4">
              <p className="text-base leading-relaxed text-gray-700">
                <span className="font-semibold text-brand-dark">
                Type: </span>
              {idea.type}
              </p>
            </div>

            <div className="mt-5 pt-5 border-t border-gray-100">
              <p className="text-base leading-relaxed text-gray-700">
                <span className="font-semibold text-brand-dark">Objective: </span>
                {idea.objective}
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-base leading-relaxed text-gray-700">
                <span className="font-semibold text-brand-dark">Scenario: </span>
                {idea.scenario}
              </p>
            </div>

            <ul className="mt-4 pt-4 border-t border-gray-100 space-y-2.5">
              {idea.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5">
                  <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-brand-dark" />
                  <span className="text-base leading-relaxed text-gray-700">{bullet}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-gray-100">
              <ImagePlaceholder label={idea.name} src={ideaImages[idea.id]} />
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function ActivationIdeas() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-brand-dark text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 70% 0%, rgba(40,55,110,0.5) 0%, transparent 70%)',
        }}
      />
      <div className="relative max-w-4xl mx-auto">
        <Reveal>
          <SectionTitle eyebrow="Concepts" variant="dark">
            Activation Ideas
          </SectionTitle>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-white/60">
            Twelve high-level, practical concepts — tap any card to explore the details.
          </p>
        </Reveal>
        <div className="mt-10 space-y-4">
          {activationIdeas.map((idea, i) => (
            <IdeaCard key={idea.id} idea={idea} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
