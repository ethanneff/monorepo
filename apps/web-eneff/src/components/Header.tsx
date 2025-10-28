import { Pill } from '@/src/components/Pill';

type HeaderProperties = {
  readonly onRefSet: (element: HTMLElement | null) => void;
};

export const Header = ({ onRefSet }: HeaderProperties) => {
  const skills = ['React Native', 'React', 'GraphQL', 'Node', 'Go'];

  return (
    <header
      className="flex min-h-screen items-center opacity-0"
      id="intro"
      ref={onRefSet}
    >
      <div className="grid w-full gap-2 sm:gap-16 lg:grid-cols-5">
        <div className="space-y-6 sm:space-y-8 lg:col-span-3">
          <div className="space-y-3 sm:space-y-2">
            <div className="text-muted-foreground font-mono text-sm tracking-wider">
              PORTFOLIO / {new Date().getFullYear()}
            </div>
            <h1 className="text-5xl font-light tracking-tight sm:text-6xl lg:text-7xl">
              Ethan Neff
            </h1>
          </div>

          <div className="max-w-md space-y-6">
            <p className="text-muted-foreground text-foreground text-lg leading-relaxed sm:text-xl">
              Tech Lead with expertise in scaling mobile systems, building
              high-performing teams, and driving cross-functional strategic
              vision.
            </p>

            <div className="text-muted-foreground flex flex-row gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                Available for work
              </div>
              <div>Sunnyvale, CA</div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-end space-y-6 sm:space-y-8 lg:col-span-2 lg:mt-0">
          <div className="space-y-4">
            <div className="text-muted-foreground font-mono text-sm">
              CURRENTLY
            </div>
            <div className="space-y-2">
              <div className="text-foreground">Staff Software Engineer</div>
              <div className="text-muted-foreground">@ Alto</div>
              <div className="text-muted-foreground text-xs">
                2020 — Present
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-muted-foreground font-mono text-sm">FOCUS</div>
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
