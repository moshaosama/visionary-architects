import { useEffect, useState } from "react";

const useAnimationHero = () => {
  const [isAnimateText, setIsAnimateText] = useState<boolean>(false);
  const [isAnimateImages, setIsAnimateImages] = useState<boolean>(false);

  useEffect(() => {
    const handleTriggerAnimateText = async () => {
      setIsAnimateText(true);
    };

    handleTriggerAnimateText();
  }, [isAnimateText]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100 && !isAnimateImages) {
        setIsAnimateImages(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAnimateImages]);

  return { isAnimateText, isAnimateImages };
};

export default useAnimationHero;
