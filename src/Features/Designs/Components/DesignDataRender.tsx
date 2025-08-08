import { cn } from "../../../lib/utils";
import { DesignData } from "../Data/DesignData";
import Container from "../../../Styles/GlobalStyle";

const DesignDataRender = () => {
  return (
    <>
      <div className="my-10">
        <div className={cn(Container, "flex flex-col")}>
          {DesignData?.map((data, index: number) => (
            <div
              key={index}
              className={cn(
                "flex items-center justify-start gap-72 group border-t-2 cursor-pointer border-dashed",
                index % 2 == 0 ? "flex-row" : "flex-row-reverse"
              )}
            >
              <img
                src={data.image}
                alt="image.png"
                className="w-72 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500"
              />
              <h1 className="text-5xl font-extrabold text-[#fffdff80] group-hover:text-white transition-all duration-500">
                {data.text}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DesignDataRender;
