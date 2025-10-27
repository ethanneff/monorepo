import { Pill } from '@/src/components/Pill';

type Properties = {
  readonly achievements: string[];
  readonly company: string;
  readonly role: string;
  readonly tech: string[];
  readonly year: string;
};

export const ExperienceCard = ({
  achievements,
  company,
  role,
  tech,
  year,
}: Properties) => {
  return (
    <div className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500">
      <div className="lg:col-span-2">
        <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-300">
          {year}
        </div>
      </div>

      <div className="lg:col-span-7 space-y-3">
        <div>
          <h3 className="text-lg sm:text-xl font-medium">{role}</h3>
          <div className="text-muted-foreground">{company}</div>
        </div>
        <ul className="text-sm text-muted-foreground leading-relaxed max-w-lg space-y-2.5">
          {achievements.map((achievement) => (
            <li
              className="flex gap-2 group/item hover:text-foreground transition-colors duration-300"
              key={achievement}
            >
              <span>•</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:col-span-3 flex flex-wrap lg:flex-col gap-2 items-end">
        {tech.map((item) => (
          <Pill
            key={item}
            title={item}
          />
        ))}
      </div>
    </div>
  );
};
