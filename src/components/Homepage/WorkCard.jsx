import React, { useContext, useState } from "react";
import FolderIcon from "./../../assets/folder-icon.svg";
import GithubIcon from "./../../assets/github-icon.svg";
import RedirectIcon from "./../../assets/redirect-icon.png";
import { ThemeContext } from "../../context/themeContext";
import { themeObject } from "../../utils/utils";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProgressiveImage from "../ProgressiveImage/ProgressiveImage";
import Skeleton from "../Skeleton/Skeleton";

const WorkCard = ({
  title,
  desc,
  tech,
  githubUrl,
  liveUrl,
  image,
  thumbnailImage,
}) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <div className="group relative overflow-hidden rounded-xl glass-effect hover-scale glow">
      {/* Project Image with Loading State */}
      <div className="relative h-[300px] w-full overflow-hidden rounded-t-xl">
        {isImageLoading && (
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            className="absolute inset-0"
          />
        )}

        <ProgressiveImage
          src={image}
          placeholderSrc={thumbnailImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onLoad={() => setIsImageLoading(false)}
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <p className="text-gray-300 mb-4">{desc}</p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((item) => (
              <span
                key={item}
                className="px-3 py-1 text-sm rounded-full glass-effect text-primary-light border border-primary/20"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
            >
              <FaGithub size={24} />
            </a>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-primary transition-colors"
              >
                <FaExternalLinkAlt size={24} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
