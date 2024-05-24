import React from "react";
import PersonalImage from "./../../assets/about-pic.jpg";

const AboutSection = () => {
  return (
    <section className="section flex flex-col justify-center about  py-36">
      <div className="flex gap-16   border-t border-white pt-10 mx-[3.75rem]">
        <div className="w-[40%]">
          <h2 className="text-white text-[2.8125rem] 2xl:text-[4.375rem] font-bold">
            Who I am
          </h2>
        </div>
        <div className="flex justify-center w-full">
          <p className="text-white text-[1.625rem] 2xl:text-[38px] max-w-[1100px]">
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
