import { useContext } from "react";
import { attentionColor, primaryColor, themeObject } from "../../utils/utils";
import Navbar from "../Navbar/Navbar";
import PersonalImage from "./../../assets/personal-image.png";
import Canvas from "./Canvas";
import { ThemeContext } from "../../context/themeContext";

const HeroSection = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <section className="section hero visible">
      <div className="hero-container h-full">
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
              <span
                className="text-white text-5xl font-bold pt-3 w-fit text-center  line block"
                style={{
                  color: themeObject[themeContext.theme].textColor,
                }}
              >
                I’m Aman,
              </span>
            </div>
            <div className="overflow-hidden relative">
              <span
                className="text-white text-5xl font-bold pt-3 text-center leading-[127%] line block"
                style={{
                  color: themeObject[themeContext.theme].textColor,
                }}
              >
                a Full Stack Developer
              </span>
            </div>
            <div className="pt-7 overflow-hidden relative">
              <p
                className="text-xl text-white pt-9 text-center line block"
                style={{
                  color: themeObject[themeContext.theme].textColor,
                }}
              >
                I develop websites and web apps
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
