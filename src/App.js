// react-host-microfrontends-portfolio/src/App.js
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ConditionalLayout from "./components/layout/ConditionalLayout";
import Landing from "./components/landing/Landing";
import Projects from "./components/projects/Projects";
import { ErrorBoundary, NotFoundPage, ErrorDemo } from "./components/error";
import RemoteLoader from "./components/loader/RemoteLoader";
import { ROUTES } from "./constants/routes";
import { remoteRoutesMetadata } from "./remotes/mf-remote-routes";
import ModuleFederationRemote from "./components/remoteWrappers/ModuleFederationRemote";
import { iframeRoutesMetadata } from "./remotes/iframe-routes";
import IframeRemote from "./components/remoteWrappers/IFrameRemote";

function App() {
  return (
    <ErrorBoundary>
      <ConditionalLayout>
        <Suspense fallback={<RemoteLoader />}>
          <Routes>
            <Route path={ROUTES.LANDING} element={<Landing />} />
            <Route path={ROUTES.PROJECTS} element={<Projects />} />
            <Route path={ROUTES.ERROR_DEMO} element={<ErrorDemo />} />
            <Route path={ROUTES.NOT_FOUND_DEMO} element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />

            {remoteRoutesMetadata.map(
              ({ name, path, component: RemoteComponent }) => (
                <Route
                  key={name}
                  path={path}
                  element={
                    <ModuleFederationRemote>
                      <RemoteComponent />
                    </ModuleFederationRemote>
                  }
                />
              )
            )}

            {iframeRoutesMetadata.map(({ name, path, remoteUrl }) => {
              return (
                <Route
                  key={name}
                  path={path}
                  element={<IframeRemote remoteUrl={remoteUrl} />}
                />
              );
            })}
          </Routes>
        </Suspense>
      </ConditionalLayout>
    </ErrorBoundary>
  );
}

export default App;
