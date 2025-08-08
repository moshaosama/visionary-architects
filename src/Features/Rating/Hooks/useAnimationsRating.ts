import { useEffect, useState } from "react";

export const useAnimationsRating = () => {
  const [isAnimateImages, setIsAnimateImages] = useState({
    imageOne: false,
    imageTwo: false,
    imageThree: false,
  });

  useEffect(() => {
    const handleScroll = async () => {
      if (window.scrollY > 2000) {
        setIsAnimateImages((prev) => ({ ...prev, imageOne: true }));
        await new Promise((resolve) => setTimeout(resolve, 500));
        setIsAnimateImages((prev) => ({ ...prev, imageTwo: true }));
        await new Promise((resolve) => setTimeout(resolve, 200));
        setIsAnimateImages((prev) => ({ ...prev, imageThree: true }));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isAnimateImages };
};
