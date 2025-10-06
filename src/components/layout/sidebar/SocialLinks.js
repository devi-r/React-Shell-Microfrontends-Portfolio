import React from "react";
import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";

const SocialLinks = ({ isCollapsed }) => {
  return (
    <div className="absolute bottom-4 left-4 right-4">
      <div
        className={`flex ${
          isCollapsed ? "flex-col space-y-2" : "justify-center space-x-3"
        }`}
      >
        {/* Email */}
        <a
          href="mailto:devi.frontend@gmail.com"
          className="text-slate-400 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-slate-800/50 group"
          aria-label="Email"
          title="Email"
        >
          <HiMail className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/devi-r"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-slate-800/50 group"
          aria-label="GitHub"
          title="GitHub"
        >
          <FaGithub className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/devi-r-06bb94a7/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-slate-800/50 group"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <FaLinkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>

        {/* View Resume */}
        <a
          href="/Devi_R_Senior_Frontend_Engineer_Resume.pdf"
          className="text-slate-400 hover:text-white transition-all duration-300 p-2 rounded-lg hover:bg-slate-800/50 group"
          aria-label="View Resume"
          title="View Resume"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFilePdf className="w-5 h-5 group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
