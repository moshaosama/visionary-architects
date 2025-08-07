import { useEffect, useState } from "react";

const useAnimationKnowladge = () => {
  const [isAnimateCard, setIsAnimateCard] = useState({
    CardOne: false,
    CardTwo: false,
    CardThree: false,
  });

  useEffect(() => {
    const handleScroll = async () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 750) {
        window.removeEventListener("scroll", handleScroll);

        setIsAnimateCard((prev) => ({ ...prev, CardOne: true }));
        await new Promise((resolve) => setTimeout(resolve, 500));

        setIsAnimateCard((prev) => ({ ...prev, CardTwo: true }));
        await new Promise((resolve) => setTimeout(resolve, 500));

        setIsAnimateCard((prev) => ({ ...prev, CardThree: true }));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isAnimateCard };
};

export default useAnimationKnowladge;
