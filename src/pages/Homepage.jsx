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
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Observer);
gsap.registerPlugin(ScrollToPlugin);

const Homepage = () => {
  const currentSection = useRef(0);
  const animating = useRef(false);

  useGSAP(() => {
    const sections = document.querySelectorAll("section");
    // onStartAnimation(gsap);
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
        if (currentSection.current > 0 && !animating.current) goToSection(-1);
      },
    });
  });
  function goToSection(direction) {
    const sections = document.querySelectorAll("section");
    animating.current = true;
    const currentIndex = currentSection.current;
    const index = direction === 1 ? currentIndex + 1 : currentIndex - 1;

    gsap
      .timeline({
        onComplete: () => {
          animating.current = false;
        },
      })
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
  function onClickNavigate(gotToSectionIndex) {
    const currentSectionIndex = currentSection.current;
    const direction = gotToSectionIndex - currentSectionIndex;
    const noOfMovement = Math.abs(direction);
    if (direction === 0) return;
    animating.current = true;
    for (let i = 0; i < noOfMovement; i++) {
      goToSection(direction > 0 ? 1 : -1);
    }
    animating.current = false;
  }
  return (
    <div className="bg-black">
      {/* <div className="canvas-container opacity-0">
        <Canvas />
      </div> */}
      <Navbar onClickNavigate={onClickNavigate} />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </div>
  );
};

export default Homepage;
