import { useCallback, useEffect, useState } from "react";

const useResponsive = (widthPX) => {
  const [isSize, setIsSize] = useState(window.innerWidth < widthPX);

  const handleResize = useCallback(() => {
    if(window.innerWidth < widthPX) {
      setIsSize(true);
    } else {
      setIsSize(false);
    }
  }, [widthPX]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return isSize;
}

export default useResponsive;