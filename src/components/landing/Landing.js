import React from "react";
import { Link } from "react-router-dom";
import { FaMedium, FaGithub } from "react-icons/fa";
import { ROUTES } from "../../constants/routes";

const Landing = () => {
  return (
    <div
      className="w-full h-full bg-[#0F2430] bg-cover bg-center bg-no-repeat m-0 p-0"
      style={{ backgroundImage: "url(/landing.svg)" }}
    >
      <Link
        to={ROUTES.LANDING}
        className="flex items-center absolute top-6 left-8 md:right-6 md:left-auto"
      >
        <h1 className="text-white max-xs:text-2xl text-3xl md:text-3xl lg:text-4xl font-semibold tracking-tight truncate">
          Devi R
        </h1>
      </Link>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-[#A1F6FF] text-left max-w-4xl px-8 backdrop-blur-sm">
          <h1 className="max-xs:text-2xl text-3xl md:text-3xl lg:text-4xl font-bold mb-8">
            Beyond the 'what', <br />
            this is the 'how'.
          </h1>
          <p className="text-[#A7D1D7] max-xs:text-sm text-base md:text-base lg:text-xl mb-6 leading-relaxed">
            This application serves as a client-side shell{" "}
            <br className="max-sm:hidden" />
            for a microfrontend architecture. Each project{" "}
            <br className="max-sm:hidden" />
            is an independently deployed application,{" "}
            <br className="max-sm:hidden" />
            composed dynamically at runtime.
            <br />
          </p>
          <p className="text-[#A1F6FF] max-xs:text-sm text-base md:text-base lg:text-xl flex items-center">
            <span className="pb-0.5 border-b border-b-[#A1F6FF]">
              The architecture is the art.
            </span>
            <a
              href="https://medium.com/@devi-r/ea315b887911"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-block text-white hover:text-[#00f2ea] transition-colors duration-200"
              aria-label="Read Medium Article"
              title="Read Medium Article"
            >
              <FaMedium className="text-2xl lg:text-3xl" />
            </a>
            <a
              href="https://github.com/devi-r/React-Shell-Microfrontends-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 inline-block text-white hover:text-[#00f2ea] transition-colors duration-200"
              aria-label="View Github Repository"
              title="View Github Repository"
            >
              <FaGithub className="text-2xl lg:text-3xl" />
            </a>
          </p>

          {/* Explore Button */}
          <Link
            to={ROUTES.PORTFOLIO_ARCHITECTURE_BLOG}
            className="mt-10 md:mt-16 inline-block bg-[#193C50] text-[#0F2430] border border-[#193C50] px-8 py-3 rounded-[1000px] font-semibold text-[#CDEBEE] max-xs:text-sm text-base md:text-base lg:text-lg hover:bg-[#0D212E] hover:border-[#153243] transition-colors duration-200"
          >
            Explore the architecture
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
