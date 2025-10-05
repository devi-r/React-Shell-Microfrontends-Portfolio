import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({ isOverlay = false }) => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/learning-dashboard", label: "Learning Dashboard" },
  ];

  return (
    <nav
      className={`bg-[#0F2430] ${
        isOverlay
          ? "absolute top-0 left-0 right-0 z-50 bg-opacity-90 backdrop-blur-sm"
          : "border-b border-gray-700"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="text-white text-sm md:text-base lg:text-xl font-bold"
            >
              Portfolio
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-xs md:text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "bg-gray-700 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-md text-xs md:text-sm font-medium"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div
          className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0F2430] ${
            isOverlay
              ? "bg-opacity-90 backdrop-blur-sm"
              : "border-t border-gray-700"
          }`}
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-2 rounded-md text-sm md:text-base font-medium transition-colors duration-200 ${
                location.pathname === item.path
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
