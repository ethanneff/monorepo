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
      'Led and launched a new React Native provider app, while establishing mobile foundations across the organization.',
      'Consolidated 4 web/mobile codebases into a single monorepo, reducing duplicated code and accelerating cross-team reuse.',
      'Drove platform upgrades including feature flags, CI/CD, test harnesses, and perf work, cutting build times and flaky tests.',
      'Shipped product initiatives including a mobile storefront, AI chatbot, and a recommendation engine.',
      'Set multi-year architecture vision and mentored engineers across org, unblocking roadmap delivery.',
    ],
    company: 'Alto',
    role: 'Staff Software Engineer',
    tech: ['React Native', 'NextJS', 'MonoRepo', 'CI/CD', 'DDD', 'Lean'],
    year: '2020',
  },
  {
    achievements: [
      'First React Native hire; transformed a native Android app into a cross-platform app used by millions of users.',
      'Scaled mobile infra from 3 to 50+ engineers with reliable tooling, standards, and modular architecture.',
      'Built core features including the Bluetooth sensor engine, gamification, notifications, and group chat.',
      'Led platform initiatives for observability, release flow, quality gates, and engineering excellence.',
    ],
    company: 'Hinge Health',
    role: 'Mobile Tech Lead',
    tech: ['React Native', 'Redux', 'GraphQL', 'BLE', 'CI/CD', 'Agile'],
    year: '2018',
  },
  {
    achievements: [
      'Rebuilt and maintained Cordova and React Native SDKs used by hundreds of apps.',
      'Coordinated platform upgrades across hundreds of servers handling billions of requests.',
      'Provided long-tail support for hundreds of clients, reducing integration time to hours.',
    ],
    company: 'Branch',
    role: 'Senior Software Engineer',
    tech: ['React Native', 'Cordova', 'PhoneGap', 'Ionic', 'Java', 'Node'],
    year: '2016',
  },
  {
    achievements: [
      'First engineering hire; built the Ionic/Cordova mobile app and REST API from scratch to first revenue.',
      'Created a LEMP dev environment with Vagrant, cutting onboarding time and standardizing builds.',
      'Designed a component library/design system to unify web and mobile, speeding feature delivery.',
    ],
    company: 'BetterHelp',
    role: 'Lead Mobile Developer',
    tech: ['Ionic', 'Cordova', 'PHP', 'AWS'],
    year: '2015',
  },
  {
    achievements: [
      'Built Organize — an iOS productivity app that managed goals/tasks/projects/notes within Evernote.',
      'Built Interval Tracker — an iOS app for interval training with custom timers and analytics.',
      'Published Drag and Drop — a performant Swift library for reordering nested list items with gestures.',
    ],
    company: 'Self Employed',
    role: 'Solo Developer',
    tech: ['Objective C', 'Swift', 'Node'],
    year: '2013',
  },
  {
    achievements: [
      'Dual major in Management Information Systems and Computer Science; GPA 3.7.',
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
