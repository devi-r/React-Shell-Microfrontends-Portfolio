import { ROUTES } from "../constants/routes";

export const iframesUrlsMap = {
  aiFeSystemDesigner: {
    devUrl: `http://localhost:3004${ROUTES.AI_FE_SYSTEM_DESIGNER}`,
    prodUrl: `https://nextjs-fullstack-ai-fe-system-desig.vercel.app${ROUTES.AI_FE_SYSTEM_DESIGNER}`,
  },
  portfolioArchitectureBlog: {
    devUrl: `http://localhost:3006/blogs${ROUTES.PORTFOLIO_ARCHITECTURE_BLOG}`,
    prodUrl: `https://nextjs-portfolio-blogs.vercel.app/blogs${ROUTES.PORTFOLIO_ARCHITECTURE_BLOG}`,
  },
};

export const iframeRoutesMetadata = [
  {
    name: "aiFeSystemDesigner",
    // This is the path inside React Host App
    path: ROUTES.AI_FE_SYSTEM_DESIGNER,
    // This is the full URL for the iframe's src attribute
    remoteUrl:
      process.env.NODE_ENV === "development"
        ? iframesUrlsMap.aiFeSystemDesigner.devUrl
        : iframesUrlsMap.aiFeSystemDesigner.prodUrl,
  },
  {
    name: "portfolioArchitectureBlog",
    path: ROUTES.PORTFOLIO_ARCHITECTURE_BLOG,
    remoteUrl:
      process.env.NODE_ENV === "development"
        ? iframesUrlsMap.portfolioArchitectureBlog.devUrl
        : iframesUrlsMap.portfolioArchitectureBlog.prodUrl,
  },
];
