import React, { useContext } from "react";
import { attentionColor } from "../../utils/utils";
import { ThemeContext } from "../../context/themeContext";

import { themeObject } from "../../utils/utils";
const Skill = ({ name, percentage }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <div className="flex flex-col md:flex-row gap-5 items-center">
      <h4
        className="text-lg w-[106px]"
        style={{ color: themeObject[themeContext.theme].textColor }}
      >
        {name}
      </h4>
      <div
        style={{ backgroundColor: "#ff5e5961" }}
        className="w-full sm:w-[450px] md:w-[400px] xl:w-[800px] h-[12px] relative"
      >
        <div
          className="h-[12px]"
          style={{ backgroundColor: attentionColor, width: percentage }}
        />
      </div>
    </div>
  );
};

export default Skill;
