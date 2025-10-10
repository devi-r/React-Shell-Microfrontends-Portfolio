import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Header from "./Header";
import { useAnalytics } from "../../hooks/useAnalytics";
import { ROUTES } from "../../constants/routes";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const mainContentRef = useRef(null);
  const { trackPage } = useAnalytics();

  // Track page view when path changes
  useEffect(() => {
    // Get page title from pathname
    const pageTitle =
      pathname === ROUTES.LANDING
        ? "Landing Page"
        : pathname.split("/").filter(Boolean).join(" - ").replace(/-/g, " ");

    trackPage(pathname, pageTitle);
  }, [pathname, trackPage]);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTop = 0;
    }
  }, [pathname]);

  const handleCloseSidebar = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="relative flex flex-col h-dvh bg-[#0B1C24] md:flex-row overflow-hidden">
      <Header onMenuClick={() => setIsMenuOpen((prev) => !prev)} />

      {/* Mobile Overlay Background - Click to close */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={handleCloseSidebar}
        />
      )}

      <Sidebar isMenuOpen={isMenuOpen} />

      {/* Main Content Area: Takes up remaining space */}
      <div className="flex-1 flex flex-col overflow-hidden transition-all duration-200 ease-in-out">
        <main
          ref={mainContentRef}
          className="layout-root flex-1 overflow-auto bg-[#0B1C24]"
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
