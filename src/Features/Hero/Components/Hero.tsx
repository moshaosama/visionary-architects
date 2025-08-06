import { cn } from "../../../lib/utils";
import { AspectRatio } from "../../../components/ui/aspect-ratio";
import ButtonSection from "../../../components/Shared/ButtonSection";
import useAnimationHero from "../Hooks/useAnimation";

const Hero = () => {
  const { isAnimateText, isAnimateImages } = useAnimationHero();
  return (
    <>
      <AspectRatio ratio={4 / 0} className="relative">
        <img src="/1.jpg" alt="HeroImage.png" className="object-fill" />
      </AspectRatio>
      <div className="absolute top-0 w-full h-[121vh] bg-black/50"></div>
      <div
        className={cn(
          "absolute transition-all duration-700 text-white",
          isAnimateText ? "top-0" : "top-72"
        )}
      >
        <div className={cn("my-56 mx-28 flex flex-col gap-14")}>
          <h1 className="text-9xl font-bold w-52">
            Unveiling Architectural Mastery
          </h1>
          <p className="text-[gray] w-[30pc] text-xl">
            Our architects breathe life into dreams, creating environments where
            innovation meets tradition, and spaces transcend mere structures
          </p>
        </div>
      </div>

      <div
        className={cn(
          "absolute top-[55pc] transition-all duration-700 flex gap-5 left-28",
          isAnimateImages ? "top-[55pc] " : "top-[63pc]"
        )}
      >
        <div className="overflow-hidden group hover:rounded-2xl not-hover:rounded-2xl">
          <img
            src="/1.jpg"
            alt="/2.jpg"
            className="w-40 cursor-pointer h-40 object-cover rounded-2xl group-hover:scale-150 group-hover:rounded-2xl transition-all duration-300 group-hover:rotate-6"
          />
        </div>

        <div className="overflow-hidden group hover:rounded-2xl not-hover:rounded-2xl">
          <img
            src="/3.jpg"
            alt="HeroImage.png"
            className="w-40 h-40 cursor-pointer object-cover rounded-2xl group-hover:scale-150 group-hover:rounded-2xl transition-all duration-300 group-hover:-rotate-6"
          />
        </div>
      </div>

      <ButtonSection />
    </>
  );
};

export default Hero;
