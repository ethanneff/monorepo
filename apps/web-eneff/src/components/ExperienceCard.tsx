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
    <div className="group border-border/50 hover:border-border grid gap-4 border-b py-6 transition-colors duration-500 sm:gap-8 sm:py-8 lg:grid-cols-16">
      <div className="lg:col-span-2">
        <div className="text-muted-foreground group-hover:text-foreground text-xl font-light transition-colors duration-300 sm:text-2xl">
          {year}
        </div>
      </div>

      <div className="space-y-3 lg:col-span-10">
        <div>
          <h3 className="text-lg font-medium sm:text-xl">{role}</h3>
          <div className="text-muted-foreground">{company}</div>
        </div>
        <ul className="text-muted-foreground max-w-lg space-y-2.5 text-sm leading-relaxed">
          {achievements.map((achievement) => (
            <li
              className="group/item hover:text-foreground flex gap-2 transition-colors duration-300"
              key={achievement}
            >
              <span>•</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap content-start items-start justify-start gap-2 lg:col-span-4 lg:justify-end">
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
