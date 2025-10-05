import React from "react";
import { ROUTES } from "../constants/routes";
import remotes from "./mf-remotes.config";
import { toKebabCase } from "../utils";

//react remote apps
const remoteApps = {
  PostLoginDashboard: React.lazy(() => import("PostLoginDashboard/App")),
  EcommerceCatalogue: React.lazy(() => import("EcommerceCatalogue/App")),
  SyntaxHighlighter: React.lazy(() => import("SyntaxHighlighter/App")),
  AboutMe: React.lazy(() => import("AboutMe/App")),
};

export const remoteRoutesMetadata = remotes?.map((remote) => {
  // Generate the expected path from the remote's name
  const expectedPath = `/${toKebabCase(remote.name)}`;

  // Find the path from ROUTES that matches the generated one
  const path = Object.values(ROUTES).find((route) => route === expectedPath);
  return {
    name: remote.name,
    path: path,
    component: remoteApps[remote.name],
  };
});
