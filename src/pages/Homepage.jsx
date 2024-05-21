import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import HeroSection from "../components/Homepage/HeroSection";
import AboutSection from "../components/Homepage/AboutSection";
import { onStartAnimation, primaryColor } from "../utils/utils";
import Canvas from "../components/Homepage/Canvas";
import Navbar from "../components/Navbar/Navbar";
import { Observer } from "gsap/Observer";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import WorkSection from "../components/Homepage/WorkSection";
import ContactSection from "../components/Homepage/ContactSection";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);
gsap.registerPlugin(ScrollToPlugin);

const Homepage = () => {
  const currentSection = useRef(0);
  const animating = useRef(false);

  useGSAP(() => {
    const sections = document.querySelectorAll("section");
    console.log(sections);
    onStartAnimation(gsap);
    Observer.create({
      target: window,
      wheelSpeed: -1,
      type: "wheel,touch",
      onUp: () => {
        if (
          currentSection.current < sections.length - 1 &&
          !animating.current
        ) {
          goToSection(1);
        }
      },
      onDown: () => {
        console.log(sections.length);
        if (currentSection.current > 0 && !animating.current) goToSection(-1);
      },
    });
    // function next() {
    //   gsap.to(window, {
    //     duration: 2,
    //     scrollTo: window.innerHeight * currentSection.current,
    //   });
    //   currentSection.current += 1;
    // }

    // function previous() {
    //   gsap.to(window, {
    //     duration: 2,
    //     scrollTo: window.innerHeight * (currentSection.current - 2),
    //   });
    //   currentSection.current -= 1;
    // }
    function goToSection(direction) {
      animating.current = true;
      const currentIndex = currentSection.current;
      const index = direction === 1 ? currentIndex + 1 : currentIndex - 1;

      const timeline = gsap
        .timeline({ onComplete: () => (animating.current = false) })
        .to(sections[currentIndex], {
          yPercent: direction === 1 ? -100 : 100,
          ease: "power2",
        })
        .fromTo(
          sections[index],
          { yPercent: direction === 1 ? 100 : -100 },
          { yPercent: 0 },
          "<"
        )
        .to(sections[index], { visibility: "visible" }, "<")
        .to(sections[currentIndex], { visibility: "hidden", ease: "power2" });
      currentSection.current = index;
    }
  });
  return (
    <div>
      <div className="canvas-container opacity-0">
        <Canvas />
      </div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </div>
  );
};

export default Homepage;
