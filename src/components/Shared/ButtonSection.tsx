const ButtonSection = () => {
  return (
    <div className="absolute top-[70pc] left-28 flex items-center gap-5 group text-white">
      <h1 className="text-lg font-semibold">View Projects</h1>
      <img
        src="/circle-arrow.png"
        alt="circle.png"
        className="w-10 group-hover:-rotate-12 transition-all duration-300"
      />
    </div>
  );
};

export default ButtonSection;
