import { useState } from "react";
import RemoteErrorBoundary from "../error/RemoteErrorBoundary";
import RemoteLoader from "../loader/RemoteLoader";
import { NotFoundPage } from "../error";

const IframeRemote = ({ remoteUrl }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  if (!remoteUrl) {
    return <NotFoundPage />;
  }

  if (isError) {
    return <RemoteErrorBoundary />;
  }

  return (
    <>
      {isLoading && <RemoteLoader />}
      <iframe
        src={remoteUrl}
        title="Iframe Remote Application"
        className={`w-full min-h-screen border-none transition-opacity duration-300 ease-in-out ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${isError ? "hidden" : "visible"}`}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsError(true)}
      />
    </>
  );
};

export default IframeRemote;
