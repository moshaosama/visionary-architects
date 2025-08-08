import DesignDataRender from "./DesignDataRender";
import HeaderDesignSection from "./HeaderDesignSection";

const DesignSection = () => {
  return (
    <>
      <section className="bg-[#2b2e31] py-10">
        <HeaderDesignSection />
        <DesignDataRender />
      </section>
    </>
  );
};

export default DesignSection;
