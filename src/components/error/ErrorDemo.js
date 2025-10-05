import React from "react";
import ErrorPage from "./ErrorPage";

const ErrorDemo = () => {
  return (
    <ErrorPage
      title="Oops!"
      message="Something expected happened. This page is misbehaving on purpose."
      showRetry={true}
    />
  );
};

export default ErrorDemo;
