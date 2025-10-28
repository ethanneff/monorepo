type SkillCardProperties = {
  readonly category: string;
  readonly excerpt: string;
  readonly title: string;
};

export const SkillCard = ({
  category,
  excerpt,
  title,
}: SkillCardProperties) => {
  return (
    <article className="group border-border hover:border-muted-foreground/50 rounded-lg border p-6 transition-all duration-500 hover:shadow-lg sm:p-8">
      <div className="space-y-4">
        <div className="text-muted-foreground flex items-center justify-between font-mono text-xs">
          <span>{category}</span>
        </div>
        <h3 className="group-hover:text-muted-foreground text-lg font-medium transition-colors duration-300 sm:text-xl">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{excerpt}</p>
      </div>
    </article>
  );
};
