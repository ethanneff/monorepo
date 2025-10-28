import { SocialLink } from './SocialLink';

type ConnectSectionProperties = {
  readonly onRefSet: (element: HTMLElement | null) => void;
};

const socials = [
  {
    handle: '@ethanneff',
    name: 'GitHub',
    url: 'https://github.com/ethanneff',
  },
  {
    handle: '@ethanneff',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/ethanneff',
  },
  {
    handle: '@ethanneff',
    name: 'Twitter',
    url: 'https://x.com/ethanneff',
  },
  {
    handle: '@eneff.com',
    name: 'Email',
    url: 'mailto:ethan.t.neff@gmail.com',
  },
];

export const ConnectSection = ({ onRefSet }: ConnectSectionProperties) => {
  return (
    <section
      className="py-20 opacity-0 sm:py-32"
      id="connect"
      ref={onRefSet}
    >
      <div className="grid gap-12 sm:gap-16 lg:grid-cols-2">
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl font-light sm:text-4xl">
            Let&apos;s Connect
          </h2>

          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed sm:text-xl">
              Always excited to connect on opportunities, collaborations, and
              conversations in technology and leadership.
            </p>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {socials.map((social) => (
              <SocialLink
                handle={social.handle}
                key={social.name}
                name={social.name}
                url={social.url}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
