import Link from 'next/link';

type SocialLinkProperties = {
  readonly handle: string;
  readonly name: string;
  readonly url: string;
};

export const SocialLink = ({ handle, name, url }: SocialLinkProperties) => {
  return (
    <Link
      className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
      href={url}
    >
      <div className="space-y-2">
        <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
          {name}
        </div>
        <div className="text-sm text-muted-foreground">{handle}</div>
      </div>
    </Link>
  );
};
