import React from "react";
import { ROUTES } from "../constants/routes.js";

// This is the single source of truth for all micro-frontends (remotes).
export const remotes = [
  {
    // The name used in webpack's ModuleFederationPlugin.
    // Must match the 'name' in the remote's webpack config.
    name: "PostLoginDashboard",
    // The route path for this remote.
    path: ROUTES.POST_LOGIN_DASHBOARD,
    // The URL for the remoteEntry.js file in development.
    devUrl: "http://localhost:3001/remoteEntry.js",
    // The URL for the remoteEntry.js file in production.
    prodUrl: "https://react-post-login-dashboard.onrender.com/remoteEntry.js",
  },
  {
    name: "EcommerceCatalogue",
    path: ROUTES.ECOMMERCE_CATALOGUE,
    devUrl: "http://localhost:3002/remoteEntry.js",
    prodUrl:
      "https://react-ecommerce-catalogue-page.onrender.com/remoteEntry.js",
  },
  {
    name: "SyntaxHighlighter",
    path: ROUTES.SYNTAX_HIGHLIGHTER,
    devUrl: "http://localhost:3003/remoteEntry.js",
    prodUrl: "https://react-syntax-highlighter.onrender.com/remoteEntry.js",
  },
  {
    name: "AboutMe",
    path: ROUTES.ABOUT_ME,
    devUrl: "http://localhost:3005/remoteEntry.js",
    prodUrl: "https://react-webgl-color-splatter.onrender.com/remoteEntry.js",
  },
];

export const remoteApps = {
  PostLoginDashboard: React.lazy(() => import("PostLoginDashboard/App")),
  EcommerceCatalogue: React.lazy(() => import("EcommerceCatalogue/App")),
  SyntaxHighlighter: React.lazy(() => import("SyntaxHighlighter/App")),
  AboutMe: React.lazy(() => import("AboutMe/App")),
};

export const remoteAppsMetadata = remotes.map((remote) => ({
  name: remote.name,
  path: remote.path,
  component: remoteApps[remote.name],
}));

export default remotes;
