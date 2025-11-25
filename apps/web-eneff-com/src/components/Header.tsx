import { Pill } from '@/src/components/Pill';

type HeaderProperties = {
  readonly onRefSet: (element: HTMLElement | null) => void;
};

export const Header = ({ onRefSet }: HeaderProperties) => {
  const skills = ['React Native', 'React', 'GraphQL', 'Node', 'Go'];

  return (
    <header
      className="min-h-screen flex items-center"
      id="intro"
      ref={onRefSet}
    >
      <div className="grid lg:grid-cols-5 gap-2 sm:gap-16 w-full">
        <div className="lg:col-span-3 space-y-6 sm:space-y-8">
          <div className="space-y-3 sm:space-y-2">
            <div className="text-sm text-muted-foreground font-mono tracking-wider">
              PORTFOLIO / {new Date().getFullYear()}
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
              Ethan Neff
            </h1>
          </div>

          <div className="space-y-6 max-w-md">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed text-foreground">
              Tech Lead with expertise in scaling mobile systems, building
              high-performing teams, and driving cross-functional strategic
              vision.
            </p>

            <div className="flex flex-row gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for work
              </div>
              <div>Sunnyvale, CA</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 flex flex-col justify-end space-y-6 sm:space-y-8 mt-8 lg:mt-0">
          <div className="space-y-4">
            <div className="text-sm text-muted-foreground font-mono">
              CURRENTLY
            </div>
            <div className="space-y-2">
              <div className="text-foreground">Staff Software Engineer</div>
              <div className="text-muted-foreground">@ Alto</div>
              <div className="text-xs text-muted-foreground">
                2020 — Present
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-sm text-muted-foreground font-mono">FOCUS</div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Pill
                  key={skill}
                  title={skill}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
