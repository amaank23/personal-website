import { useGSAP } from "@gsap/react";
import { attentionColor, primaryColor } from "../../utils/utils";
import Navbar from "../Navbar/Navbar";
import PersonalImage from "./../../assets/personal-image.png";
import gsap from "gsap";
import Canvas from "./Canvas";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
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
      .to(".profile-container img, .line, .logo, .nav-menu", { opacity: 0, duration: 0.1 })
      .to(".profile-overflow", { overflow: "visible" })
      .to(".profile-container", { scale: percentIncrease, duration: 0.2 }, "<")
      
      .to(".hero-container", { backgroundColor: primaryColor, duration: 0.2 })
      .to(".profile-container", { opacity: 0, duration: 0.2 })
      .to(".logo, .nav-menu", { opacity: 0, yPercent: 110, duration: 0.1 })
      .to(".logo, .nav-menu", { yPercent: 0, opacity: 1, duration: 0.1 })

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
    <>
      <div className="canvas-container opacity-0">
        <Canvas />
      </div>
      <div
        className="w-full h-[100vh] hero-container"
        style={{ backgroundColor: primaryColor }}
      >
        <Navbar />
        <div className="w-full h-full flex justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="overflow-hidden profile-overflow">
              <div
                className="profile-container"
                style={{
                  backgroundColor: attentionColor,
                  borderRadius: "50%",
                  width: 147,
                  height: 147,
                }}
              >
                <img src={PersonalImage} alt="Profile Image" />
              </div>
            </div>
            <div className="pt-7 overflow-hidden relative">
              <span
                style={{ color: attentionColor }}
                className="text-[1.875em] text-center block line"
              >
                Hello!
              </span>
            </div>
            <div className="pt-7 overflow-hidden relative">
              <span className="text-white text-5xl font-bold pt-3 w-fit text-center  line block">
                I’m Aman,
              </span>
            </div>
            <div className="overflow-hidden relative">
              <span className="text-white text-5xl font-bold pt-3 text-center leading-[127%] line block">
                a Full Stack Developer
              </span>
            </div>
            <div className="pt-7 overflow-hidden relative">
              <p className="text-xl text-white pt-9 text-center line block">
                I develop websites and web apps
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
undefined;
