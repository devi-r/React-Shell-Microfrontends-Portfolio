import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Project = ({ project }) => {
  const { title, description, viewUrl, githubUrl, externalLink, tags } =
    project;

  return (
    <div className="min-w-0 bg-[#0F2430] p-5 rounded-[6px] shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Project Content */}
      <div className="p-6 fancy-border-box">
        <h3 className="text-[#A1F6FF] text-sm md:text-base mb-3">{title}</h3>
        <p className="text-[#A7D1D7] text-sm md:text-sm mb-3">{description}</p>

        <div className="flex gap-4 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[#A7D1D7] text-sm md:text-sm mb-10 bg-[#0D212E] rounded-[6px] p-2"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          {!!externalLink ? (
            <a
              href={viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 w-1/2 bg-[#193C50] text-[#0F2430] border border-[#193C50] p-1 rounded-[6px] text-[#CDEBEE] text-sm md:text-sm lg:text-base hover:opacity-80 transition-colors duration-200"
            >
              <FaExternalLinkAlt className="text-sm" />
              View
            </a>
          ) : (
            <Link
              to={viewUrl}
              className="flex justify-center items-center gap-2 w-1/2 bg-[#193C50] text-[#0F2430] border border-[#193C50] p-1 rounded-[6px] text-[#CDEBEE] text-sm md:text-sm lg:text-base hover:opacity-80 transition-colors duration-200"
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
