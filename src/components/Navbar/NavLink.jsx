import { PropTypes } from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { themeObject } from "../../utils/utils";

const NavLink = ({ label, href, className, onClickNavigate }) => {
  const scrollToSection = () => {
    onClickNavigate();
    document.getElementById(href).scrollIntoView({ behavior: "smooth" });
  };
  const themeContext = useContext(ThemeContext);
  return (
    <span
      className={`text-lg cursor-pointer ${className}`}
      onClick={scrollToSection}
      style={{
        color: themeObject[themeContext.theme].textColor,
      }}
    >
      {label}
    </span>
  );
};

NavLink.propTypes = {
  label: PropTypes.string,
};

export default NavLink;
