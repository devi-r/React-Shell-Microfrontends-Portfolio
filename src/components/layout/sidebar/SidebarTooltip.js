import React from "react";
import { createPortal } from "react-dom";

const SidebarTooltip = ({ isVisible, position, text }) => {
  if (!isVisible) return null;

  return createPortal(
    <div
      className="fixed px-2 py-1 bg-slate-800 text-white text-xs md:text-sm rounded shadow-lg whitespace-nowrap z-[9999] pointer-events-none"
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      {text}
      {/* Tooltip arrow */}
      <div className="absolute bottom-full left-4 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-slate-800"></div>
    </div>,
    document.body
  );
};

export default SidebarTooltip;
