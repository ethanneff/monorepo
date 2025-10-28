'use client';

import { useCallback } from 'react';

type NavigationProperties = {
  readonly activeSection: string;
  readonly sections: string[];
};

export const Navigation = ({
  activeSection,
  sections,
}: NavigationProperties) => {
  const scrollToSection = useCallback((section: string) => {
    document
      .querySelector(`#${section}`)
      ?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleClick = useCallback(
    (section: string) => () => {
      scrollToSection(section);
    },
    [scrollToSection],
  );

  return (
    <nav className="fixed top-1/2 left-8 z-10 -translate-y-1/2 max-lg:hidden">
      <div className="flex flex-col gap-4">
        {sections.map((section) => (
          <button
            aria-label={`Navigate to ${section}`}
            className={`h-8 w-2 rounded-full transition-all duration-500 ${
              activeSection === section
                ? 'bg-foreground'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
            }`}
            key={section}
            onClick={handleClick(section)}
            type="button"
          />
        ))}
      </div>
    </nav>
  );
};
