import CardRender from "../../../components/Shared/CardRender";
import { cn } from "../../../lib/utils";
import Container from "../../../Styles/GlobalStyle";
import useAnimationKnowladge from "../Hooks/useAnimationKnowladge";
import HeaderSection from "../../../components/Shared/HeaderSection";

const SectionKnowladge = () => {
  const { isAnimateCard } = useAnimationKnowladge();
  return (
    <>
      <section className="bg-[#2b2e31] py-10">
        <HeaderSection
          flexDirection="flex-row"
          Description="Our architects blend creativity and functionality to redefine the
              way you experience your surroundings."
        />

        <div className={cn(Container)}>
          <div className="my-20 flex gap-4 items-center justify-between">
            <div
              className={cn(
                "relative transition-all duration-600",
                isAnimateCard.CardOne ? "top-0 opacity-100" : "top-28 opacity-0"
              )}
            >
              <CardRender />
            </div>
            <div
              className={cn(
                "relative transition-all duration-600",
                isAnimateCard.CardTwo ? "top-0 opacity-100" : "top-28 opacity-0"
              )}
            >
              <CardRender />
            </div>
            <div
              className={cn(
                "relative transition-all duration-600",
                isAnimateCard.CardThree
                  ? "top-0 opacity-100"
                  : "top-28 opacity-0"
              )}
            >
              <CardRender />
            </div>
          </div>
        </div>
        <hr className="h-[0.2px] border-none bg-[gray] rounded-xl" />
      </section>
    </>
  );
};

export default SectionKnowladge;
