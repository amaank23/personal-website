import { PropTypes } from "prop-types";

const Container = ({ children }) => {
  return <div className="px-[1rem] md:px-[3.75rem]">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Container;
