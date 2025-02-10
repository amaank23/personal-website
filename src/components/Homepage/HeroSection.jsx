import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../../context/themeContext";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const themeContext = useContext(ThemeContext);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(".animate-text", {
        opacity: 0,
        y: 20,
      });

      // Main timeline
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
      });

      // Animate background
      tl.to(".gradient-bg-animate", {
        opacity: 1,
        duration: 1.5,
      })
        // Animate text elements
        .to(
          ".animate-text",
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
          },
          "-=1"
        )
        // Animate CTA and social links
        .to(
          [".hero-cta", ".social-links"],
          {
            opacity: 0.001, // Start from near-zero to trigger CSS animation
            duration: 0.1,
          },
          "-=0.5"
        );

      // Floating animation for background elements
      gsap.to(".floating-circle", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        duration: "random(3, 5)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: {
          amount: 1.5,
          from: "random",
        },
      });

      // Parallax effect on scroll
      gsap.to(".parallax-bg", {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] flex items-center overflow-hidden"
      id="home"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-0 gradient-bg-animate">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-background to-background-light opacity-80" />
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden parallax-bg">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`floating-circle absolute w-72 h-72 rounded-full blur-3xl opacity-30 
              ${i % 2 === 0 ? "bg-primary" : "bg-accent"}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="section-inner py-20 md:py-0 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <div className="mb-8">
            <h1 className="heading-1">
              <span className="gradient-text inline-block animate-text typewriter">
                Full-Stack Developer
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mb-6">
            <h2 className="heading-2 text-text-secondary animate-text fade-up">
              Building Modern Web Experiences
            </h2>
          </div>

          {/* Description */}
          <p className="body-large mb-12 max-w-2xl mx-auto animate-text fade-up">
            I craft scalable applications using React, Next.js, Node.js, and
            modern web technologies.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta flex flex-wrap justify-center gap-6 mb-12 opacity-0 animate-fade-in">
            <a
              href="#work"
              className="btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#contact"
              className="btn-outline group relative overflow-hidden"
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>

          {/* Social Links */}
          <div className="social-links flex justify-center gap-6 opacity-0 animate-fade-in">
            <a
              href="https://github.com/amaank23"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-text-secondary text-2xl transform transition-all duration-300 group-hover:text-primary group-hover:scale-125" />
            </a>
            <a
              href="https://www.linkedin.com/in/aman-reactjs-developer/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="text-text-secondary text-2xl transform transition-all duration-300 group-hover:text-primary group-hover:scale-125" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <FaArrowDown className="text-text-secondary animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
