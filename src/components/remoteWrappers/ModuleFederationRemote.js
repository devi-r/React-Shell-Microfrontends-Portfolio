import RemoteErrorBoundary from "../error/RemoteErrorBoundary";

const ModuleFederationRemote = ({ children }) => {
  return <RemoteErrorBoundary>{children}</RemoteErrorBoundary>;
};

export default ModuleFederationRemote;
