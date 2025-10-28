import { useCallback, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export const Footer = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = useCallback(() => {
    setIsDark((previousIsDark) => {
      document.documentElement.classList.toggle('dark', !previousIsDark);
      return !previousIsDark;
    });
  }, []);

  return (
    <footer className="border-border border-t py-12 sm:py-16">
      <div className="flex flex-row items-center items-start justify-between gap-6 sm:gap-8">
        <div className="space-y-2">
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ethan Neff. All rights reserved.
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle
            isDark={isDark}
            onToggle={toggleTheme}
          />
        </div>
      </div>
    </footer>
  );
};
