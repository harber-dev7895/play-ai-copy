import { useState, useEffect } from "react";

function useIsTablet() {
  const [isTablet, setIsTablet] = useState<boolean>(false);

  useEffect(() => {
    const checkIsTablet = () => setIsTablet(window.innerWidth < 1024);

    checkIsTablet(); // Initial check
    window.addEventListener("resize", checkIsTablet);

    return () => window.removeEventListener("resize", checkIsTablet);
  }, []);

  return isTablet;
}

export default useIsTablet;
