import {
  FaCode,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaServer,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
  SiPostgresql,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaReact className="text-5xl text-primary" />,
      skills: [
        { name: "React.js", icon: <FaReact />, level: 90 },
        { name: "Next.js", icon: <TbBrandNextjs />, level: 85 },
        { name: "TypeScript", icon: <SiTypescript />, level: 85 },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 90 },
      ],
    },
    {
      title: "Backend Development",
      icon: <FaNodeJs className="text-5xl text-primary" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 85 },
        { name: "Express.js", icon: <FaServer />, level: 85 },
        { name: "Prisma", icon: <SiPrisma />, level: 80 },
        { name: "REST APIs", icon: <FaCode />, level: 90 },
      ],
    },
    {
      title: "Database",
      icon: <FaDatabase className="text-5xl text-primary" />,
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql />, level: 80 },
        { name: "MongoDB", icon: <FaDatabase />, level: 85 },
      ],
    },
  ];

  return (
    <section className="section" id="skills">
      <div className="section-inner">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            Expertise in modern web technologies and frameworks
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="card hover-lift stagger-item">
              <div className="flex items-center gap-4 mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-text-primary">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2 text-text-secondary">
                        <span className="text-primary">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-sm text-text-tertiary">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-background-light rounded-full overflow-hidden">
                      <div
                        className="h-full gradient-primary rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
