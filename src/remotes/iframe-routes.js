import { ROUTES } from "../constants/routes";

export const iframesUrlsMap = {
  aiFeSystemDesigner: {
    devUrl: `http://localhost:3004${ROUTES.AI_FE_SYSTEM_DESIGNER}`,
    prodUrl: `https://nextjs-fullstack-ai-fe-system-desig.vercel.app${ROUTES.AI_FE_SYSTEM_DESIGNER}`,
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
];
