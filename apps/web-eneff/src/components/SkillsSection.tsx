import { SkillCard } from './SkillCard';

type Skill = {
  category: string;
  excerpt: string;
  title: string;
};

type SkillsSectionProperties = {
  readonly onRefSet: (element: HTMLElement | null) => void;
};

const skills: Skill[] = [
  {
    category: 'Foundation',
    excerpt: 'Javascript, SQL, Git, REST APIs, mobile and web development',
    title: 'Core Technologies (10+ years)',
  },
  {
    category: 'Specialization',
    excerpt:
      'React Native, React, Redux, Jest, Agile, Lean, AB testing, TypeScript',
    title: 'Mobile & Frontend (5+ years)',
  },
  {
    category: 'Backend & Native',
    excerpt:
      'Swift, Objective-C, GraphQL, Node, Java, Cordova, Ionic, Fastlane, Redis, Rails',
    title: 'Full Stack (3+ years)',
  },
  {
    category: 'Infrastructure',
    excerpt:
      'Docker, K8s, Nginx, SEO, WCAG 2.1, Photoshop, Python, Bash, Next.js',
    title: 'DevOps & Tools (2+ years)',
  },
];

export const SkillsSection = ({ onRefSet }: SkillsSectionProperties) => {
  return (
    <section
      className="min-h-screen py-20 opacity-0 sm:py-32"
      id="thoughts"
      ref={onRefSet}
    >
      <div className="space-y-12 sm:space-y-16">
        <h2 className="text-3xl font-light sm:text-4xl">Skills & Expertise</h2>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {skills.map((skill) => (
            <SkillCard
              category={skill.category}
              excerpt={skill.excerpt}
              key={skill.title}
              title={skill.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
