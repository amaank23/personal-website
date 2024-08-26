import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext } from "react";
import SplitType from "split-type";
import { themeObject } from "../../utils/utils";
import { ThemeContext } from "../../context/themeContext";

const AboutSection = () => {
  const themeContext = useContext(ThemeContext);
  return (
    <section className="section flex flex-col justify-center about py-36">
      <div className="flex flex-col gap-16 pt-10 mx-[1rem] md:mx-[3.75rem]">
        <div className="">
          <h2 className="text-[2.8125rem] 2xl:text-[4.375rem] font-bold about-heading text-[#FF5925] text-center md:text-left">
            Who I am
          </h2>
        </div>
        <div className="flex justify-center w-full">
          <p
            className="text-white text-[1.625rem] 2xl:text-[38px] max-w-[1100px] about-desc font-bold text-center"
            style={{
              color: themeObject[themeContext.theme].textColor,
            }}
          >
            I am a highly skilled React.js Developer and Node js Developer with
            a mid-level experience in designing and developing complex web
            applications. Proficient in utilizing ReactJs, NodeJs and their
            libraries and frameworks to create efficient and interactive user
            interfaces, and backend API.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
