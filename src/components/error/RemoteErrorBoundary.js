import React from "react";
import ErrorPage from "./ErrorPage";

class RemoteErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
    };
    console.log({ props });
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("RemoteErrorBoundary caught an error:", error, errorInfo);
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
          message="Something broke while bootstrapping this microfrontend. Don’t worry, it’s not you, it’s the runtime."
          showRetry={true}
        />
      );
    }

    return this.props.children;
  }
}

export default RemoteErrorBoundary;
