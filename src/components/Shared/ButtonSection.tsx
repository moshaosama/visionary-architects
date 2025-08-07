const ButtonSection = ({ Title }: { Title: string }) => {
  return (
    <div className="cursor-pointer left-28 flex items-center gap-5 group text-white">
      <h1 className="text-lg font-semibold">{Title}</h1>
      <img
        src="/circle-arrow.png"
        alt="circle.png"
        className="w-10 group-hover:-rotate-45 group-hover:scale-105 transition-all duration-300"
      />
    </div>
  );
};

export default ButtonSection;
