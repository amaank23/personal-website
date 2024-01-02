import { useGSAP } from "@gsap/react";
import { attentionColor, primaryColor } from "../../utils/utils";
import Navbar from "../Navbar/Navbar";
import PersonalImage from "./../../assets/personal-image.png";
import gsap from "gsap";

const HeroSection = () => {
  useGSAP(() => {
    gsap.from(".line", { y: 100,  stagger: 0.5 });
  });
  return (
    <div className="w-full h-[100vh]" style={{ backgroundColor: primaryColor }}>
      <Navbar />
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col items-center">
          <img src={PersonalImage} alt="Profile Image" />
          <div className="pt-7 overflow-hidden relative h-[70px] w-full">
            <span
              style={{ color: attentionColor }}
              className="text-[1.875em] text-center absolute line left-[50%] translate-x-[-50%]"
            >
              Hello!
            </span>
          </div>
          <div className="pt-7 overflow-hidden relative h-[100px] w-screen">
            <span className="text-white text-5xl font-bold pt-3 w-fit text-center leading-[127%] absolute left-[50%] translate-x-[-50%] line">
              I’m Aman,
            </span>
          </div>
          <div className="overflow-hidden relative h-[100px] w-screen">
            <span className="text-white text-5xl font-bold pt-3 text-center leading-[127%] absolute left-[50%] translate-x-[-50%] line">
              a Full Stack Developer
            </span>
          </div>
          <div className="pt-7 overflow-hidden relative h-[89px] w-screen">
            <p className="text-xl text-white pt-9 text-center absolute left-[50%] translate-x-[-50%] line">
              I develop websites and web apps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
undefined;
