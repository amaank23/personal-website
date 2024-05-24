import React from "react";
import FolderIcon from "./../../assets/folder-icon.svg";
import GithubIcon from "./../../assets/github-icon.svg";
import RedirectIcon from "./../../assets/redirect-icon.png";
const WorkCard = ({ title, desc, tech }) => {
  return (
    <div className="bg-[#272727] py-[2.25rem] px-[1.625rem]">
      <div className="flex justify-between items-center">
        <div>
          <img src={FolderIcon} alt="" />
        </div>
        <div className="flex items-center gap-3">
          <img src={GithubIcon} alt="" />
          <img src={RedirectIcon} alt="" />
        </div>
      </div>
      <div className="pt-[3.4375rem]">
        <h2 className="text-white text-2xl mb-6">{title}</h2>
        <p className="text-white text-base mb-[2.5rem] leading-[2.125rem]">
          {desc}
        </p>
        <div className="flex items-center gap-3">
          {tech.map((item) => {
            return (
              <span key={item} className="text-xs text-[#878787]">
                {item}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
