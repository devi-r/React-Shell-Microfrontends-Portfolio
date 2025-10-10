import React from "react";
import ErrorPage from "./ErrorPage";
import { trackCustomEvent } from "../../utils/analytics";

class RemoteErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("RemoteErrorBoundary caught an error:", error, errorInfo);

    // Track microfrontend error in analytics
    trackCustomEvent(
      "Error",
      "Microfrontend Error Boundary",
      `${error.toString()} - Microfrontend: ${this.props.name || "Unknown"}`
    );

    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  handleRetry = () => {
    this.setState((prevState) => ({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: prevState.retryCount + 1,
    }));
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorPage
          title="Oops!"
          message="Something broke while bootstrapping this microfrontend. Don't worry, it's not you, it's the runtime."
          showRetry={true}
          errorType="Microfrontend Error"
        />
      );
    }

    return this.props.children;
  }
}

export default RemoteErrorBoundary;
