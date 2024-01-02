import { PropTypes } from "prop-types";

const NavLink = ({ label }) => {
  return (
    <span className="text-lg cursor-pointer text-white">
      {label}
    </span>
  );
};

NavLink.propTypes = {
  label: PropTypes.string,
};

export default NavLink;
