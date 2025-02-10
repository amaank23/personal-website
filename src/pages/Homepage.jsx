import React from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import HeroSection from "../components/Homepage/HeroSection";
import AboutSection from "../components/Homepage/AboutSection";
import { onStartAnimation, initScrollAnimations } from "../utils/utils";
import Navbar from "../components/Navbar/Navbar";
import WorkSection from "../components/Homepage/WorkSection";
import ContactSection from "../components/Homepage/ContactSection";
import SkillsSection from "../components/Homepage/SkillsSection";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  useGSAP(() => {
    try {
      onStartAnimation(gsap);
      initScrollAnimations(gsap); // Pass gsap as argument
    } catch (error) {
      console.error("GSAP animation error:", error);
    }
  }, []); // Add empty dependency array

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <WorkSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default Homepage;
