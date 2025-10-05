import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({ title, message, showRetry }) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div
      className="bg-[#0F2938] flex justify-center pb-20 md:pb-32 min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative p-8"
      style={{
        backgroundImage:
          window.innerWidth <= 768
            ? "url('/fallback-mob.svg')"
            : "url('/fallback.svg')",
      }}
    >
      <div className="text-[#A1F6FF] self-end flex items-center flex-col justify-center gap-4 max-w-[280px] md:max-w-[350px]">
        <h1 className="text-left text-2xl md:text-4xl lg:text-6xl font-bold text-[#A1F6FF]">
          {title}
        </h1>
        <p className="text-left text-sm md:text-base lg:text-xl text-[#A7D1D7] mt-4 mb-8 max-w-sm">
          {message}
        </p>
        <div className="w-full flex gap-4">
          <button
            onClick={handleGoHome}
            className="mx-auto flex justify-center items-center gap-2 w-1/2 bg-[#193C50] text-[#0F2430] border border-[#193C50] p-2 rounded-[1001px] font-semibold text-[#CDEBEE] text-sm md:text-base hover:opacity-80 transition-colors duration-200"
          >
            Back to shell
          </button>
          {showRetry && (
            <button
              onClick={handleReload}
              className="flex justify-center items-center gap-2 w-1/2 bg-[#0D212E] text-[#0F2430] border border-[#153243] p-2 rounded-[1000px] font-semibold text-[#CDEBEE] text-sm md:text-base hover:opacity-80 transition-colors duration-200"
            >
              Retry
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
