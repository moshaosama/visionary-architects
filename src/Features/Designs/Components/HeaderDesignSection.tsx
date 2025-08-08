import { cn } from "../../../lib/utils";
import Container from "../../../Styles/GlobalStyle";

const HeaderDesignSection = () => {
  return (
    <>
      <div
        className={cn(
          Container,
          "flex justify-center flex-col items-center gap-14"
        )}
      >
        <h1 className="text-6xl text-white font-bold w-[60pc] text-center">
          Explore designs that redefine conventional spaces.
        </h1>
        <p className="text-lg text-[gray]">
          Embark on a journey of collaboration, where your dreams become
          architectural masterpieces.
        </p>
      </div>
    </>
  );
};

export default HeaderDesignSection;
