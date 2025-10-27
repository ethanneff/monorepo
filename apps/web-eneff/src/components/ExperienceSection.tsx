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
      'Led and launched a new React Native app for providers.',
      'Migrated four web and mobile codebases into a single monorepo to improve code reusability across teams.',
      'Led cross-team platform upgrades, including feature flagging, CI/CD, testing harnesses, and performance optimizations.',
      'Launched major product features, such as a mobile storefront, AI chatbot, and recommendation engine.',
      'Empowered engineers and established a multi-year architectural vision across the organization.',
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
      'Served as the first React Native hire and transformed the original Android app into a cross-platform application.',
      'Built and scaled the app infrastructure from three engineers to more than fifty.',
      'Led the development of dozens of features, including the Bluetooth sensor engine, gamification, notifications, and group chat.',
      'Directed platform initiatives focused on observability, release flow, quality control, and engineering excellence.',
    ],
    company: 'Hinge Health',
    location: 'San Francisco, CA',
    role: 'Mobile Tech Lead',
    tech: ['React Native', 'Redux', 'GraphQL', 'BLE', 'CI/CD', 'Agile'],
    year: '2018',
  },
  {
    achievements: [
      'Rebuilt and maintained the Cordova and React Native SDKs.',
      'Managed platform upgrades across hundreds of servers handling billions of requests.',
      'Provided long-tail support for hundreds of clients, improving integration stability and response times.',
    ],
    company: 'Branch',
    location: 'Palo Alto, CA',
    role: 'Senior Software Engineer',
    tech: ['React Native', 'Cordova', 'PhoneGap', 'Ionic', 'Java', 'Node.js'],
    year: '2016',
  },
  {
    achievements: [
      'Joined as the first engineering hire and built the Ionic/Cordova mobile app and API from scratch.',
      'Developed a LEMP development environment using Vagrant to streamline workflows and scale the engineering team.',
      'Created a design system and component library to standardize the web and mobile codebases.',
    ],
    company: 'BetterHelp',
    location: 'Sunnyvale, CA',
    role: 'Lead Mobile Developer',
    tech: ['Ionic', 'Cordova', 'PHP', 'AWS'],
    year: '2015',
  },
  {
    achievements: [
      'Built Organize — an iOS productivity app that helps users manage goals, tasks, and projects within Evernote.',
      'Built Interval Tracker — an iOS app that helps users track their interval training sessions.',
      'Built Drag and Drop — a high-performance Swift library enabling drag, drop, and gesture support for nested list items.',
    ],
    company: 'Self Employed',
    location: 'Austin, TX',
    role: 'Solo Developer',
    tech: ['Objective-C', 'Swift', 'Node.js', 'Git'],
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
