import { ExperienceCard } from '@/src/components/ExperienceCard';

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
      'Led and launched a new React Native app for providers',
      'Migrated 4 web and mobile codebases into a single monorepo for code reusability across teams',
      'Led cross-team platform upgrades including feature flagging, CI/CD, testing harnesses, and performance optimizations',
      'Launched product features including a mobile storefront, AI chatbot, and recommendation engine',
      'Empowered engineers and set multiyear architecture vision across the organization',
    ],
    company: 'Alto',
    role: 'Staff Software Engineer',
    tech: ['React Native', 'NextJS', 'MonoRepo', 'CI/CD', 'DDD', 'Lean'],
    year: '2020',
  },
  {
    achievements: [
      'First React Native hire - transformed the original Android app to a cross-platform app',
      'Built and scaled the app infrastructure from 3 engineers to 50+',
      'Led and developed dozens of features including the bluetooth sensor engine, gamification, notifications, and group chat',
      'Led platform initiatives including observability, release flow, quality control, and engineering excellence',
    ],
    company: 'Hinge Health',
    role: 'Mobile Tech Lead',
    tech: ['React Native', 'Redux', 'GraphQL', 'BLE', 'CI/CD', 'Agile'],
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
    tech: ['Ionic', 'Cordova', 'PHP', 'AWS'],
    year: '2015',
  },
  {
    achievements: [
      'Built Organize - a iOS productivity app to help users manage their goals, tasks, and projects within Evernote',
      'Built Interval Tracker - a iOS app to help users track their interval training sessions',
      'Built Drag and Drop - a performant Swift library to drag, drop, and gesture nested list items',
    ],
    company: 'Self Employed',
    role: 'Solo Developer',
    tech: ['Objective C', 'Swift', 'Node'],
    year: '2013',
  },
  {
    achievements: [
      'Dual Major in Management Information Systems and Computer Science - 3.7 GPA',
    ],
    company: 'University of Texas, Austin',
    role: 'Student',
    tech: ['C#', 'Python', 'Java', 'SQL'],
    year: '2013',
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
            {new Date().getFullYear() - 2012} years
          </div>
        </div>

        <div className="space-y-8 sm:space-y-12">
          {jobs.map((job) => (
            <ExperienceCard
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
