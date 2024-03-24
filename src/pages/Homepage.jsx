import React from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import HeroSection from "../components/Homepage/HeroSection";
import AboutSection from "../components/Homepage/AboutSection";
import { primaryColor } from "../utils/utils";
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
      .to(".profile-container img, .line, .logo, .nav-menu", {
        opacity: 0,
        duration: 0.1,
      })
      .to(".profile-overflow", { overflow: "visible" })
      .to(".profile-container", { scale: percentIncrease, duration: 0.2 }, "<")

      .to(".hero-container", { backgroundColor: primaryColor, duration: 0.2 })
      .to(".profile-container", { opacity: 0, duration: 0.2 })
      .to(".logo, .nav-menu", { opacity: 0, yPercent: 110, duration: 0.1 })
      .to(".logo, .nav-menu", { yPercent: 0, opacity: 1, duration: 0.1 })
      .to(".hero", { display: "none" });

    function scrollFunction() {
      ScrollTrigger.create({
        trigger: ".hero-container",
        animation: profileTimeline,
        start: "top top",
        pin: true,
        scrub: 2,
      });
    }
  });
  return (
    <div>
      <HeroSection />
      {/* <AboutSection /> */}
    </div>
  );
};

export default Homepage;
