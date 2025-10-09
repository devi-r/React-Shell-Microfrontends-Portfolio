export const HOST_ROUTES = {
  LANDING: "/",
  PROJECTS: "/projects",
  ERROR_DEMO: "/error-demo",
  NOT_FOUND_DEMO: "/404-demo",
};

export const REMOTE_ROUTES = {
  POST_LOGIN_DASHBOARD: "/post-login-dashboard",
  ECOMMERCE_CATALOGUE: "/ecommerce-catalogue",
  SYNTAX_HIGHLIGHTER: "/syntax-highlighter",
  ABOUT_ME: "/about-me",
};

export const IFRAME_ROUTES = {
  AI_FE_SYSTEM_DESIGNER: "/ai-fe-system-designer",
  PORTFOLIO_ARCHITECTURE_BLOG: "/blogs/portfolio-architecture",
};

// Centralized route configuration
export const ROUTES = {
  ...HOST_ROUTES,
  ...REMOTE_ROUTES,
  ...IFRAME_ROUTES,
};
// Routes that should NOT have layout
export const ROUTES_WITHOUT_LAYOUT = [ROUTES.LANDING];

// All valid routes (excluding wildcard routes)
export const VALID_ROUTES = Object.values(ROUTES);
