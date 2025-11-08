import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const GA_MEASUREMENT_ID = "G-TDTCKYGQ52";
const ADS_CONVERSION_ID = "AW-16548262654";

type GtagFunction = (
  command: "config" | "event",
  targetId: string,
  config?: Record<string, unknown>
) => void;

declare global {
  interface Window {
    gtag?: GtagFunction;
  }
}

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      return;
    }

    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: location.pathname,
    });

    window.gtag("config", ADS_CONVERSION_ID, {
      page_path: location.pathname,
    });

    if (location.pathname === "/") {
      window.gtag("event", "conversion", {
        send_to: "AW-16548262654/bv8zCKuho7wbEP7l6dI9",
      });
    }
  }, [location.pathname]);
};

export default usePageTracking;
