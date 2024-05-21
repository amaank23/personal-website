import React from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import HeroSection from "../components/Homepage/HeroSection";
import AboutSection from "../components/Homepage/AboutSection";
import { primaryColor } from "../utils/utils";
import Canvas from "../components/Homepage/Canvas";
import Navbar from "../components/Navbar/Navbar";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

gsap.registerPlugin(ScrollTrigger);
const Homepage = () => {
  useGSAP(() => {
    Math.getDistance = function (x1, y1, x2, y2) {
      var xs = x2 - x1,
        ys = y2 - y1;
      xs *= xs;
      ys *= ys;
      return Math.sqrt(xs + ys);
    };

    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;
    let radius = Math.getDistance(0, 0, centerX, centerY);
    let fullWidth = radius * 2;
    let percentIncrease = fullWidth / 100;

    const timeline = gsap.timeline({ onComplete: scrollFunction });
    timeline
      .from(".line, .profile-container img", {
        yPercent: 100,
        stagger: { each: 0.2 },
      })
      .from(".nav-menu", { yPercent: 110 })
      .from(".logo", { yPercent: 110 }, "<")
      .to(".canvas-container", { opacity: 1 })
      .to(".hero-container", { backgroundColor: "transparent" });

    const profileTimeline = gsap
      .timeline({ paused: true })
      .addLabel("hero-section")
      .to(".profile-container img, .line, .logo, .nav-menu", {
        opacity: 0,
        duration: 0.1,
      })
      .to(".profile-overflow", { overflow: "visible" })
      .to(".profile-container", { scale: percentIncrease, duration: 0.2 }, "<")

      .to(".hero-container", { backgroundColor: primaryColor, duration: 0.2 })
      .to(".hero", { opacity: 0, duration: 0.2 })
      .to(".hero", { xPercent: 100, duration: 0.2 })
      .to(".line, .logo, .nav-menu", {
        opacity: 1,
        duration: 0.1,
      })
      .addLabel("about-section");

    function scrollFunction() {
      ScrollTrigger.create({
        trigger: ".hero",
        animation: profileTimeline,
        start: "top top",
        pin: true,
        scrub: 1,
        snap: {
          snapTo: "labelsDirectional",
          duration: 1,
          delay: 0.01,
        },
        onSnapComplete: () => {
          gsap.to(window, { scrollTo: ".about", duration: 0.2 });
        },
      });
    }
  });
  return (
    <div>
      <Navbar />
      <div className="canvas-container opacity-0">
        <Canvas />
      </div>
      <HeroSection />
      <AboutSection />
    </div>
  );
};

export default Homepage;
