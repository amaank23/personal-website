import React from "react";
import Skill from "./Skill";

const SkillsSection = () => {
  return (
    <section className="section flex flex-col justify-center about py-36">
      <div className="flex gap-16 border-t border-white pt-10 mx-[3.75rem]">
        <div className="w-[40%]">
          <div className="h-[105px] overflow-hidden ">
            <h2 className="text-[2.8125rem] 2xl:text-[4.375rem] font-bold about-heading text-[#FF5925]">
              Skills
            </h2>
          </div>
        </div>
        <div className="flex flex-col gap-8 justify-center w-full">
          <Skill name={"Html"} percentage={"80%"} />
          <Skill name={"CSS"} percentage={"80%"} />
          <Skill name={"Javascript"} percentage={"90%"} />
          <Skill name={"React Js"} percentage={"85%"} />
          <Skill name={"Node Js"} percentage={"80%"} />
          <Skill name={"ExpressJs"} percentage={"80%"} />
          <Skill name={"PosgresQl"} percentage={"70%"} />
          <Skill name={"MongoDB"} percentage={"65%"} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
