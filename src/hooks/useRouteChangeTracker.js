import { useState, useEffect } from "react";
import { usePrevious } from "../hooks/usePrevious";
import { useLocation } from "react-router-dom";

const useRouteChangeTracker = () => {
  const location = useLocation();
  const previousPathname = usePrevious(location.pathname);
  const [isRouteChanged, setIsRouteChanged] = useState(false);

  useEffect(() => {
    console.log({ previousPathname, locationPathname: location.pathname });
    if (!!previousPathname) {
      if (previousPathname !== location.pathname) {
        setIsRouteChanged(true);
      } else {
        setIsRouteChanged(false);
      }
    }
  }, [location.pathname, previousPathname]);

  return { isRouteChanged };
};

export default useRouteChangeTracker;
