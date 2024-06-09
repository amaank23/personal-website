import React, { useContext } from "react";
import FolderIcon from "./../../assets/folder-icon.svg";
import GithubIcon from "./../../assets/github-icon.svg";
import RedirectIcon from "./../../assets/redirect-icon.png";
import { ThemeContext } from "../../context/themeContext";
import { themeObject } from "../../utils/utils";
const WorkCard = ({ title, desc, tech, githubUrl }) => {
  function onGithubIconClick(url) {
    window.open(url, "_blank", "noreferrer");
  }
  const themeContext = useContext(ThemeContext);
  return (
    <div
      className="py-[2.25rem] px-[1.625rem]"
      style={{
        backgroundColor: themeContext.theme === "dark" ? "#272727" : "#e5e5e5",
      }}
    >
      <div className="flex justify-between items-center">
        <div>
          <img src={FolderIcon} alt="" />
        </div>
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => onGithubIconClick(githubUrl)}
        >
          <img src={GithubIcon} alt="" />
        </div>
      </div>
      <div className="pt-[3.4375rem]">
        <h2
          className="text-2xl mb-6"
          style={{
            color: themeObject[themeContext.theme].textColor,
          }}
        >
          {title}
        </h2>
        <p
          className="text-white text-base mb-[2.5rem] leading-[2.125rem]"
          style={{
            color: themeObject[themeContext.theme].textColor,
          }}
        >
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
