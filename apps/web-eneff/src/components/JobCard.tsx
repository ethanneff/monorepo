type JobCardProperties = {
  readonly company: string;
  readonly description: string;
  readonly role: string;
  readonly tech: string[];
  readonly year: string;
};

export const JobCard = ({
  company,
  description,
  role,
  tech,
  year,
}: JobCardProperties) => {
  return (
    <div className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50 hover:border-border transition-colors duration-500">
      <div className="lg:col-span-2">
        <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
          {year}
        </div>
      </div>

      <div className="lg:col-span-6 space-y-3">
        <div>
          <h3 className="text-lg sm:text-xl font-medium">{role}</h3>
          <div className="text-muted-foreground">{company}</div>
        </div>
        <p className="text-muted-foreground leading-relaxed max-w-lg">
          {description}
        </p>
      </div>

      <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
        {tech.map((item) => (
          <div
            className="px-2 py-1 text-xs text-muted-foreground rounded group-hover:border-muted-foreground/50 transition-colors duration-500"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
