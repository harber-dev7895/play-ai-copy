import { useState, useEffect } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIsMobile = () => setIsMobile(window.innerWidth < 768);

    checkIsMobile(); // Initial check
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
}

export default useIsMobile;
