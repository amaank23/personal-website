import React, { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { themeObject } from "../../utils/utils";

const ContactSection = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <section
      className="section contact flex justify-center items-center"
      id="contact"
    >
      <div>
        <h2
          className="text-white text-[1.75rem] font-bold max-w-[366px] text-center mb-[3.3125rem]"
          style={{
            color: themeObject[themeContext.theme].textColor,
          }}
        >
          Take A Coffee & Chat With Me.
        </h2>
        <a
          href="mailto:amaanwaseem24@gmail.com"
          className="text-[#FF5925] hover:text-white hover:bg-[#FF5925] transition-all border border-[#FF5925] w-[135px] h-[55px] flex items-center justify-center text-sm mx-auto"
        >
          Email Me
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
