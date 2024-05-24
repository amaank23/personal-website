import { PropTypes } from "prop-types";

const NavLink = ({ label, onClickNavigate }) => {
  return (
    <span
      className="text-lg cursor-pointer text-white"
      onClick={onClickNavigate}
    >
      {label}
    </span>
  );
};

NavLink.propTypes = {
  label: PropTypes.string,
};

export default NavLink;
