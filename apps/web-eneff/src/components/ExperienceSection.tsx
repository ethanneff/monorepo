import { JobCard } from './JobCard';

type ExperienceSectionProperties = {
  readonly onRefSet: (element: HTMLElement | null) => void;
};

type Job = {
  achievements: string[];
  company: string;
  role: string;
  tech: string[];
  year: string;
};

const jobs: Job[] = [
  {
    achievements: [
      'Led and launched a new React Native app for doctors',
      'Migrated 4 web and mobile codebases into a single monorepo',
      'Led cross-team platform upgrades including CI/CD, testing harnesses, and performance optimizations',
      'Led and built product features including a mobile storefront, AI chatbot, and recommendation engine',
      'Empowered engineers and set multi-year architecture vision across the organization',
    ],
    company: 'Alto',
    role: 'Staff Software Engineer',
    tech: ['React Native', 'NextJS', 'MonoRepo', 'CI/CD', 'DDD', 'Lean'],
    year: '2020',
  },
  {
    achievements: [
      'First React Native hire - transformed the original Android app to a cross-platform app',
      'Built and scaled the initial app infrastructure from 3 engineers to 50',
      'Led and developed dozens of features including the bluetooth sensor engine',
      'Led platform initiatives including release flow, quality control, and engineering excellence',
    ],
    company: 'Hinge Health',
    role: 'Tech Lead',
    tech: ['React Native', 'Redux', 'GraphQL', 'Bluetooth', 'CI/CD', 'Agile'],
    year: '2018',
  },
  {
    achievements: [
      'Rebuilt and maintained the Cordova and React Native SDKs',
      'Managed platform upgrades across hundreds of servers and billions of requests',
      'Contributed long tail support for hundreds of clients',
    ],
    company: 'Branch',
    role: 'Senior Software Engineer',
    tech: ['React Native', 'Cordova', 'PhoneGap', 'Ionic', 'Java', 'Node'],
    year: '2016',
  },
  {
    achievements: [
      'First engineering hire - built the Ionic/Cordova mobile app and API from scratch',
      'Created the LEMP dev environment with Vagrant to streamline and scale the engineering team',
      'Created the design system and component library to standardize the web and mobile codebases',
    ],
    company: 'BetterHelp',
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
              achievements={job.achievements}
              company={job.company}
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
