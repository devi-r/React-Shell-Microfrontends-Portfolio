import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import { useAnalytics } from "../../hooks/useAnalytics";

const NotFoundPage = () => {
  const location = useLocation();
  const { trackPage, trackCustom } = useAnalytics();

  // Track 404 page view
  useEffect(() => {
    trackPage(location.pathname, "404 Not Found");

    // Also track as a custom error event
    trackCustom("Error", "404 Page View", `Not Found: ${location.pathname}`);
  }, [location.pathname, trackPage, trackCustom]);

  return (
    <ErrorPage
      title="404!"
      message="Looks like this page doesn't exist. Head back before the router gets confused."
      errorType="404"
    />
  );
};

export default NotFoundPage;
