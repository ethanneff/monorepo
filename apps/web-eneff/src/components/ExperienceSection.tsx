import { ExperienceCard } from '@/src/components/ExperienceCard';

type Experience = {
  achievements: string[];
  company: string;
  location: string;
  role: string;
  tech: string[];
  year: string;
};

type ExperienceSectionProperties = {
  readonly onRefSet: (element: HTMLElement | null) => void;
};
const experiences: Experience[] = [
  {
    achievements: [
      'Led a team to launch a new React Native app for providers.',
      'Consolidated multiple web and mobile codebases into a single monorepo, improving collaboration, code sharing, and release flow.',
      'Directed platform upgrades for feature flags, CI/CD, testing harnesses, and performance optimization.',
      'Delivered major product features including a mobile storefront, AI chatbot, and recommendation engine.',
      'Defined a multi-year architecture vision using React Native and Next.js, mentoring engineers and driving technical alignment.',
    ],
    company: 'Alto Pharmacy',
    location: 'San Francisco, CA',
    role: 'Staff Software Engineer',
    tech: [
      'React Native',
      'Next.js',
      'Monorepo',
      'CI/CD',
      'DDD',
      'DORA',
      'Lean',
    ],
    year: '2020',
  },
  {
    achievements: [
      'Transformed the original Android app into a cross-platform application as the first React Native engineer.',
      'Scaled the mobile architecture from 3 to 40+ engineers with modular design and shared libraries.',
      'Delivered core product features including Bluetooth sensor integrations, gamification, notifications, and group chat.',
      'Led mobile initiatives in observability, testing, release automation, and overall engineering quality.',
    ],
    company: 'Hinge Health',
    location: 'San Francisco, CA',
    role: 'Mobile Tech Lead',
    tech: [
      'React Native',
      'Redux',
      'GraphQL',
      'Bluetooth/BLE',
      'CI/CD',
      'Agile',
    ],
    year: '2018',
  },
  {
    achievements: [
      'Rebuilt and maintained the Cordova and React Native SDKs used across hundreds of client applications.',
      'Shipped deep linking upgrades while maintaining reliability and compatibility for billions of requests.',
      'Provided long-term SDK support to ensure integration stability and developer productivity.',
    ],
    company: 'Branch',
    location: 'Palo Alto, CA',
    role: 'Senior Software Engineer',
    tech: [
      'React Native',
      'Cordova',
      'Ionic',
      'Java',
      'Node.js',
      'Android',
      'iOS',
    ],
    year: '2016',
  },
  {
    achievements: [
      'Joined as the first engineering hire and built the Ionic/Cordova mobile app and REST API from the ground up.',
      'Developed a Vagrant-based LEMP environment to streamline development and onboarding of new engineers.',
      'Created a design system and shared component library for web and mobile consistency.',
    ],
    company: 'BetterHelp',
    location: 'Sunnyvale, CA',
    role: 'Lead Mobile Developer',
    tech: ['Ionic', 'Cordova', 'PHP', 'AWS', 'MySQL'],
    year: '2015',
  },
  {
    achievements: [
      'Built Organize — an iOS productivity app for goal and task management integrated with Evernote.',
      'Built Interval Tracker — an iOS fitness app for interval training and health tracking.',
      'Developed Drag and Drop — a Swift library enabling nested gesture and drag-and-drop interactions.',
    ],
    company: 'Self Employed',
    location: 'Austin, TX',
    role: 'Solo Developer',
    tech: ['Swift', 'Objective-C', 'iOS', 'Node.js', 'Git'],
    year: '2013',
  },
  {
    achievements: [
      'Graduated with dual majors in Management Information Systems and Computer Science (GPA: 3.7).',
    ],
    company: 'University of Texas, Austin',
    location: 'Austin, TX',
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
          {experiences.map(({ achievements, company, role, tech, year }) => (
            <ExperienceCard
              achievements={achievements}
              company={company}
              key={company}
              role={role}
              tech={tech}
              year={year}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
