import { PropTypes } from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { themeObject } from "../../utils/utils";

const NavLink = ({ label, onClickNavigate }) => {
  const themeContext = useContext(ThemeContext);
  return (
    <span
      className="text-lg cursor-pointer"
      onClick={onClickNavigate}
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
