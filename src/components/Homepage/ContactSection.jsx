import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { themeObject } from "../../utils/utils";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  const themeContext = useContext(ThemeContext);

  const contactMethods = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      value: "amaanwaseem24@gmail.com",
      href: "mailto:amaanwaseem24@hotmail.com",
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: "GitHub",
      value: "github.com/amaank23",
      href: "https://github.com/amaank23",
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      label: "LinkedIn",
      value: "linkedin.com/in/aman-reactjs-developer",
      href: "https://linkedin.com/in/aman-reactjs-developer",
    },
  ];

  return (
    <section className="section" id="contact">
      <div className="section-inner">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <p className="body-large max-w-2xl mx-auto">
              Let's discuss your project or just have a coffee and chat!
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card group hover:border-primary/20 text-center"
              >
                <div className="mb-4 text-primary group-hover:scale-110 transition-transform">
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {method.label}
                </h3>
                <p className="text-text-secondary text-sm">{method.value}</p>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="mailto:amaanwaseem24@gmail.com"
              className="btn-primary inline-flex items-center gap-2"
            >
              <FaEnvelope />
              <span>Send Message</span>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-text-tertiary/10 text-center">
        <p className="text-text-secondary">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
