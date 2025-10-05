import React from "react";
import ErrorPage from "./ErrorPage";

const NotFoundPage = () => {
  return (
    <ErrorPage
      title="404!"
      message="Looks like this page doesn’t exist. Head back before the router gets confused."
    />
  );
};

export default NotFoundPage;
