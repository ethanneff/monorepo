'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { BottomGradient } from '@/src/components/BottomGradient';
import { ConnectSection } from '@/src/components/ConnectSection';
import { ExperienceSection } from '@/src/components/ExperienceSection';
import { Footer } from '@/src/components/Footer';
import { Header } from '@/src/components/Header';
import { Navigation } from '@/src/components/Navigation';
import { SkillsSection } from '@/src/components/SkillsSection';

const sections = ['intro', 'work', 'thoughts', 'connect'];

const Home = () => {
  const [activeSection, setActiveSection] = useState('');
  const sectionsReference = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: '0px 0px -20% 0px', threshold: 0.3 },
    );

    for (const section of sectionsReference.current) {
      // eslint-disable-next-line react-you-might-not-need-an-effect/no-initialize-state
      if (section) observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleReferenceSet = useCallback(
    (index: number) => (element: HTMLElement | null) => {
      sectionsReference.current[index] = element;
    },
    [],
  );

  return (
    <div className="bg-background text-foreground relative min-h-screen">
      <Navigation
        activeSection={activeSection}
        sections={sections}
      />
      <main className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-16">
        <Header onRefSet={handleReferenceSet(0)} />
        <ExperienceSection onRefSet={handleReferenceSet(1)} />
        <SkillsSection onRefSet={handleReferenceSet(2)} />
        <ConnectSection onRefSet={handleReferenceSet(3)} />
        <Footer />
      </main>
      <BottomGradient />
    </div>
  );
};

export default Home;
