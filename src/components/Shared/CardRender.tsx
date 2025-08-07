import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { cn } from "../../lib/utils";

const CardRender = () => {
  return (
    <Card className={cn("relative overflow-hidden text-white border-none")}>
      <img
        src="/4.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="relative z-20 p-6 h-[25pc] flex flex-col justify-between">
        <CardHeader>
          <div className="flex justify-between items-center">
            <h1 className="text-5xl font-bold">01</h1>
            <img src="/arrow.png" alt="Arrow" className="w-10" />
          </div>
        </CardHeader>

        <CardContent>
          <h1 className="text-4xl font-bold">Visionary Design</h1>
        </CardContent>

        <CardFooter className="text-[#b1b1b1] flex flex-col gap-4">
          <p>
            Our commitment to cutting-edge design and sustainable practices
            ensures that our creations stand the test of time.
          </p>
        </CardFooter>
      </div>
    </Card>
  );
};

export default CardRender;
