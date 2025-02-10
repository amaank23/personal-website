import React, { useContext } from "react";
import { themeObject } from "../../utils/utils";
import { ThemeContext } from "../../context/themeContext";
import { FaCode, FaServer, FaDatabase, FaLaptopCode } from "react-icons/fa";

const AboutSection = () => {
  const themeContext = useContext(ThemeContext);

  const services = [
    {
      icon: (
        <FaLaptopCode className="text-5xl text-primary group-hover:text-white transition-colors" />
      ),
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces using React.js, Next.js, and TypeScript with modern UI libraries.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: (
        <FaServer className="text-5xl text-primary group-hover:text-white transition-colors" />
      ),
      title: "Backend Development",
      description:
        "Developing robust server-side applications with Node.js, Express, and modern backend frameworks.",
      technologies: ["Node.js", "Express", "Prisma", "TypeORM"],
    },
    {
      icon: (
        <FaDatabase className="text-5xl text-primary group-hover:text-white transition-colors" />
      ),
      title: "Database Design",
      description:
        "Designing and implementing efficient database structures using both SQL and NoSQL databases.",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-dark">
        <div className="absolute inset-0 opacity-30 bg-[url('/grid.svg')]" />
      </div>

      {/* Glowing Orb */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-pulse" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                About Me
              </span>
            </h2>
            <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto">
              A passionate Full Stack Developer with expertise in modern web
              technologies, focused on creating efficient and scalable
              applications.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-2xl glass-effect hover:bg-primary/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-text-primary">
                  {service.title}
                </h3>
                <p className="text-text-secondary mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "4+", label: "Years Experience" },
              { number: "20+", label: "Projects Completed" },
              { number: "10+", label: "Tech Stack" },
              { number: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center p-6 rounded-xl glass-effect"
              >
                <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-text-secondary text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
