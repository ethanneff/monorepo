import { useCallback, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

export const Footer = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = useCallback(() => {
    setIsDark((previousIsDark) => {
      document.documentElement.classList.toggle('dark', !previousIsDark);
      return !previousIsDark;
    });
  }, []);

  return (
    <footer className="py-12 sm:py-16 border-t border-border">
      <div className="flex flex-row justify-between items-start items-center gap-6 sm:gap-8">
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground">
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
