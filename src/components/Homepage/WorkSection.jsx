import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Ecommerce from "./../../assets/work-1.png";
import LMS from "./../../assets/work-2.webp";
const WorkSection = () => {
  const projects = [
    {
      title: "E-commerce Platform with Admin Portal",
      description:
        "A full-featured e-commerce platform with an integrated admin portal for product management, order tracking, and user analytics. The platform supports secure authentication, dynamic product listings, a seamless checkout process, and payment gateway integration. The admin dashboard enables efficient inventory control and order fulfillment.",
      image: Ecommerce,
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "Paypal",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/amaank23/ecommerce-platform",
      liveUrl: "",
    },
    {
      title: "LMS (Learning Management System)",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: LMS,
      technologies: ["Next js", "Postgres", "Shadcn", "Tailwind css"],
      githubUrl: "https://github.com/amaank23/lms-platform",
      liveUrl: "",
    },
  ];

  return (
    <section className="section" id="work">
      <div className="section-inner">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="body-large max-w-3xl mx-auto">
            A collection of projects that showcase my expertise in full-stack
            development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative group overflow-hidden rounded-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="py-3 bg-[#4e47e53b] w-full h-[300px] object-contain rounded-xl transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-2xl font-bold text-text-primary">
                  {project.title}
                </h3>
                <p className="text-text-secondary">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full glass-effect text-primary-light border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline !px-4 !py-2 inline-flex items-center gap-2"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary !px-4 !py-2 inline-flex items-center gap-2"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/amaank23"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <FaGithub />
            <span>View More Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
