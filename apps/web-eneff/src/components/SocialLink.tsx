import Link from 'next/link';

type SocialLinkProperties = {
  readonly handle: string;
  readonly name: string;
  readonly url: string;
};

export const SocialLink = ({ handle, name, url }: SocialLinkProperties) => {
  return (
    <Link
      className="group border-border hover:border-muted-foreground/50 rounded-lg border p-4 transition-all duration-300 hover:shadow-sm"
      href={url}
    >
      <div className="space-y-2">
        <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
          {name}
        </div>
        <div className="text-muted-foreground text-sm">{handle}</div>
      </div>
    </Link>
  );
};
