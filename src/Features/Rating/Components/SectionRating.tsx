import HeaderSection from "../../../components/Shared/HeaderSection";
import Images from "./Images";
import RatingBox from "./RatingBox";

const SectionRating = () => {
  return (
    <>
      <section className="bg-[#2b2e31] py-10">
        <HeaderSection
          flexDirection="flex-row-reverse"
          Description="Welcome to a world where spaces transform into works of art. Our architects bring a touch of brilliance to every project"
        />
        <RatingBox />
        <Images />
      </section>
    </>
  );
};

export default SectionRating;
