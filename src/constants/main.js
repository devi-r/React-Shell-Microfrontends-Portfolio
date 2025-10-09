import React from "react";
import { MdFolder, MdArticle } from "react-icons/md";
import { MdCode, MdPerson } from "react-icons/md";
import { ROUTES } from "./routes.js";
import { AiFillCode } from "react-icons/ai";
import { FaCodeBranch } from "react-icons/fa";

// Detailed project data for Projects page
export const projectItems = [
  {
    id: 1,
    title: "Syntax Highlighter",
    viewUrl: ROUTES.SYNTAX_HIGHLIGHTER,
    githubUrl: "https://github.com/devi-r/React-Syntax-Highlighter",
    icon: <MdCode />,
    tags: ["React", "Module Federation"],
  },
  {
    id: 2,
    title: "AI FE System Designer",
    viewUrl: ROUTES.AI_FE_SYSTEM_DESIGNER,
    githubUrl:
      "https://github.com/devi-r/Nextjs-Fullstack-AI-FE-System-Design-Article-Generator",
    icon: <AiFillCode />,
    tags: ["Next.js", "Iframe"],
  },
  {
    id: 3,
    title: "Ecommerce Catalogue",
    viewUrl: ROUTES.ECOMMERCE_CATALOGUE,
    githubUrl: "https://github.com/devi-r/React-Ecommerce-Catalogue-Page",
    icon: <MdFolder />,
    tags: ["React", "Module Federation"],
  },
  // {
  //   id: 4,
  //   title: "Post Login Dashboard",
  //   viewUrl: ROUTES.POST_LOGIN_DASHBOARD,
  //   githubUrl: "https://github.com/devi-r/React-Post-Login-Dashboard",
  //   icon: <MdDashboard />,
  // },
];

export const sidebarItems = [
  {
    sectionTitle: "MFE Architecture",
    items: [
      {
        path: ROUTES.PORTFOLIO_ARCHITECTURE_BLOG,
        label: "How It's Built",
        icon: <MdArticle />,
      },
      {
        label: "View Source Code",
        icon: <FaCodeBranch />,
        external: true,
        externalTarget: "_blank",
        externalUrl:
          "https://github.com/devi-r/React-Shell-Microfrontends-Portfolio",
      },
    ],
  },
  {
    sectionTitle: "LIVE REMOTES",
    showAction: true,
    actionPath: ROUTES.PROJECTS,
    actionLabel: "View All",
    items: [...projectItems],
  },
  {
    sectionTitle: "RESOURCES",
    items: [
      {
        path: ROUTES.ABOUT_ME,
        label: "Contact Me",
        icon: <MdPerson />,
      },
    ],
  },
];
