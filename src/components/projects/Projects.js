import React from "react";
import Project from "./Project";
import { projectItems } from "../../constants/main";

const Projects = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#A1F6FF] mb-4">
            Projects
          </h1>
          <div className="flex justify-center px-4">
            <p className="max-w-3xl text-left text-sm md:text-sm lg:text-base leading-relaxed">
              <span className="font-bold text-[#A1F6FF]">Disclaimer: </span>
              <span className="text-[#A7D1D7]">
                The projects featured within this portfolio are personal pet
                projects. Their primary role is to demonstrate the technical
                architecture of the site itself. My most robust and impactful
                work is reflected in the professional experience detailed on
                my&nbsp;
                <a
                  href="/Devi_R_Senior_Frontend_Engineer_Resume.pdf"
                  download
                  aria-label="Download Resume"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  resume
                </a>
                &nbsp;.
              </span>
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 p-4 max-w-[600px] lg:max-w-[700px]">
          {projectItems.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <p className="text-gray-500 text-sm md:text-sm">
            More projects available on{" "}
            <a
              href="https://github.com/devi-r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
