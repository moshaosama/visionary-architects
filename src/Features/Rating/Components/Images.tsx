import { AspectRatio } from "../../../components/ui/aspect-ratio";
import { cn } from "../../../lib/utils";
import Container from "../../../Styles/GlobalStyle";
import { useAnimationsRating } from "../Hooks/useAnimationsRating";

const Images = () => {
  const { isAnimateImages } = useAnimationsRating();
  return (
    <>
      <AspectRatio
        ratio={20 / 7}
        className={cn("flex gap-5 items-end", Container)}
      >
        <div
          className={cn(
            "relative transition-all duration-500",
            isAnimateImages.imageOne ? "right-0" : "right-32"
          )}
        >
          <img
            src="5.jpg"
            alt="5image.png"
            className="w-96 h-[40pc] rounded-xl"
          />
        </div>
        <div
          className={cn(
            "relative transition-all duration-500",
            isAnimateImages.imageTwo ? "top-0" : "top-32"
          )}
        >
          <img src="6.jpg" alt="5image.png" className="w-96 rounded-xl" />
        </div>
        <div
          className={cn(
            "relative transition-all duration-500",
            isAnimateImages.imageOne ? "left-0" : "left-32"
          )}
        >
          <img
            src="7.jpg"
            alt="5image.png"
            className="w-96 h-[40pc] rounded-xl"
          />
        </div>
      </AspectRatio>
    </>
  );
};

export default Images;
