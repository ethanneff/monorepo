import { JobCard } from './JobCard';

type ExperienceSectionProperties = {
  readonly onRefSet: (element: HTMLElement | null) => void;
};

type Job = {
  company: string;
  description: string;
  role: string;
  tech: string[];
  year: string;
};

const jobs: Job[] = [
  {
    company: 'Alto',
    description:
      'Led and launched a new React Native app for providers, migrated 4 web and mobile codebases into a single monorepo, and led cross-team platform upgrades. Empowered engineers while managing architecture vision across the organization.',
    role: 'Staff Software Engineer',
    tech: ['React Native', 'TypeScript', 'CI/CD', 'DDD'],
    year: '2020',
  },
  {
    company: 'Hinge Health',
    description:
      'Led a team of 8 while scaling the mobile organization from 3 to 20 engineers. Built the initial app infrastructure and created the sensor engine to render hundreds of SVG pose animations.',
    role: 'Tech Lead',
    tech: ['React Native', 'Redux', 'Apollo', 'GraphQL'],
    year: '2018',
  },
  {
    company: 'Branch',
    description:
      'Led the link service team to ship features, scale infrastructure, and maintain server requests. Rebuilt and maintained the Cordova and React Native SDKs.',
    role: 'Senior Software Engineer',
    tech: ['React', 'Redux', 'Java', 'Node'],
    year: '2016',
  },
  {
    company: 'BetterHelp',
    description:
      'Created the mobile app with Ionic/Cordova to increase new ad channel revenue by 24%. Created the REST API with PHP and the LEMP dev environment with Vagrant.',
    role: 'Lead Mobile Developer',
    tech: ['Ionic', 'Cordova', 'PHP', 'AWS S3'],
    year: '2015',
  },
];

export const ExperienceSection = ({
  onRefSet,
}: ExperienceSectionProperties) => {
  return (
    <section
      className="min-h-screen py-20 sm:py-32 opacity-0"
      id="work"
      ref={onRefSet}
    >
      <div className="space-y-12 sm:space-y-16">
        <div className="flex flex-row justify-between items-center gap-4">
          <h2 className="text-3xl sm:text-4xl font-light">Experience</h2>
          <div className="text-sm text-muted-foreground font-mono">
            2012 — {new Date().getFullYear()}
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {jobs.map((job) => (
            <JobCard
              company={job.company}
              description={job.description}
              key={job.company}
              role={job.role}
              tech={job.tech}
              year={job.year}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
