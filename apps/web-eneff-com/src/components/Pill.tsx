export const Pill = ({ title }: { readonly title: string }) => {
  return (
    <span className="px-3 py-1 text-xs border text-muted-foreground border-border rounded-full hover:text-foreground transition-colors duration-300">
      {title}
    </span>
  );
};
