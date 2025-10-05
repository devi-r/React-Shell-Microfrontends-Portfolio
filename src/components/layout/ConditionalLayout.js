import React from "react";
import { useLocation } from "react-router-dom";
import Layout from "./Layout";
import { VALID_ROUTES, ROUTES_WITHOUT_LAYOUT } from "../../constants/routes.js";

const ConditionalLayout = ({ children }) => {
  const location = useLocation();

  // Check if current route is a 404 (not found) route
  const isNotFoundRoute = !VALID_ROUTES.includes(location.pathname);

  // Check if current route should have layout
  const shouldUseLayout =
    !ROUTES_WITHOUT_LAYOUT.includes(location.pathname) && !isNotFoundRoute;

  return shouldUseLayout ? (
    <Layout>{children}</Layout>
  ) : (
    <main className="w-full h-dvh">{children}</main>
  );
};

export default ConditionalLayout;
