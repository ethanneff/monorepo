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
    <article className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg">
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
          <span>{category}</span>
        </div>
        <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{excerpt}</p>
      </div>
    </article>
  );
};
