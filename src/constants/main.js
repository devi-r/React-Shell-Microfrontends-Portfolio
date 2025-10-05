import React from "react";
import { MdDashboard, MdFolder } from "react-icons/md";
import { RiFolderOpenFill } from "react-icons/ri";
import { MdError, MdHelp, MdCode } from "react-icons/md";
import { BiSolidError } from "react-icons/bi";
import { ROUTES } from "./routes.js";
import { AiFillCode } from "react-icons/ai";

// Detailed project data for Projects page
export const projectItems = [
  {
    id: 1,
    title: "Post Login Dashboard",
    viewUrl: ROUTES.POST_LOGIN_DASHBOARD,
    githubUrl: "https://github.com/devi-r/React-Post-Login-Dashboard",
    icon: <MdDashboard />,
  },
  {
    id: 2,
    title: "Ecommerce Catalogue",
    viewUrl: ROUTES.ECOMMERCE_CATALOGUE,
    githubUrl: "https://github.com/devi-r/React-Ecommerce-Catalogue-Page",
    icon: <MdFolder />,
  },
  {
    id: 3,
    title: "Syntax Highlighter",
    viewUrl: ROUTES.SYNTAX_HIGHLIGHTER,
    githubUrl: "https://github.com/devi-r/React-Syntax-Highlighter",
    icon: <MdCode />,
  },
  {
    id: 4,
    title: "AI FE System Designer",
    viewUrl: ROUTES.AI_FE_SYSTEM_DESIGNER,
    githubUrl:
      "https://github.com/devi-r/NextJS-Fullstack-AI-FE-System-Designer",
    icon: <AiFillCode />,
  },
];

// Sidebar navigation items
export const sidebarProjectItems = [
  {
    viewUrl: ROUTES.PROJECTS,
    title: "All Projects",
    icon: <RiFolderOpenFill />,
  },
  ...projectItems,
];

export const playgroundItems = [
  {
    path: ROUTES.NOT_FOUND_DEMO,
    label: "Lost in Space",
    icon: <BiSolidError />,
  },
  {
    path: ROUTES.ERROR_DEMO,
    label: "Glitch in the Matrix",
    icon: <MdError />,
  },
  {
    path: ROUTES.ABOUT_ME,
    label: "Surprise Me",
    icon: <MdHelp />,
  },
];
