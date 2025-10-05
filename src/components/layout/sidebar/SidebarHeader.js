import React from "react";
import { HiMenu } from "react-icons/hi";

const SidebarHeader = ({
  isCollapsed,
  buttonRef,
  onPinToggle,
  getTooltipText,
  onTooltipEnter,
  onTooltipLeave,
}) => {
  return (
    <div className="hidden md:flex items-center p-4 border-b border-slate-700/50">
      <button
        ref={buttonRef}
        onClick={onPinToggle}
        className="text-slate-300 hover:text-white p-2 rounded-lg hover:opacity-80 transition-all duration-300 group relative"
        aria-label={getTooltipText()}
        onMouseEnter={onTooltipEnter}
        onMouseLeave={onTooltipLeave}
      >
        <HiMenu className="w-5 h-5 group-hover:scale-110 transition-transform text-[#A1F6FF]" />
      </button>
      {!isCollapsed && (
        <div className="flex items-center ml-3">
          <h2 className="text-white text-sm md:text-base lg:text-xl font-semibold tracking-tight truncate">
            Devi R
          </h2>
        </div>
      )}
    </div>
  );
};

export default SidebarHeader;
