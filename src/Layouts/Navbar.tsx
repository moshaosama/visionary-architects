import { Button } from "../components/ui/button";
import Links_Render from "../components/ui/links";
import { cn } from "../lib/utils";
import Container from "../Styles/GlobalStyle";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const Navbar = () => {
  return (
    <>
      <AspectRatio
        ratio={14 / 1}
        className={cn(
          "w-full z-50 flex items-center justify-between bg-[#151618]"
        )}
      >
        <div
          className={cn(Container, "flex w-full justify-between items-center")}
        >
          <div>
            <img
              src="/logo.png"
              alt="Photo by Drew Beamer"
              className="rounded-lg object-cover w-24"
            />
          </div>

          <Links_Render />

          <div>
            <Button className="border-1 border-white">Let's talk</Button>
          </div>
        </div>
      </AspectRatio>
    </>
  );
};

export default Navbar;
