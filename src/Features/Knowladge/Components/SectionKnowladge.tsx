import CardRender from "../../../components/Shared/CardRender";
import ButtonSection from "../../../components/Shared/ButtonSection";
import { cn } from "../../../lib/utils";
import Container from "../../../Styles/GlobalStyle";
import useAnimationKnowladge from "../Hooks/useAnimationKnowladge";

const SectionKnowladge = () => {
  const { isAnimateCard } = useAnimationKnowladge();
  return (
    <>
      <section className="bg-[#2b2e31] py-10">
        <div className={cn(Container)}>
          <div className="flex justify-between gap-60 items-center">
            <div className="flex flex-col gap-7">
              <p className="text-[#b0bfbf] text-lg">
                Our architects blend creativity and functionality to redefine
                the way you experience your surroundings.
              </p>
              <ButtonSection Title="View More" />
            </div>
            <div>
              <h1 className="text-6xl text-white font-bold">
                Best Architect with knowledge
              </h1>
            </div>
          </div>
        </div>

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
      </section>
    </>
  );
};

export default SectionKnowladge;
