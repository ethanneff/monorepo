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
      className="py-20 sm:py-32 opacity-0"
      id="connect"
      ref={onRefSet}
    >
      <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
        <div className="space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl font-light">
            Let&apos;s Connect
          </h2>

          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Always excited to connect on opportunities, collaborations, and
              conversations in technology and leadership.
            </p>
          </div>
        </div>

        <div className="space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
