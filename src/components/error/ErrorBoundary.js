import React from "react";
import ErrorPage from "./ErrorPage";
import { trackCustomEvent } from "../../utils/analytics";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    // Track error in analytics
    trackCustomEvent(
      "Error",
      "React Error Boundary",
      `${error.toString()} - ${
        errorInfo.componentStack?.split("\n")[0] || "Unknown component"
      }`
    );

    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorPage
          title="Oops!"
          message="Something went off-script while rendering this view. Please retry."
          showRetry={true}
          errorType="React Error"
        />
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
