import { cn } from "../../lib/utils";
import ButtonSection from "./ButtonSection";
import Container from "../../Styles/GlobalStyle";

interface HeaderSectionProps {
  flexDirection: string;
  Description: string;
}

const HeaderSection = ({ flexDirection, Description }: HeaderSectionProps) => {
  return (
    <>
      <div className={cn(Container)}>
        <div
          className={cn(
            "flex justify-between gap-60 items-center",
            flexDirection as string
          )}
        >
          <div className="flex flex-col gap-7">
            <p className="text-[#b0bfbf] text-lg">
              {Description}
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
    </>
  );
};

export default HeaderSection;
