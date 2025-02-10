import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import "./Skeleton.css";

const Skeleton = ({
  variant = "rectangular",
  width,
  height,
  className = "",
}) => {
  const themeContext = useContext(ThemeContext);

  return (
    <div
      className={`skeleton ${variant} ${className} ${themeContext.theme}`}
      style={{
        width: width || "100%",
        height: height || "100%",
      }}
    >
      <div className="skeleton-shimmer"></div>
    </div>
  );
};

export default Skeleton;
