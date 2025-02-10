import { useState, useEffect } from "react";
import "./ProgressiveImage.css";

const ProgressiveImage = ({
  src,
  placeholderSrc,
  alt,
  className = "",
  onLoad = () => {},
}) => {
  const [imgSrc, setImgSrc] = useState(placeholderSrc || src);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setImgSrc(src);
      setIsLoading(false);
      onLoad();
    };
  }, [src, onLoad]);

  return (
    <img
      src={imgSrc}
      alt={alt}
      className={`progressive-image ${
        isLoading ? "loading" : "loaded"
      } ${className}`}
      style={{
        filter: isLoading ? "blur(10px)" : "none",
        transition: "filter 0.3s ease-out",
      }}
    />
  );
};

export default ProgressiveImage;
