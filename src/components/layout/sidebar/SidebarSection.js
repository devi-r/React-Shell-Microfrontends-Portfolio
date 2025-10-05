import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarSection = ({
  isCollapsed,
  sectionTitle,
  items,
  showViewAll = false,
  viewAllPath = "",
  viewAllLabel = "View All",
}) => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-0 py-4 px-6 align-start">
      <div className="flex items-center justify-between mb-4 h-6">
        {!isCollapsed && (
          <>
            <h3 className="text-slate-400 text-sm md:text-sm font-semibold uppercase tracking-wider truncate">
              {sectionTitle}
            </h3>
            {showViewAll && (
              <Link
                to={viewAllPath}
                className="text-[#A1F6FF] hover:opacity-80 text-sm md:text-sm font-medium transition-colors hover:underline truncate"
              >
                {viewAllLabel}
              </Link>
            )}
          </>
        )}
      </div>

      <ul className="space-y-1 max-h-80 overflow-y-auto hide-scrollbar">
        {items.map((item) => (
          <li key={item.path} className="w-full">
            {item.target ? (
              <a
                href={item.path}
                target={item.target}
                rel="noopener noreferrer"
                className="w-full flex items-center gap-3 py-2 rounded-lg transition-all duration-300 group relative text-slate-300 hover:text-white"
              >
                <span className="text-base md:text-base lg:text-xl flex-shrink-0">
                  {item.icon}
                </span>
                {!isCollapsed && (
                  <span className="text-sm md:text-sm font-medium truncate hover:opacity-80">
                    {item.label || item.title}
                  </span>
                )}
              </a>
            ) : (
              <Link
                to={item.viewUrl || item.path}
                className={`w-full flex items-center gap-3 py-2 rounded-lg transition-all duration-300 group relative ${
                  location.pathname === (item.viewUrl || item.path)
                    ? "text-[#A1F6FF]"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                <span className="text-base md:text-base lg:text-xl flex-shrink-0">
                  {item.icon}
                </span>
                {!isCollapsed && (
                  <span className="text-sm md:text-sm font-medium truncate hover:opacity-80">
                    {item.label || item.title}
                  </span>
                )}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarSection;
