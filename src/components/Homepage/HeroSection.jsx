import { useGSAP } from "@gsap/react";
import { attentionColor, primaryColor } from "../../utils/utils";
import Navbar from "../Navbar/Navbar";
import PersonalImage from "./../../assets/personal-image.png";
import gsap from "gsap";
import Canvas from "./Canvas";

const HeroSection = () => {
  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline
      .from(".line", { yPercent: 100, stagger: 0.5 })
      .from(".nav-menu", { yPercent: 110 })
      .from(".logo", { yPercent: 110 }, "<")
      .to(".canvas-container", { opacity: 1 })
      .to(".hero-container", { backgroundColor: 'transparent' }, "<")
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
            <div className="overflow-hidden">
              <img src={PersonalImage} alt="Profile Image" className="line" />
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
