export const Pill = ({ title }: { readonly title: string }) => {
  return (
    <span className="text-muted-foreground border-border hover:text-foreground rounded-full border px-3 py-1 text-xs transition-colors duration-300">
      {title}
    </span>
  );
};
