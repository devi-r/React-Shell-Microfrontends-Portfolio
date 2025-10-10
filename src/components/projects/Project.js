import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAnalytics } from "../../hooks/useAnalytics";

const Project = ({ project }) => {
  const { title, viewUrl, githubUrl, externalLink, tags } = project;
  const { trackInteraction } = useAnalytics();

  const handleViewClick = () => {
    trackInteraction(`Clicked View Project`, title);
  };

  const handleGitHubClick = () => {
    trackInteraction(`Clicked GitHub Link`, `${title} - GitHub`);
  };

  return (
    <div className="min-w-0 bg-[#0F2430] p-5 rounded-[6px] shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Project Content */}
      <div className="w-full h-full p-6 fancy-border-box flex flex-col">
        <h3 className="text-[#A1F6FF] text-sm md:text-base mb-3">{title}</h3>

        <div className="flex flex-wrap gap-2 mb-6 items-start">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[#A7D1D7] text-sm md:text-sm bg-[#0D212E] rounded-[6px] px-3 py-1.5 inline-block"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-auto">
          {!!externalLink ? (
            <a
              href={viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 w-1/2 bg-[#193C50] text-[#0F2430] border border-[#193C50] p-1 rounded-[6px] text-[#CDEBEE] text-sm md:text-sm lg:text-base hover:opacity-80 transition-colors duration-200"
              onClick={handleViewClick}
            >
              <FaExternalLinkAlt className="text-sm" />
              View
            </a>
          ) : (
            <Link
              to={viewUrl}
              className="flex justify-center items-center gap-2 w-1/2 bg-[#193C50] text-[#0F2430] border border-[#193C50] p-1 rounded-[6px] text-[#CDEBEE] text-sm md:text-sm lg:text-base hover:opacity-80 transition-colors duration-200"
              onClick={handleViewClick}
            >
              <FaExternalLinkAlt className="text-sm" />
              View
            </Link>
          )}
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 w-1/2 bg-[#0D212E] text-[#0F2430] border border-[#153243] p-1 rounded-[6px] text-[#CDEBEE] text-sm md:text-sm lg:text-base hover:opacity-80 transition-colors duration-200"
            onClick={handleGitHubClick}
          >
            <FaGithub className="text-sm" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
