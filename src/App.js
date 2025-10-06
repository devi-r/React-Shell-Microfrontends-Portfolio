// react-host-microfrontends-portfolio/src/App.js
import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
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

const RootLayout = () => {
  return (
    <ErrorBoundary>
      <ConditionalLayout>
        <Suspense fallback={<RemoteLoader />}>
          <Outlet />
        </Suspense>
      </ConditionalLayout>
    </ErrorBoundary>
  );
};

const router = createBrowserRouter([
  {
    element: <RootLayout />, // All routes will use this layout
    children: [
      {
        path: ROUTES.LANDING,
        element: <Landing />,
      },
      {
        path: ROUTES.PROJECTS,
        element: <Projects />,
      },
      {
        path: ROUTES.ERROR_DEMO,
        element: <ErrorDemo />,
      },
      {
        path: ROUTES.NOT_FOUND_DEMO,
        element: <NotFoundPage />,
      },
      // Dynamically create Module Federation routes
      ...remoteRoutesMetadata.map(
        ({ name, path, component: RemoteComponent }) => ({
          key: name,
          path: path,
          element: (
            <ModuleFederationRemote>
              <RemoteComponent />
            </ModuleFederationRemote>
          ),
        })
      ),
      // Dynamically create iframe routes
      ...iframeRoutesMetadata.map(({ name, path, remoteUrl }) => ({
        key: name,
        path: path,
        element: <IframeRemote remoteUrl={remoteUrl} />,
      })),
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
