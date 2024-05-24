import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import SplitType from "split-type";

const AboutSection = () => {
  return (
    <section className="section flex flex-col justify-center about py-36 bg-[#161616]">
      <div className="flex gap-16 border-t border-white pt-10 mx-[3.75rem]">
        <div className="w-[40%]">
          <div className="h-[105px] overflow-hidden ">
            <h2 className="text-[2.8125rem] 2xl:text-[4.375rem] font-bold about-heading text-[#FF5925]">
              Who I am
            </h2>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <p className="text-white text-[1.625rem] 2xl:text-[38px] max-w-[1100px] about-desc">
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
